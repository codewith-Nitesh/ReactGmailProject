import React, { useEffect } from 'react'
import Message from './Message'
import { query, collection, onSnapshot , orderBy } from 'firebase/firestore'
import { db } from "../../firebase"; 
import { useDispatch, useSelector } from 'react-redux';
import { setEmail } from '../../Redux/appSlice';

const Messages = () => {
  const emails = useSelector(state => state.appSlice.emails)
  const dispatch = useDispatch()
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

  return (
   <>
    {
      emails && emails?.map((email) => <Message email={email}/>)
    }
   </>
  )
}

export default Messages
