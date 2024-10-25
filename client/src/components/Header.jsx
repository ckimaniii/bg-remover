import React from 'react'
import { assets } from '../assets/assets'
import { ArrowUpFromLine } from 'lucide-react';

const Header = () => {
  return (
    <div className='flex items-center justify-between max-sm:flex-col-reverse gap-y-10 px-4 mt-10 lg:px-44 sm:mt-20'>
        {/* Left side */}
        <div className='' >
          <ArrowUpFromLine/>
            <h1 className='text-4xl xl:text-5xl 2xl:text-6xl font-bold text-neutral-700 leading-tight'>Remove the <br/> <span className='text-blue-600'>background </span>from <br/>images for free</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis facilis  adipisci a <br/>omnis fugit dicta eius officia totam dolores repellendus facere harum, </p>
            <div >
                <input type="file" name='' id='upload1' hidden />
                <label className='inline-flex gap-3 px-8 py-3.5 rounded-full cursor-pointer bg-blue-600 text-white hover:scale-105 transition-all duration-700' htmlFor="upload1">
                    <img src={assets.upload_btn_icon} alt="" />
                    <p>Upload your image</p>
                </label>
            </div>

        </div>
        {/* Right side */}
        <div>

        </div>
    </div>
  )
}

export default Header