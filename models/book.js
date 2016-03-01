function init(mongoose){
	console.log('Iniializing books schema');

	var schema = new mongoose.Schema({
		title: {type: String, required: true},
		publishDate: {type: Date, required: true, max: Date.now},
		category: {type: String, required:true},
		chapters: [{
			title: {type: String},
			numberOfPages: {type: Number}
		}]
	}, {
		toObject: {
			virtuals: true
		},
		toJSON: {
			virtuals: true
		}
	});

	schema.virtual('totalNumberOfPages').get(function () {
		var totalNumberOfPages = 0;
		this.chapters.forEach(function(chapter){
			totalNumberOfPages += chapter.numberOfPages;
		});
		return totalNumberOfPages;
	});

	/*
	TODO: Validation
	- Title: Verplicht, String
	- PublishDate: Verplicht, Date, voor vandaag
	- Category: Verplicht, String
	- Chapters: Array van JSNON { title, numberOfPages }
	*/

	/*
	TODO: 
	- De benodigde virtuals (Onder andere totalNumberOfPages, opgebouwd uit numberOfPages van chapters)
	- De benodigde extra validation
	- De benodigde static methods
	- De benodigde instance methods
	*/
	mongoose.model('Book', schema);
}

module.exports = init;