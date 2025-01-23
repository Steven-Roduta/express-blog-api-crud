const express = require('express')
const router = express.Router();

const postControl = require('../controller/postController')

// index
router.get('/', postControl.index);

// show
router.get('/:id',postControl.show);
// store
router.get('/', (req, res) => {});

// update
router.get('/',(req, res) => {});
// destroy
router.delete('/',postControl.destroy);

module.exports = router