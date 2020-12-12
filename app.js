const koa = require('koa');
const router = require('koa-router')();
const bodyParser = require('koa-bodyparser');
const static = require('koa-static');
const app = new koa();

app.use(bodyParser());
app.use(static(__dirname + '/public'));

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

router.get('/', async (ctx) => {
    ctx.body = 'hi koa'
})

router.get('/list', async (ctx) => {
    let r = ctx.query;
    ctx.body = r
})

router.get('/detail/:id/:key', async (ctx) => {
    let r = ctx.params;
    ctx.body = r
})

router.post('/login', async (ctx) => {
    ctx.body = ctx.request.body
})

// Start router
app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3000)