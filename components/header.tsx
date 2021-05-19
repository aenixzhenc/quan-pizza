import Link from "next/link";
import { useState } from "react";

export default function Header() {
  return (
    <div className='w-full m-auto flex h-gr7 bg-gray-500'>
      <span className='flex-1 flex flex-row'>
        <Link href="/">
          <a className='button m-gr3.5 '>Home</a>
        </Link>
        <Link href="/menu">
          <a className='button m-gr3.5 '>Menu</a>
        </Link>
      </span>
      <span className="flex-initial ">
        <Link href="/">
          <a className=' '>Logo</a>
        </Link>
      </span> 
      <span className='flex-1 flex justify-end'>

        <div className='group relative inline-block mx-gr3.5 '>
          <Link href="/account">
            <a className='button '>Account</a>
          </Link>
          <div className='hidden absolute bg-gray-100 w-gr8 top-gr6.5 right-0 group-hover:block'>
            <Link href="/">
              <a className='button block '>Login</a>
            </Link>
            <Link href="/">
              <a className='button block '>Sign up</a>
            </Link>
            <Link href="/">
              <a className='button block '>Contact</a>
            </Link>
          </div>
        </div>
        <div className='group relative inline-block mx-gr3.5 '>
          <Link href="/cart">
            <a className='button mt-gr3.5 '>Cart</a>
          </Link>
          <div className='hidden absolute bg-gray-100 w-gr8 top-gr6.5 right-0 group-hover:block'>
            <a className='block'>1</a>
            <a className='block'>2</a>
            <a className='block'>3</a>
          </div>
        </div>
      </span>
    </div>
  );
}
