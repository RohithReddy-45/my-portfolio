import { useInView } from "framer-motion";
import { forwardRef } from "react";

const Skills = forwardRef((props, ref) => {
	const isInView = useInView(ref, { once: true });

	return (
		<div
			className="flex flex-col gap-4 p-3 text-center md:w-[50%] md:text-left"
			ref={ref}
		>
			<h1
				className="text-lg font-semibold"
				style={{
					opacity: isInView ? 1 : 0,
					transform: isInView ? "none" : "translateY(20px)",
					transition: "all 0.3s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
					transitionDelay: "0.2s",
				}}
			>
				My skills
			</h1>
			<span
				style={{
					opacity: isInView ? 1 : 0,
					transform: isInView ? "none" : "translateY(30px)",
					transition: "all 0.4s cubic-bezier(0.17, 0.55, 0.55, 1) 0.4s",
					transitionDelay: "0.5s",
				}}
			>
				<strong>Key Technical Skills : </strong>Javascript, Typescript, Python,
				React.js, Next.js, React Native, Expo, Node.js, Express.js, Tailwind
				CSS, Redux, Postgres, MongoDB, React Query, Drizzle, Prisma, Zustand
			</span>
			<span
				style={{
					opacity: isInView ? 1 : 0,
					transform: isInView ? "none" : "translateY(30px)",
					transition: "all 0.4s cubic-bezier(0.17, 0.55, 0.55, 1) 0.4s",
					transitionDelay: "0.5s",
				}}
			>
				<strong>Other Skills : </strong>Figma, Responsive design, Git, GitHub,
				Performance Optimization
			</span>
		</div>
	);
});

Skills.displayName = "Skills";
export default Skills;
