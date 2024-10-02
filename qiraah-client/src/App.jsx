
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import './App.css'
import { Outlet } from 'react-router-dom'

function App() {
 
  return (
    <>
      <ToastContainer 
      position="bottom-left"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme='dark'
      className='toast'
      style={{ width: "320px" }}
      toastStyle={{ fontSize: "20px", padding: "8px 12px", fontFamily: "Cormorant Upright",
        fontWeight: "bold" }}
      />
      <Outlet/>
    </>
  )
}

export default App
