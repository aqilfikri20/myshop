"use client"
import './login.css'
import {useState} from 'react'
import { useRouter } from 'next/router'

export default function LoginInput(){
    return(
        <>
            <h1>Login</h1>
            <form  className='login-input'>
                <input type="email" placeholder='Masukkan Email' />
                <input type="password" placeholder='Masukkan Password' />
                <button>Masuk</button>
            </form>
        </>

    )
}