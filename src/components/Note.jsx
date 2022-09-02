import React from 'react'

const Note = ({id , text, date, handleDeleteNote}) => {
  return (
    <div className='note'>
      <span>{text}</span>
      <div className='note-footer'>
        <small>{date}</small>
        <h2 className='delete-icon' onClick={()=>handleDeleteNote(id)}>x</h2>
      </div>
    </div>
  )
}

export default Note
