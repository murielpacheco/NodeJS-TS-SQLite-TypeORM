import { Router } from 'express'

import { CreateTagController } from './controllers/CreateTagController'
import { CreateUserController } from './controllers/CreateUserController'
import { AuthenticateUserController } from './controllers/AuthenticateUserController'
import { CreateComplimentController } from './controllers/CreateComplimentController'
import { ListTagsController } from './controllers/ListTagsController'
import { ListUserReceivedComplimentsController } from './controllers/ListUserReceivedComplimentsController'
import { ListUserSentComplimentsController } from './controllers/ListUserSentComplimentsController'

import { ensureAdmin } from './middlewares/ensureAdmin'
import { ensureAuthentication } from './middlewares/ensureAuthentication'

const router = Router()

const createUserController = new CreateUserController()
const createTagController = new CreateTagController()
const authenticateUserController = new AuthenticateUserController()
const createComplimentController = new CreateComplimentController()
const listTagsController = new ListTagsController()
const listUserReceivedComplimentsController = new ListUserReceivedComplimentsController()
const listUserSentComplimentsController = new ListUserSentComplimentsController()

router.post("/users", createUserController.handle)
router.post("/tags", ensureAuthentication, ensureAdmin, createTagController.handle)
router.post("/login", authenticateUserController.handle)
router.post("/compliments", ensureAuthentication, createComplimentController.handle)
router.get("/tags", ensureAuthentication, listTagsController.handle)
router.get("/users/compliments/received", ensureAuthentication, listUserReceivedComplimentsController.handle)
router.get("/users/compliments/sent", ensureAuthentication, listUserSentComplimentsController.handle)

export { router }