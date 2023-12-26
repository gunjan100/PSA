import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import CeCertification from './pages/CeCertification'
import Contact from './pages/Contact'
import CmmiConsultancy from './pages/CmmiConsultancy'
import KosherConsultancy from './pages/KosherConsultancy'
import UsFdaRegistration from './pages/UsFdaRegistration'
import GOSTRCertification from './pages/GOSTRCertification'
import Header from './component/Header'
import Client from './pages/Client'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import Footer from './component/Footer'
import QualityManagementSystem from './pages/QualityManagementSystem'
import EnvironmentManagementSystem from './pages/EnvironmentManagementSystem'
import ITService from './pages/ITService'
import FoodSafetyManagement from './pages/FoodSafetyManagement'
import MedicalDevices from './pages/MedicalDevices'
import HACCP from './pages/HACCP'
import InformationSecurity from './pages/InformationSecurity'
import ISO15378Certification from './pages/ISO15378Certification'
import OHSAS from './pages/OHSAS'
import AdminPanel from './pages/AdminPanel'
import { Admin, Resource } from 'react-admin'
import restProvider from 'ra-data-simple-rest'
import SignUp from './pages/SignUp'
import { ToastContainer } from 'react-toastify'
import LogIn from './pages/LogIn'
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
 <>

   <BrowserRouter>    
   <Header/>
   <ToastContainer></ToastContainer>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/signup' element={<SignUp/>}/>
    <Route path='/login' element={<LogIn/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/cecertification' element={<CeCertification/>}/>
    <Route path='/client' element={<Client/>}/>
    <Route path='/cmmiconsultancy' element={<CmmiConsultancy/>}/>
    <Route path='/KosherConsultancy' element={<KosherConsultancy/>}/>
    <Route path='/UsFdaRegistration' element={<UsFdaRegistration/>}/>
    <Route path='/GOSTRCertification' element={<GOSTRCertification/>}/>
    <Route path='/adminpanel' element={<AdminPanel/>}/>
    <Route path='/EnvironmentManagementSystem' element={<EnvironmentManagementSystem/>}/>
    <Route path='/FoodSafetyManagement' element={<FoodSafetyManagement/>}/>
    <Route path='/HACCP' element={<HACCP/>}/>
    <Route path='/InformationSecurity' element={<InformationSecurity/>}/>
    <Route path='/ISO15378Certification' element={<ISO15378Certification/>}/>
    <Route path='/ITService' element={<ITService/>}/>
    <Route path='/MedicalDevices' element={<MedicalDevices/>}/>
    <Route path='/OHSAS' element={<OHSAS/>}/>
    <Route path='/QualityManagementSystem' element={<QualityManagementSystem/>}/>
   
   </Routes>  
   
   <Footer/> 
   </BrowserRouter>
   </>
  )
}

export default App
