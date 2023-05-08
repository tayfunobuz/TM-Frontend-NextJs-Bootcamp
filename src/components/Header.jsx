"use client"
import React, { useState } from 'react'
import {BiSearch} from 'react-icons/bi'
import MenuItem from './MenuItem'
import ThemeComp from './ThemeComp'
import { useRouter } from 'next/navigation'

const Header = () => {
    const [keyword, setKeyword] = useState('')
    const router = useRouter();
    const menu = [
        {
            name: "About",
            url: "/about"
        }
    ]

    const searchFunc = (e) => {
        if (e.key === "Enter" && keyword.length >= 3){
            router.push(`/search/${keyword}`)
            setKeyword('')
        }
    }

  return (
    <div className='flex items-center gap-7 h-20 p-5 bg-stone-200 dark:bg-stone-900'>
        
        <div onClick={() => {router.push('/')}} className='bg-sky-500 rounded-lg p-3 text-2xl font-bold hover:cursor-pointer'>The Movies</div>
        <div className='flex flex-1 items-center gap-2 border p-3 rounded-lg'>
            <input value={keyword} onKeyDown={searchFunc} onChange={e => setKeyword(e.target.value)} placeholder='Search' className='outline-none flex-1 bg-transparent' type="text" />
            <BiSearch size={25}/>
        </div>
        <ThemeComp/>
        {
            menu.map((mn,i) => (
                <MenuItem mn={mn} key={i}/>
            ))
        }
    </div>
  )
}

export default Header