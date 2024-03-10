import { socialLinks } from '../data/data';

function Footer() {
  return (
    <div className="mt-5 flex flex-col items-center justify-center gap-3 px-4 py-5 text-center">
      <div className="flex gap-x-2">
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
      <p className="text-sm">Design and built by Rohith reddy</p>
    </div>
  );
}

export default Footer;
