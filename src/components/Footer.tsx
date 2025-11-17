import { Github, Linkedin, Mail } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const Footer = () => {
  const { darkMode } = useTheme();

  const socialLinks = [
    { icon: Github, href: "https://github.com/Eng-Azuuzi", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Mail, href: "#contact", label: "Email" },
  ];

  return (
    <footer
      className={`border-t ${
        darkMode ? "bg-gray-900 border-gray-700" : "bg-gray-200 border-border"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className={`${darkMode ? "text-gray-300" : "text-gray-800"} text-sm`}>
            © {new Date().getFullYear()} EngAzuuzi. All rights reserved.
          </p>

          <div className="flex gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                aria-label={link.label}
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 ${
                  darkMode
                    ? "bg-gray-800 hover:bg-primary/20 text-gray-100 hover:text-primary"
                    : "bg-secondary hover:bg-primary/20 text-foreground hover:text-primary"
                }`}
              >
                <link.icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
