<?php header_hub_get_custom_header(); ?>

<!-- ACF template fields for top half of the page -->
<section class="lo-breadcrumb mt-10 container px-8 mb-4">
    <?php $about_us_page = get_field('about_us_page', 'option'); ?>
    <?php if ($about_us_page) { ?>
        <a class="text-sm font-semibold block" href="<?php echo $about_us_page['url']; ?>"><span class="breadcrumb-arrow text-sm font-semibold relative">←</span> Back to About Us</a>
    <?php } ?>
</section>
<section class="container px-8 mb-24">
    <div class="grid grid-cols-12 md:gap-x-8 md:grid-rows-[auto_auto_1fr]">
        <!-- 1. Name & Title (mobile: 1st, desktop: left col row 1) -->
        <div class="col-span-12 md:col-span-7 lg:col-span-6 order-1 md:order-1">
            <h1 class="!mb-2 font-bold"><?php the_title(); ?></h1>
            <div class="lo-meta mb-8">
                <div class="text-base uppercase font-semibold tracking-wider inline-block">
                    <?php echo get_field('title'); ?>
                </div>
                <?php if (get_field('nmls_number')) { ?>
                    <div class="slash text-base inline-block">
                        /
                    </div>
                    <div class="text-base uppercase tracking-wider inline-block">
                        NMLS #<?php echo get_field('nmls_number'); ?>
                    </div>
                <?php } ?>
            </div>
        </div>

        <!-- 2. Photo (mobile: 2nd, desktop: right col row 1-3) -->
        <div class="col-span-12 md:col-span-4 md:col-start-9 lg:col-span-4 lg:col-start-8 order-2 md:row-start-1 md:row-span-3 mb-5 md:mb-0">
            <?php echo wp_get_attachment_image(get_post_thumbnail_id($post->ID), 'large', false, [
                'class' => 'lo-photo mb-8 rounded-md',
                'sizes' => '(min-width: 768px) 33vw, 100vw',
                'loading' => 'eager',
                'fetchpriority' => 'high',
                'alt' => esc_attr(get_the_title()) . ' Photo',
            ]); ?>

            <?php if (get_field('phone_number') || get_field('cell') || get_field('fax') || get_field('email_address') || get_field('facebook') || get_field('linkedin') || get_field('twitter')) { ?>
                <h2 class="text-sm uppercase tracking-widest mb-4">Contact Information</h2>
                <div class="mb-4 text-sm leading-6">
                    <?php if (get_field('phone_number')) { ?>
                        Phone: <a href="tel:<?php echo get_field('phone_number'); ?>"><?php echo get_field('phone_number'); ?></a><br>
                    <?php } ?>
                    <?php if (get_field('cell')) { ?>
                        Cell: <a href="tel:<?php echo get_field('cell'); ?>"><?php echo get_field('cell'); ?></a><br>
                    <?php } ?>
                    <?php if (get_field('fax')) { ?>
                        Fax: <?php echo get_field('fax'); ?><br>
                    <?php } ?>
                    <?php if (get_field('email_address')) { ?>
                        <a href="mailto:<?php echo get_field('email_address'); ?>" class="text-charcoal-grey"><?php echo get_field('email_address'); ?></a>
                    <?php } ?>
                </div>
                <div class="flex mb-5 items-center gap-x-4">
                    <?php if (get_field('facebook')) { ?>
                        <a href="<?php echo get_field('facebook'); ?>" target="_blank">
                            <i class="fab fa-facebook"><span class="sr-only"><?php the_title(); ?> on Facebook</span></i>
                        </a>
                    <?php } ?>
                    <?php if (get_field('linkedin')) { ?>
                        <a href="<?php echo get_field('linkedin'); ?>" target="_blank">
                            <i class="fab fa-linkedin"><span class="sr-only"><?php the_title(); ?> on LinkedIn</span></i>
                        </a>
                    <?php } ?>
                    <?php if (get_field('twitter')) { ?>
                        <a href="<?php echo get_field('twitter'); ?>" target="_blank">
                            <i class="fab fa-x-twitter"><span class="sr-only"><?php the_title(); ?> on Twitter</span></i>
                        </a>
                    <?php } ?>
                    <?php if (get_field('instagram')) { ?>
                        <a href="<?php echo get_field('instagram'); ?>" target="_blank">
                            <i class="fab fa-instagram"><span class="sr-only"><?php the_title(); ?> on Instagram</span></i>
                        </a>
                    <?php } ?>
                    <?php if (get_field('youtube')) { ?>
                        <a href="<?php echo get_field('youtube'); ?>" target="_blank">
                            <i class="fab fa-youtube"><span class="sr-only"><?php the_title(); ?> on YouTube</span></i>
                        </a>
                    <?php } ?>
                </div>
            <?php } ?>
        </div>

        <!-- 3. Buttons (mobile: 3rd, desktop: left col row 2) -->
        <div class="col-span-12 md:col-span-7 lg:col-span-6 order-3 md:order-3">
            <?php
            if (get_field('loan_officer_help_widget', 'option') == 1) {
            ?>
                <div class="lo-links">
                    <div class="items-center">
                        <?php $cta_button = get_field('cta_button'); ?>
                        <?php if ($cta_button) { ?>
                            <a id="apply<?php if (get_field('nmls_number')) { ?>-<?php echo get_field('nmls_number'); ?><?php } ?>" href="<?php echo $cta_button['url']; ?>" class="apply-button button text-base mr-16 mb-10" target="<?php echo $cta_button['target']; ?>"><?php echo $cta_button['title']; ?></a>
                        <?php } ?>

                        <?php
                        if (isset($_COOKIE['kal_loan_officer'])) {
                            $loan_officer_data = json_decode(stripslashes($_COOKIE['kal_loan_officer']), true);

                            $ID = esc_html($loan_officer_data['id']);
                            $currentPageID = get_the_ID();
                            if ($ID == $currentPageID) { ?>
                                <span class="text-base font-semibold  mb-10 block text-secondary hover:text-primary"><i class="fa fa-star" aria-hidden="true"></i>
                                    My Loan Officer</span>
                            <?php }
                        } else { ?>
                            <span id="setLoanOfficerBtn" class="text-base text-green font-semibold hover:cursor-pointer mb-10 block hover:text-primary text-secondary">Set as my Loan Officer</span>
                        <?php } ?>
                    </div>
                    <div class="md:w-[250px] md:text-center">
                        <?php if (get_field('view_licensing_link')) { ?>
                            <a href="<?php echo get_field('view_licensing_link'); ?>" class="text-base font-semibold mb-10 block" id="view-licensing<?php if (get_field('nmls_number')) { ?>-<?php echo get_field('nmls_number'); ?><?php } ?>">View Licensing</a>
                        <?php } ?>
                    </div>
                </div>
            <?php } else { ?>
                <div class="lo-links">
                    <div class="md:flex lg:flex xl:flex items-center">
                        <?php $cta_button = get_field('cta_button'); ?>
                        <?php if ($cta_button) { ?>
                            <a id="apply<?php if (get_field('nmls_number')) { ?>-<?php echo get_field('nmls_number'); ?><?php } ?>" href="<?php echo $cta_button['url']; ?>" class="apply-button button text-base mr-16 mb-10" target="<?php echo $cta_button['target']; ?>"><?php echo $cta_button['title']; ?></a>
                        <?php } ?>
                        <?php if (get_field('view_licensing_link')) { ?>
                            <a href="<?php echo get_field('view_licensing_link'); ?>" class="text-base font-semibold cursor-pointer mb-10 block" id="view-licensing<?php if (get_field('nmls_number')) { ?>-<?php echo get_field('nmls_number'); ?><?php } ?>">View Licensing</a>
                        <?php } ?>
                    </div>
                </div>
            <?php } ?>
        </div>

        <!-- 4. Biography (mobile: 4th, desktop: left col row 3) -->
        <div class="col-span-12 md:col-span-7 lg:col-span-6 order-4 md:order-4">
            <?php if (get_field('biography')) { ?>
                <h2 class="text-sm uppercase tracking-widest mb-8">Profile</h2>
                <article>
                    <?php echo get_field('biography'); ?>
                </article>
            <?php } ?>
        </div>
    </div>
</section>

<!-- Gutenberg blocks for bottom half of the page -->
<section class="overflow-hidden">
    <?php the_content(); ?>
</section>

<?php
// Person Schema for Loan Officer - SEO rich results
$person_schema = [
    "@context" => "https://schema.org",
    "@type" => "Person",
    "name" => get_the_title(),
    "jobTitle" => get_field('title') ?: "Loan Officer",
    "description" => wp_strip_all_tags(get_field('biography') ?: ''),
    "image" => get_the_post_thumbnail_url(get_the_ID(), 'full'),
    "email" => get_field('email_address'),
    "telephone" => get_field('phone_number') ?: get_field('cell'),
    "url" => get_permalink(),
    "worksFor" => [
        "@type" => "Organization",
        "name" => get_bloginfo('name'),
        "url" => home_url()
    ],
    "sameAs" => array_values(array_filter([
        get_field('linkedin'),
        get_field('facebook'),
        get_field('twitter'),
        get_field('instagram'),
        get_field('youtube')
    ]))
];

// Add identifier for NMLS number if available
if (get_field('nmls_number')) {
    $person_schema['identifier'] = [
        "@type" => "PropertyValue",
        "propertyID" => "NMLS",
        "value" => get_field('nmls_number')
    ];
}

// Remove empty values
$person_schema = array_filter($person_schema, function ($v) {
    if (is_array($v)) {
        return !empty(array_filter($v));
    }
    return !empty($v);
});
?>
<script type="application/ld+json">
    <?php echo wp_json_encode($person_schema, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES); ?>
</script>

<?php footer_hub_get_custom_footer(); ?>