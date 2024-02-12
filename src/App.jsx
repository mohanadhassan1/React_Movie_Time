
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import AppLayout from './AppLayout'
import './App.css'

import Movies from './pages/Movies/Movies'
import Details from './pages/Movies/Details'
import Login from './pages/Login/Login'
import Signup from './pages/Signup/Signup'
import Todo from './pages/Todo/Todo'
import Favourites from './pages/Favourites/Favourites'
import NotFound from './pages/NotFound/NotFound'

import { Provider } from 'react-redux'
import store from './store/store'
import { useState } from "react";
import { LanguageProvider } from './Context/language'

const routes = createBrowserRouter([
  {
    path: '/', element: <AppLayout />,
    children: [
      { index: true, element: <Movies /> },
      { path: 'Login', element: <Login /> },
      { path: 'Signup', element: <Signup /> },
      { path: 'Todo', element: <Todo /> },
      { path: 'Movies', element: <Movies /> },
      { path: 'Favourites', element: <Favourites /> },
      { path: 'Movies/Details/:id', element: <Details /> },
      { path: '*', element: <NotFound /> },
    ],
  }
])

function App() {

  const [language, setLanguage] = useState('en')
  return (
    <>

      <LanguageProvider value={{ language, setLanguage }}>

        <Provider store={store}>

          <RouterProvider router={routes} />

        </Provider>

      </LanguageProvider>

    </>
  )
}

export default App
