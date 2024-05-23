import { useInView } from 'framer-motion';
import { forwardRef } from 'react';

const ProjectTags = forwardRef(({ tags }, ref) => {
  const isInView = useInView(ref, { once: true });

  return (
    <ul
      className="flex flex-wrap items-center gap-2 px-1 text-xs font-medium text-secondary"
      ref={ref}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? 'none' : 'translateY(20px)',
        transition: 'all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
        transitionDelay: '0.5s',
      }}
    >
      {tags.map((tag) => (
        <li className="rounded-xl bg-bgsecondary px-2.5 py-1.5" key={tag}>
          {tag}
        </li>
      ))}
    </ul>
  );
});

ProjectTags.displayName = 'ProjectTags';

export default ProjectTags;
