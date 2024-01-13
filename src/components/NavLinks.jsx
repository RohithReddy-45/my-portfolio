import Button from './Button';
import NavList from './NavList';
import { links } from '../data/data';

function NavLinks({ className, onClick }) {
  return (
    <>
      <ul className={className}>
        {links.map((link) => (
          <NavList key={link.id} listName={link.link} onClick={onClick} />
        ))}
      </ul>

      <Button type="primary" link="https://github.com/RohithReddy-45">
        My github
      </Button>
    </>
  );
}

export default NavLinks;
