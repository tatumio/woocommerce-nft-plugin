<?php

namespace Hathoriel\Tatum\view\menu;

use Hathoriel\Tatum\base\UtilsProvider;

// @codeCoverageIgnoreStart
defined('ABSPATH') or die('No script kiddies please!'); // Avoid direct file request
// @codeCoverageIgnoreEnd

/**
 * Creates a WordPress backend menu page and demontrates a React component (public/ts/admin.tsx).
 *
 * @codeCoverageIgnore Example implementations gets deleted the most time after plugin creation!
 */
class Page
{
    use UtilsProvider;

    const COMPONENT_ID = TATUM_SLUG . '-component';

    /**
     * C'tor.
     */
    private function __construct() {
        // Silence is golden.
    }

    /**
     * Add new menu page.
     */
    public function admin_menu() {
        $pluginName = $this->getCore()->getPluginData()['Name'];
        add_menu_page($pluginName, $pluginName, 'manage_options', self::COMPONENT_ID, [
            $this,
            'render_component_library'
        ],
            'data:image/svg+xml;base64,' . base64_encode('<?xml version="1.0" encoding="UTF-8"?>
<svg width="16px" height="16px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>NFT Maker Icon</title>
    <g id="NFT-Maker-Icon" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <path d="M1.26689189,11 L1.26689189,7.0521978 L3.73310811,11 L5,11 L5,5 L3.73733108,5 L3.73733108,8.95604396 L1.26689189,5 L0,5 L0,11 L1.26689189,11 Z M7.26582278,11 L7.26582278,8.54807692 L9.69620253,8.54807692 L9.69620253,7.55082418 L7.26582278,7.55082418 L7.26582278,6.00137363 L10,6.00137363 L10,5 L6,5 L6,11 L7.26582278,11 Z M14.1197302,11 L14.1197302,6.00137363 L16,6.00137363 L16,5 L11,5 L11,6.00137363 L12.8549747,6.00137363 L12.8549747,11 L14.1197302,11 Z" id="NFT" fill="#000000" fill-rule="nonzero"></path>
    </g>
</svg>')
        );
    }

    /**
     * Render the content of the menu page.
     */
    public function render_component_library() {
        echo '<div id="' . self::COMPONENT_ID . '" class="wrap"></div>';
    }

    /**
     * New instance.
     */
    public static function instance() {
        return new Page();
    }
}
