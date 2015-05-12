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

<?php if (!empty($page['highlighted'])): ?>
	<div class="highlighted-container">
		<div class="row flush">
			<div class="highlighted jumbotron"><?php print render($page['highlighted']); ?></div>
		</div>
	</div>
<?php endif; ?>

<div class="main-container">
	<div class="container">
		
		<?php if (!empty($page['header'])): ?>
			<header role="banner" id="page-header">
				<?php print render($page['header']); ?>
				<?php if (!empty($page['navigation'])): ?>
					<div class="page-nav">
						<nav role="navigation">
							<?php if (!empty($page['navigation'])): ?>
								<?php print render($page['navigation']); ?>
							<?php endif; ?>
						</nav>
					</div>
				<?php endif; ?>
			</header><!-- /#page-header -->
		<?php endif; ?>

		<div id="main" class="row <?php if (!empty($page['sidebar_first'])): ?>row-offcanvas row-offcanvas-left<?php endif;?>">
			<?php //if (!empty($breadcrumb) && !$is_front): ?>
				<?php //print $breadcrumb; ?>
			<?php //endif;?>
			
			<?php if (!empty($page['sidebar_first'])): ?>
				<aside id="primary-sidebar" class="col-lg-3 col-md-3 col-sm-3 col-xs-12 sidebar-offcanvas" role="complementary">
					<?php print render($page['sidebar_first']); ?>
				</aside>  <!-- /#sidebar-first -->
			<?php endif; ?>

			<section id="main-content" <?php print $content_column_class; ?>>
				<a id="main-content"></a>
				<?php if (!empty($page['sidebar_first'])): ?>
					<p class="toggle-sidebar visible-xs">
						<button type="button" class="btn btn-primary btn-xs" data-toggle="offcanvas">Sidebar</button>
					</p>
				<?php endif; ?>
				<?php print render($title_prefix); ?>
				<?php if (!empty($title)): ?>
					<h1 class="page-header"><?php print $title; ?></h1>
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

			<?php if (!empty($page['sidebar_second'])): ?>
				<aside id="secondary-sidebar" class="col-sm-3" role="complementary">
					<?php print render($page['sidebar_second']); ?>
				</aside>  <!-- /#sidebar-second -->
			<?php endif; ?>
		</div>
	</div>
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