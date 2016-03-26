(function ()
{
    'use strict';

    /**
     * Main module of the Fuse
     */
    angular
        .module('fuse', [

            // Core
            'app.core',

            // Navigation
            'app.navigation',

            // Quick panel
            'app.quick-panel',

            // Sample
            'app.sample',
            
            'kms'
        ]);
})();