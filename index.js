var app = angular.module('app', []);

angular.module('app').directive('validateAndSubmit', [function () {
    return {
        restrict: 'A',
        require: '^form',
        scope: {
            action: '&validateAndSubmit'
        },
        link: function (scope, element, attrs, formCtrl) {
            element.on('click', function () {
                if (formCtrl.$valid) {
                    scope.action();
                }

                scope.$apply(function () {
                    formCtrl.$setSubmitted(true);
                });
            });
        }
    };
}]);

angular.module('app').controller('loginFormCtrl', ['$scope', function ($scope) {
    $scope.logIn = function () {
        alert('Valid!');
    };
}]);