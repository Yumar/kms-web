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

            // Sample
            'app.sample',
            
            // KMS authentication pages
            'kms.auth'
        ]);
})();