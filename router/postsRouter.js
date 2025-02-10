const express = require('express')
const router = express.Router();
const validation = require('../middlewares/validation')

const postControl = require('../controller/postController')

// index
router.get('/', validation, postControl.index);

// show
router.get('/:id',validation, postControl.show);
// store
router.post('/',validation, postControl.store);

// update
router.get('/',validation, (req, res) => {});

// destroy
router.delete('/',validation, postControl.destroy);

module.exports = router