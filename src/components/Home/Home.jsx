import { Typewriter } from 'react-simple-typewriter';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-scroll';

import Button from '../ui/Button';
import TechStack from './TechStack';

function Home() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <main>
      <div
        className="container max-w-screen-2xl p-6 text-center md:py-12"
        id="Home"
        ref={ref}
      >
        <div className="mt-10 flex flex-col items-center gap-3 lg:mt-14 lg:gap-5">
          <p
            style={{
              opacity: isInView ? 1 : 0,
              transform: isInView ? 'none' : 'translateY(20px)',
              transition: 'all 0.2s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s',
            }}
            className="text-lg font-semibold md:text-xl lg:text-3xl"
          >
            {"Hey, I'm Rohith reddy. I am a"}
          </p>
          <h1
            className="text-2xl font-bold md:text-4xl lg:text-6xl"
            style={{
              opacity: isInView ? 1 : 0,
              transform: isInView ? 'none' : 'translateY(20px)',
              transition: 'all 0.3s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s',
            }}
          >
            <Typewriter
              words={['Frontend', 'Web', 'Fullstack']}
              loop={2}
              cursor
              cursorStyle="-"
              cursorBlinking={false}
              typeSpeed={150}
              deleteSpeed={30}
              delaySpeed={1200}
            />{' '}
            Developer
          </h1>
          <p
            style={{
              opacity: isInView ? 1 : 0,
              transform: isInView ? 'none' : 'translateY(20px)',
              transition: 'all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
            }}
            className="mx-auto w-4/5 font-medium text-secondary md:text-lg lg:text-xl"
          >
            {
              "I mainly work with React to bring ideas to life and make them look awesome. Let's team up and create something amazing together!"
            }
          </p>
        </div>
        <div
          className="my-10 flex items-center justify-center gap-2 xs:gap-4 md:gap-12 lg:my-14"
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? 'none' : 'translateY(30px)',
            transition: 'all 0.6s cubic-bezier(0.17, 0.55, 0.55, 1) 0.6s',
          }}
        >
          <Link to="Projects" smooth duration={500}>
            <Button className="md:text-lg">My projects</Button>
          </Link>
          <Button
            className="md:text-lg"
            type="secondary"
            link="https://drive.google.com/file/d/1gqkaKUI0aditeQPG_qymmwqJe8Ag3DHp/view?usp=drivesdk"
          >
            Resume
          </Button>
        </div>
      </div>
      <TechStack />
    </main>
  );
}

export default Home;
