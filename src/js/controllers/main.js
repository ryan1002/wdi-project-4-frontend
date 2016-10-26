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

  // const vm = this;
  // vm.calendarView = 'month';
  // vm.viewDate = new Date();
  //
  // $http
  //   .get('http://localhost:3000/api/users/1')
  //   .then(response => {
  //     vm.events = response.data.events.map((event) => {
  //       event.startsAt = new Date(event.startsAt);
  //       event.endsAt = new Date(event.endsAt);
  //       return event;
  //     });
  //   });
  //
  //
  //


  // vm.events = [
  //   {
  //     title: 'First Event',
  //     startsAt: new Date(2016,9,24,8,30)
  //   },
  //   {
  //     title: 'First Event',
  //     startsAt: new Date(2016,9,24,13,30),
  //   }
  // ];
}
