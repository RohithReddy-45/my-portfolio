import Skills from './Skills';
import SocialLinks from '../SocialLinks';

function About() {
  return (
    <div className="mt-4 bg-bgsecondary py-3 md:px-6" id="About">
      <div className="container mx-auto">
        <h1 className="my-6 text-center text-3xl font-bold">About me</h1>
        <div className="flex max-w-screen-2xl flex-col items-center gap-5 px-6 py-3 md:flex-row md:items-start md:gap-14 lg:gap-24">
          <div className="flex flex-col gap-4 p-3 text-center md:w-[50%] md:text-left">
            <h2 className="text-lg font-semibold">Who am I?</h2>

            <p className="font-medium text-secondary">
              {
                "Hello, I'm Rohith, a front-end developer based in India. I have a passion for coding and design, and I take pleasure in creating visually appealing websites that function seamlessly. Learning is my approach, and I enjoy exploring and experimenting with new technologies. I'm always eager to enhance my skills and contribute to exciting projects. Feel free to "
              }
              <a
                className="text-blue-500 hover:underline"
                href="mailto:samreddyrohith@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                email
              </a>{' '}
              me if you have any questions or just want to chat!
            </p>
            <div className="mt-2 flex flex-col items-center gap-2 md:items-start">
              <p className="font-semibold">Check me out</p>
              <SocialLinks />
            </div>
          </div>
          <Skills />
        </div>
      </div>
    </div>
  );
}

export default About;
