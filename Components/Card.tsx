import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import Header from './Header'
import Blog from './Blog'
import Profile from './Profile'

const Card = () => (
    <div className='contenedor'>
        <div className='parte-1'>
            <Image src={'/illustration-article.svg'} 
            alt={''} 
            width={64} 
            height={64}
            />
            <Header/>
        </div>
        <Blog/>
        <Profile/>
    </div>
)

export default Card

