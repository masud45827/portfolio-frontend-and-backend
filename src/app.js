const Koa =require('koa');
const dotenv = require('dotenv');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser')
const cors = require('@koa/cors');
const usersRoutes = require('./routes/userRoutes');
const experienceRoute = require('./routes/experienceRoute')


dotenv.config();
const app = new Koa();
const port  = process.env.PORT;
const router = new Router();
app.use(bodyParser());
app.use(cors());

router.use('/users',usersRoutes);
router.use('/experience',experienceRoute);

app.use(router.routes());
app.use(router.allowedMethods());


app.listen(3000,()=>{
    console.log(`running port ${port}`);
})