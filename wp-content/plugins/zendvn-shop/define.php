<?php

//====================URL==========================
define('ZENDVN_SP_PLUGIN_URL'		, plugin_dir_url(__FILE__));
define('ZENDVN_SP_PUBLIC_URL'		, ZENDVN_SP_PLUGIN_URL . 'public');
define('ZENDVN_SP_CSS_URL'			, ZENDVN_SP_PUBLIC_URL . '/css');
define('ZENDVN_SP_IMAGES_URL'		, ZENDVN_SP_PUBLIC_URL . '/images');
define('ZENDVN_SP_JS_URL'			, ZENDVN_SP_PUBLIC_URL . '/js');

//====================PATH==========================
define('DS'								, DIRECTORY_SEPARATOR);
define('ZENDVN_SP_PLUGIN_PATH'			, plugin_dir_path(__FILE__));
define('ZENDVN_SP_CONFIG_PATH'			, ZENDVN_SP_PLUGIN_PATH . 'configs');
define('ZENDVN_SP_CONTROLLER_PATH'		, ZENDVN_SP_PLUGIN_PATH . 'controllers');
define('ZENDVN_SP_HELPER_PATH'			, ZENDVN_SP_PLUGIN_PATH . 'helpers');
define('ZENDVN_SP_INCLUDE_PATH'			, ZENDVN_SP_PLUGIN_PATH . 'includes');
define('ZENDVN_SP_MODELS_PATH'			, ZENDVN_SP_PLUGIN_PATH . 'models');
define('ZENDVN_SP_PUBLIC_PATH'			, ZENDVN_SP_PLUGIN_PATH . 'public');
define('ZENDVN_SP_TEMPLATE_PATH'		, ZENDVN_SP_PLUGIN_PATH . 'templates');
define('ZENDVN_SP_VALIDATE_PATH'		, ZENDVN_SP_PLUGIN_PATH . 'validates');

//====================ORTHER==========================
define('ZENDVN_SP_PRODUCT_URL'		, ZENDVN_SP_PUBLIC_URL . '/products');
define('ZENDVN_SP_PRODUCT_PATH'		, ZENDVN_SP_PUBLIC_PATH . '/products');
define('ZENDVN_SP_PREFIX'			, 'Zendvn_Sp_');
define('ZENDVN_SP_PLUGIN_NAME'		, 'ZENDVN_SP');
define('ZENDVN_SP_PLUGIN_VERSION'	, '1.0');
