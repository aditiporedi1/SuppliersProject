'use strict';

angular.module("suppliersApp.controllers", [])
	.controller("EventsCtrl", function($rootScope, $scope, $http){
        $scope.eventsHealthArr = [];

        $scope.sourceList = [
            {
                name: "New Co Ltd",
                suboptions: [
                    { name: "Small Wongle" },
                    { name: "Large Wongle" },
                    { name: "Super Wongle" }
                ]
            },
            {
                name: "Old Co Ltd",
                suboptions: [
                    { name: "Mini Wongle"},
                    { name: "Small Wongle"},
                    { name: "Large Wongle"},
                    {name: "Super Wongle" }
                ]
            }
        ];
        $scope.supplerArr = {};
        $scope.products = {};
        $scope.price = {};
        $scope.selectedSource = "";
        $scope.selectedItem = "";
        $scope.dataDisplay = {};


       $scope._getPriceData = function() {
           $http.get('js/lib/databackend.json').success(function (data){
               $scope.suppliers = data;

               console.log(data);
               angular.forEach($scope.suppliers, function(arr){
                   angular.forEach(arr, function(itemsArr){
                       console.log("here",itemsArr.supplier);
                       console.log("dropdown 1",$scope.selectedSource.name);


                       if($scope.selectedSource.name == itemsArr.supplier){

                           $scope.dataDisplay.supp = itemsArr.supplier;

                           angular.forEach(itemsArr.product, function(item) {
                               console.log("Name",item.name);

                               if($scope.selectedItem.name == item.name){
                                   $scope.dataDisplay.prod = item.name;
                                   $scope.dataDisplay.price = item.price;

                                   console.log("Name and Price",item.name, item.price);
                               }

                           })
                       }
                   })
               })
           });


        }

        //_getPriceData()

    });