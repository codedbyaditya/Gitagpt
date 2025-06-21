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

  // Enhanced YouTube videos with real recommendations
  const spiritualVideos = [
    {
      title: "Complete Bhagavad Gita in Hindi",
      channel: "ISKCON Dwarka",
      thumbnail: "🎥",
      views: "2.1M views",
      duration: "18:45:32",
      description:
        "पूर्ण भगवद्गीता हिंदी में - A.C. भक्तिवेदांत स्वामी प्रभुपाद जी द्वारा",
    },
    {
      title: "Gita Saar by Swami Mukundananda",
      channel: "JKYog",
      thumbnail: "🕉️",
      views: "5.8M views",
      duration: "2:15:45",
      description: "भगवद्गीता का सार - जीवन की समस्याओं का समाधान",
    },
    {
      title: "Karma Yoga Explained",
      channel: "Vivekananda Foundation",
      thumbnail: "⚡",
      views: "1.3M views",
      duration: "45:20",
      description: "कर्म योग की व्याख्या - स्वामी विवेकानंद के अनुसार",
    },
    {
      title: "Daily Gita Meditation",
      channel: "Spiritual Sadhana",
      thumbnail: "🧘",
      views: "890K views",
      duration: "30:15",
      description: "दैनिक गीता ध्यान - आंतरिक शांति के लिए",
    },
    {
      title: "Bhakti Yoga Path",
      channel: "Radha Krishna Temple",
      thumbnail: "❤️",
      views: "1.1M views",
      duration: "52:30",
      description: "भक्ति योग का मार्ग - प्रेम और समर्पण",
    },
    {
      title: "Gita for Students",
      channel: "Youth Spirituality",
      thumbnail: "📚",
      views: "2.5M views",
      duration: "1:25:10",
      description: "छात्रों के लिए गीता - परीक्षा और करियर में सफलता",
    },
  ];

  // Book recommendations
  const recommendedBooks = [
    {
      title: "Yatharth Geeta",
      author: "Swami Adgadanand",
      image:
        "https://cdn.builder.io/api/v1/assets/91dee6dff05e4edeb389ea8ac7a33180/yatharth-de8a37",
      rating: 4.9,
      speciality: "सबसे स्पष्ट व्याख्या",
      description: "गीता की सबसे स्पष्ट और व्यावहारिक व्याख्या",
    },
    {
      title: "Bhagavad Gita As It Is",
      author: "A.C. Bhaktivedanta Swami Prabhupada",
      image:
        "https://cdn.builder.io/api/v1/assets/91dee6dff05e4edeb389ea8ac7a33180/isckon-229285",
      rating: 4.8,
      speciality: "भक्ति योग विशेषज्ञता",
      description: "कृष्ण भावनामृत की गहरी समझ के लिए",
    },
    {
      title: "Srimad Bhagavad Gita",
      author: "Gita Press Gorakhpur",
      image:
        "https://cdn.builder.io/api/v1/assets/91dee6dff05e4edeb389ea8ac7a33180/gorakhpur-gita-4b0fde",
      rating: 4.7,
      speciality: "पारंपरिक भाष्य",
      description: "संस्कृत पाठ के साथ धार्मिक अध्ययन",
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
              🎥 Recommended Spiritual Videos
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Learn from renowned spiritual teachers and deepen your
              understanding of the Gita
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {spiritualVideos.map((video, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="hover:shadow-xl transition-all duration-300 cursor-pointer group overflow-hidden">
                  <CardContent className="p-0">
                    <div className="aspect-video bg-gradient-to-br from-saffron-100 to-orange-100 flex items-center justify-center text-4xl group-hover:scale-110 transition-transform duration-300 relative">
                      {video.thumbnail}
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg"
                        >
                          <Play className="text-saffron-600 ml-1" size={24} />
                        </motion.div>
                      </div>
                      <div className="absolute top-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                        {video.duration}
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-gray-800 mb-2 group-hover:text-saffron-600 transition-colors">
                        {video.title}
                      </h3>
                      <p className="text-sm text-saffron-600 font-medium mb-1">
                        {video.channel}
                      </p>
                      <p className="text-xs text-gray-500 mb-2">
                        {video.views}
                      </p>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {video.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Book Recommendations */}
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
              📚 Recommended Gita Editions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose the best Gita commentary for your spiritual journey
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {recommendedBooks.map((book, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="hover:shadow-xl transition-all duration-300 group h-full">
                  <CardContent className="p-6 text-center">
                    <motion.div
                      whileHover={{ scale: 1.05, rotateY: 5 }}
                      transition={{ duration: 0.3 }}
                      className="mb-4"
                    >
                      <img
                        src={book.image}
                        alt={book.title}
                        className="w-32 h-40 object-cover rounded-lg shadow-lg mx-auto border-2 border-orange-200"
                      />
                    </motion.div>
                    <Badge
                      className={`mb-3 ${
                        book.rating >= 4.9
                          ? "bg-green-100 text-green-700"
                          : book.rating >= 4.8
                            ? "bg-blue-100 text-blue-700"
                            : "bg-gray-100 text-gray-700"
                      }`}
                    >
                      ⭐ {book.rating} • {book.speciality}
                    </Badge>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {book.title}
                    </h3>
                    <p className="text-saffron-600 font-medium mb-3">
                      {book.author}
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {book.description}
                    </p>
                    <div className="space-y-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full border-saffron-300 text-saffron-600 hover:bg-saffron-50"
                      >
                        📖 Preview
                      </Button>
                      <Button
                        size="sm"
                        className="w-full bg-gradient-to-r from-saffron-500 to-orange-500 hover:from-saffron-600 hover:to-orange-600 text-white"
                      >
                        <Download size={14} className="mr-1" />
                        Download
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
