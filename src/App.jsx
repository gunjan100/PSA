import React , { useState } from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
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

import SignUp from './pages/SignUp'
import { ToastContainer } from 'react-toastify'
import LogIn from './pages/LogIn'
import 'react-toastify/dist/ReactToastify.css';

import Error from './pages/Error'
import LogOut from './pages/LogOut'
import Adminlayout from './component/layouts/Admin-layout'
import AdminUsers from './pages/AdminUsers'
import AdminContact from './pages/AdminContact'
import AdminUpadate from './pages/AdminUpadate'
import AdminClient from './pages/AdminClient'
import RegisterClient from './pages/RegisterClient'
import ClientUpadate from './pages/ClientUpadate'
import ExpClient from './pages/ExpClient'
import Application from './pages/Application'

const App = () => {
 
  return (
 <>

   <BrowserRouter>    
   <Header/>
   <ToastContainer></ToastContainer>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/cecertification' element={<CeCertification/>}/>
    <Route path='/clientList' element={<Client/>}/>
    <Route path='/cmmiconsultancy' element={<CmmiConsultancy/>}/>
    <Route path='/KosherConsultancy' element={<KosherConsultancy/>}/>
    <Route path='/UsFdaRegistration' element={<UsFdaRegistration/>}/>
    <Route path='/GOSTRCertification' element={<GOSTRCertification/>}/>   
    <Route path='/EnvironmentManagementSystem' element={<EnvironmentManagementSystem/>}/>
    <Route path='/FoodSafetyManagement' element={<FoodSafetyManagement/>}/>
    <Route path='/HACCP' element={<HACCP/>}/>
    <Route path='/InformationSecurity' element={<InformationSecurity/>}/>
    <Route path='/ISO15378Certification' element={<ISO15378Certification/>}/>
    <Route path='/ITService' element={<ITService/>}/>
    <Route path='/MedicalDevices' element={<MedicalDevices/>}/>
    <Route path='/OHSAS' element={<OHSAS/>}/>
    <Route path='/QualityManagementSystem' element={<QualityManagementSystem/>}/>
    <Route path='*' element={<Error/>}/>
     
    <Route path='/signup' element={<SignUp/>}/>
    <Route  path='/login' element={<LogIn/>}/>
    <Route  path='/logout' element={<LogOut/>}/>

    <Route path='/admin' element={<Adminlayout/>}/>
    <Route path='/user' element={<AdminUsers/>}/>
    <Route path='/admincontact' element={<AdminContact/>}/>

    <Route path='/client' element={<AdminClient/>}/>
    <Route path='/user/:id/edit' element={<AdminUpadate/>}/>
    <Route path='/addclient' element={<RegisterClient/>}/>
    <Route path='/client/edit/:id' element={<ClientUpadate/>}/>
    <Route path='/expclient' element={<ExpClient/>}/>
    
    <Route path='/apply' element={<Application/>}/>

</Routes> 
   
   <Footer/> 
   </BrowserRouter>
   </>
  )
}

export default App
