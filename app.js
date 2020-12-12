const koa = require('koa');
const path = require('path');
const router = require('koa-router')();
const bodyParser = require('koa-bodyparser');
const koaArt = require('koa-art-template');
const static = require('koa-static');
const app = new koa();

app.use(bodyParser());
app.use(static(path.join(__dirname, 'public')));
koaArt(app, {
    root: path.join(__dirname, 'views'),
    extname: '.html',
    debug: process.env.NODE_ENV !== 'production'
});

app.use(async (ctx, next) => {
    ctx.state = {
        name: 'jerry',
        age: 18
    }
    await next();
    if (ctx.status == 404) {
        ctx.status = 404;
        ctx.body = '404'
    }
})

// Router module
const main = require('./routers/main.js');
const admin = require('./routers/admin.js');
router.use('/main', main.routes());
router.use('/admin', admin.routes());

// Start router
app.use(router.routes()).use(router.allowedMethods());

app.listen(3000)