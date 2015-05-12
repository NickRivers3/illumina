<?php

/**
 * @file
 * This template is used to print a single field in a view.
 *
 * It is not actually used in default Views, as this is registered as a theme
 * function which has better performance. For single overrides, the template is
 * perfectly okay.
 *
 * Variables available:
 * - $view: The view object
 * - $field: The field handler object that can process the input
 * - $row: The raw SQL result that can be used
 * - $output: The processed output that will normally be used.
 *
 * When fetching output from the $row, this construct should be used:
 * $data = $row->{$field->field_alias}
 *
 * The above will guarantee that you'll always get the correct data,
 * regardless of any changes in the aliasing that might happen if
 * the view is modified.
 */
?>
<div class="action-icon col-lg-1 col-md-1 col-sm-2 col-xs-3">
	<?php print $fields['field_action_icon']->content; ?>
</div>

<div class="action-content col-lg-11 col-md-11 col-sm-10 col-xs-9">
	<h5 class="action-title nid-<?php print $fields['nid']->content; ?>">
		<?php print $fields['title']->content; ?>
	</h5>
	<div class="action-body">
		<?php print $fields['body']->content; ?>
	</div>
</div>