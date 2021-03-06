angular.module('plantMasters').controller('mainCtrl', function($scope, $window, mainSearchService) {

  $window.navigator.geolocation.getCurrentPosition(function(position) {
    var location = [ position.coords.latitude, position.coords.longitude ]

    $scope.$apply(function () {
      $scope.coordinates = location;
    });
  });

   $scope.medicalUses = ["Band Aids", "Blood Thinner", "Blood Clotter", "Anti-Inflammatory", "Fever Reducer"];
   $scope.edibleUses = ["Preservative", "Fiber", "Vitamin C", "Great in Pies"];
   $scope.otherUses = ["Insecticide", "Oil", "Paint", "Wood", "Microscope", "Waterproofing"];
   $scope.zones = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
   $scope.typedUse;
   $scope.searchInputUse = function() {
       console.log($scope.typedUse);
       //send typed use to backend and return plants with that use;
   }
   $scope.medicalShow = true;
   $scope.edibleShow = true;
   $scope.otherShow = true;
   $scope.hardinessShow = true;

   //zone array to send with uses to the backend and retrieve plants
   $scope.currentHardinessZone = mainSearchService.currentHardinessZones;
   //function that manages the zones array and then invokes a function that will send zones and uses to backend
   $scope.hardinessZone = function(aNum) {
       mainSearchService.manageCurrentZones(aNum);
   }
    //function that returns true or false to toggle green color on front end
   $scope.zoneIsActive = function(zone) {
        var foundUse = false;
        for (var i = 0; i < $scope.currentHardinessZone.length; i++) {
            if ($scope.currentHardinessZone[i] === zone) {
                return true
            }
        }
        if (!foundUse) {
            return false
        }
    };
   
   //medical uses array
   $scope.medicalSelected = mainSearchService.medicalSelected;
   //function that manages medical uses array and then invokes a function that will send zones and uses to backend
   $scope.medicalSelect = function(use) {
       mainSearchService.manageMedicalSelected(use);
   }
   //function that returns true or false to toggle green color on front end
   $scope.medicalIsActive = function(use) {
       var foundUse = false;
       for (var i = 0; i < $scope.medicalSelected.length; i++) {
         if ($scope.medicalSelected[i] === use) {
             return true
         }
       }
       if (!foundUse) {
           return false
       }
   }

   //edible uses array
   $scope.edibleSelected = mainSearchService.edibleSelected;
   //function that manages edible uses array and then invokes a function that will send zones and uses to backend
   $scope.edibleSelect = function(use) {
        mainSearchService.manageEdibleSelect(use);
   }
   //function that returns true or false to toggle green color on front end
   $scope.edibleIsActive = function(use) {
       var foundUse = false;
       for (var i = 0; i < $scope.edibleSelected.length; i++) {
         if ($scope.edibleSelected[i] === use) {
             return true
         }
       }
       if (!foundUse) {
           return false
       }
   }

   //other uses array
   $scope.otherSelected = mainSearchService.otherSelected;
   //function that manages other uses array and then invokes a function that will send zones and uses to backend
   $scope.otherSelect = function(use) {
       mainSearchService.manageOtherSelect(use);
   }
   //function that returns true or false to toggle green color on front end
   $scope.otherIsActive = function(use) {
       var foundUse = false;
       for (var i = 0; i < $scope.otherSelected.length; i++) {
         if ($scope.otherSelected[i] === use) {
             return true
         }
       }
       if (!foundUse) {
           return false
       }
   }
})


