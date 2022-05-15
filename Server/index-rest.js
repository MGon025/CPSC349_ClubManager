 
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

// Get club(s)
app.get('/api/clubs', function(req, res){
	MongoClient.connect(url, function(err, conn) {
		if (err) console.log(err)
		else {
			const db = conn.db(dbName)
			const coll = db.collection('clubs')

			// find specific club name if given
			const q = req.query.clubName ? {clubName: req.query.clubName} : {}
			coll.find(q).toArray(function(err, result) {
				if (err) console.log(err)
				else {
					conn.close()
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
			const coll = db.collection('clubs')
			const newClub = req.body

			// make sure club name is unique
			coll.createIndex({clubName:1}, {unique:true}, function(err, result){
				if (err) {console.log(err)}
				else {console.log(result)}
			})

			coll.insertOne(newClub, function(err, result) {
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

app.listen(app.get('port'), function(){
	console.log('Express server started on http://localhost:' + app.get('port'));
	console.log(__dirname)
})
