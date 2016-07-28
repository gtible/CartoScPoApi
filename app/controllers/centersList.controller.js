'use strict';

/* 
 * Bilateral view controller : api call and data manipulation to serve three 
 * visualisations (dualtimeline, brushing & comparison timeline). ******
 */

angular.module('apiCarto.controllers.centersList', [])
  .controller('centersList', [ "$scope", "$location", "apiService", "$http", "$q", "_",
    function ($scope, $location, apiService, $http, $q, _) {

    	apiService.getAllCenters()
    			  .then(function (result) {

    			  	console.log("result api", result);
    			  	$scope.centersList = result;
    	})

    	$scope.centerSelected = function(center) {
    		$scope.update = true;
            $scope.center = center;
            console.log("$scope.center", $scope.center);

            // description administrative
            $scope.intitule = center.intitule ;
            $scope.codeUnite = center.codeUnite ;
            $scope.directeur = center.directeur ;
            $scope.acronym = center.acronym ;
            $scope.siteWeb = center.siteWeb ;
            $scope.adresses = center.adresses ;
            $scope.directeur_mail = center.directeur_mail ;
            $scope.phone = center.phone ;

            $scope.historyInputText = center.history ;

            $scope.creation  = center.creation ;
            $scope.staff_number  = center.staff_number ;
            $scope.permanent    = center.permanent ;
            $scope.non_permanent = center.non_permanent ;  
            $scope.staff_url = center.staff_url ;
            $scope.staff_url_cnrs = center.staff_url_cnrs ;

                // ecole doctorale
            $scope.ecoles = center.ecoles ;

            $scope.phd_number = center.phd_number ;
            $scope.phd_scpo_number = center.phd_scpo_number ;
            $scope.thesis_number = center.thesis_number ;

                // thématiques de recherche
            $scope.sectionsCnrs = center.sectionsCnrs ;

            $scope.political_science_topic_major_or_political_science_topic_minor = center.political_science_topic_major_or_political_science_topic_minor ;
            $scope.topic_major = center.topic_major ;
            $scope.disciplinesSecondaires = center.disciplinesSecondaires ;
            $scope.keyWords = center.keyWords ;
            $scope.axesInputText = center.axes ;
            $scope.contratsInputText = center.contrats ;
            $scope.workshopsOutputText = center.workshops ;
            $scope.partners = center.partners ;
            $scope.evaluation = center.evaluation ;
                //publication
            $scope.collections = center.collections ;
            $scope.collection_title = center.collection_title ;
            $scope.journal = center.journal ;
            $scope.journal_title = center.journal_title ;
            $scope.edition_other = center.edition_other ;
            $scope.hal = center.hal ;
            $scope.repository = center.repository ;
            $scope.oa_policy = center.oa_policy ;
            $scope.data_repository = center.data_repository ;
            $scope.data_projects = center.data_projects ;
                // ressources
            $scope.libraries_network = center.libraries_network ;
            $scope.library = center.library ;
            $scope.library_name = center.library_name ;
            $scope.library_description = center.library_description ;
            $scope.libraryStaff = center.libraryStaff ;
            $scope.library_web = center.library_web ;
            $scope.library_policy = center.library_policy ;
            $scope.special_holdings = center.special_holdings ;
            $scope.eresources = center.eresources ;
            $scope.information_skills_training = center.information_skills_training ;
            $scope.library_network = center.library_network ;
            $scope.etablissementsRattachement = center.etablissementsRattachement;
    	}

    	$scope.closeCenter = function() {
    		$scope.update = false;
    	}

    }]);