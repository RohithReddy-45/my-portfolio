import { FaGithub } from 'react-icons/fa';
import { FaExternalLinkAlt } from 'react-icons/fa';

import Button from '../Button';
import ProjectTags from './ProjectTags';

function Project({ name, description, image, tags, liveSite, githubLink }) {
  return (
    <div className="flex flex-col gap-2 text-start">
      <div className="group relative overflow-y-auto">
        <img src={image} alt="" className="h-auto w-auto rounded-xl" />
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

      <p className="text-xl font-semibold lg:text-2xl">{name}</p>
      <ProjectTags tags={tags} />
    </div>
  );
}

export default Project;
