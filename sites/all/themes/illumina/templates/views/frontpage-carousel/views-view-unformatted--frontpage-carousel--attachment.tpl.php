<?php

/**
 * @file
 * Default simple view template to display a list of rows.
 *
 * @ingroup views_templates
 */
?>
<?php if (!empty($title)): ?>
	<h3><?php print $title; ?></h3>
<?php endif; ?>
<ul class="slide-nav">
	<?php foreach ($rows as $key => $row): ?>
		<li class="item-<?php print $key; ?>">
			<?php print $row; ?>
		</li>
	<?php endforeach; ?>
</ul>

