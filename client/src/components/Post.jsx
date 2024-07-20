import React from 'react'



const Post = () => {

    const ImageUrl = "https://images.unsplash.com/photo-1523983388277-336a66bf9bcd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

    return (
    <div className='flex justify-center items-center  gap-4  my-4'>
        {/* Image */}
        <div>
            <img src={ImageUrl} alt="blog-image" className='w-[90%] rounded-md m-2 object-contain' />
        </div>
        {/* Detail */}
        <div>
            <div className='text-2xl font-semibold'>Title</div>
            <div className='my-2'><span className='text-lg font-semibold mr-4'>Author</span><span>Date</span></div>
            <div>{"is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."}</div>
        </div>
    </div>
  )
}

export default Post