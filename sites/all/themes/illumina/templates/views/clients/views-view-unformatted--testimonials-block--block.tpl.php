<?php

/**
 * @file
 * Default simple view template to display a list of rows.
 *
 * @ingroup views_templates
 */
?>
<div id="client-content-slider" class="content-slider">
	<div class="content-slider-inner">
		<?php if (!empty($title)): ?>
			<h3><?php print $title; ?></h3>
		<?php endif; ?>
		<?php foreach ($rows as $id => $row): ?>
			<div <?php if ($classes_array[$id]) { print ' class="col-lg-2 col-md-2 col-sm-2 col-xs-12 ' . $classes_array[$id] .'"';  } ?>>
				<?php print $row; ?>
			</div>
		<?php endforeach; ?>
	</div>
</div>