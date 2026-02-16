<?php
$classes = '';
$id = '';
$acfKey = 'group_67d821b17adbe';

// Get ACF fields
$headline = get_field('headline');
$display_type = get_field('display_type');
$branch_id = get_field('display_members_for_specific_branch');
$hand_selected_members = get_field('hand_select_members');
$settings = get_field('additional_settings');

// Get the corners setting from the additional_settings group
// Since "corners" is a true/false field, when checked it returns a truthy value.
$corners = !empty($settings['corners']) ? 'image-rounded rounded-xl' : 'image-squared';

$show_full_name = !empty($settings['name']);
$show_title = !empty($settings['display_title']);
$show_nmls = !empty($settings['display_nmls_number']);
$show_phone = !empty($settings['display_phone']);
$use_phone = !empty($settings['which_phone']); // true = phone, false = cell
$clickable = !empty($settings['clickable_to_bio']);

// Set up query arguments based on ACF settings
$query_args = [
    'post_type'      => 'kal_loan_officers',
    'posts_per_page' => -1,
];

if ($display_type === 'Hand-Select Members' && !empty($hand_selected_members)) {
    $query_args['post__in'] = wp_list_pluck($hand_selected_members, 'ID');
    $query_args['orderby'] = 'post__in';
} elseif ($display_type === 'Branch Specific Members' && !empty($branch_id)) {
    $query_args['tax_query'] = [
        [
            'taxonomy' => 'branch_location',
            'field'    => 'id',
            'terms'    => $branch_id,
        ],
    ];
}

// Query members
$team_members = new WP_Query($query_args);
?>

<section class="meet-the-team <?php echo esc_attr($classes); ?>" <?php echo $id; ?> data-block-name="<?php echo $acfKey; ?>">
    <div class="container px-8 py-12">
        <?php if ($headline): ?>
            <h2 class="font-bold text-center"><?php echo esc_html($headline); ?></h2>
        <?php endif; ?>

        <?php if ($team_members->have_posts()):
            // Collect schema data for Person structured data
            $schema_members = [];
            $schema_position = 1;
        ?>
            <div class="md:flex md:flex-wrap justify-center md:gap-x-8">
                <?php while ($team_members->have_posts()): $team_members->the_post();
                    $loan_officer_id = get_the_ID();
                    $first_name = get_field('first_name', $loan_officer_id);
                    $last_name = get_field('last_name', $loan_officer_id);
                    $title = get_field('title', $loan_officer_id);
                    $nmls_number = get_field('nmls_number', $loan_officer_id);
                    $phone = get_field('phone_number', $loan_officer_id);
                    $cell = get_field('cell', $loan_officer_id);
                    $image = get_the_post_thumbnail_url($loan_officer_id, 'large') ?: 'https://via.placeholder.com/150';
                    $profile_url = get_permalink($loan_officer_id);

                    // Determine which phone to use if display_phone is enabled
                    $phone_number = ($show_phone) ? ($use_phone ? $phone : $cell) : '';

                    // Collect data for Person schema
                    $person_data = [
                        "@type" => "ListItem",
                        "position" => $schema_position++,
                        "item" => [
                            "@type" => "Person",
                            "name" => $first_name . ' ' . $last_name,
                            "jobTitle" => $title ?: "Loan Officer",
                            "image" => $image,
                            "telephone" => $phone ?: $cell,
                            "url" => $profile_url,
                            "worksFor" => [
                                "@type" => "Organization",
                                "name" => get_bloginfo('name')
                            ]
                        ]
                    ];
                    if (!empty($nmls_number)) {
                        $person_data['item']['identifier'] = [
                            "@type" => "PropertyValue",
                            "propertyID" => "NMLS",
                            "value" => $nmls_number
                        ];
                    }
                    $schema_members[] = $person_data;
                ?>
                    <div class="md:w-1/3 lg:w-[20%] mb-12">
                        <?php if ($clickable): ?><a href="<?php echo esc_url($profile_url); ?>" class="block relative"><?php endif; ?>
                            <div class="w-full relative aspect-[4/4] overflow-hidden <?php echo esc_attr($corners); ?>">
                                <img src="<?php echo esc_url($image); ?>"
                                    alt="<?php echo esc_attr($first_name . ' ' . $last_name); ?>"
                                    class="absolute inset-0 w-full !h-full object-cover object-top"
                                    loading="lazy"
                                    decoding="async">
                                <div class="bg-black absolute inset-0 <?php echo esc_attr($corners); ?> opacity-0 hover:opacity-40 transition-all duration-300 ease-in-out"></div>
                            </div>
                            <?php if ($clickable): ?>
                            </a><?php endif; ?>

                        <!-- Name -->
                        <h3 class="text-xl font-bold mt-2 !mb-3">
                            <?php if ($clickable): ?>
                                <a href="<?php echo esc_url($profile_url); ?>" class="!no-underline text-secondary hover:text-primary">
                                    <?php echo esc_html($show_full_name ? "$first_name $last_name" : $first_name); ?>
                                </a>
                            <?php else: ?>
                                <?php echo esc_html($show_full_name ? "$first_name $last_name" : $first_name); ?>
                            <?php endif; ?>
                        </h3>

                        <!-- Title -->
                        <?php if ($show_title && $title): ?>
                            <div class="mt-2 uppercase font-bold tracking-[1.5px] text-sm"><?php echo esc_html($title); ?></div>
                        <?php endif; ?>

                        <!-- NMLS Number -->
                        <?php if ($show_nmls && $nmls_number): ?>
                            <div class="text-sm mb-4">NMLS #<?php echo esc_html($nmls_number); ?></div>
                        <?php endif; ?>

                        <!-- Phone Number -->
                        <?php if ($phone_number): ?>
                            <div>
                                <a href="tel:<?php echo esc_attr($phone_number); ?>" class="text-sm font-bold text-secondary !no-underline tracking-[0.88px] hover:text-primary">
                                    <?php echo esc_html($phone_number); ?>
                                </a>
                            </div>
                        <?php endif; ?>
                    </div>
                <?php endwhile; ?>
            </div>

            <?php
            // Output Person schema for SEO
            if (!empty($schema_members)) :
                $team_schema = [
                    "@context" => "https://schema.org",
                    "@type" => "ItemList",
                    "itemListElement" => $schema_members
                ];
            ?>
                <script type="application/ld+json">
                    <?php echo wp_json_encode($team_schema, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES); ?>
                </script>
            <?php endif; ?>

            <?php wp_reset_postdata(); ?>
        <?php else: ?>
            <p class="text-center">No team members found.</p>
        <?php endif; ?>
    </div>
</section>