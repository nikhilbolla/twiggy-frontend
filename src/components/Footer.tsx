import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-red-500 py-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <span className="text-3xl text-white font-bold tracking-tight">
          Twiggy
        </span>
        <span className="text-white font-bold tracking-tight flex gap-4">
          <span className="flex justify-center items-center gap-3">
            <GitHubLogoIcon />
            <Link
              to="https://github.com/nikhilbolla/twiggy-frontend"
              target="_blank"
              rel="noopener noreferrer"
            >
              Frontend
            </Link>
          </span>
          <span className="flex justify-center items-center gap-3">
            <GitHubLogoIcon />
            <Link
              to="https://github.com/nikhilbolla/twiggy-backend"
              target="_blank"
              rel="noopener noreferrer"
            >
              Backend
            </Link>
          </span>
        </span>
      </div>
    </div>
  );
};

export default Footer;
