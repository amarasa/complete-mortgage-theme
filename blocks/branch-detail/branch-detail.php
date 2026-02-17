<?php
$classes = '';
$id = '';
$acfKey = 'group_67d31c00aaa98';

// Get ACF fields
$branch_name = get_field('branch_name');
$branch_info = get_field('branch_information');
$contact_info = get_field('contact_information');
$cta_buttons = get_field('cta_buttons');
$corners = get_field('corners') ? 'xl:rounded-xl' : 'squared'; // Controls border-radius
$overlap = get_field('overlap_previous_block');
$branch_hours = get_field('branch_hours');

// Default hours if not configured via ACF
$default_hours = [
    'weekday_open' => '09:00',
    'weekday_close' => '17:00',
    'saturday_open' => '',
    'saturday_close' => '',
    'sunday_open' => '',
    'sunday_close' => '',
    'show_hours' => true
];
$hours = wp_parse_args($branch_hours ?: [], $default_hours);

if (!empty($block['className'])) {
    $classes .= sprintf(' %s', esc_attr($block['className']));
}

if (!empty($block['anchor'])) {
    $id = sprintf(' id="%s"', esc_attr($block['anchor']));
}

// Determine overlap classes dynamically
$overlap_class = !empty($overlap) ? 'lg:-mt-20 z-20 relative' : '';
?>

<section class="branch-detail <?php echo esc_attr($classes); ?>" <?php echo $id; ?> data-block-name="<?php echo esc_attr($acfKey); ?>">
    <div class="xl:container mx-auto items-center px-8 py-12 bg-[#ededed] lg:px-20 lg:pt-16 lg:pb-8 <?php echo esc_attr($corners . ' ' . $overlap_class); ?>">
        <h2 class="font-bold text-primary"><?php echo esc_html($branch_name); ?></h2>
        <div class="grid grid-cols-12 lg:gap-x-16">
            <div class="col-span-12 lg:col-span-6 mb-8">
                <?php if (!empty($branch_info)): ?>
                    <div class="mt-4 mb-8 wysiwyg"><?php echo esc_html($branch_info); ?></div>
                <?php endif; ?>

                <!-- Contact Information -->
                <?php if (!empty($contact_info)): ?>
                    <h3 class="uppercase text-sm tracking-widest !text-primary !mb-1">Contact Information</h3>

                    <p>
                        <?php echo esc_html($contact_info['address_1']); ?><br>
                        <?php echo !empty($contact_info['address_2']) ? esc_html($contact_info['address_2']) . '<br>' : ''; ?>
                        <?php echo esc_html($contact_info['city']) . ', ' . esc_html($contact_info['state']) . ' ' . esc_html($contact_info['zip']); ?>
                    </p>

                    <?php if (!empty($contact_info['phone'])): ?>
                        <div class="mt-2 mb-1">
                            Phone:
                            <a href="tel:<?php echo esc_attr(preg_replace('/[^0-9+]/', '', $contact_info['phone'])); ?>" class="text-secondary hover:text-tertiary !no-underline !font-normal">
                                <?php echo esc_html($contact_info['phone']); ?>
                            </a>
                        </div>
                    <?php endif; ?>

                    <?php if (!empty($contact_info['fax'])): ?>
                        <div class="mb-1">
                            Fax:
                            <?php echo esc_html($contact_info['fax']); ?>
                        </div>
                    <?php endif; ?>

                    <?php if (!empty($contact_info['email'])): ?>
                        <a href="mailto:<?php echo esc_attr(sanitize_email($contact_info['email'])); ?>" class="text-secondary hover:text-primary !no-underline !font-normal">
                            <?php echo esc_html($contact_info['email']); ?>
                        </a>
                    <?php endif; ?>

                    <?php if (!empty($hours['show_hours']) && (!empty($hours['weekday_open']) || !empty($hours['saturday_open']))): ?>
                        <div class="mt-4">
                            <h3 class="uppercase text-sm tracking-widest !text-primary !mb-1">Hours</h3>
                            <?php if (!empty($hours['weekday_open']) && !empty($hours['weekday_close'])): ?>
                                <div class="mb-1">
                                    <span class="font-medium">Mon-Fri:</span>
                                    <?php
                                    $weekday_open_display = date('g:i A', strtotime($hours['weekday_open']));
                                    $weekday_close_display = date('g:i A', strtotime($hours['weekday_close']));
                                    echo esc_html($weekday_open_display . ' - ' . $weekday_close_display);
                                    ?>
                                </div>
                            <?php endif; ?>
                            <?php if (!empty($hours['saturday_open']) && !empty($hours['saturday_close'])): ?>
                                <div class="mb-1">
                                    <span class="font-medium">Saturday:</span>
                                    <?php
                                    $sat_open_display = date('g:i A', strtotime($hours['saturday_open']));
                                    $sat_close_display = date('g:i A', strtotime($hours['saturday_close']));
                                    echo esc_html($sat_open_display . ' - ' . $sat_close_display);
                                    ?>
                                </div>
                            <?php endif; ?>
                            <?php if (!empty($hours['sunday_open']) && !empty($hours['sunday_close'])): ?>
                                <div class="mb-1">
                                    <span class="font-medium">Sunday:</span>
                                    <?php
                                    $sun_open_display = date('g:i A', strtotime($hours['sunday_open']));
                                    $sun_close_display = date('g:i A', strtotime($hours['sunday_close']));
                                    echo esc_html($sun_open_display . ' - ' . $sun_close_display);
                                    ?>
                                </div>
                            <?php elseif (!empty($hours['weekday_open']) || !empty($hours['saturday_open'])): ?>
                                <div class="mb-1">
                                    <span class="font-medium">Sunday:</span> Closed
                                </div>
                            <?php endif; ?>
                        </div>
                    <?php endif; ?>
                <?php endif; ?>
            </div>
            <div class="col-span-12 lg:col-span-6">
                <?php if (!empty($cta_buttons)): ?>
                    <?php foreach ($cta_buttons as $button): ?>
                        <?php if (!empty($button['cta_button'])): ?>
                            <a href="<?php echo esc_url($button['cta_button']['url']); ?>"
                                <?php echo cms_link_attributes($button['cta_button']['target'] ?: '_self'); ?>
                                class="button bg-secondary hover:bg-tertiary !block !w-full mb-4 !no-underline !text-white">
                                <?php echo esc_html($button['cta_button']['title']); ?>
                            </a>
                        <?php endif; ?>
                    <?php endforeach; ?>
                <?php endif; ?>
            </div>
        </div>
    </div>
</section>

<?php
// LocalBusiness Schema for SEO - FinancialService type for mortgage branches
if (!empty($branch_name) && !empty($contact_info)) :
    $branch_schema = [
        "@context" => "https://schema.org",
        "@type" => "FinancialService",
        "name" => $branch_name,
        "description" => $branch_info ?: '',
        "url" => get_permalink(),
        "telephone" => $contact_info['phone'] ?? '',
        "email" => $contact_info['email'] ?? '',
        "faxNumber" => $contact_info['fax'] ?? '',
        "address" => [
            "@type" => "PostalAddress",
            "streetAddress" => trim(($contact_info['address_1'] ?? '') . ' ' . ($contact_info['address_2'] ?? '')),
            "addressLocality" => $contact_info['city'] ?? '',
            "addressRegion" => $contact_info['state'] ?? '',
            "postalCode" => $contact_info['zip'] ?? '',
            "addressCountry" => "US"
        ],
        "openingHoursSpecification" => array_filter([
            !empty($hours['weekday_open']) && !empty($hours['weekday_close']) ? [
                "@type" => "OpeningHoursSpecification",
                "dayOfWeek" => ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                "opens" => $hours['weekday_open'],
                "closes" => $hours['weekday_close']
            ] : null,
            !empty($hours['saturday_open']) && !empty($hours['saturday_close']) ? [
                "@type" => "OpeningHoursSpecification",
                "dayOfWeek" => ["Saturday"],
                "opens" => $hours['saturday_open'],
                "closes" => $hours['saturday_close']
            ] : null,
            !empty($hours['sunday_open']) && !empty($hours['sunday_close']) ? [
                "@type" => "OpeningHoursSpecification",
                "dayOfWeek" => ["Sunday"],
                "opens" => $hours['sunday_open'],
                "closes" => $hours['sunday_close']
            ] : null
        ]),
        "priceRange" => "$$",
        "image" => get_the_post_thumbnail_url(get_the_ID(), 'full') ?: ''
    ];

    // Clean empty values recursively
    $branch_schema = array_filter($branch_schema, function ($value) {
        if (is_array($value)) {
            return !empty(array_filter($value, function ($v) {
                return !empty($v);
            }));
        }
        return !empty($value);
    });
?>
    <script type="application/ld+json">
        <?php echo wp_json_encode($branch_schema, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES); ?>
    </script>
<?php endif; ?>