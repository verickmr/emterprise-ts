import express from 'express'
import {config} from 'dotenv'
import { log } from 'console'
config()
const app = express()
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
app.get('/', (req,res) =>{
    res.send("hello world!")
})