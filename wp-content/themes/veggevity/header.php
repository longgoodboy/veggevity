<?php
if (!defined('ABSPATH')) {
    exit;
}

$brand_name = veggevity_option('brand_name', get_bloginfo('name'));
$tagline = veggevity_option('short_tagline', get_bloginfo('description'));
$hotline = veggevity_option('hotline', '0909 888 120');
$zalo_label = veggevity_option('zalo_label', 'Veggevity Care');
$cta = veggevity_option('consultation_cta_link', []);
$cta_url = veggevity_link_url($cta, home_url('/tu-van/'));
$cta_title = veggevity_link_title($cta, veggevity_option('consultation_cta_label', 'Bat dau tu van'));
?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>
<header>
    <div class="utility-bar">
        <div class="utility-inner">
            <div class="veggevity-chip-row">
                <span class="veggevity-chip"><?php echo esc_html(sprintf('Hotline: %s', $hotline)); ?></span>
                <?php if ($zalo_label) : ?>
                    <span class="veggevity-chip"><?php echo esc_html($zalo_label); ?></span>
                <?php endif; ?>
            </div>
            <div class="veggevity-chip-row">
                <span class="veggevity-chip"><?php esc_html_e('Vietnamese-first', 'veggevity'); ?></span>
                <span class="veggevity-chip"><?php esc_html_e('Tu van + dinh duong + ecommerce', 'veggevity'); ?></span>
            </div>
        </div>
    </div>
    <nav class="site-nav" aria-label="<?php esc_attr_e('Primary navigation', 'veggevity'); ?>">
        <div class="nav-inner">
            <a class="brand-mark" href="<?php echo esc_url(home_url('/')); ?>">
                <span class="brand-orb" aria-hidden="true"></span>
                <span class="brand-text">
                    <strong><?php echo esc_html($brand_name); ?></strong>
                    <span><?php echo esc_html($tagline); ?></span>
                </span>
            </a>
            <div class="nav-links">
                <?php
                wp_nav_menu([
                    'theme_location' => 'primary',
                    'container' => false,
                    'menu_class' => '',
                    'fallback_cb' => false,
                    'items_wrap' => '%3$s',
                    'depth' => 1,
                ]);
                ?>
            </div>
            <a class="nav-cta" href="<?php echo esc_url($cta_url); ?>"><?php echo esc_html($cta_title); ?></a>
        </div>
    </nav>
</header>
<main id="primary" class="site-main">

