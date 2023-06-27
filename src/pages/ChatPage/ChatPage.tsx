import { FC } from 'react';
import ChatPageView from './ChatPageView'
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { pageTitle } from 'util/page';

const Chat: FC = () => {
  const { project_name } = useParams()
  console.log(project_name)
  
  return (
    <>
    <Helmet>
      <title>{pageTitle("Chat")}</title>
    </Helmet>
    <ChatPageView
      project_name={project_name}
    >
    </ChatPageView>
  </>
  );
}

export default Chat;