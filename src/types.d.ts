import { Visibility, Weather, Group } from './enums'

export interface DiaryEntry {
  id: number
  date: string
  weather: Weather
  visibility: Visibility
  comment: string
}

export interface StudentEntry {
  id: number
  name: string
  surname: string
  group: Group
  isWednesdayStudent: boolean
  alergies: string[]
}

// export type NonSensitiveInfoDiaryEntry = Pick<DiaryEntry, 'id' | 'date' | 'weather' | 'visibility'>

export type NonSensitiveInfoDiaryEntry = Omit<DiaryEntry, 'comment'>

export type NewDiaryEntry = Omit<DiaryEntry, 'id'>

export type NewStudentEntry = Omit<StudentEntry, 'id'>
