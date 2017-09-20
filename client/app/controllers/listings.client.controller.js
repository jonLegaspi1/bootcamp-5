angular.module('listings').controller('ListingsController', ['$scope', '$location', '$stateParams', '$state', 'Listings', 
  function($scope, $location, $stateParams, $state, Listings){
    $scope.find = function() {

      $scope.loading = true;

      Listings.getAll().then(function(response) {
        $scope.loading = false; //remove loader
        $scope.listings = response.data;
      }, function(error) {
        $scope.loading = false;
        $scope.error = 'Unable to retrieve listings!\n' + error;
      });
    };

    $scope.findOne = function() {
      debugger;
      $scope.loading = true;
      var id = $stateParams.listingId;

      Listings.read(id)
              .then(function(response) {
                $scope.listing = response.data;
                $scope.loading = false;
              }, function(error) {  
                $scope.error = 'Unable to retrieve listing with id "' + id + '"\n' + error;
                $scope.loading = false;
              });
    };  

    $scope.create = function(isValid) {
		
      $scope.error = null;

      if (!isValid) {
        $scope.$broadcast('show-errors-check-validity', 'articleForm');

        return false;
      }

      /* Create the listing object */
      var listing = {
        name: $scope.name, 
        code: $scope.code, 
        address: $scope.address
      };

      Listings.create(listing)
              .then(function(response) {
                $state.go('listings.list', { successMessage: 'Listing succesfully created!' });
              }, function(error) {
                $scope.error = 'Unable to save listing!\n' + error;
              });
    };

     $scope.update = function(isValid) {


  $scope.error = null;

  if (!isValid) {
    $scope.$broadcast('show-errors-check-validity', 'articleForm');
    return false;
  }

var id = $stateParams.listingId;

  /* update the listing object */
  var listing = {
    code: $scope.listing.code,
    name: $scope.listing.name,
    address: $scope.listing.address
  };

  Listings.update(id, listing)
          .then(function(response) {
            $state.go('listings.list', { successMessage: 'Update successful' });
          }, function(error) {
            $scope.error = 'Unable to update listing: \n' + error;
          });
};

    $scope.remove = function() {
		var id = $stateParams.listingId;
       Listings.delete(id)
              .then(function(response) {
                $state.go('listings.list', { successMessage: 'Listing succesfully deleted!' });
              }, function(error) {
                $scope.error = 'Unable to delete listing!\n' + error;
              });
    };
    if($stateParams.successMessage) {
      $scope.success = $stateParams.successMessage;
    }
    $scope.map = {
      center: {
        latitude: 29.65163059999999,
        longitude: -82.3410518
      }, 
      zoom: 14
    }
  }
]);