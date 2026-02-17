<?php /* Template Name: Contact */
header_hub_get_custom_header(); ?>

<?php
$headline = get_field('headline');
$left_column_text = get_field('left_column_text');
$branches = get_field('branches');
$phone = get_field('phone');
$cell = get_field('cell');
$fax = get_field('fax');
$email = get_field('email');
$facebook = get_field('facebook');
$twitter = get_field('twitter');
$linkedin = get_field('linkedin');
$instagram = get_field('instagram');
$youtube = get_field('youtube');
$form = get_field('form');
?>

<div class="container pt-20 pb-20 px-8">
    <div class="grid grid-cols-12 lg:gap-x-16">
        <div class="col-span-12 lg:col-span-6 mb-16">
            <h1 class="text-4xl lg:text-5xl font-bold mb-4">
                <?php if ($headline) {
                    echo esc_html($headline);
                } else {
                    the_title();
                } ?>
            </h1>

            <div class="contact-lc-text mb-11">
                <?php echo wp_kses_post($left_column_text); ?>
            </div>
            <?php if (get_field('display_branches')) { ?>
                <div class="text-sm uppercase tracking-widest mb-3 font-bold text-gunmetal text-primary">Branches</div>

                <div class="contact-branches mb-8">
                    <?php echo wp_kses_post($branches); ?>
                </div>
            <?php } ?>
            <?php if (get_field('display_contact_social')) { ?>
                <div class="text-sm uppercase tracking-widest mb-3 font-bold text-gunmetal text-primary">Contact Information</div>

                <?php if ($phone) { ?>
                    <div class="contact-phone text-base mb-2">
                        Phone: <a class="text-secondary hover:text-tertiary" href="tel:<?php echo esc_attr(preg_replace('/[^0-9+]/', '', $phone)); ?>"><?php echo esc_html($phone); ?></a>
                    </div>
                <?php } ?>
                <?php if ($cell) { ?>
                    <div class="contact-cell text-base mb-2">
                        Cell: <a class="text-secondary hover:text-tertiary" href="tel:<?php echo esc_attr(preg_replace('/[^0-9+]/', '', $cell)); ?>"><?php echo esc_html($cell); ?></a>
                    </div>
                <?php } ?>
                <?php if ($fax) { ?>
                    <div class="contact-fax text-base mb-2">
                        Fax: <?php echo esc_html($fax); ?>
                    </div>
                <?php } ?>
                <?php if ($email) { ?>
                    <div class="contact-email text-base mb-2">
                        <a class="text-secondary hover:text-tertiary" href="mailto:<?php echo esc_attr(sanitize_email($email)); ?>"><?php echo esc_html($email); ?></a>
                    </div>
                <?php } ?>

                <div class="contact-social mt-6 flex gap-x-4">
                    <?php if ($facebook) { ?>
                        <div>
                            <a href="<?php echo esc_url($facebook); ?>" target="_blank" rel="noopener noreferrer"><i class="fab fa-facebook !text-[#1877f2] hover:!text-tertiary transition-all duration-300 ease-in-out"><span class="sr-only">Facebook</span></i></a>
                        </div>
                    <?php } ?>
                    <?php if ($twitter) { ?>
                        <div>
                            <a href="<?php echo esc_url($twitter); ?>" target="_blank" rel="noopener noreferrer"><i class="fab fa-x-twitter !text-black hover:!text-tertiary transition-all duration-300 ease-in-out"><span class="sr-only">Twitter X</span></i></a>
                        </div>
                    <?php } ?>
                    <?php if ($linkedin) { ?>
                        <div>
                            <a href="<?php echo esc_url($linkedin); ?>" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin-in !text-[#007ebb] hover:!text-tertiary transition-all duration-300 ease-in-out"><span class="sr-only">LinkedIn</span></i></a>
                        </div>
                    <?php } ?>
                    <?php if ($instagram) { ?>
                        <a href="<?php echo esc_url($instagram); ?>" target="_blank" rel="noopener noreferrer" class="transition-all duration-300">
                            <i class="fab fa-instagram bg-clip-text text-transparent transition-all duration-300 ease-in-out hover:!text-tertiary"
                                style="background-image: linear-gradient(to left,
       #feda75,
       #fa7e1e,
       #d62976,
       #962fbf,
       #4f5bd5
   );">
                                <span class="sr-only">Instagram</span>
                            </i>

                        </a>
                    <?php } ?>
                    <?php if ($youtube) { ?>
                        <div>
                            <a href="<?php echo esc_url($youtube); ?>" target="_blank" rel="noopener noreferrer"><i class="fab fa-youtube !text-[#cd201f] hover:!text-tertiary transition-all duration-300 ease-in-out"><span class="sr-only">YouTube</span></i></a>
                        </div>
                    <?php } ?>
                </div>
            <?php } ?>
        </div>
        <div class="col-span-12 lg:col-span-6">
            <?php gravity_form($form, false, false, false, '', true, 1); ?>
        </div>
    </div>
    <section class="contact-content">
        <?php the_content(); ?>
    </section>
</div>

<?php footer_hub_get_custom_footer(); ?>
