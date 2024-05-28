const Router = require('koa-router');
const Koa = require('koa');
const {createOnlineJudge,createOnsiteJudge,getAllOnlineContests,getAllOnsiteContests,createProject,allProject} = require('../controllers/experienceController.js')
const router = new Router();
const app = new Koa();

router.post('/online-contest', createOnlineJudge);
router.get('/online-contest', getAllOnlineContests);
router.post('/onsite-contest', createOnsiteJudge);
router.get('/onsite-contest', getAllOnsiteContests);
router.post('/project',createProject);
router.get('/project',allProject);


module.exports = router.routes();