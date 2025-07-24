import React, { useEffect, useState } from 'react'
import Message from './Message'
import { query, collection, onSnapshot , orderBy } from 'firebase/firestore'
import { db } from "../../firebase"; 
import { useDispatch, useSelector } from 'react-redux';
import { setEmail } from '../../Redux/appSlice';

const Messages = () => {
  const emails = useSelector(state => state.appSlice.emails)
  const {searchText} = useSelector(state => state.appSlice)
  const dispatch = useDispatch()
  const [tempEmail, setTempEmail] = useState(emails)
  useEffect(()=>{
    const q = query(collection(db,"emails"), orderBy('createdAt', 'desc'))
    const unSubscribe = onSnapshot(q, (snapshot) => {
      const allEmails = snapshot.docs.map((doc)=>({...doc.data(), id:doc.id}));
      console.log(allEmails)
      dispatch(setEmail(allEmails))
    })
    return ()=>{
      unSubscribe()
    }
  },[])

  useEffect(()=>{
   const filteredEmail = emails?.filter((email) =>{
    return email?.subject?.toLowerCase().includes(searchText.toLowerCase()) || email?.message?.toLowerCase().includes(searchText.toLowerCase())
   })
   setTempEmail(filteredEmail)
  },[searchText,emails])

  return (
   <>
    {
      tempEmail && tempEmail?.map((email) => <Message email={email}/>)
    }
   </>
  )
}

export default Messages
