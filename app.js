const express = require('express')
const app = express()
const port = 3000
const myRout = require('./router/postsRouter')

//definiamo la middleware
app.use(express.static('public'));
app.use('/post', myRout)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
      