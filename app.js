
// THIS IS = to your db.js file also known at the vampire files
console.log("hello app");
// 1. Require your node modules
const mongoose = require('mongoose');
const db = mongoose.connection;
// 2. Require your model (and possibly your extra data source);
const Vampire = require('./models/vampire');
const VampireData = require('./populateVampires');

// 3. Connect your database and collection name
mongoose.connect('mongodb://localhost:27017/populateVampires');

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
// Vampire.collection.insertMany(VampireData,(err, data) => {
//     console.log("added provided vampire data")
//     mongoose.connection.close();
//   });

// ### Add some new vampire data
// Vampire.create({
// 	name:'Timmer-son',
// 	hair_color: 'blonde',
// 	eye_color:'blue',
// 	dob:new Date(1827, 1, 27, 1, 17),
// 	loves: ['pickles', 'candies'],
// 	location: 'Austin, Texas, US',
// 	gender: 'm',
// 	victims:300,
// });
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
//
// // have greater than 500 victims
// Vampire.find( {victims: { $gt: 500 } },
// 	(err, response) => {
// 		console.log(response);
// 	}
// );
//
// // have fewer than or equal to 150 victims
// Vampire.find( {victims: { $lte: 150 } },
// 	(err, response) => {
// 		console.log(response);
// 	}
// );
//
// // have a victim count is not equal to 210234
// Vampire.find( {victims: { $ne: 210234 } } );
//
// // have greater than 150 AND fewer than 500 victims
// Vampire.find( {victims: { $gt: 150, $lt: 500 } },
// 	(err, response) => {
// 		console.log(response);
// 	}
// );
// /////////////////////////////////////////////////
// // ### Select by exists or does not exist
//
// // have a title property
// Vampire.find( {title: { $exists: true } },
// 	(err, response) => {
// 		console.log(response);
// 	}
// );
//
// // do not have a victims property
// Vampire.find( {victims: { $exists: false } },
// 	(err, response) => {
// 		console.log(response);
// 	}
// );
//
// // have a title AND no victims
// Vampire.find( {title: { $exists: true }, victims: { $exists: false } },
// 	(err, response) => {
// 		console.log(response);
// 	}
// );
//
// // have victims AND the victims they have are greater than 1000
// Vampire.find( {victims: { $exists: true, $gt: 1000 } },
// 	(err, response) => {
// 		console.log(response);
// 	}
// );
//
//
// /////////////////////////////////////////////////
// // ### Select with OR
//
// // are from New York, New York, US or New Orleans, Louisiana, US
// Vampire.find( { location: { $in: ['New York, New York, US', 'New Orleans, Louisiana, US'] } },
// 	(err,response) => {
// 		console.log(response);
// 	}
// );
//
// // love brooding or being tragic
// Vampire.find( { loves: { $in: ['brooding', 'being tragic'] } },
// 	(err,response) => {
// 		console.log(response);
// 	}
// );
//
// // have more than 1000 victims or love marshmallows
// Vampire.find( { $or: [ { victims: { $gt: 1000 } }, { loves: { $eq: 'marshmallows' } } ] },
// 	(err,response) => {
// 		console.log(response);
// 	}
// );

// have red hair or green eyes
// Vampire.find( { $or: [ { hair_color: { $eq: 'red' } }, { eye_color: { $eq: 'green' } } ] },
// 	(err,response) => {
// 		console.log(response);
// 	}
// );

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
