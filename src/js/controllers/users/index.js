angular
.module("PlumberApp")
.controller("usersIndexCtrl", usersIndexCtrl);

usersIndexCtrl.$inject = ['User'];
function usersIndexCtrl(User) {
  const vm = this;

  vm.users = User.query();
}
