function ProjectTags({ tags }) {
  return (
    <ul className="flex flex-wrap items-center gap-2 text-xs font-medium text-secondary">
      {tags.map((tag) => (
        <li className="bg-bgsecondary rounded-xl px-2.5 py-1.5" key={tag}>
          {tag}
        </li>
      ))}
    </ul>
  );
}

export default ProjectTags;
