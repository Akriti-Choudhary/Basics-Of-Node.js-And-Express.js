const express = require('express')
const morgan = require('morgan')
const app = express()
const logger = require('./logger')
const authorize = require('./authorize')

// req => middleware => res
// app.use('/api',logger)
// app.use(logger)
//api path
//app.use(express.static('./public'))

app.use(morgan('tiny'))

// app.use([logger, authorize])

app.get('/',(req,res)=>{
    res.send('Home')
})
app.get('/about' ,(req,res)=>{
    res.send('About')
})
app.get('/api/products' ,(req,res)=>{
    res.send('Products')
})
app.get('/api/items' ,(req,res)=>{
    console.log(req.user)
    res.send('Items')
})

app.listen(5000, ()=>{
    console.log('Server is listening on port 5000.....')
})