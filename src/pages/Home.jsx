import React from 'react'

const Home = () => {
  return (
    <div className='relative w-full h-full'>
      <div className='w-full min-h-[100vh]' style={{ backgroundImage: "url('https://cdn.prod.website-files.com/61ae5cdbf6928b108c7f02cd/6662f10a4ebbcc7f39536199_BG.png')", backgroundPosition: '50%', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
        <div className='relative w-full h-[100vh] flex flex-col-reverse xl:flex-row justify-between items-center '>
          <div className='w-full h-full flex justify-center items-center px-2'>
            <div className='relative w-[90%] ml-9 flex flex-col justify-center items-center px-2'>
              <h1 className='text-[34px] md:text-[50px] leading-9 md:leading-[57.5px] font-[700] text-red-900 '>creating SYNERGY BETWEEN BIM AND CONSTRUCTION</h1>
              <p className='text-[16px] md:text-[24px] leading-6 md:leading-[37.2px] font-[400] mt-5'>
                VEC is a leading multidisciplinary firm specializing in construction technology services such as BIM and VDC. We help companies in the Architecture, Engineering, and Construction (AEC) industry plan, design, and build more efficiently and effectively.
              </p>
              <button className='absolute text-white -bottom-[70px] left-0 py-4 px-6 bg-red-900 rounded-xl'>view portfolio</button>
            </div>
          </div>

          <img className='w-[95%] h-[40vh] md:h-[55vh] xl:h-[70vh] object-cover  mt-9 xl:-mr-[50px]' src='https://cdn.prod.website-files.com/61ae5cdbf6928b108c7f02cd/6662db15bd9bd34aa6f5f470_hero-banner-p-1080.png'></img>
        </div>
      </div>

<div className='hoverBox relative bg-pink-500 '>
<p className='topic'>hello</p>
<div className='item-show absolute top-5 w-[30vw] h-[20vh] bg-blue-900'>this is sub hover</div>
</div>
    </div>
  )
}

export default Home