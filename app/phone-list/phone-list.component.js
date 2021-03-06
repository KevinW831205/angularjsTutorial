angular.
  module('phonecatApp').
  component('phoneList', {  // This name is what AngularJS uses to match to the `<phone-list>` element.
    templateUrl: 'phone-list/phone-list.template.html',
    controller: function PhoneListController($http) {
      // this.phones = [
      //   {
      //     name: 'Nexus S',
      //     snippet: 'Fast just got faster with Nexus S.',
      //     age: 1
      //   }, {
      //     name: 'Motorola XOOM™ with Wi-Fi',
      //     snippet: 'The Next, Next Generation tablet.',
      //     age: 2
      //   }, {
      //     name: 'MOTOROLA XOOM™',
      //     snippet: 'The Next, Next Generation tablet.',
      //     age: 3
      //   }
      // ];
      let self = this;
      self.orderProp = 'age';

      this.variable = "abcde";

      $http.get('phones/phones.json').then(function (response) {
        self.phones = response.data
      })

    }
  });
