<?php

if (!defined('ABSPATH')) {
    exit;
}

function veggevity_theme_setup(): void
{
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('menus');
    add_theme_support('html5', ['search-form', 'comment-form', 'comment-list', 'gallery', 'caption', 'style', 'script']);

    register_nav_menus([
        'primary' => __('Primary Navigation', 'veggevity'),
        'footer_navigation' => __('Footer Navigation', 'veggevity'),
        'footer_content' => __('Footer Content', 'veggevity'),
    ]);
}
add_action('after_setup_theme', 'veggevity_theme_setup');

function veggevity_enqueue_assets(): void
{
    wp_enqueue_style('veggevity-style', get_stylesheet_uri(), [], '0.1.0');
}
add_action('wp_enqueue_scripts', 'veggevity_enqueue_assets');

function veggevity_option(string $field, $default = '')
{
    if (function_exists('get_field')) {
        $value = get_field($field, 'option');
        if ($value !== null && $value !== false && $value !== '') {
            return $value;
        }
    }

    return $default;
}

function veggevity_link_url($link, string $fallback = '#'): string
{
    if (is_array($link) && !empty($link['url'])) {
        return (string) $link['url'];
    }

    if (is_string($link) && $link !== '') {
        return $link;
    }

    return $fallback;
}

function veggevity_link_title($link, string $fallback = ''): string
{
    if (is_array($link) && !empty($link['title'])) {
        return (string) $link['title'];
    }

    return $fallback;
}

