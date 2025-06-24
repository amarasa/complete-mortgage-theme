<div class="col-span-12 lg:col-span-4 mb-8">
    <a class="product-card !text-[#474747] bottom-0 duration-300 ease-in-out hover:bottom-2 transition-all relative !no-underline !font-normal" href="<?php the_permalink(); ?>">
        <div class="product-card-feature-image sm:rounded-t-lg pb-[70%] !bg-cover !bg-center" style="background: url(<?php $feature_image = wp_get_attachment_image_url(get_post_thumbnail_id($post), 'large');
                                                                                                                        echo $feature_image; ?>);">
        </div>
        <div class="product-card-content px-10 py-8 border-solid border-[#C6C6CD] border-[1px] sm:rounded-b-lg" data-equalize="product-card-content">
            <div data-equalize="product-card-headline">
                <h3 class="text-2xl text-secondary"><?php the_title(); ?></h3>
            </div>

            <div class="mb-5" data-equalize="product-card-excerpt"><?php the_excerpt(); ?></div>

            <div class="flex justify-between items-center">
                <div class="learn-more text-primary font-bold text-lg">
                    Learn more
                </div>
                <div class="learn-more-arrow">
                    <i class="fa fa-arrow-right text-primary"></i>
                </div>
            </div>
        </div>
    </a>
</div>