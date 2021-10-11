import express from 'express'

const app = express()

app.all('*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  next()
})

app.get('/animeRandom', (req, res) => {
  res.send({
    message: '123'
  })
})

app.listen(9999)
