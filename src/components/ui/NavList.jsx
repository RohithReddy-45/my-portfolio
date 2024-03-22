import { Link } from 'react-scroll';

function NavList({ listName, onClick }) {
  return (
    <li
      className="trasition-colors cursor-pointer rounded-lg px-3 py-2 text-lg font-medium duration-300 hover:bg-zinc-100 active:bg-zinc-200 md:text-base"
      onClick={onClick}
    >
      <Link to={listName} href={`/${listName}`} smooth duration={500}>
        {listName}
      </Link>
    </li>
  );
}

export default NavList;
