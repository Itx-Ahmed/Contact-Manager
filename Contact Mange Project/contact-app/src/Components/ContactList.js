import React, { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';

const ContactList = (props) => {
  const {contact,removeContact} = props
  
     const contactlist = contact.map((val) => {
       return (
         <>
         <div>{val.data.name}</div>
         <div>{val.data.email}</div>
         <span onClick={()=>removeContact(val.id)}>{<DeleteIcon/>}</span>
          
         </>  
       )
     })
  return (
    <>
     <div className='ContactList'>ContactList</div>
     <div style={{border:"3px solid red"}}>{contactlist}</div>

    </>

  )
}

export default ContactList;