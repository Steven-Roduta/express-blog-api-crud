const express = require('express')
const router = express.Router();

const postControl = require('../controller/postController')

app.get('/', postControl.index);

//rotte

// index
router.get('/', (req, res )=>  {
    res.send('lista dei miei post')
});

// show
router.get('/', (req, res )=>  {});
// store
router.get('/', (req, res )=>  {});

// update
router.get('/', (req, res )=>  {});
// destroy
router.get('/', (req, res )=>  {});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
        
module.exports = router