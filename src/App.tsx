import './App.css'
import Calendar from './components/Calendar';
import Footer from './components/Footer';
import Header from './components/Header';
import Countdown from './components/Countdown'


function App() {

  return (
    <>
    <Header />
      <Countdown />
      <Calendar />     
    <Footer /> 
    </>
  )
}

export default App
