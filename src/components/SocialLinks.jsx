import { socialLinks } from '../data/data';

function SocialLinks() {
  return (
    <div className="flex gap-x-2">
      {socialLinks.map((link) => (
        <a
          href={link.link}
          target="_blank"
          rel="noreferrer"
          key={link.name}
          className="text-secondary transition-all duration-300 hover:scale-110"
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
}

export default SocialLinks;
