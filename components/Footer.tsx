"use client"
const Footer = () => {
  return (
    <div>
      <div className="container mx-auto px-6 text-center text-slate-400 text-sm mt-8">
        <p>© {new Date().getFullYear()} Bhupesh.dev All rights reserved.</p>
        <span className="my-2 block">Made with ❤️ by Bhupesh Verma</span>
      </div>
    </div>
  );
};

export default Footer;
