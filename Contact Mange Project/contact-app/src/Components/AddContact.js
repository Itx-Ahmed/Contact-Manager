import React, { useState } from 'react'

const AddContact = ({addContact}) => {
const [contactdata,setContactData] = useState({
     name:"", 
     email:""
})
  const handleChange = (e) => {
     if (e.target.name === 'name') {
         setContactData({... contactdata,name: e.target.value})
     }
     else{
        setContactData({... contactdata,email: e.target.value})
     }
  }
   const handleAdd = () => {
    if(contactdata.name === '' || contactdata.email===''){
         alert('please fill All the  Details'); 
         return 
    }
    //  console.log(contactdata)
      addContact(contactdata);
      setContactData({name:"", email:""})
   }
  return (
   <>
     <div>AddContact</div>
      <form>
        <label>Enter your Name: </label>
         <input type='text' name='name' placeholder='enter name' value={contactdata.name} onChange={handleChange} />
         <br/><br/>
         <label>Enter your Email: </label>
         <input type='text' name='email' placeholder='enter email' value={contactdata.email}  onChange={handleChange}/>
         <br/><br/>
      </form>
       <button onClick={handleAdd}>Add Contact</button>
   </>
    
  )
}

export default AddContact