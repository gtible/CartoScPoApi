'use strict';

/* 
 * 
 * 
 */

angular.module('apiCarto.controllers.center', [])
  .controller('center', [ "$scope", "$location", "apiService", "$http", "$q", "_",
    function ($scope, $location, apiService, $http, $q, _) {

        // config of makrdown editor display
        marked.setOptions({
            renderer: new marked.Renderer(),
            gfm: true,
            tables: true,
            breaks: false,
            pedantic: false,
            sanitize: false, // if false -> allow plain old HTML ;)
            smartLists: true,
            smartypants: false,
            highlight: function (code, lang) {
              if (lang) {
                return hljs.highlight(lang, code).value;
              } else {
                return hljs.highlightAuto(code).value;
              }
            }
          });
    	
        /*
         * Fields as a lists
         */

        // adress
        $scope.adresses = [];
        $scope.addAdress = function() {
            $scope.adresses.push({
                city:  this.city,
                lat:  this.lat,
                lng:  this.lng,
                adress: this.adress 
            });
        };

        // ecoles
        $scope.ecoles = [];
        $scope.addEcole = function() {
            $scope.ecoles.push({
                intitule:  this.intitule,
                directeur:  this.directeur,
                courriel:  this.courriel,
                numero: this.numero 
            });
        };

        // cnrs
        $scope.sectionsCnrs = [];
        $scope.addSectionCnrs = function() {
            $scope.sectionsCnrs.push({section: this.section});
            console.log("$scope.sectionsCnrs", $scope.sectionsCnrs);
        };

        // disciplines secondaires
        $scope.disciplinesSecondaires = [];
        $scope.addDisciplinesSecondaires = function() {
            $scope.disciplinesSecondaires.push({discipline: this.discipline});
        };
        
        // établissement de rattachement
        $scope.etablissementsRattachements = [];
        $scope.addEtablissement = function() {
            $scope.etablissementsRattachements.push({etablissement: this.etablissement});
        };

        // mots-clés
        $scope.keyWords = [];
        $scope.addKeyWord = function() {
            $scope.keyWords.push({keyWord: this.keyWord});
        };

        // partners
        $scope.partners = [];
        $scope.addPartner = function() {
            $scope.partners.push({partner: this.partner});
        };

        //personnes ressources
        $scope.libraryStaff = [];
        $scope.addLibraryStaff = function() {
            $scope.libraryStaff.push({staff: this.staff});
        };

        // special_holdings
        $scope.specialHoldings = [];
        $scope.addSpecialHoldings = function() {
            $scope.specialHoldings.push({holding: this.holding});
        };

        // eresources
        $scope.eresources = [];
        $scope.addEresources = function() {
            $scope.eresources.push({eressource: this.eressource});
            console.log("$scope.eresources", $scope.eresources);
        };

        // information_skills_training
        $scope.informationSkillsTraining = [];
        $scope.addInformationSkillsTraining = function() {
            $scope.informationSkillsTraining.push({skill: this.skill});
            console.log("$scope.InformationSkillsTraining", $scope.InformationSkillsTraining);
        };

        // library_network
         $scope.libraryNetwork = [];
        $scope.addLibraryNetwork = function() {
            $scope.libraryNetwork.push({library: this.library});
            console.log("$scope.libraryNetwork", $scope.libraryNetwork);
        };

        /*
         * Fields as markdown
         */

        var markdown = this;  // alias for this, so we can access it in $scope.$watch

        this.historyInputText = '';
        this.axesInputText = '';
        this.contratsInputText = '';
        this.workshopsInputText = '';
        this.journalTitleInputText = '';
        this.editionOtherInputText = '';
        this.libraryWebInputText = '';
       
        $scope.$watch('historyInputText', function(current, original) {
            $scope.historyOutputText = marked(current);
        });

        $scope.$watch('axesInputText', function(current, original) {
            $scope.axesOutputText = marked(current);
        });

        $scope.$watch('contratsInputText', function(current, original) {
            $scope.contratsOutputText = marked(current);
        });

        $scope.$watch('workshopsInputText', function(current, original) {
            $scope.workshopsOutputText = marked(current);
        });

        $scope.$watch('journalTitleInputText', function(current, original) {
            $scope.journalTitleOutputText = marked(current);
        });

        $scope.$watch('editionOtherInputText', function(current, original) {
            $scope.editionOtherOutputText = marked(current);
        });

        // $scope.$watch('libraryWebInputText', function(current, original) {
        //     $scope.ibraryWebOutputText = marked(current);
        // });

        /*
         * api interactions
         */

        $scope.create = function() {
            console.log('adresses', $scope.adresses);
            _.forEach($scope.adresses, function(a) {
                delete a['$$hashKey'];
            });

            var params = { 
                // description administrative
                intitule: this.intitule,
                codeUnite: this.codeUnite,
                directeur: this.directeur,
                acronym: this.acronym,
                siteWeb: this.siteWeb,
                adresses: $scope.adresses,
                directeur_mail: this.directeur_mail,
                phone: this.phone,

                history: $scope.historyOutputText,

                creation: this.creation ,
                staff_number: this.staff_number ,
                permanent: this.permanent   ,
                non_permanent: this.non_permanent,  
                staff_url: this.staff_url,
                staff_url_cnrs: this.staff_url_cnrs,

                // ecole doctorale
                ecoles: $scope.ecoles,

                phd_number: this.phd_number,
                phd_scpo_number: this.phd_scpo_number,
                thesis_number: this.thesis_number,

                // thématiques de recherche
                cnrs_sections: $scope.sectionsCnrs,

                political_science_topic_major_or_political_science_topic_minor: this.political_science_topic_major_or_political_science_topic_minor,
                topic_major: this.topic_major,
                topic_minor: $scope.disciplinesSecondaires,
                subject_terms: $scope.keyWords,
                research_areas: $scope.axesOutputText,
                contracts: $scope.contratsOutputText,
                workshops: $scope.workshopsOutputText,
                partners: $scope.partners,
                evaluation: this.evaluation,
                //publication
                collections: this.collections,
                collection_title: this.collection_title,
                journal  : this.journal,
                journal_title: this.journal_title,
                edition_other: this.edition_other,
                hal: this.hal,
                repository: this.repository,
                oa_policy: this.oa_policy,
                data_repository  : this.data_repository,
                data_projects: this.data_projects,
                // ressources
                libraries_network: this.libraries_network,
                library: this.library,
                library_name: this.library_name,
                library_description: this.library_description,
                library_staff: $scope.libraryStaff,
                library_web: this.library_web,
                library_policy: this.library_policy,
                special_holdings: this.special_holdings,
                eresources: $scope.eresources,
                information_skills_training: this.information_skills_training,
                library_network: this.library_network,
                etablissementsRattachement: $scope.etablissementsRattachement
            };

            params = JSON.stringify(params);
            console.log("params", params);
            var deferred = $q.defer();
            var serviceUrl = 'http://localhost:8080/api/centers'
            $http({
              method: 'POST',
              url: serviceUrl,
              data: params,
              headers: {
                   'Content-Type': 'application/json'
              }
            }).success(function(data, res, err){
                console.log("data", data);
                console.log("res", res);
                console.log("err", err);
                deferred.resolve(data);
            }).error(function(errorResponse){
                console.log("errorResponse", errorResponse);
                deferred.reject("Error 500 : An error occured while fetching data");
                //$scope.error = errorResponse.data.message;
            });
    	}

        $scope.update = function() {
            // DELETE useless key in each object 
            _.forEach($scope.adresses, function(a) {
                delete a['$$hashKey'];
            });

            var params = { 
                intitule: this.intitule,
                codeUnite: this.codeUnite,
                directeur: this.directeur,
                acronym: this.acronym,
                siteWeb: this.siteWeb,
                adresses: $scope.adresses
            };

            params = JSON.stringify(params);
            console.log("params", params);
            var deferred = $q.defer();
            var serviceUrl = 'http://localhost:8080/api/centers/:center_id'
            $http({
              method: 'PUT',
              url: serviceUrl,
              data: params,
              headers: {
                   'Content-Type': 'application/json'
              }
            }).success(function(data, res, err){
                console.log("data", data);
                console.log("res", res);
                console.log("err", err);
                deferred.resolve(data);
            }).error(function(errorResponse){
                console.log("errorResponse", errorResponse);
                deferred.reject("Error 500 : An error occured while fetching data");
                $scope.error = errorResponse.data.message;
            });
        }

        
    }
]);