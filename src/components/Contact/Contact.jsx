function Contact() {
  return (
    <div className="mt-6 h-full bg-bgsecondary text-center" id="Contact">
      <div className="mx-auto flex max-w-screen-2xl flex-col gap-3 px-12 py-12 md:gap-5">
        <h1 className="text-3xl font-bold lg:text-5xl">
          Have any Questions? Reach out.
        </h1>

        <p className="md:text-xl">
          You can email me at{' '}
          <a
            href="mailto:samreddyrohith@gmail.com"
            className="font-medium text-blue-500 hover:underline"
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
