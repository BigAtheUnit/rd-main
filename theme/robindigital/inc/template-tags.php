
<?php
/**
 * Custom template tags for this theme
 */

/**
 * Displays an optional post thumbnail.
 */
function robindigital_post_thumbnail() {
    if (post_password_required() || is_attachment() || !has_post_thumbnail()) {
        return;
    }

    if (is_singular()) {
        ?>
        <div class="post-thumbnail">
            <?php the_post_thumbnail('large', ['class' => 'rounded-lg shadow-md w-full']); ?>
        </div>
        <?php
    } else {
        ?>
        <a class="post-thumbnail block" href="<?php the_permalink(); ?>" aria-hidden="true" tabindex="-1">
            <?php
            the_post_thumbnail('medium', [
                'class' => 'rounded-lg shadow-md hover:shadow-lg transition-shadow w-full',
                'alt' => the_title_attribute(['echo' => false]),
            ]);
            ?>
        </a>
        <?php
    }
}

/**
 * Prints HTML with meta information for the current post-date/time and author.
 */
function robindigital_posted_on() {
    $time_string = '<time class="entry-date published updated" datetime="%1$s">%2$s</time>';
    if (get_the_time('U') !== get_the_modified_time('U')) {
        $time_string = '<time class="entry-date published" datetime="%1$s">%2$s</time><time class="updated" datetime="%3$s">%4$s</time>';
    }

    $time_string = sprintf(
        $time_string,
        esc_attr(get_the_date(DATE_W3C)),
        esc_html(get_the_date()),
        esc_attr(get_the_modified_date(DATE_W3C)),
        esc_html(get_the_modified_date())
    );

    $posted_on = sprintf(
        /* translators: %s: post date */
        esc_html_x('Posted on %s', 'post date', 'robindigital'),
        '<a href="' . esc_url(get_permalink()) . '" rel="bookmark">' . $time_string . '</a>'
    );

    $byline = sprintf(
        /* translators: %s: post author */
        esc_html_x('by %s', 'post author', 'robindigital'),
        '<span class="author vcard"><a class="url fn n" href="' . esc_url(get_author_posts_url(get_the_author_meta('ID'))) . '">' . esc_html(get_the_author()) . '</a></span>'
    );

    echo '<span class="posted-on text-sm text-robin-dark/60">' . $posted_on . '</span><span class="byline text-sm text-robin-dark/60"> ' . $byline . '</span>';
}

/**
 * Prints HTML with meta information for the categories, tags and comments.
 */
function robindigital_entry_footer() {
    // Hide category and tag text for pages.
    if ('post' === get_post_type()) {
        /* translators: used between list items, there is a space after the comma */
        $categories_list = get_the_category_list(esc_html__(', ', 'robindigital'));
        if ($categories_list) {
            /* translators: 1: list of categories. */
            printf('<span class="cat-links text-sm text-robin-dark/60">' . esc_html__('Posted in %1$s', 'robindigital') . '</span>', $categories_list);
        }

        /* translators: used between list items, there is a space after the comma */
        $tags_list = get_the_tag_list('', esc_html_x(', ', 'list item separator', 'robindigital'));
        if ($tags_list) {
            /* translators: 1: list of tags. */
            printf('<span class="tags-links text-sm text-robin-dark/60">' . esc_html__('Tagged %1$s', 'robindigital') . '</span>', $tags_list);
        }
    }

    if (!is_single() && !post_password_required() && (comments_open() || get_comments_number())) {
        echo '<span class="comments-link text-sm text-robin-dark/60">';
        comments_popup_link(
            sprintf(
                wp_kses(
                    /* translators: %s: post title */
                    __('Leave a Comment<span class="screen-reader-text"> on %s</span>', 'robindigital'),
                    array(
                        'span' => array(
                            'class' => array(),
                        ),
                    )
                ),
                get_the_title()
            )
        );
        echo '</span>';
    }

    edit_post_link(
        sprintf(
            wp_kses(
                /* translators: %s: Name of current post. Only visible to screen readers */
                __('Edit <span class="screen-reader-text">%s</span>', 'robindigital'),
                array(
                    'span' => array(
                        'class' => array(),
                    ),
                )
            ),
            get_the_title()
        ),
        '<span class="edit-link text-sm text-robin-dark/60">',
        '</span>'
    );
}

/**
 * Displays custom pagination for archives
 */
function robindigital_pagination() {
    $prev_arrow = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>';
    $next_arrow = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>';
    
    the_posts_pagination(array(
        'mid_size' => 2,
        'prev_text' => $prev_arrow,
        'next_text' => $next_arrow,
        'class' => 'pagination',
        'screen_reader_text' => __('Posts navigation', 'robindigital'),
        'aria_label' => __('Posts', 'robindigital'),
    ));
}
