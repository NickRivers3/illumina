<?php

/**
 * @file
 * Default simple view template to all the fields as a row.
 *
 * - $view: The view in use.
 * - $fields: an array of $field objects. Each one contains:
 *   - $field->content: The output of the field.
 *   - $field->raw: The raw data for the field, if it exists. This is NOT output safe.
 *   - $field->class: The safe class id to use.
 *   - $field->handler: The Views field handler object controlling this field. Do not use
 *     var_export to dump this object, as it can't handle the recursion.
 *   - $field->inline: Whether or not the field should be inline.
 *   - $field->inline_html: either div or span based on the above flag.
 *   - $field->wrapper_prefix: A complete wrapper containing the inline_html to use.
 *   - $field->wrapper_suffix: The closing tag for the wrapper.
 *   - $field->separator: an optional separator that may appear before a field.
 *   - $field->label: The wrap label text to use.
 *   - $field->label_html: The full HTML of the label to use including
 *     configured element type.
 * - $row: The raw result object from the query, with all data it fetched.
 *
 * @ingroup views_templates
 */
?>
<?php if (!empty($fields['field_image'])): ?>
	<div class="image user-image pull-left"><?php print $fields['field_image']->content; ?></div>
<?php endif; ?>
<?php if (!empty($fields['body'])): ?>
	<div class='body'><em><?php print $fields['body']->content; ?></em></div>
<?php endif; ?>

<div class='author-info'>
	<?php if (!empty($fields['field_testimonial_author'])): ?>
		<div class='author'><strong><?php print $fields['field_testimonial_author']->content; ?></strong></div>
	<?php endif; ?>
	<?php if (!empty($fields['field_testimonial_authors_title'])): ?>
		<span class='title'><?php print $fields['field_testimonial_authors_title']->content; ?>, </span>
	<?php endif; ?>
	<?php if (!empty($fields['field_testimonial_authors_compa'])): ?>
		<span class='company'><?php print $fields['field_testimonial_authors_compa']->content; ?>, </span>
	<?php endif; ?>
	<?php if (!empty($fields['field_testimonial_author_locatio'])): ?>
		<span class='location'><?php print $fields['field_testimonial_author_locatio']->content; ?></span>
	<?php endif; ?>
</div>