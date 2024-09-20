/* eslint-disable react/react-in-jsx-scope */
import './App.css';
import Contain from './layout/Contain/Contain';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Routes from './layout/Main/Routes';

function App() {
  return (
    <>
      <Contain>
        <Routes />
      </Contain>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
