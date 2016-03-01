var Book, Author;

function saveCallback(err){
	if(err){
		console.log('Fill testdata failed, reason: %s', err)
	}
};


function fillTestBooks(callback){
	var testData = [
		{title: "Chronicles of Mongoose",
			publishDate: Date.now(),
			category: "Fiction",
			chapters: [
				{title: "Chapter 1", numberOfPages: 4},
				{title: "Chapter 2", numberOfPages: 5},
				{title: "Chapter 3", numberOfPages: 8},
			]},
		{title: "Principles of Mongoose",
			publishDate: Date.now(),
			category: "Fiction",
			chapters: [
				{title: "Chapter 1", numberOfPages: 1},
				{title: "Chapter 2", numberOfPages: 2},
				{title: "Chapter 3", numberOfPages: 8},
				{title: "Chapter 4", numberOfPages: 8},
				{title: "Chapter 5", numberOfPages: 31},
			]}
		// Vul hier je testdata voor boeken in 
		// {}, {}, {}
	];

	Book.find({}, function(err, data){
		// Als er nog geen boeken zijn vullen we de testdata
		if(data.length == 0){
			console.log('Creating books testdata');
			
			testData.forEach(function(book){
				new Book(book).save(saveCallback);
			});
		} else{
			console.log('Skipping create courses testdata, allready present');
		}

		if(callback){ callback(); }
	});
};

function fillTestAuthors(callback){
	var testData = [
		// Vul hier je testdata voor authors in 
		// {}, {}, {}
		{firstname: "John",
			lastname : "Doe",
			birthdate : Date.parse("07-04-1994"),
			ranking : 1,
			books : ''
		}
	]

	Author.find({}, function(err, data){
		// Als er nog geen author zijn vullen we de testdata
		if(data.length == 0){
			console.log('Creating authors testdata');
			
			testData.forEach(function(author){
				new Author(author).save(saveCallback);
			});
		} else{
			console.log('Skipping create courses testdata, allready present');
		}

		if(callback){ callback(); }
	});
};

module.exports = function(mongoose){
	Book = mongoose.model('Book');
	Author = mongoose.model('Author');

	fillTestBooks(fillTestAuthors);
}