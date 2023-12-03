import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaBarsStaggered, FaBlog, FaXmark } from "react-icons/fa6";
import { AuthContext } from '../contects/AuthProvider';


function Navbar() {

  const [isMenuOpen, setisMenuOpen] = useState(false)
  const [isStickey, setisStickey] = useState(false)

  const {user} = useContext(AuthContext)
  console.log(user)

  // toogle menu 
  const toogleMenu = ()=>{
    setisMenuOpen(!isMenuOpen)
  }

  useEffect(()=>{

    const handleScroll =()=>{

      if(window.scroll > 100){
        setisStickey(true)
      }

      else{
        setisStickey(false)
      }

    }

    window.addEventListener('scroll',handleScroll)

    return()=>{

      window.addEventListener("scroll",handleScroll)

    }

  },[])

  const navItems = [
    {link: "Home" , path: '/'},
    {link: "About" , path: '/about'},
    {link: "Shop" , path: '/shop'},
    {link: "Sell" , path: '/admin/dashboard'},
    {link: "Blog" , path: '/blog'}
  ]

  return (
    <>
    <header className='w-full bg-teal-100 fixed top-0 left-0 right-0 transition-all ease-in
    duration-300 '>
      <nav className={`w-full py-4 lg:px-24 ${isStickey? "sticky top-0 left-0 right-0 bg-blue-300":""}`}>
        <div className='flex justify-between items-center text-base gap-8'>
              {/* logo  */}
              <Link to='/' className='text-2xl font-bold text-blue-700 flex items-center gap-2'>
                <FaBlog className='inline-block'/>Books
              </Link>

              {/* className='block text-base 
                      text-black uppercase cursor-poiter hover:text-blue-700' */}
              <ul className='md:flex space-x-12 hidden'>
                {
                  navItems.map(({link,path})=>
                    <Link key={path} to={path} className='block text-base 
                    text-black  font-medium uppercase cursor-poiter hover:text-blue-700'>
                      {link}</Link>)
                }
              </ul>

              {/* menu button for large devices */}
              <div className='space-x-12 lg:felx items-center md:hidden'>
                {/* <button><FaBarsStaggered className='w-5 hover:text-blue-700 '/></button> */}
              </div>

              {/* menu button for mobile devices */}

              <div className='md:hidden'>
                <button onClick={toogleMenu} className='text-black focus:outline-none'>
                  {
                    isMenuOpen? <FaXmark className='h-5 w-5 text-black' />: <FaBarsStaggered
                    className='h-5 w-5 text-black' />
                  }
                </button>
              </div>

              {/* menu button for sm devices */}
                  <div className={`space-y-4 px-4 mt-16 py-7 bg-teal-500 ${isMenuOpen?
                  "block fixed top-0 right-0 left-0  font-medium": "hidden"}`}>
                    {
                        navItems.map(({link,path})=>
                          <Link key={path} to={path} className='block text-base 
                          text-white uppercase cursor-poiter'>
                            {link}</Link>)
                    }
                  </div>


              
        </div>
      </nav>
    </header>
    </>
  )
}

export default Navbar