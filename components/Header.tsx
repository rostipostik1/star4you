import React from 'react'
import { headerNav } from '@/data/navigation'
import Link from 'next/link'


const Header = () => {
  return (
    <header className=''>
        <div className="">
            <div className="">
                <Link href='/'>Star4You</Link>
                <Link href='/catalog'>Каталог
                    <span className=""></span>
                </Link>
            </div>
            {/* search */}
            <div className="">
                <div className="">
                    <svg></svg>
                    <input type="text" placeholder='Пошук' className=''/>
                </div>
            </div>
            {/* navigation lg user */}
            <div className="">
                <nav className="">
                    {headerNav.map(item => (
                      <Link 
                        key = {item.id}
                        href={item.href}
                        className=''
                      >{item.label}</Link>  
                    ))}
                </nav>
                <button>ua</button>
                <button>User</button>
            </div>
        </div>
    </header>
  )
}

export default Header