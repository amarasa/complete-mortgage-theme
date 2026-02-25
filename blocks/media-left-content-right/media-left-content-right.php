<?php
$classes = '';
$id = '';
$acfKey = '';

if (!empty($block['className'])) {
    $classes .= sprintf(' %s', $block['className']);
}

if (!empty($block['anchor'])) {
    $id = sprintf(' id="%s"', esc_attr($block['anchor']));
}

?>
<section class="media-left-content-right <?php echo esc_attr($classes); ?>" <?php echo $id; ?> data-block-name="<?php echo esc_attr($acfKey); ?>">
    <div class="container px-8">
        <div class="grid grid-cols-12 md:gap-x-8">
            <div class="col-span-12 md:col-span-6 lg:col-span-7 mb-6 md:mb-0 ">
                <?php $image_or_video = get_field('image_or_video');
                $image_or_video_thumbnail = get_field('image_or_video_thumbnail');
                $thumbnail_id = !empty($image_or_video_thumbnail['ID']) ? (int) $image_or_video_thumbnail['ID'] : (!empty($image_or_video_thumbnail['id']) ? (int) $image_or_video_thumbnail['id'] : 0);
                $thumbnail_url = !empty($image_or_video_thumbnail['url']) ? $image_or_video_thumbnail['url'] : '';
                $thumbnail_alt = !empty($image_or_video_thumbnail['alt']) ? $image_or_video_thumbnail['alt'] : (get_field('headline') ?: 'Media thumbnail');
                $thumbnail_sizes = '(min-width: 1024px) 58vw, (min-width: 768px) 50vw, 100vw';
                ?>
                <?php if ($image_or_video) {
                    $video_title = get_field('headline') ?: 'video';
                ?>
                    <div class="video rounded-lg relative pb-[56%] w-full overflow-hidden">
                        <?php if ($thumbnail_id) {
                            echo wp_get_attachment_image($thumbnail_id, 'large', false, [
                                'class' => 'absolute inset-0 h-full w-full object-cover',
                                'sizes' => $thumbnail_sizes,
                                'loading' => 'lazy',
                                'decoding' => 'async',
                                'alt' => $thumbnail_alt,
                            ]);
                        } elseif ($thumbnail_url) { ?>
                            <img class="absolute inset-0 h-full w-full object-cover" src="<?php echo esc_url($thumbnail_url); ?>" alt="<?php echo esc_attr($thumbnail_alt); ?>" loading="lazy" decoding="async">
                        <?php } ?>
                        <button type="button"
                            class="js-modal-btn cursor-pointer transition-all duration-300 ease-in-out hover:opacity-70 top-1/2 left-1/2 absolute -translate-x-1/2 -translate-y-1/2 bg-transparent border-0 p-0"
                            data-video-id="<?php echo get_field('youtube_video_id'); ?>"
                            aria-label="Play video: <?php echo esc_attr($video_title); ?>">
                            <svg width="73" height="51" viewBox="0 0 73 51" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
                                <g fill="none" fill-rule="evenodd">
                                    <path d="M71.474 7.964a9.133 9.133 0 0 0-6.454-6.441C59.327 0 36.5 0 36.5 0S13.672 0 7.98 1.523a9.133 9.133 0 0 0-6.455 6.44C0 13.646 0 25.5 0 25.5s0 11.855 1.525 17.536a9.134 9.134 0 0 0 6.454 6.441C13.672 51 36.5 51 36.5 51s22.828 0 28.521-1.523a9.134 9.134 0 0 0 6.454-6.441C73 37.355 73 25.5 73 25.5s0-11.855-1.526-17.536" fill="#000" opacity=".7" />
                                    <path fill="#FFF" d="m29.2 36.429 18.965-10.93L29.2 14.572z" />
                                </g>
                            </svg>
                        </button>
                    </div>
                <?php } else { ?>
                    <div class="image rounded-lg mb-8 pb-[56%] w-full relative overflow-hidden">
                        <?php if ($thumbnail_id) {
                            echo wp_get_attachment_image($thumbnail_id, 'large', false, [
                                'class' => 'absolute inset-0 h-full w-full object-cover',
                                'sizes' => $thumbnail_sizes,
                                'loading' => 'lazy',
                                'decoding' => 'async',
                                'alt' => $thumbnail_alt,
                            ]);
                        } elseif ($thumbnail_url) { ?>
                            <img class="absolute inset-0 h-full w-full object-cover" src="<?php echo esc_url($thumbnail_url); ?>" alt="<?php echo esc_attr($thumbnail_alt); ?>" loading="lazy" decoding="async">
                        <?php } ?>
                    </div>
                <?php } ?>
            </div>
            <div class="col-span-12 md:col-span-6 lg:col-span-5">
                <div class="eyebrow-headline text-base uppercase tracking-wide !mb-4 text-[#063586] font-semibold"><?php echo esc_html(get_field('eyebrow_headline')); ?></div>
                <h2 class="mt-0"><?php echo esc_html(get_field('headline')); ?></h2>
                <div class="text-base mb-6 wysiwyg"><?php echo wp_kses_post(get_field('description')); ?></div>
                <?php $button = get_field('button'); ?>
                <?php if ($button) { ?>
                    <a class="button !no-underline !text-white max-w-[256px]" href="<?php echo esc_url($button['url']); ?>" <?php echo cms_link_attributes($button['target'] ?: '_self'); ?>><?php echo esc_html($button['title']); ?></a>
                <?php } ?>
            </div>
        </div>
    </div>
</section>