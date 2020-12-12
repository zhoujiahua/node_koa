const koa = require('koa');
const Router = require('koa-router');
const router = new Router();
const app = new koa();

router.get('/', async (ctx) => {
    ctx.body = 'hi koa'
}).get('/news', async (ctx) => {
    ctx.body = 'new page'
})

router.get('/list', async (ctx) => {
    ctx.body = 'list page'
})

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000)