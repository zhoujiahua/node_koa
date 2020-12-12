const Router = require('koa-router');
const router = new Router();

router.get('/', async (ctx) => {
    await ctx.render('index');
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

module.exports = router;