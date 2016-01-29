(function ()
{
    'use strict';

    /**
     * Main module of the Fuse
     */
    angular
        .module('kms', [

            // Core
            'app.core',

            // Navigation
            'app.navigation',

            // Toolbar
            'app.toolbar',

            // Quick panel
            'app.quick-panel',
            
            // KMS authentication pages
            'kms.auth'
        ]);
})();