<?php
/**
 * BreadcrumbList JSON-LD schema for SEO
 * Auto-injects breadcrumb structured data in the footer
 *
 * @package Complete_Mortgage_Theme
 */

/**
 * Generate BreadcrumbList JSON-LD schema based on current page context
 *
 * @return string JSON-LD script tag or empty string
 */
function cms_get_breadcrumb_schema() {
    $breadcrumbs = [];
    $position = 1;

    // Home is always first
    $breadcrumbs[] = [
        "@type" => "ListItem",
        "position" => $position++,
        "name" => "Home",
        "item" => home_url()
    ];

    if (is_singular('post')) {
        // Blog posts: Home > Blog > Category > Post
        $blog_page = get_option('page_for_posts');
        if ($blog_page) {
            $breadcrumbs[] = [
                "@type" => "ListItem",
                "position" => $position++,
                "name" => get_the_title($blog_page),
                "item" => get_permalink($blog_page)
            ];
        }

        // Primary category
        $categories = get_the_category();
        if (!empty($categories)) {
            $breadcrumbs[] = [
                "@type" => "ListItem",
                "position" => $position++,
                "name" => $categories[0]->name,
                "item" => get_category_link($categories[0]->term_id)
            ];
        }

        // Current post (no item URL for last breadcrumb per Google guidelines)
        $breadcrumbs[] = [
            "@type" => "ListItem",
            "position" => $position++,
            "name" => get_the_title()
        ];

    } elseif (is_page() && !is_front_page()) {
        // Pages: Home > Parent > Current
        $ancestors = get_post_ancestors(get_the_ID());
        $ancestors = array_reverse($ancestors);

        foreach ($ancestors as $ancestor_id) {
            $breadcrumbs[] = [
                "@type" => "ListItem",
                "position" => $position++,
                "name" => get_the_title($ancestor_id),
                "item" => get_permalink($ancestor_id)
            ];
        }

        // Current page
        $breadcrumbs[] = [
            "@type" => "ListItem",
            "position" => $position++,
            "name" => get_the_title()
        ];

    } elseif (is_singular('branch')) {
        // Branches: Home > Locations > Branch
        $breadcrumbs[] = [
            "@type" => "ListItem",
            "position" => $position++,
            "name" => "Locations",
            "item" => home_url('/locations/')
        ];
        $breadcrumbs[] = [
            "@type" => "ListItem",
            "position" => $position++,
            "name" => get_the_title()
        ];

    } elseif (is_singular('kal_loan_officers')) {
        // Loan Officers: Home > About/Team > Loan Officer
        $about_us_page = get_field('about_us_page', 'option');
        if ($about_us_page) {
            $breadcrumbs[] = [
                "@type" => "ListItem",
                "position" => $position++,
                "name" => $about_us_page['title'] ?? 'About Us',
                "item" => $about_us_page['url']
            ];
        }
        $breadcrumbs[] = [
            "@type" => "ListItem",
            "position" => $position++,
            "name" => get_the_title()
        ];

    } elseif (is_singular('cms_products')) {
        // Products: Home > Products > Product
        $breadcrumbs[] = [
            "@type" => "ListItem",
            "position" => $position++,
            "name" => "Products",
            "item" => home_url('/products/')
        ];
        $breadcrumbs[] = [
            "@type" => "ListItem",
            "position" => $position++,
            "name" => get_the_title()
        ];

    } elseif (is_category()) {
        // Category archives: Home > Blog > Category
        $blog_page = get_option('page_for_posts');
        if ($blog_page) {
            $breadcrumbs[] = [
                "@type" => "ListItem",
                "position" => $position++,
                "name" => get_the_title($blog_page),
                "item" => get_permalink($blog_page)
            ];
        }
        $breadcrumbs[] = [
            "@type" => "ListItem",
            "position" => $position++,
            "name" => single_cat_title('', false)
        ];
    }

    // Don't output if only Home breadcrumb
    if (count($breadcrumbs) <= 1) {
        return '';
    }

    $schema = [
        "@context" => "https://schema.org",
        "@type" => "BreadcrumbList",
        "itemListElement" => $breadcrumbs
    ];

    return '<script type="application/ld+json">' . wp_json_encode($schema, JSON_UNESCAPED_SLASHES) . '</script>';
}

/**
 * Auto-inject breadcrumb schema in footer
 */
add_action('wp_footer', function() {
    if (!is_front_page()) {
        echo cms_get_breadcrumb_schema();
    }
}, 50);
