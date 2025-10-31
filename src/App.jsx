// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Template from './pages/Template';
import Dishes from './pages/Dishes';
import Chatbot from './components/Chatbot';
import VideoSection from './pages/VideoSection';
import TermsCondition from './pages/TermsCondition';
import FranchiseForm from './pages/FranchiseForm';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/template' element={<Template/>}/>
        <Route path='/dishes' element={<Dishes/>}/>
        <Route path='/videosection' element={<VideoSection/>}/>
                <Route path='/terms' element={<TermsCondition/>}/>
<Route path='/franchiseform' element={<FranchiseForm/>}/>
      </Routes>
      <Chatbot/>
    </Router>
  );
}

export default App;
