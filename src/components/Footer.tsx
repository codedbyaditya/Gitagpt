import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Heart, Github, Mail, ExternalLink } from "lucide-react";

export const Footer = () => {
  const { t } = useTranslation();

  const quickLinks = [
    { name: t("nav.home"), href: "/" },
    { name: t("nav.askKrishna"), href: "/chat" },
    { name: t("nav.about"), href: "/about" },
    { name: t("nav.download"), href: "/download" },
  ];

  const gitaSources = [
    { name: "Yatharth Geeta", href: "#" },
    { name: "Gorakhpur Press Gita", href: "#" },
    { name: "ISKCON Foundation Gita", href: "#" },
    { name: "Ramakrishna Mission Gita", href: "#" },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-saffron-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-saffron-400 to-orange-500 rounded-full flex items-center justify-center text-2xl">
                🔱
              </div>
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-saffron-400 to-orange-400 bg-clip-text text-transparent">
                  GitaGPT
                </h3>
                <p className="text-sm text-gray-300">Spiritual AI Wisdom</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4 max-w-md leading-relaxed">
              Discover timeless wisdom from the Bhagavad Gita through AI-powered
              spiritual guidance. Ask life questions and receive divine answers
              from Lord Krishna's teachings.
            </p>
            <div className="flex space-x-3">
              <Button
                variant="outline"
                size="sm"
                className="border-saffron-400 text-saffron-400 hover:bg-saffron-400 hover:text-white"
              >
                <Github size={16} className="mr-1" />
                GitHub
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white"
              >
                <Mail size={16} className="mr-1" />
                Contact
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-saffron-400">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-saffron-400 transition-colors duration-200 flex items-center group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-200">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Gita Sources */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-orange-400">
              Gita Sources
            </h4>
            <ul className="space-y-2">
              {gitaSources.map((source) => (
                <li key={source.name}>
                  <a
                    href={source.href}
                    className="text-gray-300 hover:text-orange-400 transition-colors duration-200 flex items-center group text-sm"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-200">
                      {source.name}
                    </span>
                    <ExternalLink
                      size={12}
                      className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="bg-gray-700 mb-8" />

        {/* Project Credits */}
        <div className="text-center mb-6">
          <div className="bg-gradient-to-r from-gray-800 to-gray-700 rounded-lg p-6 border border-gray-600">
            <h4 className="text-lg font-semibold mb-3 text-saffron-400 flex items-center justify-center">
              <Heart className="mr-2 text-red-400" size={18} />
              Project Credits
            </h4>
            <p className="text-gray-300 mb-2 text-sm leading-relaxed">
              {t("footer.projectHead")}
            </p>
            <p className="text-gray-400 text-sm">{t("footer.team")}</p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center border-t border-gray-700 pt-6">
          <p className="text-gray-400 text-sm mb-2">{t("footer.copyright")}</p>
          <p className="text-xs text-gray-500 max-w-2xl mx-auto leading-relaxed">
            This platform is created for educational and spiritual purposes. All
            Gita verses and teachings are sourced from authentic traditional
            commentaries.
          </p>

          {/* Sanskrit Quote */}
          <div className="mt-4 p-3 bg-gray-800/50 rounded-lg border border-gray-600 max-w-md mx-auto">
            <p className="text-saffron-300 text-sm font-sanskrit">
              सर्वे भवन्तु सुखिनः सर्वे सन्तु निरामयाः
            </p>
            <p className="text-gray-400 text-xs mt-1">
              May all beings be happy and free from suffering
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
