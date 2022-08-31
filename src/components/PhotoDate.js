import React from 'react'

const PhotoDate = ({ date }) => {
  date = date.split('T')[0].split('-')
  return <>{`${date[2]}.${date[1]}.${date[0]}`}</>
} // форматируем входящую дату

export default PhotoDate