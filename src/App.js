import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Body from './components/Body';
<<<<<<< HEAD
import { Provider } from 'react-redux';
import store from './utils/store.js';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainContainer from './components/MainContainer.js';
import WatchPage from './components/WatchPage.js';

function App() {

  const appRouter = createBrowserRouter([
    {
      path: '/',
      element: <Body/>,
      children: [
        {
        path: '/',
        element: <MainContainer/>
      },
      {
        path: 'watch',
        element: <WatchPage/>
      }
    ]
    }
  ])

  return (
    <Provider store={store}>
    <div>
      <Header/>
      <RouterProvider router={appRouter}/>
    </div>
    </Provider>
=======

function App() {
  return (
    <div className=''>
      <Header/>
      <Body/>
    </div>
>>>>>>> 91a84d1c483a1349bf7512de582a87094ee15c01
  );
}

export default App;
