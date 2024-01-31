import React from 'react'
import articleContent from './ArticalContent'

import Articles from './components/Articles'
function ArticalsList() {
  return (
    <div>
      <h1 className='sm:text-4xl text-2xl font-bold my-6 text-gray-900'>Articles List</h1>
      <div className='container py-4 mx-auto'>
        <div className='flex flex-wrap -m-4'>
          <Articles artical={articleContent}/>
        </div>
      </div>
    </div>
  )
}

export default ArticalsList