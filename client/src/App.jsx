import React from 'react'

const App = () => {
  return (
    <section className=''>
      {/* NavBar */}
      <div className='max-w-6xl text-6xl py-4 border-2 border-black mx-auto flex justify-between items-center'>
        <div>MyBlog</div>
        <div className='flex justify-between gap-6 items-center'>
          <div><a href="">Login</a></div>
          <div><a href="">Register</a></div>

        </div>
      </div>
    </section>
  )
}

export default App