angular
  .module("PlumberApp")
  .config(Router);

Router.$inject = ["$stateProvider", "$urlRouterProvider", "$locationProvider"];

function Router($stateProvider, $urlRouterProvider, $locationProvider){

  $locationProvider.html5Mode(true);

  $stateProvider
    .state("home", {
      url: "/",
      templateUrl: "/js/views/home.html",
    })
    .state("register", {
      url: "/register",
      templateUrl: "/js/views/register.html",
      controller: "registerCtrl as register",
    })
    .state("login", {
      url: "/login",
      templateUrl: "/js/views/login.html",
      controller: "loginCtrl as login"
    })
    .state("usersIndex", {
      url: "/users",
      templateUrl: "/js/views/users/index.html",
      controller: "usersIndexCtrl as usersIndex",
    })
    .state("usersShow", {
      url: "/users/:id",
      templateUrl: "/js/views/users/show.html",
      controller: "usersShowCtrl as usersShow",
    })

      // .state('threadsShow', {
  		// 	url: "/threads/:id",
  		// 	templateUrl: "/js/views/views/show.html",
      //   controller: "ThreadsShowCtrl as threads"
  		// })
      // .state('threadsEdit', {
  		// 	url: "/threads/:id/edit",
  		// 	templateUrl: "/js/views/views/edit.html",
      //   controller: "ThreadsEditCtrl as threads"
  		// })

    ;

    $urlRouterProvider.otherwise("/");
}
