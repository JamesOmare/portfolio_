import Head from 'next/head'
import About from '../components/About'
import Contact from '../components/Contact'
import Main from '../components/Main'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Blog from '../components/Blog'
import Blog2 from '../components/Blog2'
import Blog3 from '../components/Blog3'
import Contact2 from '../components/Contact2'
import Timeline from '@/components/Timeline'
import Test1 from '@/components/Test1'



export default function Home() {
  return (
    <div>
      <Head>
        <title>James | Full Stack Developer</title>
        <meta name="description" content="I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences." />
        <link rel="icon" href="/fav.png" />
      </Head>
    <Main />
    <About />
    <Skills />
    {/* <Blog /> */}
    {/* <Test1 /> */}
    {/* <Blog2 /> */}
    {/* <Blog3 /> */}
    
    {/* <Timeline /> */}
    <Projects />
    {/* <Contact2 /> */}
    <Contact />
    
    </div>
  )
}
