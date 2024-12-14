import Link from 'next/link';
import Image from 'next/image';
import image1 from '../../public/home/1.jpg';
import image2 from '../../public/home/2.jpg';
import image3 from '../../public/home/3.jpg';
import image4 from '../../public/home/4.jpg';
import image5 from '../../public/home/5.jpg';
import image6 from '../../public/home/6.jpg';
import image7 from '../../public/home/7.jpg';
export default function Page() {
  return (
    <div className='py-32'>
      <div className='relative overflow-hidden bg-white'>
        <div className='pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40'>
          <div className='relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8'>
            <div className='sm:max-w-lg'>
              <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl'>
                Welcome to my corner of the internet.
              </h1>
              <p className='mt-4 text-xl text-gray-500'>
                Hi! I am Lauryn Robson. A junior software Proud light mode user
                and magazine collector.
              </p>
            </div>
            <div>
              <div className='mt-10'>
                {/* Decorative image grid */}
                <div
                  aria-hidden='true'
                  className='pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl'
                >
                  <div className='absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8'>
                    <div className='flex items-center space-x-6 lg:space-x-8'>
                      <div className='grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8'>
                        <div className='h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100'>
                          <Image
                            alt=''
                            src={image1}
                            className='size-full object-cover'
                          />
                        </div>
                        <div className='h-64 w-44 overflow-hidden rounded-lg'>
                          <Image
                            alt=''
                            src={image2}
                            className='size-full object-cover'
                          />
                        </div>
                      </div>
                      <div className='grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8'>
                        <div className='h-64 w-44 overflow-hidden rounded-lg'>
                          <Image
                            alt=''
                            src={image3}
                            className='size-full object-cover'
                          />
                        </div>
                        <div className='h-64 w-44 overflow-hidden rounded-lg'>
                          <Image
                            alt=''
                            src={image4}
                            className='size-full object-cover'
                          />
                        </div>
                        <div className='h-64 w-44 overflow-hidden rounded-lg'>
                          <Image
                            alt=''
                            src={image5}
                            className='size-full object-cover'
                          />
                        </div>
                      </div>
                      <div className='grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8'>
                        <div className='h-64 w-56 overflow-hidden rounded-lg'>
                          <Image
                            alt=''
                            src={image6}
                            className='size-full object-cover'
                          />
                        </div>
                        <div className='h-64 w-44 overflow-hidden rounded-lg'>
                          <Image
                            alt=''
                            src={image7}
                            className='size-full object-cover'
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Link className='lg:hidden text-3xl font-bold underline' href='/'>
        Home
      </Link>
    </div>
  );
}
