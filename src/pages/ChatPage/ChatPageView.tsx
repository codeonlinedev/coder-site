import React, { FC, useEffect, useRef, useState } from 'react';

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/analytics';
import { getDatabase, ref, set } from "firebase/database";

import { useCollectionData, useDocument } from 'react-firebase-hooks/firestore';
import { doc, setDoc, getFirestore, collection, getDoc, getDocs, orderBy, query, addDoc } from "firebase/firestore"; 
import { firebaseApp, firestore } from '../../firebase'
import Message from 'components/Message/Message';
import { useMe_2 } from 'hooks/useMe_2';
import { makeStyles } from '@material-ui/core';
import { combineClasses } from 'util/combineClasses';
import { PageHeader, PageHeaderTitle } from 'components/PageHeader/PageHeader';
import { Stack } from 'components/Stack/Stack';
import { FullScreenLoader } from 'components/Loader/FullScreenLoader';
import { getProjectbyName } from 'api/api';
import NotFoundPage from 'pages/404Page/404Page';


export interface ChatPageViewProps {
  project_name?: string
}

const createNewRoom = async (project_name: string) => {
  await addDoc(collection(firestore, project_name), {
    fullname: "Admin",
    icon: "",
    text: "",
    createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    user_id: "create",
  });
}

export const ChatPageView: FC<
  React.PropsWithChildren<ChatPageViewProps>
> = ({
  project_name,
}) => {
  const dummy = useRef<null | HTMLDivElement>(null);
  const me_2 = useMe_2()  
  const styles = useStyles()
  const [formValue, setFormValue] = useState('');
  if (!project_name) {
    return (<FullScreenLoader></FullScreenLoader>)
  }
  else {
    let isJoined: boolean = false
    let displayName = ""
    me_2.joins.map((project) => {
      if(project.projects.name === project_name) {
        isJoined = true
        displayName = project.projects.desc
      }
    })
    if(!isJoined) {
      return (<NotFoundPage></NotFoundPage>)
    }
    const messagesRef = collection(firestore, project_name);
    const [messages] = useCollectionData(query(messagesRef, orderBy('createdAt')));

    const sendMessage = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      await addDoc(collection(firestore, project_name), {
        fullname: me_2.fullname,
        icon: "",
        text: formValue,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        user_id: me_2.id,
      });
      setFormValue('');
      if(dummy.current !== null) {
        dummy.current.scrollIntoView({ behavior: 'smooth' });
      }
    }
    const hostname = "" + parent.window.location.protocol + "//" + parent.window.location.host
    const pathname = parent.window.location.pathname
    return (
      <>
        <main> 
          <p>Hostname {hostname}</p> 
          <p>pathname {pathname}</p> 
          <PageHeader
            className={styles.header}
          >
            <PageHeaderTitle>
              <Stack direction="row" spacing={1} alignItems="center">
                <span>&nbsp;&nbsp; {displayName}</span>
              </Stack>
            </PageHeaderTitle>
          </PageHeader>      
          {messages && messages.map((msg, index) => {
            return(
              <Message 
                key={index}
                createdAt={msg.createdAt}
                fullname={msg.fullname}
                icon={msg.icon}
                text={msg.text}
                user_id={msg.user_id}
              />
            )
          })}
          <span ref={dummy}></span>
        </main>
        <form className={styles.form} onSubmit={sendMessage}>
          <input className={styles.input} value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="say something nice" />
          <button 
            
            className={
              formValue ? 
              combineClasses([
                styles.button,
              ])
              :
              combineClasses([
                styles.button,
                styles.button_disabled,
              ])
            } 
            type="submit" 
            disabled={!formValue}
          >
            🕊️
          </button>
        </form>
      </>
    )
  }
}

const useStyles = makeStyles(() => ({
  header: {
    backgroundColor: "hsl(223, 44%, 9%)",
    borderBottom: "1px solid hsl(222, 31%, 25%)",
    height: "10px",
    paddingTop: "36px",
    paddingBottom: "36px",
  },
  form: {
    height: "10vh",
    position: "fixed",
    bottom: "0",
    backgroundColor: "rgb(24, 23, 23)",
    width: "100%",
    maxWidth: "728px",
    display: "flex",
    fontSize: "1.5rem",
  },
  form_button: {
    width: "20%",
    backgroundColor: "rgb(56, 56, 143)",
  },
  input: {
    lineHeight: "1.5",
    width: "100%",
    fontSize: "1.5rem",
    background: "rgb(58, 58, 58)",
    color: "white",
    outline: 'none',
    border: "none",
    padding: '0 10px',
  },
  button: {
    backgroundColor: "rgb(56, 56, 143)",
    border: "none",
    color: "white",
    padding: "15px 32px",
    textAlign: "center",
    textDecoration: 'none',
    display: "inline-block",
    cursor: "pointer",
    fontSize: "1.25rem",
  },
  button_disabled: {
    opacity: "0.5",
    cursor: "not-allowed",
  },
  main: {
    padding: "10px",
    height: "80vh",
    margin: "10vh 0 10vh",
    display: "flex",
    flexDirection: "column",
  },
}))

export default ChatPageView;