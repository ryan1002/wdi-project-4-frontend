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
      console.log(vm.user);
      vm.events = vm.user.events.map((booking) => {
        booking.startsAt = new Date(booking.startsAt).addDays(1);
        booking.endsAt = new Date(booking.endsAt).addDays(1);
        return booking;      });
    });
  Date.prototype.addDays = function(days) {
    this.setDate(this.getDate() + parseInt(days));
    return this;
  };
}
