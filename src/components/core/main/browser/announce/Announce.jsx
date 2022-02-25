import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import Page4 from './pages/Page4';


function AnnounceForm() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Page1/>}/>
        <Route exact path='/page2' element={<Page2/>}/>
        <Route exact path='/page3' element={<Page3/>}/>
        <Route exact path='/page4' element={<Page4/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default AnnounceForm;
