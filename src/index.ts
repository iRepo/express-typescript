import express from 'express'

import diaryRouter from './routes/diaries'

import studentsRouter from './routes/students'

const app = express()

app.use(express.json()) // for parsing application/json

const PORT = 3000

app.get('/', (_req, res) => {
  console.log('Someone pinged here')
  res.send('Hello World')
})

app.use('/api/diaries', diaryRouter)
app.use('/api/students', studentsRouter)

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})
