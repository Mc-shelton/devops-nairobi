import express from 'express'
import os from 'os'

const app = express()

app.get('/',(req,res)=>{
    res.send(`Hello world @Nairobi DevOps Community : response sent by : ${os.hostname}`)
})

app.listen(3130,()=>{
    console.log('our server is listening on port : 3130')
})