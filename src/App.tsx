import './App.css'
import '/node_modules/@fontsource/inter';
import Sidebar from './components/sidebar'
import { Outlet } from 'react-router-dom';



function App() {
  

  return (
    <>
      <div>
        <Sidebar/>
        <Outlet/>
      </div>
    </>
  )
}

export default App
