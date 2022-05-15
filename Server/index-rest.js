 
const express = require('express')
const app = express()
const cors = require('cors')
const mongo = require('mongodb')
const MongoClient = require('mongodb').MongoClient
const url = "mongodb://localhost:27017/"
const dbName = 'cpsc349clubManagerDB'

app.set('port', 3000)

app.use(express.json())
app.use(cors())

// app.get('/api/students/:id', function(req, res){
// 	console.log(`${req.params.id}`)
// 	MongoClient.connect(url, function(err, conn) {
// 		if (err) console.log(err)
// 		else {
// 			const db = conn.db('campus-02')
// 			const coll = db.collection('students')
// 			const criteria = {_id: new mongo.ObjectID(req.params.id)}
// 			coll.find(criteria).toArray(function(err, result) {
// 				if (err) console.log(err)
// 				else {
// 					conn.close()
// 					// Send the data back 
// 					res.type('application/json')
// 					res.status(200)
// 					res.json(result)					
// 				}
// 			})
// 		}
// 	})
// })

// Get all clubs
app.get('/api/clubs', function(req, res){
	MongoClient.connect(url, function(err, conn) {
		if (err) console.log(err)
		else {
			const db = conn.db(dbName)
			const coll = db.collection('clubs')
			coll.find().toArray(function(err, result) {
				if (err) console.log(err)
				else {
					conn.close()
					// Send the data back 
					res.type('application/json')
					res.status(200)
					res.json(result)					
				}
			})
		}
	})	
})

// Create a new club
app.post('/api/clubs/create', function(req, res) {
	console.log(req.body)
	MongoClient.connect(url, function(err, conn) {
		if (err) console.log(err)
		else {
			const db = conn.db(dbName)
			// Prepare the JS myObj 
			const myObj = {
				clubName: req.body.clubName,
				dateCreated: new Date().toISOString().slice(0, 10),
			}
			const coll = db.collection('clubs')
			coll.createIndex({clubName:1},{unique:true}, function(err, result){
				if (err) {console.log(err)}
				else {console.log(result)}
			})
			coll.insertOne(myObj, function(err, result) {
				conn.close()
				res.type('application/json')
				if (err) {
					res.status(400)
					res.json(err)
				}
				else {
					res.status(200)
					res.json(result)					
				}
			})
		}
	})
})

// // Exercise #5 
// app.put('/api/students/:id', function(req, res){
// 	const id = req.params.id
// 	const criteria = {_id : new mongo.ObjectID(req.params.id)}
// 	const newValues = req.body
// 	MongoClient.connect(url, function(err, conn) {
// 	  if (err) throw err;
// 	  const dbo = conn.db("campus-02");
// 	  dbo.collection('students').updateOne(criteria, {$set: newValues}, function(err, result){
// 		  if (err) console.log(err)
// 		  else {
// 			  //
// 			  res.type('application/json')
// 			  res.status(200)
// 			  res.json(result)
// 		  }
// 	  })
// 	})
// })

app.listen(app.get('port'), function(){
	console.log('Express server started on http://localhost:' + app.get('port'));
	console.log(__dirname)
})
