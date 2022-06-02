import { StudentEntry, NewStudentEntry } from '../types'
import studentData from './students.json'

const student: StudentEntry[] = studentData as StudentEntry[]

export const getStudents = (): StudentEntry[] => student

export const findById = (id: number): StudentEntry | undefined => {
  const entry = student.find(student => student.id === id)
  if (entry != null) {
    return entry
  }
  return undefined
}

export const addStudent = (NewStudentEntry: NewStudentEntry): StudentEntry => {
  const newStudent: StudentEntry = {
    id: Math.max(...student.map(student => student.id)) + 1,
    ...NewStudentEntry
  }
  student.push(newStudent)
  return newStudent
}
