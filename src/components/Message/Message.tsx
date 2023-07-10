import { makeStyles } from "@material-ui/core";
import { UserAvatar } from "components/UserAvatar/UserAvatar";
import { useMe } from "hooks/useMe";
import { useMe_2 } from "hooks/useMe_2";
import { FC } from "react";
import { combineClasses } from "util/combineClasses";

export interface MessageProps {
  createdAt: string
  username: string
  icon: string
  text: string
  user_id: string
}

const Message: FC<
React.PropsWithChildren<MessageProps>
> = ({
  createdAt,
  username,
  icon,
  text,
  user_id
}) => {
  const me_2 = useMe_2()
  const styles = useStyles()
  const messageClass = user_id === me_2.id ? 'sent' : 'received';

  return (
  <>
    <div 
      className={combineClasses([
        styles.message,
        messageClass === 'sent' ? styles.sent : "",
      ])}
    >
    <UserAvatar username={username} avatarURL={icon} />
      &nbsp; 
      <p 
        className={combineClasses([
          styles.message_text,
          messageClass === 'sent' ? styles.p : styles.received_p,
        ])}
      > 
        {text}
      </p>
    </div>
  </>
  )
}

const useStyles = makeStyles(() => ({
  message_text: {
    color: "white",
    background: "#0b93f6",
    alignSelf: "flex-end",
  },
  message: {
    display: "flex",
    alignItems: "center",
  },
  sent: {
    flexDirection: "row-reverse"
  },
  received_p:{
    maxWidth: "500px",
    background: "#e5e5ea",
    color: "black",
    textAlign: "center",
    padding: "10px 20px",
    borderRadius: "25px",
  },
  p: {
    maxWidth: "500px",
    /* margin-bottom: 12px;
    line-height: 24px; */
    padding: "10px 20px",
    borderRadius: "25px",
    position: "relative",
    color: "white",
    textAlign: "center",
  }
}))

export default Message