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
$solid_color_or_background_image = get_field('solid_color_or_background_image');
$solid_color = get_field('solid_color');
$background_image = get_field('background_image');
$cta_button = get_field('cta_button');
$button_or_arrow_links = get_field('button_or_arrow_links');
?>
<span class="sr-only bg-primary"></span>
<span class="sr-only bg-secondary"></span>
<span class="sr-only bg-grey"></span>
<div class="product-cards <?php if ($solid_color) {
                                echo 'bg-' . $solid_color;
                            } ?> bg-cover bg-center mb-12 pb-[20%] <?php echo esc_attr($classes); ?>" <?php echo $id; ?> data-block-name="<?php echo esc_attr($acfKey); ?>" <?php if ($solid_color_or_background_image) { ?>style="background-image: url(<?php echo esc_url($background_image['url']); ?>);" <?php } ?>>
    <div class="px-8 pt-[72px]">
        <h2 class="<?php if ($solid_color == 'grey') { ?>text-primary<?php } else { ?> text-white<?php } ?> text-center lg:mb-0"><?php echo esc_html(get_field('headline')); ?></h2>
    </div>
</div>
<?php if (have_rows('product_cards')): ?>
    <?php
    $product_cards = get_field('product_cards');
    $card_count = count($product_cards);
    // Schema data collection
    $schema_products = [];
    $schema_position = 1;

    // Determine width class based on total number of cards
    if ($card_count >= 4) {
        $width_class = 'lg:w-1/4';
    } else if ($card_count == 3) {
        $width_class = 'lg:w-1/3';
    } else if ($card_count == 2) {
        $width_class = 'lg:w-1/4';
    } else {
        $width_class = 'w-full lg:w-1/2';
    }
    ?>
    <div class="relative -mt-[20%]">
        <div class="xl:max-w-[1365px] px-8 mx-auto product-cards-loop lg:flex lg:gap-x-8 justify-center">
            <?php while (have_rows('product_cards')) : the_row();
                // Get card data for schema
                $card_title = get_sub_field('card_title');
                $card_description = get_sub_field('card_description');
                $card_image = get_sub_field('card_image');
                $card_link = get_sub_field('card_link');

                // Collect FinancialProduct schema data
                $product_schema_item = [
                    "@type" => "ListItem",
                    "position" => $schema_position++,
                    "item" => [
                        "@type" => "FinancialProduct",
                        "name" => $card_title,
                        "description" => $card_description,
                        "provider" => [
                            "@type" => "Organization",
                            "name" => get_bloginfo('name')
                        ]
                    ]
                ];
                if (!empty($card_image['url'])) {
                    $product_schema_item['item']['image'] = $card_image['url'];
                }
                if (!empty($card_link['url'])) {
                    $product_schema_item['item']['url'] = $card_link['url'];
                }
                $schema_products[] = $product_schema_item;
            ?>
                <?php if ($card_link) { ?>
                    <a class="block mb-8 <?php echo $width_class; ?> !no-underline !font-normal product-card relative bottom-0 transition-all duration-500 lg:hover:bottom-4 lg:hover:shadow-xl" href="<?php echo esc_url($card_link['url']); ?>">
                    <?php } else { ?>
                        <div class="block mb-8 <?php echo $width_class; ?> !no-underline !font-normal product-card relative bottom-0">
                        <?php } ?>
                        <div class="product-card-image relative pb-[80%] md:pb-[65%] lg:pb-[70%] w-full overflow-hidden">
                            <?php if (!empty($card_image['id'])) {
                                echo wp_get_attachment_image($card_image['id'], 'large', false, [
                                    'class' => 'absolute inset-0 w-full h-full object-cover',
                                    'alt' => $card_title,
                                    'loading' => 'lazy',
                                    'decoding' => 'async',
                                    'sizes' => '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw'
                                ]);
                            } elseif (!empty($card_image['url'])) { ?>
                                <img src="<?php echo esc_url($card_image['url']); ?>"
                                     alt="<?php echo esc_attr($card_title); ?>"
                                     class="absolute inset-0 w-full h-full object-cover"
                                     loading="lazy"
                                     decoding="async">
                            <?php } ?>
                        </div>
                        <div class="eh-productcardcontent product-card-content border-[1px] border-solid border-[#c6c6cd] pt-6 pb-20 bg-white">
                            <h3 class="px-8 eh-productcardtitle product-card-title text-xl mb-5"><?php echo esc_html($card_title); ?></h3>
                            <p class="px-8 eh-productcarddescription text-[#444] mb-8 product-card-description"><?php echo esc_html($card_description); ?></p>
                            <?php if ($card_link) { ?>
                                <?php if ($button_or_arrow_links == true) { ?>
                                    <div class="px-8 flex justify-between items-center">
                                        <div class="learn-more text-base uppercase font-semibold tracking-wider">
                                            <?php echo $card_link['title']; ?>
                                        </div>
                                        <div class="arrow">
                                            <i class="fa fa-arrow-right"></i>
                                        </div>
                                    </div>
                                <?php } else { ?>
                                    <div class="my-8 px-8">
                                        <div class="cursor-pointer button w-full button-primary block"><?php echo $card_link['title']; ?></div>
                                    </div>
                                <?php } ?>
                            <?php } ?>
                        </div>
                        <?php if ($card_link) { ?>
                    </a>
                <?php } else { ?>
        </div>
    <?php } ?>
<?php endwhile; ?>
    </div>
    </div>
    <?php
    // Output FinancialProduct schema for SEO
    if (!empty($schema_products)) :
        $products_schema = [
            "@context" => "https://schema.org",
            "@type" => "ItemList",
            "name" => get_field('headline') ?: "Mortgage Products",
            "itemListElement" => $schema_products
        ];
    ?>
    <script type="application/ld+json">
    <?php echo wp_json_encode($products_schema, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES); ?>
    </script>
    <?php endif; ?>
<?php endif; ?>
<?php if ($cta_button) : ?>
    <div class="container px-8">
        <div class="relative">
            <hr class="absolute top-1/2 -translate-y-1/2 w-full" />
            <a class="cursor-pointer button button-primary  !text-white !no-underline w-full max-w-[650px] mx-auto absolute left-1/2 -translate-x-1/2 top-4 tracking-wider !text-base" href="<?php echo esc_url($cta_button['url']); ?>"><?php echo esc_html($cta_button['title']); ?></a>
        </div>
    </div>
<?php endif; ?>
<div class="pb-[15vh]"></div>