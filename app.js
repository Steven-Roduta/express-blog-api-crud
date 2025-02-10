const cors = require ("cors")
const express = require('express')
const app = express()
const port = 3000
const myRout = require('./router/postsRouter')
const data = require('./data/data')

//definiamo la middleware
app.use(express.static('public'));
app.use('/post', myRout)
app.use(cors())

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
      