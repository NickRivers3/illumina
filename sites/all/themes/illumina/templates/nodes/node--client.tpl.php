<?php

/**
 * @file
 * Default theme implementation to display a node.
 *
*/
?>
<div id="node-<?php print $node->nid; ?>" class="<?php print $classes; ?> clearfix"<?php print $attributes; ?>>
	<div class="content"<?php print $content_attributes; ?>>
		<?php
			// We hide the comments and links now so that we can render them later.
			hide($content['comments']);
			hide($content['links']);
		?>
		<div class="portfolio-header row">
			<div class="logo-container col-lg-3 col-md-3 col-sm-6 col-xs-6">
				<h2 class="element-invisible"><?php print render($title); ?></h2>
				<div class="logo"><?php print render($content['field_client_logo']); ?></div>
			</div>
		</div>
		<div class="portfolio-content row">
			<?php print render($content['field_portfolio_project']); ?>
		</div>
	</div>
	<?php print render($content['links']); ?>
	<?php print render($content['comments']); ?>
	<div class="modal fade" id="image-modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
		<div class="modal-dialog modal-lg">
			<div class="modal-content">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
					<h4 class="modal-title" id="myModalLabel"></h4>
				</div>
				<div class="modal-body"><img src="#"/></div>
				<div class="modal-footer">
					<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
				</div>
			</div>
		</div>
	</div>
</div>
