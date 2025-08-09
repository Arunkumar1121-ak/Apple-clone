import React from 'react'

const Hero = () => {
    return (
        <section className='flex flex-col gap-4'>

            <div className=' relative'>
                <img className='mx-auto object-cover max-md:h-96' src="https://www.apple.com/v/home/cf/images/heroes/iphone-family/hero_iphone_family__fuz5j2v5xx6y_medium_2x.jpg" alt="" />

                <div className='absolute text-center top-10 left-1/3 md:translate-x-24'>
                    <h1 className=' text-3xl mb-2 md:text-7xl md:font-bold md:mb-7 '>iphone</h1>
                    <h1 className='md:text-3xl'>Meet the iphone 16 family</h1>
                </div>
                <div className='absolute top-1/3 left-1/4 translate-x-3 md:top-1/4 md:left-1/2 md:-translate-x-28'>
                    <button className='bg-blue-600 rounded-3xl p-1 text-white text-xl font-extralight  px-3 mr-3 md:m-6'>Learn more</button>
                    <button className='border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white rounded-3xl p-1 text-xl font-extralight  px-3'>Shop Iphone</button>
                </div>

                <div className='absolute top-2/4 left-1/4  translate-x-10 -translate-y-5 md:top-1/3 md:text-2xl md:left-1/3 md:translate-x-32 md:translate-y-5'><h1 className='flex gap-1'><p className='text-blue-600'>Build for</p><p className='text-pink-400'>Apple</p><p className='text-orange-400'>Intelligence</p></h1></div>


            </div>


{/* second */}

                        <div className=' relative'>
                <img className='mx-auto object-cover max-md:h-96 ' src="https://www.apple.com/v/home/cf/images/heroes/macbook-air/hero_macbook_air_avail__fpm99qgohx2e_medium_2x.jpg" alt="" />

                <div className='absolute text-center top-10 left-1/4 md:translate-x-32'>
                    <h1 className=' text-3xl mb-2 md:text-7xl md:font-bold md:mb-7 '>MacBook Air</h1>
                    <h1 className='md:text-3xl'>Skyblue colour</h1>
                    <h1 className='md:text-3xl'>Sky high performance with M4.</h1>
                </div>
                <div className='absolute top-1/3 left-1/4 translate-x-3 translate-y-3 md:top-1/4 md:left-1/2 md:-translate-x-28 md:translate-y-7'>
                    <button className='bg-blue-600 rounded-3xl p-1 text-white text-xl font-extralight  px-3 mr-3 md:m-6'>Learn more</button>
                    <button className='border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white rounded-3xl p-1 text-xl font-extralight  px-3'>Buy</button>
                </div>

                <div className='absolute bottom-6 left-1/4  translate-x-10 -translate-y-5 md:bottom-28 md:text-2xl md:left-1/3 md:translate-x-28 md:translate-y-5'><h1 className='flex gap-1'><p className='text-blue-600'
                >Build for</p><p className='text-pink-400'>Apple</p><p className='text-orange-400'>Intelligence</p></h1></div>


            </div>

        </section>







    )
}

export default Hero