<?php
if (!defined('ABSPATH')) {
    exit;
}

$brand_name = veggevity_option('brand_name', get_bloginfo('name'));
$footer_copy = veggevity_option('footer_copy', 'Dinh duong chay khoa hoc cho nhip song hien dai');
$hotline = veggevity_option('hotline', '0909 888 120');
$zalo_label = veggevity_option('zalo_label', 'Veggevity Care');
$support_hours = veggevity_option('support_hours', '08:00 - 20:00 moi ngay');
?>
</main>
<footer class="footer">
    <div class="footer-shell">
        <div class="footer-grid">
            <div>
                <div class="brand-mark">
                    <span class="brand-orb" aria-hidden="true"></span>
                    <span class="brand-text">
                        <strong><?php echo esc_html($brand_name); ?></strong>
                        <span><?php echo esc_html($footer_copy); ?></span>
                    </span>
                </div>
                <p><?php echo esc_html(sprintf('Hotline: %s', $hotline)); ?></p>
                <p><?php echo esc_html(sprintf('Zalo: %s', $zalo_label)); ?></p>
                <p><?php echo esc_html(sprintf('Gio ho tro: %s', $support_hours)); ?></p>
            </div>
            <div>
                <strong><?php esc_html_e('Dieu huong', 'veggevity'); ?></strong>
                <?php
                wp_nav_menu([
                    'theme_location' => 'footer_navigation',
                    'container' => false,
                    'menu_class' => '',
                    'fallback_cb' => false,
                    'items_wrap' => '%3$s',
                    'depth' => 1,
                ]);
                ?>
            </div>
            <div>
                <strong><?php esc_html_e('Noi dung', 'veggevity'); ?></strong>
                <?php
                wp_nav_menu([
                    'theme_location' => 'footer_content',
                    'container' => false,
                    'menu_class' => '',
                    'fallback_cb' => false,
                    'items_wrap' => '%3$s',
                    'depth' => 1,
                ]);
                ?>
            </div>
            <div>
                <strong><?php esc_html_e('Ho tro', 'veggevity'); ?></strong>
                <p><?php esc_html_e('Giu footer gon, ro, va khong de lai ghi chu MVP trong ban production.', 'veggevity'); ?></p>
            </div>
        </div>
        <div class="footer-bottom">
            <span><?php echo esc_html(sprintf('© %s %s', gmdate('Y'), $brand_name)); ?></span>
            <span><?php esc_html_e('Healthy, scientific, accessible.', 'veggevity'); ?></span>
        </div>
    </div>
</footer>
<?php wp_footer(); ?>
</body>
</html>

