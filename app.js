
// THIS IS = to your db.js file

// 1. Require your node modules
const mongoose = require('mongoose');
const db = mongoose.connection;
// 2. Require your model (and possibly your extra data source);
const Vampire = requre('./vampire');
const VampireData = require('./populateVampires');

// 3. Connect your database and collection name
mongoose.connect('mongodb://localhost:27017/article');



// 4. Open your mongoose connection
db.on('error', (err) => {
  console.log(err, ' this is the error message')
});

db.on('connected', () => {
  console.log('mongoose is connected to mongodb')
});
/////////////////////////////////////////////////
//Write your answers to add, query, update, remove, and Hungry for More below.

// Note: Remember to close your connection after you add, update, remove from your database
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// INSERT USING MONGOOSE
// ### Add the vampire data that we gave you
Vampire.collection.insertMany(VampireData,(err, data) => {
    console.log("added provided vampire data")
    mongoose.connection.close();
  });

// ### Add some new vampire data
Vampire.create({
	name:'Jessamyn',
	hair_color: 'red',
	eye_color:'blue',
	dob:new Date(1827, 1, 27, 1, 17),
	loves: ['italian greyhounds', 'snuggles'],
	location: 'Austin, Texas, US',
	gender: 'f',
	victims:3,
});
/////////////////////////////////////////////////
// ## QUERYING
/////////////////////////////////////////////////
// ### Select by comparison

// Find all the vampires that that are females
Vampire.find( {gender: { $eq: 'f' } },
	(err, response) => {
		console.log(response);
	}
);

// have greater than 500 victims
Vampire.find( {victims: { $gt: 500 } },
	(err, response) => {
		console.log(response);
	}
);

// have fewer than or equal to 150 victims
Vampire.find( {victims: { $lte: 150 } },
	(err, response) => {
		console.log(response);
	}
);

// have a victim count is not equal to 210234
Vampire.find( {victims: { $ne: 210234 } } );

// have greater than 150 AND fewer than 500 victims
Vampire.find( {victims: { $gt: 150, $lt: 500 } },
	(err, response) => {
		console.log(response);
	}
);
/////////////////////////////////////////////////
// ### Select by exists or does not exist

/////////////////////////////////////////////////
// ### Select with OR

/////////////////////////////////////////////////
//### Select objects that match one of several values

/////////////////////////////////////////////////
//### Negative Selection

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## REPLACE

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## UPDATE

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## REMOVE

/////////////////////////////////////////////////
/////////////////////////////////////////////////

// ## HUNGRY FOR MORE
/////////////////////////////////////////////////
//## Select objects that match one of several values

/////////////////////////////////////////////////
//## Negative Selection

/////////////////////////////////////////////////
