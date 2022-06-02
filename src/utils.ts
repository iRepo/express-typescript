import { NewDiaryEntry } from './types'
import { Visibility, Weather } from './enums'

const isString = (string: any | string): boolean => typeof string === 'string' || string instanceof String

const isDate = (date: string): boolean => Boolean(Date.parse(date))

const isWeather = (param: any): boolean => Object.values(Weather).includes(param)

const isVisibility = (param: any): boolean => Object.values(Visibility).includes(param)

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

const toNewDiaryEntry = (object: any): NewDiaryEntry => {
  const newEntry: NewDiaryEntry = {
    date: parseDate(object.date),
    weather: parseWeather(object.weather),
    visibility: parseVisibility(object.visibility),
    comment: parseComment(object.comment)
  }

  return newEntry
}

export default toNewDiaryEntry
