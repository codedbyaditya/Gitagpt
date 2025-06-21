import { useTranslation } from "react-i18next";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GitaVerse } from "@/data/gitaVerses";
import { motion } from "framer-motion";

interface KrishnaQuoteCardProps {
  verse: GitaVerse;
  showSource?: boolean;
  className?: string;
}

export const KrishnaQuoteCard = ({
  verse,
  showSource = true,
  className = "",
}: KrishnaQuoteCardProps) => {
  const { i18n, t } = useTranslation();
  const isHindi = i18n.language === "hi";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={className}
    >
      <Card className="bg-gradient-to-br from-white to-orange-50 border-orange-200 shadow-lg hover:shadow-xl transition-all duration-300 group">
        <CardContent className="p-6">
          {/* Chapter and Verse */}
          <div className="flex items-center justify-between mb-4">
            <Badge
              variant="secondary"
              className="bg-saffron-100 text-saffron-700 hover:bg-saffron-200 transition-colors"
            >
              {isHindi
                ? `अध्याय ${verse.chapter}, श्लोक ${verse.verse}`
                : `Chapter ${verse.chapter}, Verse ${verse.verse}`}
            </Badge>
            {showSource && (
              <div className="flex items-center space-x-2">
                <img
                  src={verse.source_image}
                  alt={verse.source}
                  className="w-8 h-8 rounded object-cover border border-orange-200"
                />
                <div className="flex flex-col">
                  <Badge
                    variant="outline"
                    className={`text-xs ${
                      verse.source_quality === "best"
                        ? "border-green-500 text-green-700 bg-green-50"
                        : verse.source_quality === "excellent"
                          ? "border-blue-500 text-blue-700 bg-blue-50"
                          : "border-gray-300 text-gray-600"
                    }`}
                  >
                    {verse.source} {verse.source_quality === "best" && "⭐"}
                  </Badge>
                </div>
              </div>
            )}
          </div>

          {/* Sanskrit Verse */}
          <div className="mb-4 p-4 bg-gradient-to-r from-saffron-50 to-orange-50 rounded-lg border-l-4 border-saffron-400">
            <p className="text-gray-800 font-sanskrit text-base leading-relaxed text-center">
              {verse.sanskrit}
            </p>
          </div>

          {/* Translation */}
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-gray-700 mb-2">
              {isHindi ? "अनुवाद:" : "Translation:"}
            </h4>
            <p className="text-gray-700 leading-relaxed text-sm">
              {isHindi ? verse.hindi : verse.english}
            </p>
          </div>

          {/* Meaning */}
          <div className="bg-white/70 rounded-lg p-4 border border-orange-100 mb-3">
            <h4 className="text-sm font-semibold text-saffron-700 mb-2 flex items-center">
              🕊️ {isHindi ? "श्रीकृष्ण की सीख:" : "Krishna's Teaching:"}
            </h4>
            <p className="text-gray-700 text-sm italic leading-relaxed">
              {isHindi ? verse.meaning_hindi : verse.meaning_english}
            </p>
          </div>

          {/* Practical Application */}
          {verse.practical_application && (
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-4 border border-blue-200">
              <h4 className="text-sm font-semibold text-blue-700 mb-2 flex items-center">
                💡 {isHindi ? "व्यावहारिक प्रयोग:" : "Practical Application:"}
              </h4>
              <p className="text-gray-700 text-sm leading-relaxed">
                {verse.practical_application}
              </p>
            </div>
          )}

          {/* Tags */}
          {verse.tags.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-1">
              {verse.tags.slice(0, 3).map((tag) => (
                <Badge
                  key={tag}
                  variant="outline"
                  className="text-xs text-orange-600 border-orange-300 hover:bg-orange-50"
                >
                  #{tag}
                </Badge>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
};
