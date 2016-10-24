angular
  .module("PlumberApp", ['mwl.calendar'])
  .controller("MainController", MainController);

function MainController() {
  const vm = this;
  vm.calendarView = 'month';
  vm.viewDate = new Date();

  vm.events = [
    {
      title: 'First Event',
      startsAt: new Date(2016,9,24,8,30)
    },
    {
      title: 'First Event',
      startsAt: new Date(2016,9,24,13,30),
    }
  ];
}
