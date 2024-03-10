import { useInView } from 'framer-motion';
import { useRef } from 'react';

import Skills from './Skills';
import { socialLinks } from '../../data/data';

function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }, { threshold: 0.2 });

  return (
    <div className="mt-4 bg-bgsecondary py-3 md:px-6" id="About">
      <div className="container" ref={ref}>
        <h1
          className="my-6 text-center text-3xl font-bold"
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? 'none' : 'translateY(20px)',
            transition: 'all 0.2s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s',
            transitionDelay: '0.2s',
          }}
        >
          About me
        </h1>
        <div className="flex max-w-screen-2xl flex-col items-center gap-5 px-4 py-3 md:flex-row md:items-start md:gap-14 lg:gap-24">
          <div className="flex flex-col gap-4 p-3 text-center md:w-[50%] md:text-left">
            <h2
              className="text-lg font-semibold"
              style={{
                opacity: isInView ? 1 : 0,
                transform: isInView ? 'none' : 'translateY(20px)',
                transition: 'all 0.3s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s',
                transitionDelay: '0.2s',
              }}
            >
              Who am I?
            </h2>

            <p
              className="font-medium text-secondary"
              style={{
                opacity: isInView ? 1 : 0,
                transform: isInView ? 'none' : 'translateY(30px)',
                transition: 'all 0.4s cubic-bezier(0.17, 0.55, 0.55, 1) 0.4s',
                transitionDelay: '0.5s',
              }}
            >
              {
                "Hello, I'm Rohith, a front-end developer based in India. I have a passion for coding and design, and I take pleasure in creating visually appealing websites that function seamlessly. Learning is my approach, and I enjoy exploring and experimenting with new technologies. I'm always eager to enhance my skills and contribute to exciting projects. Feel free to "
              }
              <a
                className="text-blue-800 hover:underline"
                href="mailto:samreddyrohith@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                email
              </a>{' '}
              me if you have any questions or just want to chat!
            </p>
            <div className="mt-2 flex flex-col items-center gap-2 md:items-start">
              <p
                className="font-semibold"
                style={{
                  opacity: isInView ? 1 : 0,
                  transform: isInView ? 'none' : 'translateY(30px)',
                  transition: 'all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
                  transitionDelay: '0.5s',
                }}
              >
                Check me out
              </p>
              <div
                className="flex gap-x-2"
                style={{
                  opacity: isInView ? 1 : 0,
                  transform: isInView ? 'none' : 'translateY(30px)',
                  transition: 'all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
                  transitionDelay: '0.5s',
                }}
              >
                {socialLinks.map((link) => (
                  <a
                    href={link.link}
                    target="_blank"
                    rel="noreferrer"
                    key={link.name}
                    aria-label={link.name}
                    title={link.name}
                    className="text-secondary transition-all duration-300 hover:scale-110"
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <Skills ref={ref} />
        </div>
      </div>
    </div>
  );
}

export default About;
