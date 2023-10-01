import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import chatImg from '../public/assets/projects/WhatsChatt.png';
import bushwritersImg from '../public/assets/projects/BushWriters1.png'
import storeImg from '../public/assets/projects/Store.png'
import ProjectItem from './ProjectItem';
import BeannsoftsImg from '../public/assets/projects/Beannsofts.png'
import IntasefImg from '../public/assets/projects/Intasef.png'

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
        <ProjectItem
            title='An Online Escrow Platform'
            backgroundImg={IntasefImg}
            projectUrl='/escrow'
            tech='Flask, Javascript, Postgres, Redis, Tailwind'
          />
          <ProjectItem
            title='A Crypto Trading Platform'
            backgroundImg={BeannsoftsImg}
            projectUrl='/crypto'
            tech='Flask Vue'

          />
          <ProjectItem
            title='Freelance Account Marketplace'
            backgroundImg={bushwritersImg}
            projectUrl='/bushwriters'
            tech='Flask, Javascript, Postgres'
          />
          <ProjectItem
            title='Chat Application'
            backgroundImg={chatImg}
            projectUrl='/chat'
            tech='Flask Javascript'

          />
          <ProjectItem
            title='Multivendor Store'
            backgroundImg={storeImg}
            projectUrl='/store'
            tech='Django Javascript Tailwind, Postgres'

          />
          {/* <ProjectItem
            title='Netflix App'
            backgroundImg={netflixImg}
            projectUrl='/netflix'
            tech='React JS'

          />
          <ProjectItem
            title='Twitch UI'
            backgroundImg={twitchImg}
            projectUrl='/twitch'
            tech='Next JS'

          /> */}
        </div>
      </div>
    </div>
  );
};

export default Projects;
