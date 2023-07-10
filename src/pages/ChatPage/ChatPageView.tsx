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
import { borderRadius } from 'theme/constants';
import SendRoundedIcon from '@material-ui/icons/SendRounded'


export interface ChatPageViewProps {
  project_name?: string
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
    const room_name = project_name
    const messagesRef = collection(firestore, room_name);
    const [messages] = useCollectionData(query(messagesRef, orderBy('createdAt')));

    useEffect(() => {
      if(dummy.current !== null) {
        dummy.current.scrollIntoView({ behavior: 'smooth' });
      }
    }, [messages])

    const sendMessage = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      await addDoc(collection(firestore, room_name), {
        username: me_2.username,
        icon: "",
        text: formValue,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        user_id: me_2.id,
      });
      setFormValue('');
    }
    return (
      <>
        <main> 
          <PageHeader
            className={styles.header}
          >
            <PageHeaderTitle>
              <Stack direction="row" spacing={1} alignItems="center">
                <span style={{marginLeft: "30px"}}> {displayName}</span>
              </Stack>
            </PageHeaderTitle>
          </PageHeader>  
          <div className={styles.message_div}>
            {messages && messages.map((msg, index) => {
              return(
                <Message 
                  key={index}
                  createdAt={msg.createdAt}
                  username={msg.username}
                  icon={msg.icon}
                  text={msg.text}
                  user_id={msg.user_id}
                />
              )
            })}
            <span ref={dummy}></span>
          </div>    

        </main>
        <form className={styles.form} onSubmit={sendMessage}>
          <input className={styles.input} value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder={`Nhắn #${displayName}`} />
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
            💬
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
  message_div: {
    height: "80%", 
    overflowY: "scroll",
    position: "fixed", 
    width: "100%", 
    borderBottom: "1px solid #4b4b4b",
  },
  form: {
    display: "flex",
    width: "94%",
    paddingLeft: "20px",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "3%",
    backgroundColor: "#353535",
    borderRadius: "50px",
    border: "1px solid #000000",
    bottom: "0",
    position: "fixed",
    marginBottom: "15px",
    height: "40px",
  },
  form_button: {
    width: "20%",
    backgroundColor: "rgb(56, 56, 143)",
  },
  input: {
    width: "100%",
    height: "54px",
    background: "none",
    border: "0",
    padding: "0",
    outline: "none",
    fontSize: "14px",
  },
  button: {
    height: "40px",
    width: "60px",
    backgroundColor: "#0b93f6",
    color: "#0253ff",
    textTransform: "uppercase",
    borderStyle: "none",
    borderRadius: "50px",
    cursor: "pointer",
    outline: "none",
  },
  button_disabled: {
    opacity: "0.5",
    cursor: "not-allowed",
    borderRadius: "50px",
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