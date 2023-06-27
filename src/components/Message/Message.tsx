import { UserAvatar } from "components/UserAvatar/UserAvatar";
import { useMe } from "hooks/useMe";
import { FC } from "react";

export interface MessageProps {
  createdAt: string
  fullname: string
  icon: string
  text: string
}

const Message: FC<
React.PropsWithChildren<MessageProps>
> = ({
  createdAt,
  fullname,
  icon,
  text
}) => {
  const me = useMe()
  const messageClass = true ? 'sent' : 'received';
  const displayName = "a".toUpperCase()

  return (
  <>
    <div className={`message ${messageClass}`}>
    <UserAvatar username={me.username} avatarURL={me.avatar_url} />
      &nbsp; 
      <p className="message_text"> {text}</p>
    </div>
  </>
  )
}

export default Message