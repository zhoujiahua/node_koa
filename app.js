const koa = require('koa');
const router = require('koa-router')();
const app = new koa();

router.get('/', async (ctx) => {
    ctx.body = 'hi koa'
})

router.get('/list', async (ctx) => {
    ctx.body = 'list page'
})

// Start router
app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3000)