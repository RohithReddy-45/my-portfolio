import Button from "./Button";
import { links } from "../../data/data";
import { Link } from "react-scroll";
import { memo } from "react";

const NavLinks = memo(({ className, handleNav }) => {
	return (
		<>
			<ul className={className}>
				{links.map((link) => (
					<li
						key={link.id}
						className="cursor-pointer rounded-lg px-3 py-2 text-lg font-medium transition-all duration-300 hover:bg-zinc-100 active:bg-zinc-200 md:text-base"
					>
						<Link
							to={link.link}
							href={`/${link.link}`}
							smooth
							duration={500}
							onClick={handleNav}
						>
							{link.link}
						</Link>
					</li>
				))}
			</ul>
			<Button type="primary" link="https://github.com/RohithReddy-45">
				My github
			</Button>
		</>
	);
});

NavLinks.displayName = "NavLinks";
export default NavLinks;
