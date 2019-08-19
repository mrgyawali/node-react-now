const express = require('express')

const app = express()

app.use(express.static('build'))
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'build/index.html'))
})

const PORT = 8000
app.listen(PORT, () => {
  console.log(`running on port ${PORT}`)
})
