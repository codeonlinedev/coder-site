import React, { FC, useRef, useState } from 'react';

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/analytics';
import { getDatabase, ref, set } from "firebase/database";

import { useCollectionData, useDocument } from 'react-firebase-hooks/firestore';
import { doc, setDoc, getFirestore, collection, getDoc, getDocs, orderBy, query, addDoc } from "firebase/firestore"; 
import { firebaseApp, firestore } from '../../firebase'
import Message from 'components/Message/Message';


export interface ChatPageViewProps {
  project_name?: string
}

const createNewRoom = async () => {
  await addDoc(collection(firestore, "users"), {
    fullname: "",
    icon: "",
    text: "",
    createdAt: firebase.firestore.FieldValue.serverTimestamp()
  });
}

export const ChatPageView: FC<
  React.PropsWithChildren<ChatPageViewProps>
> = ({
  project_name,
}) => {
  const dummy = useRef<null | HTMLDivElement>(null);
  
  const [formValue, setFormValue] = useState('');
  const messagesRef = collection(firestore, 'messages');
  const [messages] = useCollectionData(query(messagesRef, orderBy('createdAt')));
  console.log(messages)

  const sendMessage = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await addDoc(collection(firestore, "messages"), {
      fullname: "",
      icon: "",
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    });

    setFormValue('');
    if(dummy.current !== null) {
      dummy.current.scrollIntoView({ behavior: 'smooth' });
    }
  }

  if(messages) {
    return (
      <>
        <main>        
          {messages.map((msg, index) => {
            return(
              <Message 
                key={index}
                createdAt=""
                fullname=""
                icon=""
                text="" 
              />
            )
          })}
          <span ref={dummy}></span>
        </main>
        <form onSubmit={sendMessage}>
          <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="say something nice" />
          <button type="submit" disabled={!formValue}>🕊️</button>
        </form>
      </>
    )
  }
  else {
    return(<></>)
  }

}

export default ChatPageView;