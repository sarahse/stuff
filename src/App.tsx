import React from 'react';
import './scss/app.scss';
import { useRoutes, A } from 'hookrouter';
import Routes from './router';
import NoPageFound from './pages/noPageFound';
import MenuDrawer from './components/menuDrawer';
import ListItem from '@material-ui/core/ListItem';
import LoginIcon from '@material-ui/icons/Lock';
import HomeIcon from '@material-ui/icons/Home';

const App: React.FC = () => {
  const routeResult = useRoutes(Routes);
  return (
    <div className='app' id='app'>
      <div id='header'>
        <div id='menu'>
          <MenuDrawer>
            <ListItem>
              <A className='app-link' href='/login'>
                <LoginIcon />
                Login
              </A>
            </ListItem>
            <ListItem>
              <A className='app-link' href='/'>
                <HomeIcon />
                Dashboard
              </A>
            </ListItem>
          </MenuDrawer>
        </div>
        <div id='logo'>Logo</div>
      </div>
      <div id='container'>{routeResult || <NoPageFound />}</div>
      <div id='footer'>
        <div className='credits'>
          Background image by{' '}
          <a
            className='link-text'
            target='_blank'
            href='https://instagyou.online/user/jibarofoto'
            rel='noopener noreferrer'>
            Luis Quintero
          </a>
        </div>
      </div>
    </div>
  );
};

export default App;
