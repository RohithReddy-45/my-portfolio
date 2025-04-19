import { useInView } from 'framer-motion';
import { useEffect, useMemo, useRef, useState } from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';

import Project from './Project';
import { projects } from '../../data/data';

function Projects() {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [tabUnderlineWidth, setTabUnderlineWidth] = useState(0);
  const [tabUnderlineLeft, setTabUnderlineLeft] = useState(0);
  const tabsRef = useRef([]);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mobileApps = useMemo(
    () => projects.filter((project) => project.type === 'MobileApp'),
    [],
  );
  const webApps = useMemo(
    () => projects.filter((project) => project.type === 'WebApp'),
    [],
  );

  const tabsData = [
    {
      label: 'Web applications',
      content: webApps,
    },
    {
      label: 'Mobile applications',
      content: mobileApps,
    },
  ];
  useEffect(() => {
    function setTabPosition() {
      const currentTab = tabsRef.current[activeTabIndex];
      setTabUnderlineLeft(currentTab?.offsetLeft ?? 0);
      setTabUnderlineWidth(currentTab?.clientWidth ?? 0);
    }

    setTabPosition();
    window.addEventListener('resize', setTabPosition);

    return () => window.removeEventListener('resize', setTabPosition);
  }, [activeTabIndex]);

  return (
    <div
      className="container mt-12 flex max-w-screen-2xl flex-col gap-3 px-6 py-3 text-center md:px-16"
      id="Projects"
      ref={ref}
    >
      <h1
        className="text-3xl font-bold"
        style={{
          opacity: isInView ? 1 : 0,
          transform: isInView ? 'none' : 'translateY(20px)',
          transition: 'all 0.2s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s',
          transitionDelay: '0.3s',
        }}
      >
        Cool stuff I’ve built
      </h1>
      <p
        className="mx-auto w-4/5 font-medium text-secondary"
        style={{
          opacity: isInView ? 1 : 0,
          transform: isInView ? 'none' : 'translateY(20px)',
          transition: 'all 0.3s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s',
          transitionDelay: '0.3s',
        }}
      >
        These are some of the websites I have built. I have used a variety of
        technologies to build these websites including Javascript, Typescript,
        HTML and CSS. I have also used a variety of frameworks and libraries
        including React, Next JS, React Native, Express.js, Tailwind CSS
      </p>
      <div className="flex items-center justify-center">
        <div
          className="relative"
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? 'none' : 'translateY(20px)',
            transition: 'all 0.2s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s',
            transitionDelay: '0.3s',
          }}
        >
          <div className="flex space-x-6 border-b font-medium">
            {tabsData.map((tab, idx) => {
              return (
                <button
                  type='button'
                  key={idx}
                  ref={(el) => (tabsRef.current[idx] = el)}
                  className="pb-3 pt-2"
                  onClick={() => setActiveTabIndex(idx)}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
          <span
            className="absolute bottom-0 block h-1 bg-blue-500 transition-all duration-300"
            style={{ left: tabUnderlineLeft, width: tabUnderlineWidth }}
          />
        </div>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 md:gap-y-16">
        {tabsData[activeTabIndex].content.map((project) => (
          <Project key={project.id} {...project} />
        ))}
      </div>

      <div className="mt-4 flex items-center justify-center text-secondary">
        <a
          href="https://github.com/RohithReddy-45?tab=repositories"
          target="_blank"
          rel="noreferrer"
          className="mt-3 text-sm hover:underline md:mt-6 md:text-lg"
        >
          View more on github{' '}
          <span className="inline-block">
            <FaExternalLinkAlt size={10} />
          </span>
        </a>
      </div>
    </div>
  );
}

export default Projects;
