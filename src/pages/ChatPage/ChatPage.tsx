import { FC } from 'react';
import ChatPageView from './ChatPageView'
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { pageTitle } from 'util/page';
import { makeStyles } from '@material-ui/core';

const Chat: FC = () => {
  const { username, project_name } = useParams()
  const styles = useStyles()
  
  return (
    <>
    <Helmet>
      <title>{pageTitle("(2000) Chat")}</title>
    </Helmet>
    <ChatPageView
      project_name={project_name}
      username={username}
    >
    </ChatPageView>
  </>
  );
}

const useStyles = makeStyles({

})

export default Chat;