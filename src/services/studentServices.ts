import { StudentEntry } from '../types'
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

/* export const addDiary = (newDiaryEntry: NewDiaryEntry): DiaryEntry => {
  const newDiary: DiaryEntry = {
    id: Math.max(...student.map(diary => diary.id)) + 1,
    ...newDiaryEntry
  }

  student.push(newDiary)
  return newDiary
} */
