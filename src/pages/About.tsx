import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Users, BookOpen, Heart, Award } from "lucide-react";

const About = () => {
  const { t } = useTranslation();

  const teamMembers = [
    {
      name: "Dr. Ashutosh Kumar Singh",
      role: "Project Head & Asst. Professor, IIITA",
      description: "Leading the vision and technical direction",
      icon: "👨‍🏫",
    },
    {
      name: "Aditya Deshmukh",
      role: "Frontend Developer",
      description: "UI/UX design and React development",
      icon: "👨‍💻",
    },
    {
      name: "Prasanna Chauhan",
      role: "AI/Backend Developer",
      description: "AI integration and backend systems",
      icon: "🤖",
    },
    {
      name: "Shreetha Mishra",
      role: "Content & Research",
      description: "Gita verse compilation and spiritual research",
      icon: "📚",
    },
  ];

  const features = [
    {
      icon: <BookOpen className="text-saffron-500" size={32} />,
      title: "4 Authentic Gita Sources",
      description:
        "Comprehensive collection from Yatharth Geeta, ISKCON, Gorakhpur Press, and Ramakrishna Mission",
    },
    {
      icon: <Users className="text-orange-500" size={32} />,
      title: "Multilingual Support",
      description:
        "Available in Hindi, English, with more languages coming soon",
    },
    {
      icon: <Heart className="text-red-500" size={32} />,
      title: "Spiritual AI Guidance",
      description:
        "AI-powered responses in Krishna's voice with relevant Gita verses",
    },
    {
      icon: <Award className="text-blue-500" size={32} />,
      title: "Educational Purpose",
      description:
        "Built for spreading spiritual knowledge and Krishna consciousness",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-saffron-50">
      <Navbar />

      <div className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-6">
              <span className="bg-gradient-to-r from-saffron-600 to-orange-600 bg-clip-text text-transparent">
                About GitaGPT
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A modern spiritual platform that brings the timeless wisdom of the
              Bhagavad Gita to today's seekers through AI-powered guidance and
              Krishna's divine teachings.
            </p>
          </motion.div>

          {/* Mission Statement */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <Card className="bg-gradient-to-br from-saffron-50 to-orange-50 border-orange-200 shadow-xl">
              <CardContent className="p-8 text-center">
                <div className="text-6xl mb-4">🕉️</div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Our Mission
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed max-w-4xl mx-auto">
                  To make the profound wisdom of the Bhagavad Gita accessible to
                  everyone through modern technology. We aim to provide
                  spiritual guidance for life's challenges by connecting seekers
                  with Krishna's teachings in an interactive, meaningful way.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
              What Makes GitaGPT Special
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  <Card className="text-center hover:shadow-lg transition-shadow h-full">
                    <CardContent className="pt-6">
                      <div className="mb-4 flex justify-center">
                        {feature.icon}
                      </div>
                      <h3 className="text-lg font-semibold mb-2 text-gray-800">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Team Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
              Our Team
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  <Card className="text-center hover:shadow-lg transition-shadow h-full">
                    <CardContent className="pt-6">
                      <div className="text-4xl mb-3">{member.icon}</div>
                      <h3 className="text-lg font-semibold mb-1 text-gray-800">
                        {member.name}
                      </h3>
                      <Badge
                        variant="secondary"
                        className="mb-3 bg-saffron-100 text-saffron-700"
                      >
                        {member.role}
                      </Badge>
                      <p className="text-gray-600 text-sm">
                        {member.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Technology Stack */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Card className="bg-gradient-to-r from-gray-50 to-saffron-50 border-orange-200">
              <CardHeader>
                <CardTitle className="text-center text-2xl text-gray-800">
                  Built with Modern Technology
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                  {[
                    "React 18",
                    "TypeScript",
                    "TailwindCSS",
                    "Framer Motion",
                    "OpenAI API",
                    "Node.js",
                    "MongoDB",
                    "Vercel",
                  ].map((tech, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="p-3 text-sm font-medium"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
