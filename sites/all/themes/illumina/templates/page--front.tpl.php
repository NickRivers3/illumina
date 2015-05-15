<?php
/**
 * @file
 * Default theme implementation to display a single Drupal page.
 *
 * @ingroup themeable
 */
?>
<header id="header" role="banner">
	<div id="header-main" class="container">
		<div id="branding" class="col-lg-5 col-md-3 col-sm-4 col-xs-12">
			<?php if ($logo): ?>
				<a class="logo pull-left" href="<?php print $front_page; ?>" title="<?php print t('Home'); ?>">
					<img src="<?php print $logo; ?>" alt="<?php print t('Home'); ?>" />
				</a>
			<?php endif; ?>
			
			<?php if (!empty($site_name)): ?>
				<a class="name pull-left" href="<?php print $front_page; ?>" title="<?php print t('Home'); ?>">
					<span class="site-name pull-left"><?php print $site_name; ?></span>
					<?php if (!empty($site_slogan)): ?>
						<span class="site-slogan pull-left"><?php print $site_slogan; ?></span>
					<?php endif; ?>
				</a>
			<?php endif; ?>
		</div>
		<div id="primary-nav" role="banner" class="<?php print $navbar_classes; ?>">
			<!-- .btn-navbar is used as the toggle for collapsed navbar content -->
			<button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
				<span class="menu-title element-invisible">Menu</span>
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
			</button>
			<?php if (!empty($primary_nav)): ?>
				<div class="navbar-collapse collapse">
					<nav role="navigation" class="pull-right">
						<?php if (!empty($primary_nav)): ?>
							<?php print render($primary_nav); ?>
						<?php endif; ?>
					</nav>
				</div>
			<?php endif; ?>
		</div>
	</div>
</header>

<div class="wrapper">
	<?php if (!empty($page['highlighted'])): ?>
		<div class="preload">
			<img src="/sites/default/files/frontpage_slide-1.jpg" alt="">
			<img src="/sites/default/files/frontpage_slide-2.jpg" alt="">
			<img src="/sites/default/files/frontpage_slide-3.jpg" alt="">
			<img src="/sites/default/files/frontpage_slide-4.jpg" alt="">
		</div><!-- /.preload -->
		<div class="highlighted-container" id="section-1">
			<div class="row flush">
				<div class="highlighted jumbotron">
					<?php print render($page['highlighted']); ?>
				</div>
			</div>
		</div>
	<?php endif; ?>

	<div class="mission-container" id="section-2">
		<div class="parallax"
			data-0="background-color:rgb(217,144,54);"
			data-center="background-color:rgb(255,255,255);"
			data-top="background-color:rgb(255,255,255);"
			data-anchor-target="#mission-content"
		>
			<div class="container">
				<div class="row flush">
					<section id="mission-content" <?php print $content_column_class; ?>
						data-bottom-top="opacity:0"
						data-center-top="opacity:1"
						data-center="opacity:1"
						data-center-bottom="opacity:1"
						data-anchor-target="#mission-content"
					>
						<a id="main-content"></a>
						<?php print render($title_prefix); ?>
						<?php if (!empty($title)): ?>
							<h1 class="page-header element-invisible"><?php print $title; ?></h1>
						<?php endif; ?>
						<?php print render($title_suffix); ?>
						<?php print $messages; ?>
						<?php if (!empty($tabs)): ?>
							<div class="nav-tabs-container">
								<?php print render($tabs); ?>
							</div>
						<?php endif; ?>
						<?php if (!empty($page['help'])): ?>
							<?php print render($page['help']); ?>
						<?php endif; ?>
						<?php if (!empty($action_links)): ?>
							<ul class="action-links"><?php print render($action_links); ?></ul>
						<?php endif; ?>
						<?php print render($page['content']); ?>
					</section>
				</div>
			</div>
		</div>
	</div>

	<?php if (!empty($page['frontpage_reasons'])): ?>
		<div class="reasons-container" id="section-3">
			<div class="parallax"
				data-center="background-position:50% 0px;"
				data-top-bottom="background-position:50% -100px"
				data-center="background-position: 0px 50%;"
				data-anchor-target="#reasons-content"
			>
				<div class="container">
					<div class="row flush">
						<section id="reasons-content" 
							data-bottom-top="opacity:0"
							data-center-top="opacity:1"
							data-center="opacity:1"
							data-center-bottom="opacity:1"
							data-anchor-target="#reasons-content"
						>
							<?php print render($page['frontpage_reasons']); ?>
						</section>
					</div>
				</div>
			</div>
		</div>
	<?php endif; ?>

	<?php if (!empty($page['frontpage_companies'])): ?>
		<div class="companies-container" id="section-4">
			<div class="parallax">
				<div class="container">
					<div class="row flush">
						<section id="companies-content">
							<?php print render($page['frontpage_companies']); ?>
						</section>
					</div>
				</div>
			</div>
		</div>
	<?php endif; ?>

	<?php if (!empty($page['frontpage_services'])): ?>
		<div class="services-container" id="section-5">
			<div class="parallax"
				data-center="background-position: 50% 0px;"
				data-bottom-top="background-position: 50% 100px;"
				data-top-bottom="background-position: 50% -100px;"
				data-anchor-target="#services-content"
			>
				<div class="container">
					<div class="row flush">
						<section id="services-content"
							data-bottom-top="opacity:0"
							data-center-top="opacity:1"
							data-center="opacity:1"
							data-center-bottom="opacity:1"
							data-anchor-target="#services-content"
						>
							<?php print render($page['frontpage_services']); ?>
						</section>
					</div>
				</div>
			</div>
		</div>
	<?php endif; ?>

	<?php if (!empty($page['frontpage_actions'])): ?>
		<div class="actions-container" id="section-6">
			<div class="parallax"
				data-center="background-position: 50% 0px;"
				data-bottom-top="background-position: 50% 100px;"
				data-top-bottom="background-position: 50% -100px;"
				data-anchor-target="#actions-content"
			>
				<div class="container">
					<div class="row flush">
						<section id="actions-content"
							data-bottom-top="opacity:0"
							ata-center-top="opacity:1"
							data-center="opacity:1"
							data-center-bottom="opacity:1"
							data-anchor-target="#actions-content"
						>
							<?php print render($page['frontpage_actions']); ?>
						</section>
					</div>
				</div>
			</div>
		</div>
	<?php endif; ?>
</div>

<footer class="footer clearfix">
	<div class="container">
		<div id="footer-left" class="col-lg-3 col-md-3 col-sm-12 col-xs-12">
			<div class="footer-branding">
				<a class="logo-bw" href="<?php print $front_page; ?>" title="<?php print t('Home'); ?>">
					<img src="<?php print $base_path; print $directory; ?>/images/logo_bw.png" alt="<?php print t('Home'); ?>" />
				</a>
				<a class="name pull-left" href="<?php print $front_page; ?>" title="<?php print t('Home'); ?>">
					<span class="site-name pull-left"><?php print $site_name; ?></span>
					<span class="site-slogan pull-left"><?php print $site_slogan; ?></span></a>
				</a>
			</div>
			<?php print render($page['footer_left']); ?>
		</div>
		<div id="footer-right" class="footer-right col-lg-8 col-md-9 col-sm-12 col-xs-12">
			<div id="footer-right-col-1" class="col-lg-3 col-md-3 col-sm-3 col-xs-12">
				<?php print render($page['footer_right_1']); ?>
			</div>
			<div id="footer-right-col-2" class="col-lg-3 col-md-3 col-sm-3 col-xs-12">
				<?php print render($page['footer_right_2']); ?>
			</div>
			<div id="footer-right-col-3" class="col-lg-3 col-md-3 col-sm-3 col-xs-12">
				<?php print render($page['footer_right_3']); ?>
			</div>
			<div id="footer-right-col-4" class="col-lg-3 col-md-3 col-sm-3 col-xs-12">
				<?php print render($page['footer_right_4']); ?>
			</div>
		</div>
	</div>
</footer>