// filter的API

// var compression = require('compression')
// var express = require('express')
 
// var app = express()
// app.use(compression({ filter: shouldCompress }))
 
// function shouldCompress (req, res) {
//   if (req.headers['x-no-compression']) {
//     // don't compress responses with this request header
//     return false
//   }
 
//   // fallback to standard filter function
//   return compression.filter(req, res)
// }







// flush的API

// var compression = require('compression')
// var express = require('express')
 
// var app = express()
 
// // compress responses
// app.use(compression())
 
// // server-sent event stream
// app.get('/events', function (req, res) {
//   res.setHeader('Content-Type', 'text/event-stream')
//   res.setHeader('Cache-Control', 'no-cache')
 
//   // send a ping approx every 2 seconds
//   var timer = setInterval(function () {
//     res.write('data: ping\n\n')
 
//     // !!! this is the important part
//     res.flush()
//   }, 2000)
 
//   res.on('close', function () {
//     clearInterval(timer)
//   })
// })