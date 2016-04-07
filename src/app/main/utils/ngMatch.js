(function () {
    'use strict';

    angular.module('kms')
            .directive('ngMatch', function () {
                return {
                    require: 'ngModel',
                    link: function (scope, elem, attrs, ngModel) {
                        ngModel.$parsers.unshift(validate);

                        // Force-trigger the parsing pipeline.
                        scope.$watch(attrs.ngModel, function () {
                            ngModel.$setViewValue(ngModel.$viewValue);
                        });

                        function validate(value) {
                            var isValid = scope.$eval(attrs.ngModel) == value;

                            ngModel.$setValidity('match', isValid);

                            return isValid ? value : undefined;
                        }
                    }
                };
            });
})();

