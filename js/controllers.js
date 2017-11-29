var bookModule = angular.module('bookModule', []);
bookModule.controller('BookStoreCtrl', function ($scope, $route, $routeParams, $location, BookFactory) {
    $scope.books = {};
    $scope.books = BookFactory.Init();

    var getBookMessage = function () {

        var code = $routeParams.code;
        if (code == undefined) {
            $scope.currentBook = {};
        }
        else {
            $scope.currentBook = BookFactory.GetBookByCode(code)
        }
    }

    $scope.$on('$viewContentLoaded', function () {
        var tempalteUrl = $route.current.templateUrl;
        if (tempalteUrl == "tmpls/bookEdit.html") {
            getBookMessage();
        }
    })
})