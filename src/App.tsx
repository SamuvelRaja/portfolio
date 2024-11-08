import './css/App.css'
import '/node_modules/@fontsource/inter';
import Sidebar from './components/sidebar'
import { Outlet } from 'react-router-dom';



function App() {
  

  return (
    <>
      <div>
        <Sidebar/>
        <div className='w-100% md:ml-[240px] '>
          <div className='max-w-[960px] w-100% md:px-12 px-8 mx-auto'>
            <Outlet/>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
