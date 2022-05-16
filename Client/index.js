const express = require('express')
const app = express()
app.set('port', 4020)

app.use(express.static(__dirname + '/app'))
app.use(express.static(__dirname + '/app/tests'))
app.use(express.static(__dirname + '/app/classes'))

app.listen(app.get('port'), function(){
    console.log('Express server started on http://localhost:' + app.get('port'))
    console.log(__dirname)
})