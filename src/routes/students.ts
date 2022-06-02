import express from 'express'
import * as studentServices from '../services/studentServices'
import { toNewStudentEntry } from '../utils'

const router = express.Router()

router.get('/', (_, res) => {
  res.send(studentServices.getStudents())
})

router.get('/:id', (req, res) => {
  const student = studentServices.findById(+req.params.id)
  res.send(student)
})

router.post('/', (req, res) => {
  try {
    const newStudentEntry = toNewStudentEntry(req.body)

    const addedStudentEntry = studentServices.addStudent(newStudentEntry)

    res.json(addedStudentEntry)
  } catch (e) {
    res.status(400).send(e.message)
  }
})

export default router
