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
  const people = [
    {
      name: 'Leslie Alexander',
      role: 'Co-Founder / CEO',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    // More people...
  ];
  return (
    <div className='py-10'>
      <div className='relative overflow-hidden bg-white'>
        <div className='pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40'>
          <div className='relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8'>
            <div className='sm:max-w-lg'>
              <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl'>
                Welcome to my corner of the internet.
              </h1>
              <p className='mt-4 text-xl text-gray-500'>
                Hey, my name is Lauryn and welcome to my personal website! I am
                junior software engineer, proud light mode user and magazine
                collector.
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
                        <div className='h-64 w-44 overflow-hidden rounded-lg'>
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
      <div className='bg-white py-24 sm:py-32'>
        <div className='mx-auto grid max-w-7xl gap-20 px-6 lg:px-8 xl:grid-cols-3'>
          <div className='max-w-xl'>
            <h2 className='text-pretty text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl'>
              Meet our leadership
            </h2>
            <p className='mt-6 text-lg/8 text-gray-600'>
              We’re a dynamic group of individuals who are passionate about what
              we do and dedicated to delivering the best results for our
              clients.
            </p>
          </div>
          <ul
            role='list'
            className='grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2'
          >
            {people.map((person) => (
              <li key={person.name}>
                <div className='flex items-center gap-x-6'>
                  <img
                    alt=''
                    src={person.imageUrl}
                    className='size-16 rounded-full'
                  />
                  <div>
                    <h3 className='text-base/7 font-semibold tracking-tight text-gray-900'>
                      {person.name}
                    </h3>
                    <p className='text-sm/6 font-semibold text-indigo-600'>
                      {person.role}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Link className='hidden' href='/'>
        Home
      </Link>
    </div>
  );
}
