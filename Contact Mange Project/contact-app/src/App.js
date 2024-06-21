import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import AddContact from './Components/AddContact';
import ContactList from './Components/ContactList';
import { useEffect, useState } from 'react';
import uuid4 from 'uuid4'





function App() {
const [contact,setContact] = useState([])
const localStoragekey = 'contact'; 
useEffect(() => {
   localStorage.setItem(localStoragekey, JSON.stringify(contact))
},[contact])
 const addContact = (data) => {
  //  console.log(data,"Data from app.js")
  setContact([...contact,{id: uuid4(), data}])  
 }
 
    const removeContact = (id) => {
      const updatedlist = contact.filter((val) => {
         return val.id !== id; 
        
      })
      setContact(updatedlist)
      
    }
  
  return (
    <div className="App">
       <Header/>
       <AddContact addContact = {addContact}/>
       <ContactList contact={contact}  removeContact={removeContact}/>
       
     
       
      
    </div>
  );
}

export default App;
