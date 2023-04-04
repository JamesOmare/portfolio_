import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/about.jpg';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>
            About
          </p>
          <h2 className='py-4'>Who I Am</h2>
          <p className='py-2 text-gray-600'>
            As a full stack developer with expertise in both frontend and backend technologies, 
            I bring a valuable skill set to any development project. My proficiency in frontend 
            technologies such as JavaScript, React, and Next.js allows me to create engaging and 
            responsive user interfaces, while my knowledge of backend technologies such as Python 
            and Java enables me to design and implement scalable, efficient, and secure server-side 
            solutions. My ability to seamlessly integrate these technologies allows me to build complex
            and feature-rich web applications. I am also capable of collaborating with other 
            developers and stakeholders to deliver high-quality software products on time and 
            within budget.
          </p>
          <p className='py-2 text-gray-600'>
          As a recent graduate in Information Technology, I bring a fresh perspective and up-to-date knowledge to my role as a full stack developer.
          With my academic training and hands-on experience, I am well-equipped to take on the challenges of the modern web development landscape. 
          I have a keen eye for detail and a passion for creating high-quality, user-focused solutions.
          I am also a strong collaborator and can work effectively as part of a team, communicating complex technical concepts to both technical 
          and non-technical stakeholders. My diverse skill set and dedication to my craft make me eager to contribute my talents to the development
           of innovative and impactful software solutions.
          
          </p>
          <Link href='/#projects'>

            <p class="inline-flex items-center justify-center p-5 text-base font-medium text-gray-500 rounded-lg bg-gray-50 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white">                                            
                <span class="w-full">Check out some of my latest projects.</span>
                <svg aria-hidden="true" class="w-6 h-6 ml-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </p> 

          </Link>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={AboutImg} className='rounded-xl' alt='/' />
        </div>
      </div>
    </div>
  );
};

export default About;
