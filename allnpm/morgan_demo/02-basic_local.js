var express = require('express');
var app = express();
var morgan = require('morgan');
var fs = require('fs');
var path = require('path');

var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), {flags: 'a'});

// 注意options的配置
app.use(morgan('short', {stream: accessLogStream}));

app.use(function(req, res, next){
    res.send('ok');
});

app.listen(3000);


// 日志保存到本地