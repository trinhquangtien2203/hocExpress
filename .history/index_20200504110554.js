const express = require('express')
const app = express()
const port = 3000

app.set('views', './views')
app.set('view engine', 'pug')

app.get('/', (req, res) => res.render('index',{
    name:'Tiến'
}))
app.get('/users',(req, res) => res.render('users/index',{
    users: [
        {id : 1, name: 'Tiến'},
        {id : 2, name: 'Lâm'}
    ]
}))

app.get('/search',(req,res) => console.log(res.query))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))