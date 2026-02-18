# Security Escaping Audit

Date: February 17, 2026
Scope: `wp-content/themes/complete-mortgage-theme` PHP templates/blocks/widgets

## Summary
A strict context-aware escaping pass was completed across the theme.

- Attribute context: normalized to `esc_attr(...)` where needed.
- URL context: normalized to `esc_url(...)` and `cms_link_attributes(...)` for target/rel handling.
- HTML text context: normalized to `esc_html(...)`.
- Rich text context: normalized to `wp_kses_post(...)` where HTML is expected.
- JS string context: normalized to `esc_js(...)`.
- `tel:`/`mailto:` context: normalized via digit/email sanitization.

Syntax check result: all changed PHP files pass `php -l`.

## Files Updated In Strict Pass

- `blocks/hero-with-circular-image/hero-with-circular-image.php`
- `blocks/newsletter/newsletter.php`
- `blocks/branch-detail/branch-detail.php`
- `blocks/responsive-table/responsive-table.php`
- `blocks/option-cards/option-cards.php`
- `blocks/hero-with-image-only/hero-with-image-only.php`
- `blocks/meet-the-team/meet-the-team.php`
- `blocks/customer-reviews/customer-reviews.php`
- `blocks/product-cards/product-cards.php`
- `blocks/trusted-by/trusted-by.php`
- `blocks/hero-multiimage/hero-multiimage.php`
- `blocks/blue-link/blue-link.php`

## High-Value Fixes Added

- Escaped previously raw `data-block-name` attributes.
- Replaced raw `target="..."` usage with `cms_link_attributes(...)` in remaining links.
- Escaped dynamic class fragments in cards/hero/trusted blocks.
- Escaped gradient style variables in `trusted-by` inline style.
- Escaped CTA titles previously rendered raw in `product-cards`.
- Sanitized `tel:` and `mailto:` values in branch/team contact links.

## Residual Risk Notes (Manual Verification Recommended)

These are not direct escaping defects, but should be reviewed for trust boundaries:

- `do_shortcode(...)` outputs in templates/blocks (depends on plugin output quality).
- `vv_markdown_light(...)` output in responsive table markdown mode.
- Third-party embeds/scripts (BankingBridge, GTM, instant.page) are intentionally inline/external.

## Validation Commands Used

- Pattern sweeps with `rg` for unescaped echo contexts and attribute assignments.
- `php -l` across all modified PHP files.

