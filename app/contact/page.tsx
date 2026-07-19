import {
  FaEnvelope,
  FaTwitter,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

const socialLinks = [
  {
    label: "Email",
    href: "mailto:bhupeshverma29bv@gmail.com",
    icon: FaEnvelope,
    display: "bhupeshverma29bv@gmail.com",
  },
  {
    label: "GitHub",
    href: "https://github.com/bhupeshv29",
    icon: FaGithub,
    display: "github.com/bhupeshv29",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/bhupesh-verma-684991198/",
    icon: FaLinkedin,
    display: "linkedin.com/in/bhupesh-verma-684991198",
  },
  {
    label: "Twitter",
    href: "https://x.com/Bhupeshv29",
    icon: FaTwitter,
    display: "x.com/Bhupeshv29",
  },
];

function Contact() {
  return (
    <main>
      <div className="pt-24 px-4 md:px-8 lg:px-30">
        <div className="max-w-2xl mx-auto py-16">
          <h1 className="text-4xl font-extrabold mb-4 text-center">
            Get in Touch
          </h1>
          <p className="text-slate-400 text-center mb-12">
            Feel free to reach out — I&apos;m always open to new opportunities
            and collaborations.
          </p>
          <div className="flex flex-col gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.label !== "Email" ? "_blank" : undefined}
                rel={link.label !== "Email" ? "noopener noreferrer" : undefined}
                className="flex items-center gap-4 bg-gradient-to-r from-[#0b1016] to-[#010151] rounded-xl p-5 text-white hover:scale-[1.02] transition-transform duration-300"
              >
                <link.icon className="text-2xl text-blue-500 shrink-0" />
                <div>
                  <p className="font-semibold text-sm">{link.label}</p>
                  <p className="text-slate-400 text-sm">{link.display}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

export default Contact;
