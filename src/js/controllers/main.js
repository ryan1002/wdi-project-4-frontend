angular
  .module("PlumberApp")
  .controller("MainController", MainController);

MainController.$inject = ['$http'];
function MainController($http) {
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
