var express = require('express');
var app = express();
var morgan = require('morgan');

// 1.
// app.use(morgan('short'));  // combined, tiny, dev, common...

// 2.
// app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));

// 3.
// function opt(tokens, req, res) {
//     return [
//         tokens.method(req, res),
//         tokens.url(req, res),
//         tokens.status(req, res),
//         tokens.res(req, res, 'content-length'), '-',
//         tokens['response-time'](req, res), 'ms'
//     ].join(' ');
// }

// app.use(morgan(opt))


// 4. options：可选，配置项，包含stream（常用）、skip、immediate。
// stream：日志的输出流配置，默认是process.stdout。
// skip：是否跳过日志记录，使用方式可以参考这里。
// immediate：布尔值，默认是false。当为true时，一收到请求，就记录日志；如果为false，则在请求返回后，再记录日志。
// app.use(morgan('combined', {
//   skip: function (req, res) { return res.statusCode < 400 }
// }))




// 5. 自定义format
// 自定义token
morgan.token('from', function(req, res){
    return req.query.from || '---';
});

// 自定义format，其中包含自定义的token
morgan.format('joke', '[joke] :method :url :status :from');

// 使用自定义的format
app.use(morgan('joke'));





app.use(function (req, res, next) {
    res.send('ok');
});

app.listen(3000);

// 运行代码，进入127.0.0.1::3000看输出




