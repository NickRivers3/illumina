<?php
/**
 * @file
 * Default theme implementation to display a single Drupal page.
 *
 * The doctype, html, head and body tags are not in this template. Instead they
 * can be found in the html.tpl.php template in this directory.
 *
 * Available variables:
 *
 * General utility variables:
 * - $base_path: The base URL path of the Drupal installation. At the very
 *   least, this will always default to /.
 * - $directory: The directory the template is located in, e.g. modules/system
 *   or themes/bartik.
 * - $is_front: TRUE if the current page is the front page.
 * - $logged_in: TRUE if the user is registered and signed in.
 * - $is_admin: TRUE if the user has permission to access administration pages.
 *
 * Site identity:
 * - $front_page: The URL of the front page. Use this instead of $base_path,
 *   when linking to the front page. This includes the language domain or
 *   prefix.
 * - $logo: The path to the logo image, as defined in theme configuration.
 * - $site_name: The name of the site, empty when display has been disabled
 *   in theme settings.
 * - $site_slogan: The slogan of the site, empty when display has been disabled
 *   in theme settings.
 *
 * Navigation:
 * - $main_menu (array): An array containing the Main menu links for the
 *   site, if they have been configured.
 * - $secondary_menu (array): An array containing the Secondary menu links for
 *   the site, if they have been configured.
 * - $breadcrumb: The breadcrumb trail for the current page.
 *
 * Page content (in order of occurrence in the default page.tpl.php):
 * - $title_prefix (array): An array containing additional output populated by
 *   modules, intended to be displayed in front of the main title tag that
 *   appears in the template.
 * - $title: The page title, for use in the actual HTML content.
 * - $title_suffix (array): An array containing additional output populated by
 *   modules, intended to be displayed after the main title tag that appears in
 *   the template.
 * - $messages: HTML for status and error messages. Should be displayed
 *   prominently.
 * - $tabs (array): Tabs linking to any sub-pages beneath the current page
 *   (e.g., the view and edit tabs when displaying a node).
 * - $action_links (array): Actions local to the page, such as 'Add menu' on the
 *   menu administration interface.
 * - $feed_icons: A string of all feed icons for the current page.
 * - $node: The node object, if there is an automatically-loaded node
 *   associated with the page, and the node ID is the second argument
 *   in the page's path (e.g. node/12345 and node/12345/revisions, but not
 *   comment/reply/12345).
 *
 * Regions:
 * - $page['help']: Dynamic help text, mostly for admin pages.
 * - $page['highlighted']: Items for the highlighted content region.
 * - $page['content']: The main content of the current page.
 * - $page['sidebar_first']: Items for the first sidebar.
 * - $page['sidebar_second']: Items for the second sidebar.
 * - $page['header']: Items for the header region.
 * - $page['footer']: Items for the footer region.
 *
 * @see bootstrap_preprocess_page()
 * @see template_preprocess()
 * @see template_preprocess_page()
 * @see bootstrap_process_page()
 * @see template_process()
 * @see html.tpl.php
 *
 * @ingroup themeable
 */
?>
<header id="header" role="banner">
	<!--<?php //if (!empty($secondary_nav)): ?>
		<div id="secondary-nav" class="col-lg-4 col-md-4 col-sm-6 col-xs-12 pull-right">
			<nav role="navigation">
				<?php //if (!empty($secondary_nav)): ?>
					<?php //print render($secondary_nav); ?>
				<?php //endif; ?>
			</nav>
		</div>
	<?php //endif; ?>-->
	<div id="header-main" class="container">
		<div id="branding" class="col-lg-5 col-md-5 col-sm-5 col-xs-12">
			<?php if ($logo): ?>
				<a class="logo pull-left" href="<?php print $front_page; ?>" title="<?php print t('Home'); ?>">
					<img src="<?php print $logo; ?>" alt="<?php print t('Home'); ?>" />
				</a>
			<?php endif; ?>
			
			<?php if (!empty($site_name)): ?>
				<a class="name pull-left" href="<?php print $front_page; ?>" title="<?php print t('Home'); ?>">
					<span class="site-name pull-left"><?php print $site_name; ?></span>
					<?php if (!empty($site_slogan)): ?>
						<span class="site-slogan pull-left">
							<?php print $site_slogan; ?>
						</span>
					<?php endif; ?>
				</a>
			<?php endif; ?>
		</div>
		<div id="primary-nav" role="banner" class="<?php print $navbar_classes; ?>">
			<!-- .btn-navbar is used as the toggle for collapsed navbar content -->
			<button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
				<span class="menu-title">Menu</span>
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
		</header> <!-- /#page-header -->

		<div class="row">
			<?php //if (!empty($breadcrumb) && !$is_front): ?>
				<?php //print $breadcrumb; ?>
			<?php //endif;?>
			
			<?php if (!empty($page['sidebar_first'])): ?>
			<aside id="primary-sidebar" class="col-lg-3 col-md-3 col-sm-3 col-xs-12" role="complementary">
				<?php print render($page['sidebar_first']); ?>
			</aside>  <!-- /#sidebar-first -->
			<?php endif; ?>

			<section id="main-content" <?php print $content_column_class; ?>>
				<a id="main-content"></a>
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

<footer class="footer">
	<div class="container">
		<div class="row flush">
			<div class="footer-branding">
				<a class="logo-bw" href="<?php print $front_page; ?>" title="<?php print t('Home'); ?>">
					<img src="<?php print $base_path; print $directory; ?>/images/logo_bw.png" alt="<?php print t('Home'); ?>" />
				</a>
				<a class="name pull-left" href="<?php print $front_page; ?>" title="<?php print t('Home'); ?>">
					<span class="site-name pull-left"><?php print $site_name; ?></span>
					<span class="site-slogan pull-left"><?php print $site_slogan; ?></span></a>
				</a>
			</div>
		</div>
		<div id="footer-left" class="col-lg-3 col-md-3 col-sm-12 col-xs-12">
			<?php print render($page['footer_left']); ?>
		</div>
		<div class="footer-center col-lg-8 col-md-8 col-sm-12 col-xs-12">
			<div id="footer-center-col-1" class="col-lg-3 col-md-3 col-sm-12 col-xs-12">
				<?php print render($page['footer_center_1']); ?>
			</div>
			<div id="ooter-center-col-2" class="col-lg-3 col-md-3 col-sm-12 col-xs-12">
				<?php print render($page['footer_center_2']); ?>
			</div>
			<div id="ooter-center-col-3" class="col-lg-3 col-md-3 col-sm-12 col-xs-12">
				<?php print render($page['footer_center_3']); ?>
			</div>
			<div id="ooter-center-col-4" class="col-lg-3 col-md-3 col-sm-12 col-xs-12">
				<?php print render($page['footer_center_4']); ?>
			</div>
		</div>
		<div id="footer-right" class="col-lg-1 col-md-1 col-sm-12 col-xs-12">
			<?php print render($page['footer_right']); ?>
		</div>
	</div>
</footer>