import React from 'react'
import { Link } from 'react-router-dom'
const Articles = ({artical}) => {
  return (
    < >
         {artical.map((artical,index)=>{
            return  <div className='p-4 md:w-1/2' key={index}>
              <div className='h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden'>
                <Link to={`/article/${artical.name}`}>
                  <img className='lg:h-48 md:h-36 w-full object-cover object-center' src={artical.thumbnail} alt="blog" />
                </Link>
                <div className='p-6'>
                  <Link key={index} to={`/article/${artical.name}`}>
                    <h3 className='text-lg font-medium text-gray-900 mb-3'>{artical.title}</h3>
                  </Link>
                  <p className='leading-relaxed mb-3'>{artical.content[0].substring(0,115)}...</p>
                  <div className='flex item-center flex-wrap'>
                    <Link className='text-indigo-500 inline-flex item-center md:mb-2 mb:mb-0' to={`/article/${artical.name}`}>
                       Learn more
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          })}
    </>
  )
}

export default Articles