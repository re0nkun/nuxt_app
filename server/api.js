const express = require('express')
const router = express.Router()

router.get('/test', (req, res, next) => {
  const param = [
    { id: 1, name: 'りんご', price: 100 },
    { id: 2, name: 'ばなな', price: 200 },
    { id: 3, name: 'いちご', price: 300 }
  ]
  res.header('Content-Type', 'application/json; charset=utf-8')
  res.send(param)
})

module.exports = router