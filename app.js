const express = require('express')
const app = express()
const port = 3000
const myRout = require('./router/postsRouter')

app.get('/', (req, res) => {
  res.send('Hello World!')
})

//definiamo la middleware
app.use(express.static('public'));
app.use('/postsRouter', myRout)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
      