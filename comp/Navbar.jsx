import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import logo from '../resources/dev.to.logo.png'
import { Avatar, Notification, Search } from '../resources/Icons'

function Navbar() {
  const [navShadow, setNavShadow] = useState(false)
  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 100 ? setNavShadow('navshadow') : setNavShadow(false)
    })
  }, [])
  return (
    <div className={`navbar ${navShadow && 'navshadow'}`}>
      <nav className='container'>
        <div className="start">
          <Link href="/"><span className="logo" ><Image src={logo} alt="" width="60" height="40" /></span></Link>
          <form className="search">
            <input autoComplete='off' placeholder='Search...' type="text" name="search" id="search" />
            <button type="submit"> <Search /> </button>
          </form>
        </div>
        <div className="end">
          <Link href="/write" className='crt'>Create Post</Link>
          <button className='noti'> <Notification /> </button>
          <button className='avatar'> <Avatar /> </button>
        </div>
      </nav>
    </div>
  )
}

export default Navbar