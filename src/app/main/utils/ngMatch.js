(function () {
    'use strict';

    angular.module('kms')
            .directive('ngMatch', function () {
                return {
                    require: 'ngModel',
                    link: function (scope, elem, attrs, ngModel) {
                        ngModel.$parsers.unshift(validate);

                        // Force-trigger the parsing pipeline.
                        scope.$watch(attrs.ngMatch, function () {
                            ngModel.$setViewValue(ngModel.$viewValue);
                        });

                        function validate(value) {
                            console.log("validate value:",value);
                            console.log("match model:", scope.$eval(attrs.ngMatch));
                            
                            var isValid = scope.$eval(attrs.ngMatch) == value;

                            ngModel.$setValidity('match', isValid);

                            return isValid ? value : undefined;
                        }
                    }
                };
            });
})();

