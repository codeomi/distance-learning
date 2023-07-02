import { TextField } from '@mui/material'
import React from 'react'
import "./reply.scss"

const Reply = () => {
  return (
  <>
  <div className="reply-container">
    <div className="reply-heading"></div>
    <div className="reply-para"></div>
    <div className="comment-input"><TextField    style={{ width: '400px',  height: '100px' }}  id="outlined-basic" label="Enter Comments" variant="outlined" /></div>
  </div>
  </>
  )
}

export default Reply