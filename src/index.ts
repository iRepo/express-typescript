import express from 'express'

import diaryRouter from './routes/diaries'

const app = express()

app.use(express.json()) // for parsing application/json

const PORT = 3000

app.get('/', (_req, res) => {
  console.log('Someone pinged here')
  res.send('Hello World')
})

app.use('/api/diaries', diaryRouter)

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})
