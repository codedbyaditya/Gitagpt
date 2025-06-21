import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { KrishnaQuoteCard } from "@/components/KrishnaQuoteCard";
import { getDailyVerse, getRandomVerse } from "@/data/gitaVerses";
import {
  Play,
  Download,
  Star,
  Users,
  BookOpen,
  MessageCircle,
  ChevronLeft,
  ChevronRight,
  Quote,
} from "lucide-react";

const Index = () => {
  const { t } = useTranslation();
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [dailyVerse, setDailyVerse] = useState(getDailyVerse());

  // Sample quotes for the slider
  const quotes = [getDailyVerse(), getRandomVerse(), getRandomVerse()];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuoteIndex((prev) => (prev + 1) % quotes.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [quotes.length]);

  const nextQuote = () => {
    setCurrentQuoteIndex((prev) => (prev + 1) % quotes.length);
  };

  const prevQuote = () => {
    setCurrentQuoteIndex((prev) => (prev - 1 + quotes.length) % quotes.length);
  };

  // Sample testimonials
  const testimonials = [
    {
      name: "Priya Sharma",
      location: "Delhi, India",
      text: "GitaGPT helped me find peace during difficult times. The wisdom from Krishna ji guided me through my darkest moments.",
      rating: 5,
    },
    {
      name: "Rajesh Kumar",
      location: "Mumbai, India",
      text: "Amazing spiritual guidance! The AI responses feel like direct wisdom from Lord Krishna. Highly recommended.",
      rating: 5,
    },
    {
      name: "Anita Patel",
      location: "Ahmedabad, India",
      text: "The multilingual support is excellent. I can read the Gita in Hindi and understand Krishna's teachings better.",
      rating: 5,
    },
  ];

  // YouTube videos (placeholder data)
  const spiritualVideos = [
    {
      title: "ISKCON Krishna Consciousness",
      channel: "ISKCON",
      thumbnail: "🎬",
    },
    {
      title: "Swami Mukundananda Teachings",
      channel: "Swami Mukundananda",
      thumbnail: "🎬",
    },
    {
      title: "Vivekananda Foundation",
      channel: "Vivekananda Foundation",
      thumbnail: "🎬",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-saffron-50">
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* Daily Quote Section */}
      <section className="py-16 bg-gradient-to-r from-saffron-100 via-orange-100 to-yellow-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
              <Quote className="inline mr-3 text-saffron-500" size={32} />
              {t("quotes.daily")}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Start your day with divine wisdom from the Bhagavad Gita
            </p>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            <motion.div
              key={currentQuoteIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <KrishnaQuoteCard verse={quotes[currentQuoteIndex]} />
            </motion.div>

            {/* Navigation buttons */}
            <Button
              variant="outline"
              size="icon"
              onClick={prevQuote}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg border-saffron-200 text-saffron-600 hover:text-saffron-700"
            >
              <ChevronLeft size={20} />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextQuote}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg border-saffron-200 text-saffron-600 hover:text-saffron-700"
            >
              <ChevronRight size={20} />
            </Button>

            {/* Dots indicator */}
            <div className="flex justify-center mt-6 space-x-2">
              {quotes.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentQuoteIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentQuoteIndex
                      ? "bg-saffron-500"
                      : "bg-gray-300 hover:bg-saffron-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
              Why Choose GitaGPT?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Experience the timeless wisdom of the Bhagavad Gita through modern
              AI technology
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <MessageCircle className="text-saffron-500" size={32} />,
                title: "AI Krishna Guidance",
                description:
                  "Get personalized spiritual answers in Krishna's voice with relevant Gita verses",
              },
              {
                icon: <BookOpen className="text-orange-500" size={32} />,
                title: "4 Authentic Sources",
                description:
                  "Access wisdom from Yatharth Geeta, ISKCON, Gorakhpur Press, and Ramakrishna Mission",
              },
              {
                icon: <Users className="text-blue-500" size={32} />,
                title: "Multilingual Support",
                description:
                  "Available in Hindi, English, and more languages for global accessibility",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center hover:shadow-lg transition-shadow border-orange-100">
                  <CardContent className="pt-6">
                    <div className="mb-4 flex justify-center">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gradient-to-br from-saffron-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
              Devotee Experiences
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              See how GitaGPT has transformed lives through Krishna's wisdom
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="text-yellow-400 fill-current"
                          size={16}
                        />
                      ))}
                    </div>
                    <p className="text-gray-700 mb-4 italic">
                      "{testimonial.text}"
                    </p>
                    <div>
                      <p className="font-semibold text-gray-800">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-gray-500">
                        {testimonial.location}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* YouTube Integration */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
              Spiritual Learning Videos
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Learn from renowned spiritual teachers and organizations
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {spiritualVideos.map((video, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="hover:shadow-lg transition-shadow cursor-pointer group">
                  <CardContent className="p-0">
                    <div className="aspect-video bg-gradient-to-br from-saffron-100 to-orange-100 flex items-center justify-center text-6xl group-hover:scale-105 transition-transform">
                      {video.thumbnail}
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-gray-800 mb-1">
                        {video.title}
                      </h3>
                      <p className="text-sm text-gray-600">{video.channel}</p>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="mt-2 text-saffron-600 hover:text-saffron-700"
                      >
                        <Play size={16} className="mr-1" />
                        Watch Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-16 bg-gradient-to-r from-saffron-600 to-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Download Complete Bhagavad Gita
            </h2>
            <p className="text-saffron-100 max-w-2xl mx-auto mb-8">
              Access all four authentic versions of the Bhagavad Gita in PDF
              format for offline reading and study
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                "Yatharth Geeta",
                "ISKCON Gita",
                "Gorakhpur Press",
                "Ramakrishna Mission",
              ].map((source) => (
                <Button
                  key={source}
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-saffron-600"
                >
                  <Download size={16} className="mr-2" />
                  {source}
                </Button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-gray-900 to-saffron-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Ready to Receive Krishna's Guidance?
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Join thousands who have found peace and direction through the
              timeless wisdom of the Bhagavad Gita
            </p>
            <Link to="/chat">
              <Button
                size="lg"
                className="bg-gradient-to-r from-saffron-500 to-orange-500 hover:from-saffron-600 hover:to-orange-600 text-white px-8 py-4 text-lg font-semibold shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
              >
                <MessageCircle className="mr-2" size={20} />
                Start Your Spiritual Journey
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
