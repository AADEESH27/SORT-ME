import {useState} from 'react'
import {HashRouter, Route, Routes} from 'react-router-dom'
import Header from './components/Header'
import Logobar from './components/Logobar'
import Info from './components/Info'
import Graphs from './components/Graphs'
import About from './components/About'
import Footer from './components/Footer';


function App() {

  const [length, setLength] = useState(50);

  return (
    <HashRouter>
    <div className="App">
      <Logobar />
      <Routes >
        <Route path='/' 
        element={
          <>
          <Header length = {length} 
            setLength= {setLength} 
          />
          <div className='container'>
            <div className="graph">
              <Graphs
              length = {length} 
              />
            </div>
          </div>
          </>
        } />
        <Route path='/info' element={<Info />} />
        <Route path="/about" element={<About />} />
    </Routes>
    <Footer />

    </div>
    </HashRouter>
  );
}

export default App;
