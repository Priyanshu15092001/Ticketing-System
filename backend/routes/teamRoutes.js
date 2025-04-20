const {protect,isAdmin} = require('../middlewares/authMiddlewares')
const {addMember,getAllMembers,getMember,deleteMember,updateMember} = require('../controllers/teamController')
const express = require('express')
const router = express.Router()

router.post('/',protect,isAdmin,addMember);
router.get('/',protect,getAllMembers);
router.get('/:id',protect,getMember);
router.delete('/:id',protect,isAdmin,deleteMember);
router.put('/:id',protect,isAdmin,updateMember)

module.exports = router