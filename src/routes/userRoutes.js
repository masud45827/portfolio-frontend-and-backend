const Router = require('koa-router');
const Koa = require('koa');
const { getUserById, createUser, updateUser, deleteUser, getUserByEmail } = require('../controllers/userControllers');
const router = new Router();
const app = new Koa();

router.post('/', createUser);
router.get('/:id', getUserById);
router.get('/email/:email', getUserByEmail);
router.put('/',updateUser);
router.delete('/:id',deleteUser);

module.exports = router.routes();