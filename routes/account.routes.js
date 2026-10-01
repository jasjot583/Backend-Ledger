const express = require("express")
const  authMiddleware  = require("../middleware/auth.middleware")
const accountController = require("../controllers/account.controller")






const router = express.Router()


//post api
//create a new account
router.post("/", authMiddleware.authMiddleware,accountController.createAccountController)

 //GET API

router.get("/", authMiddleware.authMiddleware, accountController.getUserAccountsController)

// GET api/accounts/balance
router.get("/balance/:accountId", authMiddleware.authMiddleware, accountController.getAccountBalanceController)

module.exports = router