angular
.module("PlumberApp")
.controller("usersShowCtrl", usersShowCtrl);

usersShowCtrl.$inject = ["User", "$stateParams"];
function usersShowCtrl(User, $stateParams) {
  const vm = this;

  vm.calendarView = 'month';
  vm.viewDate = new Date();

  User
    .get($stateParams)
    .$promise
    .then(data => {
      vm.user = data;
      vm.user.events.map((event) => {
        event.startsAt = new Date(event.startsAt);
        event.endsAt = new Date(event.endsAt);
        return event;
      });
    });
}
