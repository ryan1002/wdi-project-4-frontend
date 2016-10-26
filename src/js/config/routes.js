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
    .state("eventsNew", {
      url: "/users/:id/events/new",
      templateUrl: "/js/views/events/new.html",
      controller: "eventsNewCtrl as eventsNew",
    });

    $urlRouterProvider.otherwise("/");
}
