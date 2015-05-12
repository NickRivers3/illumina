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
 $URL = $fields['name']->content;
 $URL = strtolower($URL);
 $URL = preg_replace("/[^a-z0-9_\s-]/", "", $URL);
 $URL = preg_replace("/[\s-]+/", " ", $URL);
 $URL = preg_replace("/[\s_]/", "-", $URL);
?>
<div class='user-header'>
	<?php if (!empty($fields['field_user_last_name'])): ?>
		<h3 class="name"><?php print $fields['field_user_last_name']->content; ?></h3>
	<?php endif; ?>
	<?php if (!empty($fields['field_user_title'])): ?>
			<div class="title"><?php print $fields['field_user_title']->content; ?></div>
	<?php endif; ?>
</div>

<div class='user-content'>
	<?php if (!empty($fields['picture'])): ?>
		<div class="image user-image pull-left"><?php print $fields['picture']->content; ?></div>
	<?php endif; ?>
	<?php if (!empty($fields['field_user_biography'])): ?>
		<div class="body"><?php print $fields['field_user_biography']->content; ?><a href="/about/our-team/<?php echo $URL; ?>" class="views-more-link"> Read more</a></div>
	<?php endif; ?>
</div>