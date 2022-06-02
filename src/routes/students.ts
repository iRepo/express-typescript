import express from 'express'
import * as studentServices from '../services/studentServices'

const router = express.Router()

router.get('/', (_, res) => {
  res.send(studentServices.getStudents())
})

router.get('/:id', (req, res) => {
  const student = studentServices.findById(+req.params.id)
  res.send(student)
})

export default router
