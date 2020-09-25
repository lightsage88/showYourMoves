const express = require('express')

const app = express()

app.use(express.static('./dist/showYourMoves'))

app.get('/*', (req, res) => {
  res.sendFile('index.html', {root: 'dist/showYourMoves/'})
})

app.listen(process.env.PORT || 8080)