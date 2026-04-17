<?php
get_header();
?>
<section style="padding:5rem 0;">
    <div style="width:min(1180px, calc(100vw - 2rem)); margin:0 auto; background:rgba(255,253,248,0.85); border:1px solid rgba(31,43,31,0.12); border-radius:28px; padding:2rem; box-shadow:0 24px 60px rgba(49,58,42,0.12);">
        <h1 style="font-family:'Palatino Linotype','Book Antiqua',Palatino,serif; margin-top:0;"><?php esc_html_e('Veggevity Theme Scaffold', 'veggevity'); ?></h1>
        <p><?php esc_html_e('This theme scaffold provides the shared shell for the Veggevity WordPress build. Build the homepage, shop, nutrition, blog, consultation, and about templates on top of it.', 'veggevity'); ?></p>
    </div>
</section>
<?php
get_footer();

