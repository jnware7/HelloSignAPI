const express = require('express')
const app = express()
const port = 3000


app.get('/',(req,res)=> res.send('Hello Sign Signature Requests Sent!'))

app.listen(port, ()=> console.log(`Serving Non-Embedded Signature Request on port ${port}!`))