import React from 'react'
import { AiOutlineShoppingCart, AiFillCloseCircle } from 'react-icons/ai'
import {useRef} from "react"
import Link from "next/link"

const Navbar = () => {
  return (
    <div>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col sm:flex-row items-center justify-between">
          <div className="flex flex-col sm:flex-row">
            <Link href="/">
              <a className="title-font font-medium items-center text-gray-900 mb-4 md:mb-0 md:mr-12">
                <span className="ml-3 text-xl">Book Bazaar</span>
              </a></Link>
          </div>
          <div className=" flex flex-col md:flex-row mx-10">
            <Link href="/cart"><a><AiOutlineShoppingCart className="text-2xl md:text-4xl"/></a></Link>
            <Link href="/login"><a><p>Login</p></a></Link>
            
          </div>
        </div>
      </header>
    </div>
  )
}

export default Navbar