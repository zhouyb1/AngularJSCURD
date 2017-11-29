//创建并初始化模块
var BookStoreApp = angular.module('BookStoreApp', ['ngRoute', 'bookModule']);

//配置路由啊
BookStoreApp.config(function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'tmpls/bookList.html',
        controller: 'BookStoreCtrl'
    })
    .when('/bookEdit', {
        templateUrl: 'tmpls/bookEdit.html',
        controller: 'BookStoreCtrl'
    })
});

//配置数据工厂
BookStoreApp.factory('BookFactory', function () {
    var books = [
        { 'name': '诛仙','code':'z01', 'descriptrion': '玄幻鼻祖', 'author': '萧鼎', 'price': '55' },
        { 'name': '仙逆', 'code':'x02','descriptrion': '修仙系列', 'author': '耳根', 'price': '45' },
        { 'name': '长生界', 'code': 'c03', 'descriptrion': '洪荒系列', 'author': '辰东', 'price': '46' },
        { 'name': '盘龙', 'code': 'p04', 'descriptrion': '上古修真', 'author': '我吃西红柿', 'price': '50' },
        { 'name': '斗破苍穹', 'code': 'd05', 'descriptrion': '斗气世界', 'author': '天蚕土豆', 'price': '60' },
        { 'name': '斗罗大陆', 'code': 'd06', 'descriptrion': '异世大陆', 'author': '唐家三少', 'price': '42' },
        { 'name': '庆余年', 'code': 'q07', 'descriptrion': '历史架空', 'author': '猫腻', 'price': '50' }
    ]

    var factory = {};
    factory.Init = function () {
        return books;
    }

    factory.GetBookByCode = function (code) {
        var book = {};
        for (var i = 0; i < books.length; i++) {
            if (books[i].code == code) {
                book = books[i];
                break;
            }
        }
        return book;
    }
    return factory;
})

