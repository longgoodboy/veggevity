<?php
/**
 * Plugin Name: Veggevity Core
 * Description: Core content model and ACF registrations for the Veggevity WordPress build.
 * Version: 0.1.0
 * Author: OpenAI
 */

if (!defined('ABSPATH')) {
    exit;
}

function veggevity_core_register_content_model(): void
{
    register_post_type('testimonial', [
        'labels' => [
            'name' => __('Testimonials', 'veggevity'),
            'singular_name' => __('Testimonial', 'veggevity'),
        ],
        'public' => true,
        'show_in_rest' => true,
        'has_archive' => false,
        'menu_icon' => 'dashicons-format-quote',
        'supports' => ['title', 'thumbnail'],
    ]);

    register_post_type('nutrition_item', [
        'labels' => [
            'name' => __('Nutrition Items', 'veggevity'),
            'singular_name' => __('Nutrition Item', 'veggevity'),
        ],
        'public' => true,
        'show_in_rest' => true,
        'has_archive' => false,
        'menu_icon' => 'dashicons-carrot',
        'supports' => ['title'],
    ]);

    register_taxonomy('audience', ['post'], [
        'labels' => [
            'name' => __('Audiences', 'veggevity'),
            'singular_name' => __('Audience', 'veggevity'),
        ],
        'public' => true,
        'show_in_rest' => true,
        'hierarchical' => true,
    ]);

    register_taxonomy('topic', ['post'], [
        'labels' => [
            'name' => __('Topics', 'veggevity'),
            'singular_name' => __('Topic', 'veggevity'),
        ],
        'public' => true,
        'show_in_rest' => true,
        'hierarchical' => true,
    ]);

    $product_taxonomies = [
        'product_type_label' => 'Product Types',
        'price_band' => 'Price Bands',
        'prep_band' => 'Prep Bands',
        'elderly_friendly_term' => 'Elderly Friendly',
        'nutrition_label' => 'Nutrition Labels',
    ];

    foreach ($product_taxonomies as $slug => $label) {
        register_taxonomy($slug, ['product'], [
            'labels' => [
                'name' => __($label, 'veggevity'),
                'singular_name' => __($label, 'veggevity'),
            ],
            'public' => true,
            'show_in_rest' => true,
            'hierarchical' => true,
        ]);
    }
}
add_action('init', 'veggevity_core_register_content_model');

function veggevity_core_seed_terms(): void
{
    $taxonomy_terms = [
        'audience' => ['Nguoi cao tuoi', 'An chay truong', 'Co ban'],
        'topic' => ['Dinh duong khoa hoc', 'Thuc don', 'Loi ich suc khoe', 'Cong thuc'],
        'product_type_label' => ['meal', 'snack', 'drink', 'combo'],
        'price_band' => ['low', 'mid', 'high'],
        'prep_band' => ['fast', 'medium', 'slow'],
        'elderly_friendly_term' => ['yes', 'no'],
        'nutrition_label' => [
            'B12',
            'Canxi',
            'Bo sung sat',
            'Protein tot',
            'It dau',
            'It muoi',
            'No lau',
            'Meal plan',
            'Kiem soat nang luong',
            'Snack lanh manh',
            'Chat xo',
            'Mang di',
            'Uong lien',
            'Khong duong tinh luyen',
            'Nguoi lon tuoi',
        ],
    ];

    foreach ($taxonomy_terms as $taxonomy => $terms) {
        foreach ($terms as $term) {
            if (!term_exists($term, $taxonomy)) {
                wp_insert_term($term, $taxonomy);
            }
        }
    }
}
add_action('init', 'veggevity_core_seed_terms', 20);

function veggevity_core_register_acf_options(): void
{
    if (!function_exists('acf_add_options_page')) {
        return;
    }

    acf_add_options_page([
        'page_title' => __('Veggevity Site Settings', 'veggevity'),
        'menu_title' => __('Veggevity Settings', 'veggevity'),
        'menu_slug' => 'veggevity-site-settings',
        'capability' => 'manage_options',
        'redirect' => false,
    ]);
}
add_action('acf/init', 'veggevity_core_register_acf_options');

function veggevity_core_register_acf_fields(): void
{
    if (!function_exists('acf_add_local_field_group')) {
        return;
    }

    acf_add_local_field_group([
        'key' => 'group_veggevity_site_settings',
        'title' => 'Veggevity Site Settings',
        'fields' => [
            ['key' => 'field_brand_name', 'label' => 'Brand Name', 'name' => 'brand_name', 'type' => 'text', 'required' => 1],
            ['key' => 'field_short_tagline', 'label' => 'Short Tagline', 'name' => 'short_tagline', 'type' => 'text', 'required' => 1],
            ['key' => 'field_hotline', 'label' => 'Hotline', 'name' => 'hotline', 'type' => 'text', 'required' => 1],
            ['key' => 'field_zalo_label', 'label' => 'Zalo Label', 'name' => 'zalo_label', 'type' => 'text'],
            ['key' => 'field_zalo_link', 'label' => 'Zalo Link', 'name' => 'zalo_link', 'type' => 'url'],
            ['key' => 'field_support_hours', 'label' => 'Support Hours', 'name' => 'support_hours', 'type' => 'text'],
            ['key' => 'field_contact_email', 'label' => 'Contact Email', 'name' => 'contact_email', 'type' => 'email'],
            ['key' => 'field_footer_copy', 'label' => 'Footer Copy', 'name' => 'footer_copy', 'type' => 'textarea', 'rows' => 3],
            ['key' => 'field_consultation_cta_label', 'label' => 'Consultation CTA Label', 'name' => 'consultation_cta_label', 'type' => 'text'],
            ['key' => 'field_consultation_cta_link', 'label' => 'Consultation CTA Link', 'name' => 'consultation_cta_link', 'type' => 'link'],
            [
                'key' => 'field_social_links',
                'label' => 'Social Links',
                'name' => 'social_links',
                'type' => 'repeater',
                'sub_fields' => [
                    ['key' => 'field_social_platform', 'label' => 'Platform', 'name' => 'platform', 'type' => 'text'],
                    ['key' => 'field_social_url', 'label' => 'URL', 'name' => 'url', 'type' => 'url'],
                ],
            ],
        ],
        'location' => [[['param' => 'options_page', 'operator' => '==', 'value' => 'veggevity-site-settings']]],
    ]);

    acf_add_local_field_group([
        'key' => 'group_veggevity_homepage',
        'title' => 'Veggevity Homepage',
        'fields' => [
            ['key' => 'field_home_hero_eyebrow', 'label' => 'Hero Eyebrow', 'name' => 'hero_eyebrow', 'type' => 'text'],
            ['key' => 'field_home_hero_heading', 'label' => 'Hero Heading', 'name' => 'hero_heading', 'type' => 'text'],
            ['key' => 'field_home_hero_copy', 'label' => 'Hero Copy', 'name' => 'hero_copy', 'type' => 'textarea', 'rows' => 4],
            ['key' => 'field_home_hero_primary_cta', 'label' => 'Hero Primary CTA', 'name' => 'hero_primary_cta', 'type' => 'link'],
            ['key' => 'field_home_hero_secondary_cta', 'label' => 'Hero Secondary CTA', 'name' => 'hero_secondary_cta', 'type' => 'link'],
            ['key' => 'field_home_why_badge', 'label' => 'Why Badge', 'name' => 'why_badge', 'type' => 'text'],
            ['key' => 'field_home_why_heading', 'label' => 'Why Heading', 'name' => 'why_heading', 'type' => 'text'],
            ['key' => 'field_home_why_intro', 'label' => 'Why Intro', 'name' => 'why_intro', 'type' => 'textarea', 'rows' => 3],
            [
                'key' => 'field_home_why_cards',
                'label' => 'Why Cards',
                'name' => 'why_cards',
                'type' => 'repeater',
                'button_label' => 'Add Card',
                'sub_fields' => [
                    ['key' => 'field_home_why_card_title', 'label' => 'Title', 'name' => 'title', 'type' => 'text'],
                    ['key' => 'field_home_why_card_body', 'label' => 'Body', 'name' => 'body', 'type' => 'textarea', 'rows' => 2],
                ],
            ],
            ['key' => 'field_home_story_badge', 'label' => 'Story Badge', 'name' => 'story_badge', 'type' => 'text'],
            ['key' => 'field_home_story_heading', 'label' => 'Story Heading', 'name' => 'story_heading', 'type' => 'text'],
            ['key' => 'field_home_story_copy', 'label' => 'Story Copy', 'name' => 'story_copy', 'type' => 'textarea', 'rows' => 3],
            [
                'key' => 'field_home_story_chips',
                'label' => 'Story Chips',
                'name' => 'story_chips',
                'type' => 'repeater',
                'sub_fields' => [
                    ['key' => 'field_home_story_chip_label', 'label' => 'Label', 'name' => 'label', 'type' => 'text'],
                ],
            ],
            ['key' => 'field_home_featured_products_badge', 'label' => 'Featured Products Badge', 'name' => 'featured_products_badge', 'type' => 'text'],
            ['key' => 'field_home_featured_products_heading', 'label' => 'Featured Products Heading', 'name' => 'featured_products_heading', 'type' => 'text'],
            ['key' => 'field_home_featured_products_copy', 'label' => 'Featured Products Copy', 'name' => 'featured_products_copy', 'type' => 'textarea', 'rows' => 3],
            ['key' => 'field_home_featured_products', 'label' => 'Featured Products', 'name' => 'featured_products', 'type' => 'relationship', 'post_type' => ['product']],
            ['key' => 'field_home_nutrition_teaser_badge', 'label' => 'Nutrition Teaser Badge', 'name' => 'nutrition_teaser_badge', 'type' => 'text'],
            ['key' => 'field_home_nutrition_teaser_heading', 'label' => 'Nutrition Teaser Heading', 'name' => 'nutrition_teaser_heading', 'type' => 'text'],
            ['key' => 'field_home_nutrition_teaser_copy', 'label' => 'Nutrition Teaser Copy', 'name' => 'nutrition_teaser_copy', 'type' => 'textarea', 'rows' => 3],
            ['key' => 'field_home_testimonials_badge', 'label' => 'Testimonials Badge', 'name' => 'testimonials_badge', 'type' => 'text'],
            ['key' => 'field_home_testimonials_heading', 'label' => 'Testimonials Heading', 'name' => 'testimonials_heading', 'type' => 'text'],
            ['key' => 'field_homepage_testimonials', 'label' => 'Homepage Testimonials', 'name' => 'homepage_testimonials', 'type' => 'relationship', 'post_type' => ['testimonial']],
            ['key' => 'field_blog_preview_badge', 'label' => 'Blog Preview Badge', 'name' => 'blog_preview_badge', 'type' => 'text'],
            ['key' => 'field_blog_preview_heading', 'label' => 'Blog Preview Heading', 'name' => 'blog_preview_heading', 'type' => 'text'],
            ['key' => 'field_featured_posts', 'label' => 'Featured Posts', 'name' => 'featured_posts', 'type' => 'relationship', 'post_type' => ['post']],
            ['key' => 'field_final_cta_heading', 'label' => 'Final CTA Heading', 'name' => 'final_cta_heading', 'type' => 'text'],
            ['key' => 'field_final_cta_copy', 'label' => 'Final CTA Copy', 'name' => 'final_cta_copy', 'type' => 'textarea', 'rows' => 3],
            ['key' => 'field_final_cta_primary', 'label' => 'Final CTA Primary', 'name' => 'final_cta_primary', 'type' => 'link'],
            ['key' => 'field_final_cta_secondary', 'label' => 'Final CTA Secondary', 'name' => 'final_cta_secondary', 'type' => 'link'],
        ],
        'location' => [[['param' => 'page_type', 'operator' => '==', 'value' => 'front_page']]],
    ]);

    acf_add_local_field_group([
        'key' => 'group_veggevity_product_fields',
        'title' => 'Veggevity Product Fields',
        'fields' => [
            ['key' => 'field_prep_time_minutes', 'label' => 'Prep Time Minutes', 'name' => 'prep_time_minutes', 'type' => 'number', 'required' => 1],
            ['key' => 'field_prep_time_band', 'label' => 'Prep Time Band', 'name' => 'prep_time_band', 'type' => 'select', 'choices' => ['fast' => 'fast', 'medium' => 'medium', 'slow' => 'slow']],
            ['key' => 'field_elderly_friendly', 'label' => 'Elderly Friendly', 'name' => 'elderly_friendly', 'type' => 'true_false', 'ui' => 1],
            ['key' => 'field_short_nutrition_note', 'label' => 'Short Nutrition Note', 'name' => 'short_nutrition_note', 'type' => 'textarea', 'rows' => 3],
            ['key' => 'field_primary_nutrition_highlight', 'label' => 'Primary Nutrition Highlight', 'name' => 'primary_nutrition_highlight', 'type' => 'text'],
            ['key' => 'field_nutrition_badges', 'label' => 'Nutrition Badges', 'name' => 'nutrition_badges', 'type' => 'taxonomy', 'taxonomy' => 'nutrition_label', 'field_type' => 'checkbox', 'return_format' => 'id'],
        ],
        'location' => [[['param' => 'post_type', 'operator' => '==', 'value' => 'product']]],
    ]);

    acf_add_local_field_group([
        'key' => 'group_veggevity_testimonial_fields',
        'title' => 'Veggevity Testimonial Fields',
        'fields' => [
            ['key' => 'field_quote', 'label' => 'Quote', 'name' => 'quote', 'type' => 'textarea', 'required' => 1],
            ['key' => 'field_author_name', 'label' => 'Author Name', 'name' => 'author_name', 'type' => 'text', 'required' => 1],
            ['key' => 'field_author_descriptor', 'label' => 'Author Descriptor', 'name' => 'author_descriptor', 'type' => 'text'],
            ['key' => 'field_sort_order', 'label' => 'Sort Order', 'name' => 'sort_order', 'type' => 'number'],
        ],
        'location' => [[['param' => 'post_type', 'operator' => '==', 'value' => 'testimonial']]],
    ]);

    acf_add_local_field_group([
        'key' => 'group_veggevity_nutrition_item_fields',
        'title' => 'Veggevity Nutrition Item Fields',
        'fields' => [
            [
                'key' => 'field_aliases',
                'label' => 'Aliases',
                'name' => 'aliases',
                'type' => 'repeater',
                'sub_fields' => [
                    ['key' => 'field_alias', 'label' => 'Alias', 'name' => 'alias', 'type' => 'text'],
                ],
            ],
            ['key' => 'field_protein', 'label' => 'Protein', 'name' => 'protein', 'type' => 'text'],
            ['key' => 'field_b12', 'label' => 'B12', 'name' => 'b12', 'type' => 'text'],
            ['key' => 'field_calcium', 'label' => 'Calcium', 'name' => 'calcium', 'type' => 'text'],
            ['key' => 'field_iron', 'label' => 'Iron', 'name' => 'iron', 'type' => 'text'],
            ['key' => 'field_recommendation_note', 'label' => 'Recommendation Note', 'name' => 'recommendation_note', 'type' => 'textarea', 'rows' => 3],
        ],
        'location' => [[['param' => 'post_type', 'operator' => '==', 'value' => 'nutrition_item']]],
    ]);

    acf_add_local_field_group([
        'key' => 'group_veggevity_about_page',
        'title' => 'Veggevity About Page',
        'fields' => [
            ['key' => 'field_brand_story_badge', 'label' => 'Brand Story Badge', 'name' => 'brand_story_badge', 'type' => 'text'],
            ['key' => 'field_brand_story_heading', 'label' => 'Brand Story Heading', 'name' => 'brand_story_heading', 'type' => 'text'],
            ['key' => 'field_brand_story_copy', 'label' => 'Brand Story Copy', 'name' => 'brand_story_copy', 'type' => 'textarea', 'rows' => 4],
            [
                'key' => 'field_team_cards',
                'label' => 'Team Cards',
                'name' => 'team_cards',
                'type' => 'repeater',
                'sub_fields' => [
                    ['key' => 'field_team_role', 'label' => 'Role', 'name' => 'role', 'type' => 'text'],
                    ['key' => 'field_team_description', 'label' => 'Description', 'name' => 'description', 'type' => 'textarea', 'rows' => 2],
                ],
            ],
            [
                'key' => 'field_contact_cards',
                'label' => 'Contact Cards',
                'name' => 'contact_cards',
                'type' => 'repeater',
                'sub_fields' => [
                    ['key' => 'field_contact_label', 'label' => 'Label', 'name' => 'label', 'type' => 'text'],
                    ['key' => 'field_contact_value', 'label' => 'Value', 'name' => 'value', 'type' => 'text'],
                ],
            ],
        ],
        'location' => [[['param' => 'page_template', 'operator' => '==', 'value' => 'page-about.php']]],
    ]);
}
add_action('acf/init', 'veggevity_core_register_acf_fields');

function veggevity_core_register_rest_fields(): void
{
    register_rest_field('nutrition_item', 'nutrition_metrics', [
        'get_callback' => static function (array $post): array {
            if (!function_exists('get_field')) {
                return [];
            }

            $aliases = get_field('aliases', $post['id']) ?: [];

            return [
                'aliases' => array_values(array_filter(array_map(static fn(array $row): string => (string) ($row['alias'] ?? ''), $aliases))),
                'protein' => (string) get_field('protein', $post['id']),
                'b12' => (string) get_field('b12', $post['id']),
                'calcium' => (string) get_field('calcium', $post['id']),
                'iron' => (string) get_field('iron', $post['id']),
                'recommendation_note' => (string) get_field('recommendation_note', $post['id']),
            ];
        },
        'schema' => null,
    ]);
}
add_action('rest_api_init', 'veggevity_core_register_rest_fields');

