var request = require('request'),
	fs = require('fs'),
	_ = require('lodash');

var result = require('./data/data.json');
// take all data from csv 

var data = [],
	keyWords = [],
	sections = [],
	etablissements = [],
	collaborateurs = [],
	hal = []
	disciplinePrinciaple = [];
	allCentersClass = [];

_.forEach(result.allCenters, function(tab, center) {
	var center = {};
	_.forEach(tab, function(onglet, tabName) {
 		_.forEach(onglet, function(content, prop) {

    		if (prop === "Sections CNRS" || 
    			prop === "Disciplines secondaires selon l\'annuaire du MENESR" ||
    			prop === "Mots-clés sujet selon l\'annuaire du MENESR" ||
    			prop === "Collaborations / réseaux" ||
    			prop === "Politique documentaire" ||
    			prop === "Ressources numériques à disposition des chercheurs" ||
    			prop === "Offre de formations documentaires" ||
    			prop === "Etablissements de rattachement") {
    			center[prop] = content.replace(/\n/g, '').split(';')
    		}
    		else
    			center[prop] = content;

    		if (prop === "Mots-clés sujet selon l\'annuaire du MENESR") {
    			var temp = content.replace(/\n/g, '');
    				temp = content.replace(/#/g, '');

    				temp = temp.toLowerCase();
    				temp = content.split(';');

    			_.forEach(temp, function(d) {
    				d = d.replace(/ /g, '_');
    				console.log("d", d);
    				keyWords.push({ word: d, center: center['Intitulé']});
    				allCentersClass.push({ class: d, center: center['Intitulé']});
    			});
    		}

    		if (prop === "Sections CNRS") {
    			var temp = content.replace(/\n/g, '');
    			console.log("temp", temp);
    				temp = content.split(';');

    			_.forEach(temp, function(d) {
    				d = d.replace(/ /g, '_');
    				console.log("d", d);
    				sections.push({ section: d, center: center['Intitulé']});
    				allCentersClass.push({ class: d, center: center['Intitulé']});
    			});
    		}

    		if (prop === "Publications versées dans HAL (oui/non)") {
    			var temp = content.replace(/\n/g, '');

    			hal.push({ type: temp, center: center['Intitulé']});
    			allCentersClass.push({ class: temp, center: center['Intitulé']});
    		}

    		if (prop == "Discipline principale selon l'annuaire du MENESR") {
    			var temp = content.replace(/\n/g, '');

    			temp = temp.replace(/ /g, '_');
    			disciplinePrinciaple.push({ discipline: temp, center: center['Intitulé']});
    			allCentersClass.push({ class: temp, center: center['Intitulé']});
    		}

  		});
	});
	data.push(center);
});

// set all array 
// keyWords = _.groupBy(keyWords, 'word');
// sections = _.groupBy(sections, 'section');
// hal = _.groupBy(hal, 'type');
// disciplinePrinciaple = _.groupBy(disciplinePrinciaple, 'discipline');
allCentersClass = _.groupBy(allCentersClass, 'center');

//Create object with allCenters, allWords & index
var dataK = {};
// dataK.keyWords = keyWords;
// dataK.sections = sections;
// dataK.hal = hal; 
// dataK.disciplinePrinciaple = disciplinePrinciaple; 
dataK.allCentersClass = allCentersClass; 


dataK = JSON.stringify(dataK);
fs.writeFile('./data/dataKeyWords.json', dataK);

// ToDO
// * gérer les deux champs "Site Web"
// _.forEach(data, function(d, i) {
// 	console.log("i -->  ", i , " centre : ", d['Intitulé'])
// 	request.post({
// 			url: 'http://localhost:8080/api/centers',
// 			form: {
// 				intitule: d['Intitulé'], 
//         		acronym: d['Sigle ou acronyme'], 
//        			codeUnite: d['Code Unité'],
//         		directeur: d['Directeur'], 
//         		siteWeb: d['Site Web'],
//         		adresses: d.adresses,
// 				directeur_mail: d['Courriel Direction'],
// 				phone: d['Téléphone'],
// 				history: d['Historique'],
// 				creation: d['Année de création'],
// 				staff_number: d['Effectif total'],
// 				permanent: d['Personnels permanents'],
// 				non_permanent: d['Personnels non permanents'] ,	
// 				staff_url: d['Lien vers la page "personnel" sur le site Web du centre'] ,
// 				staff_url_cnrs: d['Lien vers la page "personnel" du site Web du CNRS'] ,
// 				ecoles: d.ecoles,
// 				phd_number: d['Nombre de doctorants'] ,
// 				phd_scpo_number: d['Nombre de doctorants en Science politique'] ,
// 				thesis_number: d['Nombre de thèses soutenues en 2015'] ,
// 				cnrs_sections: d['Sections CNRS'] ,
// 				political_science_topic_major_or_political_science_topic_minor: d['Science politique comme discipline principale / Science politique comme discipline secondaire *selon l\'annuaire du MENESR'],
// 				topic_major: d['Discipline principale *selon l\'annuaire du MENESR'] ,
// 				topic_minor: d['Disciplines secondaires *selon l\'annuaire du MENESR'],
// 				subject_terms: d['Mots-clés sujet *selon l\'annuaire du MENESR'] ,
// 				research_areas: d['Axes de recherche'],
// 				contracts: d['Contrats de recherche'],
// 				workshops: d['Séminaires de recherche'],
// 				partners: d['Collaborations / réseaux'],
// 				evaluation: d['Evaluations'] ,
// 				collections: d['Collections auprès d\'éditeurs (oui/non)'],
// 				collection_title: d['Collections auprès d\'éditeurs : description'] ,
// 				journal: d['Revues en propre (oui/non)'] ,
// 				journal_title: d['Revues en propre : description'] ,
// 				edition_other: d['Autres activités éditoriales sur les revues (directeurs de rédaction, membres comités éditoriaux, partenariats...) Garder que directeurs?'],
// 				hal: d['Publications versées dans HAL (oui/non)'] ,
// 				repository: d['Publications versées dans un dépôt institutionnel (oui/non)'] ,
// 				oa_policy: d['Préconisations pour le dépôt en open access des publications'] ,
// 				data_repository: d['Archivage des données de la recherche (oui/non)'] ,
// 				data_projects: d['Archivage des données de la recherche : description des projets'] ,
// 				libraries_network: d['Bibliothèques utilisées'],
// 				library: d['Centre de documentation ou bibliothèque en propre (oui/non)'],
// 				library_name: d['Centre de documentation ou bibliothèque en propre : Intitulé'],
// 				library_description: d['Centre de documentation ou bibliothèque en propre : description'],
// 				library_staff: d['Personne ressource - documentaliste'] ,
// 				library_web: d['Site Web'],
// 				library_policy: d['Politique documentaire'],
// 				special_holdings: d['Niches documentaires'],
// 				eresources: d['Ressources numériques à disposition des chercheurs'],
// 				information_skills_training: d['Offre de formations documentaires'] ,
// 				library_network: d['Collaborations documentaires (Couperin, ISORE, participations aux réseaux IST...)'],
// 				etablissementsRattachement: d['Etablissements de rattachement']
// 			}
// 	})
// })