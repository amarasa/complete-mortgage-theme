<?php
function vv_markdown_light($md)
{
    if (! is_string($md) || $md === '') return '';

    // Normalize
    $md = str_replace(["\r\n", "\r"], "\n", $md);

    // ---------- Helpers ----------
    $slugify = function ($s) {
        $s = strtolower(trim(wp_strip_all_tags($s)));
        $s = preg_replace('/[^\p{L}\p{N}]+/u', '-', $s);
        $s = preg_replace('/-+/', '-', $s);
        return trim($s, '-');
    };
    $clean_label = function ($s) {
        $s = trim(wp_strip_all_tags($s));
        $s = preg_replace('/\s+/u', ' ', $s);
        return $s;
    };

    // ---------- 1) Protect fenced code blocks ----------
    $code_placeholders = [];
    $md = preg_replace_callback('/```(\w+)?\n(.*?)\n```/s', function ($m) use (&$code_placeholders) {
        $lang = isset($m[1]) && $m[1] !== '' ? ' data-lang="' . esc_attr($m[1]) . '"' : '';
        $code = htmlspecialchars($m[2], ENT_QUOTES, 'UTF-8');
        $ph = '__CODEBLOCK_' . count($code_placeholders) . '__';
        $code_placeholders[$ph] = "<pre><code{$lang}>{$code}</code></pre>";
        return $ph;
    }, $md);

    // ---------- 2) Block-level transforms ----------
    $md = preg_replace('/^(?:\*{3,}|-{3,}|_{3,})\s*$/m', "<hr />", $md);

    $md = preg_replace_callback('/(?:^> ?.*(?:\n|$))+?/m', function ($m) {
        $block = preg_replace('/^> ?/m', '', rtrim($m[0]));
        return "\n<blockquote>\n{$block}\n</blockquote>\n";
    }, $md);

    $md = preg_replace_callback('/(^[-+*] +.+(?:\n[-+*] +.+)*)/m', function ($m) {
        $items = preg_replace('/^[-+*] +(.+)$/m', '<li>$1</li>', $m[1]);
        return "<ul>\n{$items}\n</ul>";
    }, $md);

    $md = preg_replace_callback('/(^\d+\. +.+(?:\n\d+\. +.+)*)/m', function ($m) {
        $items = preg_replace('/^\d+\. +(.+)$/m', '<li>$1</li>', $m[1]);
        return "<ol>\n{$items}\n</ol>";
    }, $md);

    $md = preg_replace('/^###### +(.+)$/m', '<h6>$1</h6>', $md);
    $md = preg_replace('/^##### +(.+)$/m',  '<h5>$1</h5>', $md);
    $md = preg_replace('/^#### +(.+)$/m',   '<h4>$1</h4>', $md);
    $md = preg_replace('/^### +(.+)$/m',    '<h3>$1</h3>', $md);
    $md = preg_replace('/^## +(.+)$/m',     '<h2>$1</h2>', $md);
    $md = preg_replace('/^# +(.+)$/m',      '<h1>$1</h1>', $md);

    // ---------- 3) Tables (pipe syntax) ----------
    $md = preg_replace_callback(
        '/(?:^|\n)(\|?.+\|.*)\n(\|? *:?-{3,}:? *(?:\| *:?-{3,}:? *)+\|?)\n((?:\|?.+\|.*(?:\n|$))+)/m',
        function ($m) use ($slugify, $clean_label) {
            $split = function ($line) {
                $line = trim($line);
                if (substr($line, 0, 1) === '|') $line = substr($line, 1);
                if (substr($line, -1) === '|') $line = substr($line, 0, -1);
                $cells = preg_split('/\|/', $line, -1);
                foreach ($cells as &$c) {
                    $c = trim($c);
                }
                return $cells;
            };

            $headers  = $split($m[1]);
            $divider  = $split($m[2]);
            $bodyRaw  = rtrim($m[3]);
            $bodyRows = preg_split('/\n/', $bodyRaw);
            $cols     = count($headers);

            $aligns = [];
            foreach ($divider as $d) {
                $d = preg_replace('/\s+/', '', $d);
                $left  = (substr($d, 0, 1) === ':');
                $right = (substr($d, -1) === ':');
                $aligns[] = $left && $right ? 'center' : ($right ? 'right' : '');
            }
            while (count($aligns) < $cols) {
                $aligns[] = '';
            }

            $header_labels = [];
            $header_keys   = [];
            for ($i = 0; $i < $cols; $i++) {
                $h = isset($headers[$i]) ? $headers[$i] : '';
                $header_labels[$i] = $clean_label($h);
                $header_keys[$i]   = $slugify($h);
            }

            $thead = "<thead>\n<tr>";
            for ($i = 0; $i < $cols; $i++) {
                $style = $aligns[$i] ? ' style="text-align:' . $aligns[$i] . '"' : '';
                $thead .= '<th data-label="' . esc_attr($header_labels[$i]) . '" data-key="' . esc_attr($header_keys[$i]) . '"' . $style . '>' . $headers[$i] . '</th>';
            }
            $thead .= "</tr>\n</thead>";

            $tbody = "<tbody>\n";
            foreach ($bodyRows as $row) {
                if (trim($row) === '') continue;
                $cells = $split($row);
                if (count($cells) === 1 && $cells[0] === '') continue;
                $tbody .= "<tr>";
                for ($i = 0; $i < $cols; $i++) {
                    $c = isset($cells[$i]) ? $cells[$i] : '';
                    $style = $aligns[$i] ? ' style="text-align:' . $aligns[$i] . '"' : '';
                    $tbody .= '<td data-label="' . esc_attr($header_labels[$i]) . '"' . $style . '>' . $c . '</td>';
                }
                $tbody .= "</tr>\n";
            }
            $tbody .= "</tbody>";

            return "\n<table class=\"responsive-table\">\n{$thead}\n{$tbody}\n</table>\n";
        },
        $md
    );

    // ---------- 4) Inline transforms ----------
    $inline_placeholders = [];
    $md = preg_replace_callback('/`([^`\n]+)`/', function ($m) use (&$inline_placeholders) {
        $code = htmlspecialchars($m[1], ENT_QUOTES, 'UTF-8');
        $ph = '__INLINECODE_' . count($inline_placeholders) . '__';
        $inline_placeholders[$ph] = "<code>{$code}</code>";
        return $ph;
    }, $md);

    $md = preg_replace_callback('/\[(.+?)\]\((\S+?)\)/', function ($m) {
        $text = $m[1];
        $url  = esc_url($m[2]);
        return '<a href="' . $url . '">' . $text . '</a>';
    }, $md);

    $md = preg_replace('/\*\*(.+?)\*\*/s', '<strong>$1</strong>', $md);
    $md = preg_replace('/__(.+?)__/s',     '<strong>$1</strong>', $md);
    $md = preg_replace('/(?<!\*)\*(?!\*)(.+?)(?<!\*)\*(?!\*)/s', '<em>$1</em>', $md);
    $md = preg_replace('/(?<!_)_(?!_)(.+?)(?<!_)_(?!_)/s',       '<em>$1</em>', $md);

    // ---------- 5) Paragraph wrapping ----------
    $blocks = preg_split("/\n{2,}/", trim($md));
    foreach ($blocks as &$b) {
        if (preg_match('/<\s*\/?\s*[a-zA-Z!][^>]*>/', $b)) continue;
        $b = '<p>' . preg_replace("/\n/", "<br />\n", $b) . '</p>';
    }
    unset($b);
    $html = implode("\n\n", $blocks);

    // Restore placeholders
    if ($inline_placeholders) $html = strtr($html, $inline_placeholders);
    if ($code_placeholders)   $html = strtr($html, $code_placeholders);

    // ---------- 6) Sanitize ----------
    $allowed = [
        'h1' => [],
        'h2' => [],
        'h3' => [],
        'h4' => [],
        'h5' => [],
        'h6' => [],
        'p' => [],
        'br' => [],
        'hr' => [],
        'ul' => [],
        'ol' => [],
        'li' => [],
        'strong' => [],
        'em' => [],
        'code' => [],
        'pre' => [],
        'blockquote' => [],
        'a' => ['href' => true, 'title' => true],
        'table' => ['class' => true],
        'thead' => [],
        'tbody' => [],
        'tr' => [],
        'th' => ['data-label' => true, 'data-key' => true, 'style' => true, 'scope' => true],
        'td' => ['data-label' => true, 'style' => true],
    ];

    return wp_kses($html, $allowed);
}
