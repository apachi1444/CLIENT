import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Page1 from './form_pages/form_page1';
import Page2 from './form_pages/form_page2';
import Page3 from './form_pages/form_page3';
import Page4 from './form_pages/form_page4';


function AnnounceForm() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Page1/>}/>
        <Route exact path='/form_page2' element={<Page2/>}/>
        <Route exact path='/form_page3' element={<Page3/>}/>
        <Route exact path='/form_page4' element={<Page4/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default AnnounceForm;
