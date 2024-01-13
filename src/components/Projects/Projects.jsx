import Project from './Project';
import { projects } from '../../data/data';
import { FaExternalLinkAlt } from 'react-icons/fa';

function Projects() {
  return (
    <div
      className="mx-auto mt-12 flex max-w-screen-2xl flex-col gap-3 px-6 py-3 text-center md:px-16"
      id="Projects"
    >
      <h1 className="text-3xl font-bold">Cool stuff I’ve built</h1>
      <p className="mx-auto w-4/5 font-medium text-secondary">
        These are some of the websites I have built. I have used a variety of
        technologies to build these websites including Javascript, Typescript,
        HTML and CSS. I have also used a variety of frameworks and libraries
        including React, Next JS, Tailwind CSS
      </p>
      <div className="mt-4 grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 md:gap-y-16">
        {projects.map((project) => (
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
