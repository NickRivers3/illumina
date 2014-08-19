<?php
/**
* @file
* template.php
*/

/**
* illumina_preprocess_page()
* Global
*/
function illumina_preprocess_page(&$variables, $hook) {
	
	// Add template suggestions for node type.
	if (isset($variables['node'])) {
		$variables['theme_hook_suggestions'][] = 'page__'. $variables['node']->type;
	}
	
	// Modify Content class depending on displayed sidebars.
	if (!empty($variables['page']['sidebar_first']) && !empty($variables['page']['sidebar_second'])) {
		$variables['content_column_class'] = ' class="col-sm-6"';
	}
	elseif (!empty($variables['page']['sidebar_first'])) {
		$variables['content_column_class'] = ' class="col-sm-9"';
	}
	elseif (!empty($variables['page']['sidebar_second'])) {
		$variables['content_column_class'] = ' class="col-sm-9"';
	}
	else {
		$variables['content_column_class'] = ' class="col-sm-12"';
	}
}

/**
* illumina_menu_link()
* Global
*/
function illumina_menu_link(array $variables){
	
	// Remove caret from dropdown menu parent.
	$element = $variables['element'];
	$sub_menu = '';
	if ($element['#below']) {
		// Prevent dropdown functions from being added to management menu so it
		// does not affect the navbar module.
		if (($element['#original_link']['menu_name'] == 'management') && (module_exists('navbar'))) {
			$sub_menu = drupal_render($element['#below']);
		}
		elseif ((!empty($element['#original_link']['depth'])) && ($element['#original_link']['depth'] == 1)) {
			// Add our own wrapper.
			unset($element['#below']['#theme_wrappers']);
			$sub_menu = '<ul class="dropdown-menu">' . drupal_render($element['#below']) . '</ul>';
			// Generate as standard dropdown.
			// $element['#title'] .= ' <span class="caret"></span>';
			$element['#attributes']['class'][] = 'dropdown';
			$element['#localized_options']['html'] = TRUE;

			// Set dropdown trigger element to # to prevent inadvertant page loading
			// when a submenu link is clicked.
			$element['#localized_options']['attributes']['data-target'] = '#';
			$element['#localized_options']['attributes']['class'][] = 'dropdown-toggle';
			$element['#localized_options']['attributes']['data-toggle'] = 'dropdown';
		}
	}
	
	// On primary navigation menu, class 'active' is not set on active menu item.
	// @see https://drupal.org/node/1896674
	if (($element['#href'] == $_GET['q'] || ($element['#href'] == '<front>' && drupal_is_front_page())) && (empty($element['#localized_options']['language']))) {
		$element['#attributes']['class'][] = 'active';
	}
	$output = l($element['#title'], $element['#href'], $element['#localized_options']);
	return '<li' . drupal_attributes($element['#attributes']) . '>' . $output . $sub_menu . "</li>\n";
}

/**
 * illumina_menu_link__main_menu()
 * Main Menu
*/
function illumina_menu_link__main_menu(array $variables){
	
	// Prevent dropdown menu's parent a from being clickable.
	$element = $variables['element'];
	$sub_menu = '';

	if ($element['#below']) {
		// Prevent dropdown functions from being added to management menu so it
		// does not affect the navbar module.
		if (($element['#original_link']['menu_name'] == 'management') && (module_exists('navbar'))) {
			$sub_menu = drupal_render($element['#below']);
		}
		elseif ((!empty($element['#original_link']['depth'])) && ($element['#original_link']['depth'] == 1)) {
			// Add our own wrapper.
			unset($element['#below']['#theme_wrappers']);
			$sub_menu = '<ul class="dropdown-menu">' . drupal_render($element['#below']) . '</ul>';
			// Generate as standard dropdown.
			// $element['#title'] .= ' <span class="caret"></span>';
			$element['#attributes']['class'][] = 'dropdown';
			$element['#localized_options']['html'] = TRUE;

			// Set dropdown trigger element to # to prevent inadvertant page loading
			// when a submenu link is clicked.
			//$element['#localized_options']['attributes']['data-target'] = '#';
			$element['#localized_options']['attributes']['class'][] = 'dropdown-toggle';
			//$element['#localized_options']['attributes']['data-toggle'] = 'dropdown';
		}
	}
	// Add unique ids to top level li items
	if ($element['#original_link']['depth'] == 1) {
		// Add IDs to links
		static $link_id = 0;
		$element['#attributes']['class'][] = 'link-'. (++$link_id);
	}
	
	// On primary navigation menu, class 'active' is not set on active menu item.
	// @see https://drupal.org/node/1896674
	if (($element['#href'] == $_GET['q'] || ($element['#href'] == '<front>' && drupal_is_front_page())) && (empty($element['#localized_options']['language']))) {
		$element['#attributes']['class'][] = 'active';
	}
	
	$output = l($element['#title'], $element['#href'], $element['#localized_options']);
	return '<li' . drupal_attributes($element['#attributes']) . '>' . $output . $sub_menu . "</li>\n";
}


/** 
 * illumina_breadcrumb
 * default
**/
function illumina_breadcrumb($breadcrumb) {
	$links = array();
	$path = '';
	$arguments = explode('/', request_uri());
	foreach($arguments as $key => $value) {
		if(empty($value)) {
			unset($arguments[$key]);
		}
	}
	$arguments = array_values($arguments);
	$links[] = l(t('Home'), '<front>');
	if(!empty($arguments)) {
		foreach ($arguments as $key => $value) {
			if ($key == (count($arguments) - 1)) {
				//$links[] = truncate_utf8(drupal_get_title(), 90, TRUE, TRUE);
				$links[] = drupal_get_title();
			} else {
				if (!empty($path)) {
					$path .= '/'. $value;
				} else {
					$path .= $value;
				}
				$links[] = l(ucfirst(str_replace('-', ' ', $value)), $path);
			}
		}
	}
	drupal_set_breadcrumb($links);
	$breadcrumb = drupal_get_breadcrumb();
	$output = theme('item_list', array(
		'attributes' => array(
			'class' => array('breadcrumb'),
		),
		'items' => $breadcrumb,
		'type' => 'ol',
    ));
	return $output;
}

/** 
 * illumina_preprocess_node
 * change date format
**/
function illumina_preprocess_node(&$variables, $hook) {
	switch($variables['type']) {
		case 'news_article':
			if (variable_get('node_submitted_' . $variables['node']->type, TRUE)) {
				$variables['submitted'] = date("l, F j, Y", $variables['created']);
			}
		break;
		default:
			if (variable_get('node_submitted_' . $variables['node']->type, TRUE)) {
				$variables['submitted'] = t('Submitted by !username on !datetime', array('!username' => $variables['name'], '!datetime' => date("l, F j, Y", $variables['created'])));
			}
	}
}