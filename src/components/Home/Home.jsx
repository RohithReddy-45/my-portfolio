import { Typewriter } from 'react-simple-typewriter';
import { Link } from 'react-scroll';
import Button from '../Button';
import TechStack from './TechStack';

function Home() {
  return (
    <>
      <div className="container max-w-screen-2xl p-6 text-center" id="Home">
        <div className="mt-10 flex flex-col items-center gap-3 lg:mt-14 lg:gap-5">
          <p className="text-xl font-semibold lg:text-3xl">
            {"Hey, I'm Rohith reddy. I am a"}
          </p>
          <h1 className="text-4xl font-bold lg:text-6xl">
            <Typewriter
              words={['Frontend', 'Web', 'Fullstack']}
              loop={5}
              cursor
              cursorStyle="-"
              cursorBlinking={false}
              typeSpeed={90}
              deleteSpeed={50}
              delaySpeed={1200}
            />{' '}
            Developer
          </h1>
          <p className="mx-auto w-4/5 text-lg font-medium text-secondary lg:text-xl">
            {
              "I mainly work with React to bring ideas to life and make them look awesome. Let's team up and create something amazing together!"
            }
          </p>
        </div>
        <div className="my-10 flex items-center justify-center gap-2 xs:gap-4 md:gap-12 lg:my-14">
          <Link to="Projects" smooth duration={500}>
            <Button className="md:text-lg">My projects</Button>
          </Link>
          <Button
            className="md:text-lg"
            type="secondary"
            link="https://drive.google.com/file/d/1ca0Yc6Xicbk1VgL4bN3ZtUZ35qNThsMD/view?usp=drivesdk"
          >
            Resume
          </Button>
        </div>
      </div>
      <TechStack />
    </>
  );
}

export default Home;
