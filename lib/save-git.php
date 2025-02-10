<?php
add_action('upgrader_process_complete', function ($upgrader, $options) {
    if ($options['type'] === 'theme' && $options['action'] === 'update') {
        $themeDir = get_theme_root() . '/your-theme';
        $backupGit = WP_CONTENT_DIR . '/.git-backup';

        // Restore .git if it was backed up
        if (file_exists($backupGit)) {
            rename($backupGit, $themeDir . '/.git');
        }
    }
}, 10, 2);
