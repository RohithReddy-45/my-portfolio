import SocialLinks from './SocialLinks';

function Footer() {
  return (
    <div className="mt-5 flex flex-col items-center justify-center gap-3 px-4 py-5 text-center">
      <SocialLinks />
      <p className="text-sm">Design and built by Rohith reddy</p>
    </div>
  );
}

export default Footer;
