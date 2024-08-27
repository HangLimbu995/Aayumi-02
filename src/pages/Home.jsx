import React from 'react'
import ItemCard from '../components/ItemCard'
import {Link} from 'react-router-dom'
import TextSliderAnimation from '../components/TextSliderAnimation'

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

     

      {/* Small INTRO */}
      <section className='w-full min-h-[100vh] h-full ] bg-red-900 grid place-items-center mt-9'>
        <div className='w-full md:w-[80%] py-2 px-4 mt-[30px]'>
          <h1 className='fade-up leading-[1em] font-bold text-5xl'>Providing Nationwide Services in all over NEPAL.</h1>
          <p className='fade-up mt-5 text-[19px]'>VEC is a constantly growing business cooperating with leading engineers, designers and contractors, with vast expertise in BIM, virtual design, and construction technologies. Since the foundation, we have delivered over 325+ nationwide projects. And with about 200 BIM virtual construction experts, our company is among the United States’ most experienced BIM and VDC vendors. That allows us to assist customers in designing, building, and managing projects more effectively, leverage BIM advantages, and ensure the proper project lifecycle.</p>
          <div className='grid place-items-center gap-5 grid-cols-2 md:grid-cols-3'>
            <div className='fade-up w-full h-full p-2 mt-9 grid place-items-center'>
              <h1 className='font-bold'>50+</h1>
              <small className='text-[16px]'>Employes in over 4 office.</small>
            </div>
            <div className='fade-up w-full h-full p-2 mt-9 grid place-items-center'>
              <h1 className='font-bold'>10+</h1>
              <small className='text-[16px]'>Projects Completed.</small>
            </div>
            <div className='fade-up w-full h-full p-2 mt-9 grid place-items-center'>
              <h1 className='font-bold'>20+</h1>
              <small className='text-[16px]'>Years of Experience.</small>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className='w-full min-h-[100vh] flex justify-center items-center'>
        <div className='md:w-[90%]'>
          <div className='w-full h-full p-2 grid place-items-center'>
            <div className='text-stroke w-full flex gap-5 mt-9' style={{ '--stroke-color': 'red' }}>
              <h2 className='hover:text-red-800 hover:border-none'>FEATURED</h2>
              <h2 className='hover:text-red-800'>PROJECT</h2>
            </div>
            <p className='text-[20px] font-[400]'>VEC’s team of BIM virtual construction experts has completed dozens of notable projects across the country. From pharma life sciences and healthcare to education, aviation, and commercial real estate, we are a top vendor for companies from different industries.</p>
          </div>
          <div className='relative w-full h-full p-2 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 place-items-center gap-5 mt-5'>
            {projectCardData.map((project, index) => (
              <ItemCard key={project.id} project={project} index={index} />
            ))}
          </div>
          <div className='grid place-items-center mt-9'>
            <Link to='#'><button className='border-none text-white py-3 px-5 bg-red-800 rounded-md hover:scale-110 transition-all duration-300 ease-in'>see more projects</button></Link>
          </div>
        </div>
      </section>

      {/* MOVING TEXT */}
    <section className='w-full h-full'>
    <TextSliderAnimation />
    </section>

 

    </div>
  )
}




const projectCardData = [
  {
    id: 1,
    img: 'https://mbluxury1.s3.amazonaws.com/2024/02/08084545/Eco-Residency-Background-Image-1.jpg',
    hoverImg: 'https://images.pexels.com/photos/439416/pexels-photo-439416.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Eco Resdidency',
    location: 'kathmandu',
    category: 'hydro power electricity'
  },
  {
    id: 2,
    img: 'https://mbluxury1.s3.amazonaws.com/2024/02/08084545/Eco-Residency-Background-Image-1.jpg',
    hoverImg: 'https://images.pexels.com/photos/439416/pexels-photo-439416.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Eco Resdidency',
    location: 'kathmandu',
    category: 'hydro power electricity'
  },
  {
    id: 3,
    img: 'https://mbluxury1.s3.amazonaws.com/2024/02/08084545/Eco-Residency-Background-Image-1.jpg',
    hoverImg: 'https://images.pexels.com/photos/439416/pexels-photo-439416.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Eco Resdidency',
    location: 'kathmandu',
    category: 'hydro power electricity'
  },
  {
    id: 4,
    img: 'https://mbluxury1.s3.amazonaws.com/2024/02/08084545/Eco-Residency-Background-Image-1.jpg',
    hoverImg: 'https://images.pexels.com/photos/439416/pexels-photo-439416.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Eco Resdidency',
    location: 'kathmandu',
    category: 'hydro power electricity'
  },
];

export default Home