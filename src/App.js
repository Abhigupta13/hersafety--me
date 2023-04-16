
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';

import Navbar from './Components/Navbar';
import Shared from './Components/Shared';

import NGOs from './Components/TOP NGO/NGOs';
import UnderConstruction from './Components/UnderConstruction';
import Faqs from './Components/faqs/Faqs';
import FIR_filing from './Components/FIR_filing/FIR_filing';
import Help from './Components/Help/Help';
import AnalyticsPage from './Components/AnalyticsPage/AnalyticsPage';

import ChatBot from "react-simple-chatbot";
import Footer from './Components/Footer/Footer';
import Sexual_Violence_Laws from './Components/Sexual_Violence_Laws/Sexual_Violence_Laws';
import SafetyTipForm from './Forms/SafetyTipsForm/SafetyTipForm';
import Form from './Forms/IncidentForm/Form';

function App() {
  let current=0;
  const setNow=(curr)=>{
    current=curr;
  }
  const steps = [
    
      {
      id: "Greet",

      message: "Hello, Welcome to our Portal",

      trigger: "Done",
    },

    {
      id: "Done",

      message: "Please enter your name!",

      trigger: "waiting1",
    },

    {
      id: "waiting1",

      user: true,

      trigger: "Name",
    },

    {
      id: "Name",

      message: "Hi {previousValue}, Please select your issue",

      trigger: "issues",
    },

    {
      id: "issues",

      options: [
        {
          value: "React",

          label: "React",

          trigger: "React",
        },

        { value: "Angular", label: "Angular", trigger: "Angular" },
      ],
    },

    {
      id: "React",

      message:
        "Thanks for letting your React issue, Our team will resolve your issue ASAP",

      end: true,
    },

    {
      id: "Angular",

      message:
        "Thanks for letting your Angular issue, Our team will resolve your issue ASAP",

      end: true,
    },
  ];

  return (
    
    <>
    <Navbar/>
 <div id="content">
  <a href='/chatbot'><img src="https://helloyubo.com/wp-content/uploads/2022/11/Customer-Support-2.png" className="ribbon" alt="" /></a>
    
</div>
    <Router>
      <Routes>
        <Route exact path="/home" element={<Home />}/>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path='/shared' element={<Shared/> }/>
        <Route exact path='/ngo' element={<NGOs/> }/>
        <Route exact path='/faqs' element={<Faqs/> }/>
        <Route exact path='/fir' element={<FIR_filing/> }/>
        <Route exact path='/sex' element={<Sexual_Violence_Laws/> }/>
        <Route exact path='/help' element={<Help/> }/>
        <Route exact path='/analytics' element={<AnalyticsPage/> }/>
        <Route exact path='/incidentform' element={<Form/> }/>
        <Route exact path='/safetytipform' element={<SafetyTipForm/> }/>
        <Route exact path='/chatbot' element={ <ChatBot steps={steps}/>  }/>
        {/* <Route exact path='/*' element={ <UnderConstruction/>  }/> */}
        
      </Routes>
    </Router>
{/*     
    <Footer/> */}
    </>
  );
}

export default App;
