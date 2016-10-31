angular
.module("PlumberApp")
.controller("MainController", MainController);

MainController.$inject = ['$http', 'CurrentUserService', '$rootScope', '$state'];
function MainController($http, CurrentUserService, $rootScope, $state) {
  const vm = this;
  vm.user = CurrentUserService.getUser();

  $rootScope.$on("loggedIn", () => {
    vm.user = CurrentUserService.getUser();
    $state.go("usersIndex");
  });

  vm.logout = () => {
    event.preventDefault();
    CurrentUserService.clearUser();
  };

  $rootScope.$on("loggedOut", () => {
    vm.user = null;
    $state.go("home");
  });
}
