var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var CenterSchema   = new Schema({
    intitule: {
		type: String,
		default: '',
		//required: 'Please fill intitule',
		trim: true
	},
    acronym: {
		type: String,
		default: '',
		trim: true
	},
    codeUnite: {
		type: String,
		default: '',
		//required: 'Please fill codeUnité',
		trim: true
	},
    siteWeb: {
		type: String,
		default: '',
		//required: 'Please fill siteWeb',
		trim: true
	},
	directeur: {
		type: String,
		default: '',
		//required: 'Please fill directeur',
		trim: true
	},
	directeur_mail: {
		type: String,
		default: '',
		trim: true
	},
	phone: {
		type: String,
		default: '',
		//required: 'Please fill phone',
		trim: true
	},
	history: {
		type: String,
		default: '',
		//required: 'Please fill history',
		trim: true
	},
	creation: {
		type: String,
		default: '',
		//required: 'Please fill creation year',
		trim: true
	},
	staff_number: {
		type: Number,
		default: '',
		//required: 'Please fill staff_number',
		trim: true
	},
	permanent: {
		type: Number,
		default: '',
		//required: 'Please fill number of permanent',
		trim: true
	},
	non_permanent: {
		type: Number,
		default: '',
		//required: 'Please fill number of non_permanent',
		trim: true
	},
	staff_url: {
		type: String,
		default: '',
		trim: true
	},
	staff_url_cnrs: {
		type: String,
		default: '',
		trim: true
	},
	ecoles: [{
		ed_number: {
			type: String,
			default: '',
			trim: true
		},
		ed_name: {
			type: String,
			default: '',
			trim: true
		},
		ed_director: {
			type: String,
			default: '',
			trim: true
		},
		ed_courriel: {
			type: String,
			default: '',
			trim: true
		}
	}],
	phd_number: {
		type: String,
		default: '',
		trim: true
	},
	phd_scpo_number: {
		type: String,
		default: '',
		trim: true
	},
	thesis_number: {
		type: String,
		default: '',
		trim: true
	},
	cnrs_sections: [String],
	political_science_topic_major_or_political_science_topic_minor: {
		type: String,
		default: '',
		trim: true
	},
	topic_major: {
		type: String,
		default: '',
		trim: true
	},
	topic_minor: [String],
	subject_terms: [String],
	research_areas: {
		type: String,
		default: '',
		trim: true
	},
	contracts: {
		type: String,
		default: '',
		trim: true
	},
	workshops: {
		type: String,
		default: '',
		trim: true
	},
	partners: [String],
	evaluation: {
		type: String,
		default: '',
		trim: true
	},
	collections: {
		type: String,
		default: '',
		//required: 'Please fill collections',
		trim: true
	},
	collection_title: {
		type: String,
		default: '',
		trim: true
	},
	journal: {
		type: String,
		default: '',
		//required: 'Please fill journal',
		trim: true
	},
	journal_title: {
		type: String,
		default: '',
		trim: true
	},
	edition_other: {
		type: String,
		default: '',
		trim: true
	},
	hal: {
		type: String,
		default: '',
		//required: 'Please fill hal',
		trim: true
	},
	repository: {
		type: String,
		default: '',
		//required: 'Please fill repository',
		trim: true
	},
	oa_policy: {
		type: String,
		default: '',
		trim: true
	},
	data_repository: {
		type: String,
		default: '',
		//required: 'Please fill data_repository',
		trim: true
	},
	data_projects: {
		type: String,
		default: '',
		trim: true
	},
	libraries_network: {
		type: String,
		default: '',
		trim: true
	},
	library: {
		type: String,
		default: '',
		//required: 'Please fill library',
		trim: true
	},
	library_name: {
		type: String,
		default: '',
		trim: true
	},
	library_description: {
		type: String,
		default: '',
		trim: true
	},
	library_staff: {
		type: String,
		default: '',
		trim: true
	},
	library_web: {
		type: String,
		default: '',
		trim: true
	},
	library_policy: {
		type: String,
		default: '',
		trim: true
	},
	special_holdings: [String],
	eresources: [String],
	information_skills_training: {
		type: String,
		default: '',
		trim: true
	},
	library_network: {
		type: String,
		default: '',
		trim: true
	},
	adresses:[{
		city: {
			type: String,
			default: '',
			//required: 'Please fill Category name',
			trim: true
		},
		lat: {
			type: Number,
			default: '',
			//required: 'Please fill lattitude',
			trim: true
		},
		lng: {
			type: Number,
			default: '',
			//required: 'Please fill longitude',
			trim: true
		},
		adress: {
			type: String,
			default: '',
			//required: 'Please fill adress',
			trim: true
		}
	}],
	etablissementsRattachement: [String],

});

module.exports = mongoose.model('Center', CenterSchema);