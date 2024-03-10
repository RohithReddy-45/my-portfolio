import { useInView } from 'framer-motion';
import { useRef } from 'react';

function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div
      className="mt-6 h-full bg-bgsecondary text-center"
      id="Contact"
      ref={ref}
    >
      <div className="container flex max-w-screen-2xl flex-col gap-3 px-12 py-12 md:gap-5">
        <h1
          className="text-3xl font-bold lg:text-5xl"
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? 'none' : 'translateY(20px)',
            transition: 'all 0.2s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s',
            transitionDelay: '0.2s',
          }}
        >
          Have any Questions? Reach out.
        </h1>

        <p
          className="break-words md:text-xl"
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? 'none' : 'translateY(20px)',
            transition: 'all 0.4s cubic-bezier(0.17, 0.55, 0.55, 1) 0.4s',
            transitionDelay: '0.2s',
          }}
        >
          You can email me at{' '}
          <a
            href="mailto:samreddyrohith@gmail.com"
            className="font-medium text-blue-800 hover:underline"
            target="_blank"
            rel="noreferrer"
          >
            samreddyrohith@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
}

export default Contact;
