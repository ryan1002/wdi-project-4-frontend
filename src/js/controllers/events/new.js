angular
.module("PlumberApp")
.controller("eventsNewCtrl", eventsNewCtrl);

eventsNewCtrl.$inject = ['$http', '$stateParams', '$state', 'API', 'CurrentUserService'];
function eventsNewCtrl($http, $stateParams, $state, API, CurrentUserService) {
  const vm = this;

  vm.submit = () => {
    $http
      .post(`${API}/users/${$stateParams.id}/events`, vm.event)
      .then(data => {
        console.log(data);
        $state.go("usersShow", $stateParams);
      });
  };

}
