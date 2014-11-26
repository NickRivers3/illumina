<div id="views-bootstrap-carousel-<?php print $id ?>" class="<?php print $classes ?>" <?php print $attributes ?>>
	<!-- Carousel items -->
	<div class="carousel-inner">
		<?php foreach ($rows as $key => $row): ?>
			<div class="item item-<?php print $key; if ($key === 0) print ' active';?>">
				<?php print $row ?>
			</div>
		<?php endforeach ?>
	</div>
	
	<?php if ($indicators): ?>
		<div class="indicator-container">
			<!-- Carousel indicators -->
			<ol class="carousel-indicators">
				<?php foreach ($rows as $key => $value): ?>
					<li data-target="#views-bootstrap-carousel-<?php print $id ?>" data-slide-to="<?php print $key ?>" class="<?php if ($key === 0) print 'active' ?>"></li>
				<?php endforeach ?>
			</ol>
		</div>
	<?php endif ?>

	<?php if ($navigation): ?>
		<!-- Carousel navigation -->
		<a class="carousel-control left" href="#views-bootstrap-carousel-<?php print $id ?>" data-slide="prev">
			<span class="icon-prev"></span>
		</a>
		<a class="carousel-control right" href="#views-bootstrap-carousel-<?php print $id ?>" data-slide="next">
			<span class="icon-next"></span>
		</a>
	<?php endif ?>
</div>
