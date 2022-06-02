import { NewDiaryEntry, NewStudentEntry } from './types'
import { Visibility, Weather, Group } from './enums'

const isString = (string: any | string): boolean => typeof string === 'string' || string instanceof String

const isDate = (date: string): boolean => Boolean(Date.parse(date))

const isWeather = (param: any): boolean => Object.values(Weather).includes(param)

const isVisibility = (param: any): boolean => Object.values(Visibility).includes(param)

const isBoolean = (param: any): boolean => typeof param === 'boolean'

const isGroup = (param: any): boolean => Object.values(Group).includes(param)

const isStringArray = (array: any[]): boolean => array.every(isString)

const parseComment = (commentFromRequest: any): string => {
  if (!isString(commentFromRequest)) {
    throw new Error('Incorrect or missing comment')
  }
  return commentFromRequest
}

const parseDate = (dateFromRequest: any): string => {
  if (!isString(dateFromRequest) || !isDate(dateFromRequest)) {
    throw new Error('Incorrect or missing date')
  }
  return dateFromRequest
}

const parseWeather = (weatherFromRequest: any): Weather => {
  if (!isWeather(weatherFromRequest) || !isString(weatherFromRequest)) {
    throw new Error('Incorrect or missing weather')
  }
  return weatherFromRequest
}

const parseVisibility = (visibilityFromRequest: any): Visibility => {
  if (!isVisibility(visibilityFromRequest) || !isString(visibilityFromRequest)) {
    throw new Error('Incorrect or missing visibility')
  }
  return visibilityFromRequest
}

const parseName = (nameFromRequest: any): string => {
  if (!isString(nameFromRequest)) {
    throw new Error('Incorrect or missing name')
  }
  return nameFromRequest
}

const parseSurname = (surnameFromRequest: any): string => {
  if (!isString(surnameFromRequest)) {
    throw new Error('Incorrect or missing surname')
  }
  return surnameFromRequest
}

const parseGroup = (groupFromRequest: any): Group => {
  if (!isGroup(groupFromRequest) || !isString(groupFromRequest)) {
    throw new Error('Incorrect or missing group')
  }
  return groupFromRequest
}

const parseIsWednesdayStudent = (isWednesdayStudentFromRequest: any): boolean => {
  if (!isBoolean(isWednesdayStudentFromRequest)) {
    throw new Error('Incorrect or missing isWednesdayStudent')
  }
  return isWednesdayStudentFromRequest
}

const parseAlergies = (alergiesFromRequest: any): string[] => {
  if (!isStringArray(alergiesFromRequest)) {
    throw new Error('Incorrect or missing alergies')
  }
  return alergiesFromRequest
}

export const toNewDiaryEntry = (object: any): NewDiaryEntry => {
  const newEntry: NewDiaryEntry = {
    date: parseDate(object.date),
    weather: parseWeather(object.weather),
    visibility: parseVisibility(object.visibility),
    comment: parseComment(object.comment)
  }

  return newEntry
}

export const toNewStudentEntry = (object: any): NewStudentEntry => {
  const newEntry: NewStudentEntry = {
    name: parseName(object.name),
    surname: parseSurname(object.surname),
    group: parseGroup(object.group),
    isWednesdayStudent: parseIsWednesdayStudent(object.isWednesdayStudent),
    alergies: parseAlergies(object.alergies)
  }

  return newEntry
}
