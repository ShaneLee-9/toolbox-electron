import express from 'express'
import bodyParser from 'body-parser'
import got from 'got'

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded())

app.all('*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', '*')
  next()
})

// 代理前端的跨域的请求
app.post('/proxy', (req, res) => {
  const params = req.body.params || {}
  got.get(req.body.url, {
    searchParams: params
  }).json().then(res1 => {
    res.send(res1)
  })
})

app.listen(9999)
