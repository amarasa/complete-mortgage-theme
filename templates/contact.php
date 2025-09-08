<?php /* Template Name: Contact */
header_hub_get_custom_header(); ?>

<div class="container pt-20 pb-20 px-8">
    <div class="grid grid-cols-12 lg:gap-x-16">
        <div class="col-span-12 lg:col-span-6 mb-16">
            <h1 class="text-4xl lg:text-5xl font-bold mb-4">
                <?php if (get_field('headline')) {
                    echo get_field('headline');
                } else {
                    the_title();
                } ?>
            </h1>

            <div class="contact-lc-text mb-11">
                <?php echo get_field('left_column_text'); ?>
            </div>
            <?php if (get_field('display_branches')) { ?>
                <div class="text-sm uppercase tracking-widest mb-3 font-bold text-gunmetal text-primary">Branches</div>

                <div class="contact-branches mb-8">
                    <?php echo get_field('branches'); ?>
                </div>
            <?php } ?>
            <?php if (get_field('display_contact_social')) { ?>
                <div class="text-sm uppercase tracking-widest mb-3 font-bold text-gunmetal text-primary">Contact Information</div>

                <?php if (get_field('phone')) { ?>
                    <div class="contact-phone text-base mb-2">
                        Phone: <a class="text-secondary hover:text-tertiary" href="tel:<?php echo get_field('phone'); ?>"><?php echo get_field('phone'); ?></a>
                    </div>
                <?php } ?>
                <?php if (get_field('cell')) { ?>
                    <div class="contact-cell text-base mb-2">
                        Cell: <a class="text-secondary hover:text-tertiary" href="tel:<?php echo get_field('cell'); ?>"><?php echo get_field('cell'); ?></a>
                    </div>
                <?php } ?>
                <?php if (get_field('fax')) { ?>
                    <div class="contact-fax text-base mb-2">
                        Fax: <?php echo get_field('fax'); ?></a>
                    </div>
                <?php } ?>
                <?php if (get_field('email')) { ?>
                    <div class="contact-email text-base mb-2">
                        <a class="text-secondary hover:text-tertiary" href="mailto:<?php echo get_field('email'); ?>"><?php echo get_field('email'); ?></a>
                    </div>
                <?php } ?>

                <div class="contact-social mt-6 flex gap-x-4">
                    <?php if (get_field('facebook')) { ?>
                        <div>
                            <a href="<?php echo get_field('facebook'); ?>" target="_blank"><i class="fab fa-facebook !text-[#1877f2] hover:!text-tertiary transition-all duration-300 ease-in-out"><span class="sr-only">Facebook</span></i></a>
                        </div>
                    <?php } ?>
                    <?php if (get_field('twitter')) { ?>
                        <div>
                            <a href="<?php echo get_field('twitter'); ?>" target="_blank"><i class="fab fa-x-twitter !text-black hover:!text-tertiary transition-all duration-300 ease-in-out"><span class="sr-only">Twitter X</span></i></a>
                        </div>
                    <?php } ?>
                    <?php if (get_field('linkedin')) { ?>
                        <div>
                            <a href="<?php echo get_field('linkedin'); ?>" target="_blank"><i class="fab fa-linkedin-in !text-[#007ebb] hover:!text-tertiary transition-all duration-300 ease-in-out"><span class="sr-only">LinkedIn</span></i></a>
                        </div>
                    <?php } ?>
                    <?php if (get_field('instagram')) { ?>
                        <a href="<?php echo get_field('instagram'); ?>" target="_blank" class="transition-all duration-300">
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
                    <?php if (get_field('youtube')) { ?>
                        <div>
                            <a href="<?php echo get_field('youtube'); ?>" target="_blank"><i class="fab fa-youtube !text-[#cd201f] hover:!text-tertiary transition-all duration-300 ease-in-out"><span class="sr-only">YouTube</span></i>
                                <span class="sr-only">Instagram</span>
                            </a>
                        </div>
                    <?php } ?>
                </div>
            <?php } ?>
        </div>
        <div class="col-span-12 lg:col-span-6">
            <?php $form = get_field('form');
            gravity_form($form, false, false, false, '', true, 1); ?>
        </div>
    </div>
    <section class="contact-content">
        <?php the_content(); ?>
    </section>
</div>

<?php footer_hub_get_custom_footer(); ?>