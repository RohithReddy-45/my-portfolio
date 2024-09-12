import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export const projects = [
	{
		id: 1,
		name: "Vscode portfolio",
		description: "A mobile app portfolio which resembles Vscode editor.",
		image: "/assets/vscodeportfolio.jpg",
		githubLink: "https://github.com/RohithReddy-45/vscode-portfolio",
		liveSite: "https://www.youtube.com/shorts/vnpea1uDrdM",
		tags: [
			"React Native",
			"Expo",
			"Typescript",
			"Nativewind",
			"Reanimated",
			"React Query",
		],
		type: "MobileApp",
	},

	{
		id: 2,
		name: "Spotify Clone",
		description:
			"An upgraded Spotify clone! Easily upload songs, make secure payments via Stripe.",
		image: "/assets/spotifyClone.jpg",
		githubLink: "https://github.com/RohithReddy-45/spotify-clone",
		liveSite: "https://spotifyclone-next13.vercel.app/",
		tags: [
			"Next.js 13",
			"Typescript",
			"Tailwind CSS",
			"Zustand",
			"Supabase",
			"Stripe",
		],
		type: "WebApp",
	},
	{
		id: 3,
		name: "Stepinstyle",
		description: "Stepinstyle is an e-commerce shoe store.",
		image: "/assets/stepinstyle.jpg",
		githubLink: "https://github.com/RohithReddy-45/stepinstyle",
		liveSite: "https://step-in-style.netlify.app/",
		tags: [
			"React.js",
			"Node.js",
			"Express.js",
			"MongoDB",
			"Tailwind CSS",
			"Redux",
		],
		type: "WebApp",
	},
	{
		id: 4,
		name: "Recipe Hunt",
		description:
			"Recipehunt is a web app for finding recipes, providing ingredients and quantities for each item.",
		image: "/assets/RecipeHunt.jpg",
		githubLink: "https://github.com/RohithReddy-45/RecipeHunt",
		liveSite: "https://recipehunt-rohith.netlify.app/",
		tags: ["HTML", "Tailwind CSS", "Javascript"],
		type: "WebApp",
	},
	{
		id: 5,
		name: "Feastly",
		description: "Feastly is a responsive restaurant website landing page.",
		image: "/assets/Feastly.jpg",
		githubLink: "https://github.com/RohithReddy-45/Feaslty",
		liveSite: "https://feastly-rohith.netlify.app/",
		tags: ["HTML", "CSS", "Javascript"],
		type: "WebApp",
	},
];

export const links = [
	{
		id: 1,
		link: "Home",
	},
	{
		id: 2,
		link: "About",
	},
	{
		id: 3,
		link: "Projects",
	},
	{
		id: 4,
		link: "Contact",
	},
];

export const socialLinks = [
	{
		name: "Github",
		link: "https://github.com/RohithReddy-45",
		icon: <FaGithub size={24} />,
	},
	{
		name: "Linkedin",
		link: "https://www.linkedin.com/in/rohith-reddy45",
		icon: <FaLinkedin size={24} />,
	},
	{
		name: "Twitter",
		link: "https://twitter.com/Ro_dev45",
		icon: <FaXTwitter size={24} />,
	},
];
