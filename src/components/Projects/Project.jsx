import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

import Button from '../ui/Button';
import ProjectTags from './ProjectTags';

function Project({ name, description, image, tags, liveSite, githubLink }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="flex flex-col gap-2 text-start" ref={ref}>
      <div
        className="group relative h-full max-w-[700px] overflow-y-auto"
        style={{
          opacity: isInView ? 1 : 0,
          transform: isInView ? 'none' : 'translateY(20px)',
          transition: 'all 0.4s cubic-bezier(0.17, 0.55, 0.55, 1) 0.4s',
          transitionDelay: '0.5s',
        }}
      >
        <img
          loading="lazy"
          src={image}
          alt={`${name} image`}
          className="rounded-xl object-center"
        />

        <div className="bg-gradient absolute inset-0 flex flex-col justify-around rounded-xl p-2 text-center text-xs text-white opacity-0 transition group-hover:opacity-100 group-hover:duration-1000 xs:text-lg sm:text-2xl md:p-4 md:text-sm lg:text-xl">
          <p className="font-semibold">{description}</p>
          <div className="flex items-center justify-around">
            <Button
              link={githubLink}
              className="flex items-center justify-center gap-1 text-white ring-white transition-all duration-300 hover:bg-white hover:text-black"
              type="secondary"
            >
              View code{' '}
              <span>
                <FaGithub />
              </span>
            </Button>
            <Button
              type="secondary"
              link={liveSite}
              className="flex items-center justify-center gap-1 text-white ring-white transition-all duration-300 hover:bg-white hover:text-black"
            >
              View site
              <span>
                <FaExternalLinkAlt />
              </span>
            </Button>
          </div>
        </div>
      </div>

      <p
        className="text-xl font-semibold lg:text-2xl"
        style={{
          opacity: isInView ? 1 : 0,
          transform: isInView ? 'none' : 'translateY(20px)',
          transition: 'all 0.4s cubic-bezier(0.17, 0.55, 0.55, 1) 0.4s',
          transitionDelay: '0.5s',
        }}
      >
        {name}
      </p>
      <ProjectTags tags={tags} ref={ref} />
    </div>
  );
}

export default Project;
