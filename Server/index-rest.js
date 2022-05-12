 
const express = require('express')
const app = express()
const cors = require('cors')
// const mongo = require('mongodb')
// const MongoClient = require('mongodb').MongoClient
// const url = "mongodb://localhost:27017/"

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

// // Process the Search Student service request 
// app.get('/api/students', function(req, res){
// 	console.log(`${req.query.firstName}`)
// 	console.log(`${req.query.lastName}`)

// 	if (Object.keys(req.query).length == 0) {	// find all the documents
// 		MongoClient.connect(url, function(err, conn) {
// 			if (err) console.log(err)
// 			else {
// 				const db = conn.db('campus-02')
// 				const coll = db.collection('students')
// 				coll.find({}).toArray(function(err, result) {
// 					if (err) console.log(err)
// 					else {
// 						conn.close()
// 						// Send the data back 
// 						res.type('application/json')
// 						res.status(200)
// 						res.json(result)					
// 					}
// 				})
// 			}
// 		})	
// 	}
// })

// app.post('/api/students', function(req, res) {
// 	console.log(req.body)
// 	MongoClient.connect(url, function(err, conn) {
// 		if (err) console.log(err)
// 		else {
// 			const db = conn.db('campus-02')
// 			// Prepare the JS myObj 
// 			const myObj = new Object()
// 			myObj.firstName = req.body.firstName
// 			myObj.lastName = req.body.lastName
// 			const dt_flds = req.body.dob.split('-')
// 			const yyyy = dt_flds[0]
// 			const mm = dt_flds[1]
// 			const dd = dt_flds[2] 
// 			myObj.dob = new Date(yyyy, mm, dd)
// 			const coll = db.collection('students')
// 			coll.insertOne(myObj, function(err, result) {
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
