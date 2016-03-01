function init(mongoose){


	var schema = new mongoose.Schema({
		firstname: {type: String, required: true},
		lastname : {type: String, required: true},
		birthdate : {type: Date, required: true, max: Date.now},
		country : {type: String, default: 'NL'},
		ranking : {type: Number, unique:true, min:1},
		books: [{type: mongoose.Types.ObjectId, ref: 'Book'}]
	});

	/*
	TODO: Validation
	- Firstname: Verplicht, String
	- Lastname: Verplicht, String
	- Birthdate: Verplicht, Date, voor vandaag
	- Country: String, default: NL
	- Ranking: Number, unique, boven 0
	- Books: Array van book id's
	*/

	/*
	TODO: 
	- De benodigde extra validation
	- De benodigde static methods
	- De benodigde instance methods
	*/

	mongoose.model('Author', schema);
}

module.exports = init;