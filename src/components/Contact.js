import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { LuInstagram } from "react-icons/lu";
import { GITHUB, INSTAGRAM, LINKEDIN, X } from "../utils/constants";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  const openLink = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="min-h-[545px] bg-sky-50 flex items-center justify-center px-4">
      <div className="text-center">
        {/* Heading */}
        <h1 className="text-sky-700 font-extrabold text-4xl">Contact Me</h1>
        <p className="text-gray-600 mt-2">
          Let’s connect and build something cool 🚀
        </p>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mt-8 flex-wrap">
          <button
            onClick={() => openLink(GITHUB)}
            className="flex items-center gap-2 px-5 py-3 rounded-xl bg-gray-900 text-white shadow-lg hover:scale-105 hover:bg-gray-800 transition"
          >
            <FaGithub size={24} /> <span className="font-semibold">GitHub</span>
          </button>

          <button
            onClick={() => openLink(LINKEDIN)}
            className="flex items-center gap-2 px-5 py-3 rounded-xl bg-blue-600 text-white shadow-lg hover:scale-105 hover:bg-blue-700 transition"
          >
            <FaLinkedin size={24} />{" "}
            <span className="font-semibold">LinkedIn</span>
          </button>

          <button
            onClick={() => openLink(X)}
            className="flex items-center gap-2 px-5 py-3 rounded-xl bg-black text-white shadow-lg hover:scale-105 hover:bg-gray-800 transition"
          >
            <FaXTwitter size={22} /> <span className="font-semibold">X</span>
          </button>

          <button
            onClick={() => openLink(INSTAGRAM)}
            className="flex items-center gap-2 px-5 py-3 rounded-xl bg-pink-500 text-white shadow-lg hover:scale-105 hover:bg-pink-600 transition"
          >
            <LuInstagram size={24} />{" "}
            <span className="font-semibold">Instagram</span>
          </button>
        </div>

        {/* Email */}
        <div className="mt-8 flex items-center justify-center gap-2 text-lg font-medium">
          <MdEmail size={22} className="text-sky-600" />
          <a
            href="mailto:theayushgupta.dev@gmail.com"
            className="text-sky-600 hover:underline"
          >
            theayushgupta.dev@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
