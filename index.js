const Koa  = require('koa');
const router = require('koa-router')();
const bodyParser = require('koa-bodyparser');

const app = new Koa();

router.get('/hello/:name', async (ctx, next) => {
    const name = ctx.params.name;
    ctx.response.body = `<h1>Hello, ${name}!</h1>`;
});

router.get('/user', async (ctx, next) => {
    ctx.response.type = 'application/json';
    ctx.response.body = {
            user: {
                name: 'duncan',
                age: '28',
                gender: 'man'
            }
    };
});

app.use(bodyParser());
app.use(router.routes());

app.listen(3000);
