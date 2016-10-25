angular
.module("PlumberApp")
.controller("usersIndexCtrl", usersIndexCtrl);

usersIndexCtrl.$inject = ['$http'];
function usersIndexCtrl($http) {
  const vm = this;
  vm.ryan = "Ryan";
}
