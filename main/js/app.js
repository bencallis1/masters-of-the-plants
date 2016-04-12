angular.module('plantMasters', ['ui.router'])

.config(function($urlRouterProvider, $stateProvider) {
    $stateProvider
        .state('main', {
            url:'/',
            controller: 'MainCtrl',
            templateUrl: 'views/main.html'
        })
        $urlRouterProvider.otherwise('/');
})
