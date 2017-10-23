const Koa = require('koa')
const Router = require('koa-router')

const app = new Koa()
const router = new Router()

const homeAdData = require('./home/ad')
router.get('/api/homead',(ctx,next) => {
    ctx.body = homeAdData
})

const homeListData = require('./home/list')
router.get('/api/homelist/:city/:page',(ctx,next) => {
    const params = ctx.params
    const city = params.city
    const page = params.page
    ctx.body = homeListData
})

const detailData = require('./detail/info')
router.get('/api/detail/info/:id',(ctx,next) => {
    const params = ctx.params
    const id = params.id
    ctx.body = detailData
})

const commentData = require('./detail/comment')
router.get('/api/detail/comment/:id',(ctx,next) => {
    const params = ctx.params
    const id = params.id
    ctx.body = commentData
})

app.use(router.routes())
    .use(router.allowedMethods)
app.listen(3000)
console.log("app run at http://localhost:3000")
