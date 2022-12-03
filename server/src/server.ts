import express from 'express';

const app = express()

app.get('/ads', (req, res) => {


    return res.json({ msg: 'oi' })
})

app.listen(3333)