import React from 'react'
import './globals.css';
import {Routes, Route} from 'react-router-dom';
import  SigninForm  from './_auth/forms/SigninForm';
import  Home  from './_root/pages/Home';
import  SignupForm  from './_auth/forms/SignupForm';
import  AuthLayout  from './_auth/AuthLayout';
import  RootLayout  from './_root/RootLayout';
import { Toaster } from "@/components/ui/toaster"

export const App = () => {
  return (
    <main className='flex h-screen'>
        <Routes>
            {/* public routes */}
            <Route element={<AuthLayout/>}>
                <Route path='/sign-in' element={<SigninForm/>}></Route>
                <Route path='/sign-up' element={<SignupForm/>}></Route>
            </Route>

            {/* private routes */}
            <Route element={<RootLayout/>}>
                <Route index element={<Home/>}></Route>
            </Route>

        </Routes>
        <Toaster/> 
    </main>
  )
}
