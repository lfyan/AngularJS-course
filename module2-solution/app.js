(function () {
'use strict';

angular.module('ControllerAsApp', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

// LIST #1 - controller
ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController (ShoppingListCheckOffService) {
  var list1 = this;

  list1.items = ShoppingListCheckOffService.getToBuyItems();
  list1.message = ShoppingListCheckOffService.checkMessage();

  list1.buyItem = function (itemIndex) {
    ShoppingListCheckOffService.buyItem(itemIndex);
  };
}

// LIST #2 - controller
AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var list2 = this;

  list2.items = ShoppingListCheckOffService.getBoughtItems();
  list2.message = ShoppingListCheckOffService.checkMessage();
}


function ShoppingListCheckOffService() {
  var service = this;

  //List of pre-filled shopping items
  var toBuyItems = [
    {
      name: "Milk",
      quantity: "2"
    },
    {
      name: "Donuts",
      quantity: "200"
    },
    {
      name: "Cookies",
      quantity: "300"
    },
    {
      name: "Chocolate",
      quantity: "5"
    },
    {
      name: "Beers",
      quantity: "2"
    }
  ];
  var boughtItems = [];
  var message = ["", "Nothing bought yet."];   // message[0] for ToBuyController, message[1] for AlreadyBoughtController

  service.buyItem = function (itemIndex) {
    var tem = toBuyItems.splice(itemIndex, 1);   //remove from toBuyItems

    var item = {
      name: tem[0].name,
      quantity: tem[0].quantity
    };
    boughtItems.push(item);          //add to boughtItems

    message[1] = "";

    if (toBuyItems.length == 0)        //check if toBuyItems is empty
      message[0] = "Everything is bought!";
  }

  service.getToBuyItems = function () {
    return toBuyItems;
  };

  service.getBoughtItems = function () {
    return boughtItems;
  };

  service.checkMessage = function () {
    return message;
  };

}

})();


//looks like if bind array, will update automatically;
//but if bind a string only, will *NOT* updated automatically.
// see line 14, 15, 27, 28
