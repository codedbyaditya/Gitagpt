import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Download, FileText, Star, ExternalLink } from "lucide-react";

const DownloadPage = () => {
  const { t } = useTranslation();

  const gitaVersions = [
    {
      title: "Yatharth Geeta",
      author: "Swami Adgadanand",
      image:
        "https://cdn.builder.io/api/v1/assets/91dee6dff05e4edeb389ea8ac7a33180/yatharth-de8a37",
      description:
        "सबसे स्पष्ट और व्यावहारिक व्याख्या। गहरे अध्ययन के लिए सर्वोत्तम। जीवन की समस्याओं का व्यावहारिक समाधान।",
      pages: "850",
      language: "Hindi & English",
      rating: 4.9,
      size: "12.5 MB",
      featured: true,
      quality: "best",
      specialty: "सबसे स्पष्ट व्याख्या",
    },
    {
      title: "ISKCON Bhagavad Gita As It Is",
      author: "A.C. Bhaktivedanta Swami Prabhupada",
      image:
        "https://cdn.builder.io/api/v1/assets/91dee6dff05e4edeb389ea8ac7a33180/isckon-229285",
      description:
        "विश्व में सबसे ज्यादा पढ़ी जाने वाली गीता। कृष्ण भावनामृत और भक्ति योग की गहरी समझ के लिए उत्कृष्ट।",
      pages: "972",
      language: "English & Hindi",
      rating: 4.8,
      size: "15.2 MB",
      featured: true,
      quality: "excellent",
      specialty: "भक्ति योग विशेषज्ञता",
    },
    {
      title: "Gorakhpur Press Gita",
      author: "Gita Press Gorakhpur",
      image:
        "https://cdn.builder.io/api/v1/assets/91dee6dff05e4edeb389ea8ac7a33180/gorakhpur-gita-4b0fde",
      description:
        "पारंपरिक भाष्य के साथ संस्कृत पाठ। धार्मिक अध्ययन और संस्कृत श्लोकों की शुद्ध उच्चारण के लिए उपयुक्त।",
      pages: "720",
      language: "Hindi & Sanskrit",
      rating: 4.7,
      size: "10.8 MB",
      featured: false,
      quality: "good",
      specialty: "पारंपरिक भाष्य",
    },
  ];

  const additionalResources = [
    {
      title: "Gita Study Guide",
      description: "Chapter-wise study notes and questions for deep learning",
      type: "PDF",
      size: "2.3 MB",
    },
    {
      title: "Sanskrit Pronunciation Guide",
      description: "Learn correct pronunciation of Sanskrit verses",
      type: "Audio + PDF",
      size: "45 MB",
    },
    {
      title: "Daily Meditation Verses",
      description: "Selected verses for daily contemplation and meditation",
      type: "PDF",
      size: "1.8 MB",
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
                Download Sacred Texts
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Access complete Bhagavad Gita texts from three authentic sources.
              Study offline and deepen your spiritual journey.
            </p>
          </motion.div>

          {/* Main Gita Versions */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
              Complete Bhagavad Gita Editions
            </h2>
            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
              {gitaVersions.map((version, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  <Card
                    className={`hover:shadow-xl transition-all duration-300 h-full group ${
                      version.featured
                        ? "border-saffron-300 bg-gradient-to-br from-saffron-50 to-orange-50"
                        : "border-orange-200"
                    }`}
                  >
                    <CardHeader>
                      <div className="flex items-start space-x-4 mb-4">
                        <motion.div
                          whileHover={{ scale: 1.05, rotateY: 5 }}
                          transition={{ duration: 0.3 }}
                        >
                          <img
                            src={version.image}
                            alt={version.title}
                            className="w-20 h-24 object-cover rounded-lg shadow-lg border-2 border-orange-200 group-hover:border-saffron-300 transition-colors"
                          />
                        </motion.div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-2">
                            <div>
                              <CardTitle className="text-xl text-gray-800 mb-1">
                                {version.title}
                              </CardTitle>
                              <p className="text-sm text-gray-600 font-medium">
                                {version.author}
                              </p>
                            </div>
                            {version.featured && (
                              <Badge className="bg-gradient-to-r from-saffron-500 to-orange-500 text-white">
                                <Star size={12} className="mr-1" />
                                Featured
                              </Badge>
                            )}
                          </div>
                          <Badge
                            className={`mb-2 ${
                              version.quality === "best"
                                ? "bg-green-100 text-green-700"
                                : version.quality === "excellent"
                                  ? "bg-blue-100 text-blue-700"
                                  : "bg-gray-100 text-gray-700"
                            }`}
                          >
                            {version.quality === "best" && "⭐ सर्वोत्तम"}
                            {version.quality === "excellent" && "🏆 उत्कृष्ट"}
                            {version.quality === "good" && "✅ अच्छा"}
                          </Badge>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                        <span className="flex items-center">
                          <Star
                            className="text-yellow-400 fill-current mr-1"
                            size={14}
                          />
                          {version.rating}
                        </span>
                        <span>{version.pages} pages</span>
                        <span>{version.size}</span>
                      </div>
                      <Badge variant="outline" className="text-xs mb-3">
                        {version.specialty}
                      </Badge>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 mb-4 leading-relaxed text-sm">
                        {version.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <Badge variant="outline" className="text-xs">
                          {version.language}
                        </Badge>
                        <div className="space-x-2">
                          <Button
                            variant="outline"
                            size="sm"
                            className="text-saffron-600 border-saffron-300 hover:bg-saffron-50"
                          >
                            <ExternalLink size={14} className="mr-1" />
                            Preview
                          </Button>
                          <Button
                            size="sm"
                            className="bg-gradient-to-r from-saffron-500 to-orange-500 hover:from-saffron-600 hover:to-orange-600 text-white"
                          >
                            <Download size={14} className="mr-1" />
                            Download
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Download All Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-16"
          >
            <Card className="bg-gradient-to-r from-saffron-600 to-orange-600 text-white">
              <CardContent className="py-12 text-center">
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                  Download All Gita Editions
                </h2>
                <p className="text-saffron-100 max-w-2xl mx-auto mb-8">
                  Access all three authentic versions of the Bhagavad Gita in
                  PDF format for offline reading and study
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  {["Yatharth Geeta", "ISKCON Gita", "Gorakhpur Press"].map(
                    (source) => (
                      <Button
                        key={source}
                        variant="outline"
                        className="border-white text-white hover:bg-white hover:text-saffron-600"
                      >
                        <Download size={16} className="mr-2" />
                        {source}
                      </Button>
                    ),
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Additional Resources */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
              Study Resources
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {additionalResources.map((resource, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  <Card className="hover:shadow-lg transition-shadow h-full">
                    <CardContent className="pt-6">
                      <div className="text-3xl mb-3 text-center">📚</div>
                      <h3 className="text-lg font-semibold mb-2 text-gray-800">
                        {resource.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                        {resource.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="space-x-2">
                          <Badge variant="outline" className="text-xs">
                            {resource.type}
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            {resource.size}
                          </Badge>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-saffron-600 hover:text-saffron-700 hover:bg-saffron-50"
                        >
                          <Download size={14} className="mr-1" />
                          Get
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Usage Guidelines */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
              <CardHeader>
                <CardTitle className="text-center text-2xl text-gray-800 flex items-center justify-center">
                  <FileText className="mr-2 text-blue-500" size={24} />
                  Usage Guidelines
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-700">
                  <div>
                    <h4 className="font-semibold mb-2 text-gray-800">
                      📖 For Personal Study
                    </h4>
                    <ul className="space-y-1 list-disc list-inside">
                      <li>Free for personal spiritual study</li>
                      <li>Share knowledge with family and friends</li>
                      <li>Use for meditation and contemplation</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-gray-800">
                      🎓 For Educational Use
                    </h4>
                    <ul className="space-y-1 list-disc list-inside">
                      <li>Permitted for academic research</li>
                      <li>Use in educational institutions</li>
                      <li>Reference in scholarly works with attribution</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <p className="text-sm text-yellow-800">
                    <strong>Note:</strong> These texts are provided for
                    spiritual and educational purposes. Please respect the
                    copyright of original publishers and use responsibly.
                  </p>
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

export default DownloadPage;
