import { ChatEngine } from 'react-chat-engine';
import LoginForm from './components/LoginForm';

import ChatFeed from './components/ChatFeed';

import './App.css';

const App = () => {

    if(!localStorage.getItem('username')) return <LoginForm />
    return (
        <ChatEngine
             height="100vh"
             projectID="f7c3edba-1bf7-4e8a-a0e3-fdaeda8aa83c"
             userName={localStorage.getItem('username')}
             userSecret={localStorage.getItem('password')}
             renderChatFeed={(chatAppProps)=> <ChatFeed {...chatAppProps} />}

        />
    );
}

export default App;
