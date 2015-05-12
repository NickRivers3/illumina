<?php
 // Template: Node Embed
 // Testimonials
?>
<div id="node-<?php print $node->nid; ?>" class="embed-testimonial clearfix <?php print $classes; ?>"<?php print $attributes; ?>>
	<div class="quote">
		<?php print render($content['body']); ?>
	</div>
	<div class="client">
		<div class="author-image col-lg-1 col-md-1 col-sm-1 col-xs-1 pull-right">
			<?php print render($content['field_image']); ?>
		</div>
		<div class="author col-lg-11 col-md-11 col-sm-11 col-xs-11 pull-right">
			<?php print render($content['field_testimonial_author']); ?>
			<?php print render($content['field_testimonial_author_locatio']); ?>
			<?php print render($content['field_testimonial_authors_title']); ?>
			<?php print render($content['field_testimonial_authors_compa']); ?>
		</div>
	</div>
</div>