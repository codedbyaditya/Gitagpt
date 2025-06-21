import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { KrishnaQuoteCard } from "@/components/KrishnaQuoteCard";
import {
  getRandomVerse,
  getVersesByTag,
  getBestVerseForSituation,
  getSourceRecommendation,
} from "@/data/gitaVerses";
import {
  Send,
  Loader2,
  Sparkles,
  Heart,
  MessageCircle,
  RefreshCw,
  Volume2,
} from "lucide-react";

interface Message {
  id: string;
  type: "user" | "krishna";
  content: string;
  timestamp: Date;
  verse?: any;
  sourceRecommendation?: string;
}

const Chat = () => {
  const { t, i18n } = useTranslation();
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      type: "krishna",
      content: t("chat.greeting"),
      timestamp: new Date(),
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Enhanced Krishna responses with better AI matching
  const getKrishnaResponse = (userQuestion: string) => {
    const question = userQuestion.toLowerCase();
    let responseVerse;
    let krishnaMessage;
    let sourceRec;

    // Advanced question matching
    if (
      question.includes("stress") ||
      question.includes("tension") ||
      question.includes("तनाव")
    ) {
      responseVerse = getBestVerseForSituation("stress");
      krishnaMessage =
        i18n.language === "hi"
          ? `हे पार्थ, चिंता मत करो। देखो अध्याय ${responseVerse.chapter}, श्लोक ${responseVerse.verse} क्या कहता है। जीवन में सुख-दुख सभी क्षणिक हैं। धैर्य रखो और कर्म क���ते जाओ।`
          : `Hey Parth, do not worry. See what Chapter ${responseVerse.chapter}, Verse ${responseVerse.verse} teaches us. Both happiness and distress in life are temporary. Be patient and continue your duties.`;
    } else if (
      question.includes("failure") ||
      question.includes("fail") ||
      question.includes("असफल")
    ) {
      responseVerse = getBestVerseForSituation("failure");
      krishnaMessage =
        i18n.language === "hi"
          ? `हे पार्थ, असफलता से निराश मत हो। अध्याय ${responseVerse.chapter}, श्लोक ${responseVerse.verse} में मैंने कहा है - तुम्हारा अधिकार केवल कर्म पर है, फल पर नहीं।`
          : `Hey Parth, do not be disheartened by failure. In Chapter ${responseVerse.chapter}, Verse ${responseVerse.verse}, I have said - You have the right only to perform your duty, not to the fruits of action.`;
    } else if (
      question.includes("anger") ||
      question.includes("angry") ||
      question.includes("क्रोध")
    ) {
      responseVerse = getBestVerseForSituation("anger");
      krishnaMessage =
        i18n.language === "hi"
          ? `हे पार्थ, क्रोध तुम्हारे विवेक को नष्ट कर देता है। अध्याय ${responseVerse.chapter}, श्लोक ${responseVerse.verse} में समाधान है। मन को नियंत्रित करो और शांत रहो।`
          : `Hey Parth, anger destroys your wisdom. Chapter ${responseVerse.chapter}, Verse ${responseVerse.verse} has the solution. Control your mind and remain peaceful.`;
    } else if (
      question.includes("fear") ||
      question.includes("scared") ||
      question.includes("डर")
    ) {
      responseVerse = getBestVerseForSituation("fear");
      krishnaMessage =
        i18n.language === "hi"
          ? `हे पार्थ, डरो मत। अध्याय ${responseVerse.chapter}, श्लोक ${responseVerse.verse} देखो - मैं तुम्हारे साथ हूं। मेरी शरण में आओ और निर्भय हो जाओ।`
          : `Hey Parth, do not fear. See Chapter ${responseVerse.chapter}, Verse ${responseVerse.verse} - I am with you. Surrender to me and become fearless.`;
    } else if (
      question.includes("ego") ||
      question.includes("pride") ||
      question.includes("अहंकार")
    ) {
      responseVerse = getBestVerseForSituation("ego");
      krishnaMessage =
        i18n.language === "hi"
          ? `हे पार्थ, अहंकार त्यागो। अध्याय ${responseVerse.chapter}, श्लोक ${responseVerse.verse} में मैंने समझाया है कि सब कुछ प्रकृति करती है, तुम केवल निमित्त हो।`
          : `Hey Parth, give up ego. In Chapter ${responseVerse.chapter}, Verse ${responseVerse.verse}, I have explained that everything is done by nature, you are just an instrument.`;
    } else {
      responseVerse = getRandomVerse();
      krishnaMessage =
        i18n.language === "hi"
          ? `हे पार्थ, अध्याय ${responseVerse.chapter}, श्लोक ${responseVerse.verse} तुम्हारे प्रश्न का उत्तर देगा। गीता का ज्ञान सभी समस्याओं का समाधान है।`
          : `Hey Parth, Chapter ${responseVerse.chapter}, Verse ${responseVerse.verse} will answer your question. The wisdom of the Gita is the solution to all problems.`;
    }

    sourceRec = getSourceRecommendation(responseVerse);

    return { krishnaMessage, responseVerse, sourceRec };
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: "user",
      content: inputMessage,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputMessage("");
    setIsLoading(true);

    // Simulate AI processing time
    setTimeout(() => {
      const { krishnaMessage, responseVerse, sourceRec } =
        getKrishnaResponse(inputMessage);

      const krishnaResponse: Message = {
        id: (Date.now() + 1).toString(),
        type: "krishna",
        content: krishnaMessage,
        timestamp: new Date(),
        verse: responseVerse,
        sourceRecommendation: sourceRec,
      };

      setMessages((prev) => [...prev, krishnaResponse]);
      setIsLoading(false);
    }, 2000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const clearChat = () => {
    setMessages([
      {
        id: "1",
        type: "krishna",
        content: t("chat.greeting"),
        timestamp: new Date(),
      },
    ]);
  };

  const suggestedQuestions = [
    i18n.language === "hi"
      ? "मैं जीवन में तनाव महसूस कर रहा हूं"
      : "I'm feeling stressed in life",
    i18n.language === "hi"
      ? "असफलता से कैसे निपटूं?"
      : "How to deal with failure?",
    i18n.language === "hi"
      ? "क्रोध को कैसे नियंत्रित करूं?"
      : "How to control anger?",
    i18n.language === "hi" ? "डर कैसे भगाऊं?" : "How to overcome fear?",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-saffron-50">
      <Navbar />

      <div className="pt-20 pb-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8"
          >
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
              <span className="bg-gradient-to-r from-saffron-600 to-orange-600 bg-clip-text text-transparent">
                {t("chat.title")}
              </span>
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Share your life questions and receive divine guidance from Lord
              Krishna through the sacred verses of the Bhagavad Gita
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Chat Area */}
            <div className="lg:col-span-2">
              <Card className="h-[600px] flex flex-col shadow-xl border-orange-200">
                {/* Chat Header */}
                <div className="p-4 border-b border-orange-100 bg-gradient-to-r from-saffron-50 to-orange-50">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-saffron-500 to-orange-500 rounded-full flex items-center justify-center text-white text-xl">
                        🔱
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800">
                          Lord Krishna
                        </h3>
                        <p className="text-sm text-gray-600">
                          Online • Ready to guide you
                        </p>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={clearChat}
                      className="text-gray-600 hover:text-gray-800"
                    >
                      <RefreshCw size={16} />
                    </Button>
                  </div>
                </div>

                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                  <AnimatePresence>
                    {messages.map((message) => (
                      <motion.div
                        key={message.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className={`flex ${
                          message.type === "user"
                            ? "justify-end"
                            : "justify-start"
                        }`}
                      >
                        <div
                          className={`max-w-[80%] rounded-lg p-4 ${
                            message.type === "user"
                              ? "bg-gradient-to-r from-saffron-500 to-orange-500 text-white"
                              : "bg-gradient-to-r from-blue-50 to-indigo-50 text-gray-800 border border-blue-200"
                          }`}
                        >
                          {message.type === "krishna" && (
                            <div className="flex items-center mb-2">
                              <span className="text-2xl mr-2">🔱</span>
                              <span className="font-semibold text-saffron-700">
                                Lord Krishna
                              </span>
                            </div>
                          )}
                          <p className="leading-relaxed">{message.content}</p>
                          {message.verse && (
                            <div className="mt-4">
                              <KrishnaQuoteCard
                                verse={message.verse}
                                showSource={true}
                                className="bg-white/50 border-none shadow-sm"
                              />
                            </div>
                          )}
                          {message.sourceRecommendation && (
                            <div className="mt-3 p-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-200">
                              <h5 className="text-sm font-semibold text-green-700 mb-1 flex items-center">
                                📚 स्रोत सुझाव:
                              </h5>
                              <p className="text-green-700 text-xs leading-relaxed">
                                {message.sourceRecommendation}
                              </p>
                            </div>
                          )}
                          <p className="text-xs mt-2 opacity-70">
                            {message.timestamp.toLocaleTimeString([], {
                              hour: "2-digit",
                              minute: "2-digit",
                            })}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>

                  {isLoading && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex justify-start"
                    >
                      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 text-gray-800 border border-blue-200 rounded-lg p-4 max-w-[80%]">
                        <div className="flex items-center mb-2">
                          <span className="text-2xl mr-2">🔱</span>
                          <span className="font-semibold text-saffron-700">
                            Lord Krishna
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Loader2
                            className="animate-spin text-saffron-500"
                            size={16}
                          />
                          <span className="text-gray-600">
                            {t("chat.thinking")}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  <div ref={messagesEndRef} />
                </div>

                {/* Input Area */}
                <div className="p-4 border-t border-orange-100 bg-gray-50">
                  <div className="flex space-x-2">
                    <Textarea
                      ref={textareaRef}
                      value={inputMessage}
                      onChange={(e) => setInputMessage(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder={t("chat.placeholder")}
                      className="flex-1 min-h-[60px] max-h-[120px] resize-none border-orange-200 focus:border-saffron-400 focus:ring-saffron-400"
                      disabled={isLoading}
                    />
                    <Button
                      onClick={handleSendMessage}
                      disabled={!inputMessage.trim() || isLoading}
                      className="bg-gradient-to-r from-saffron-500 to-orange-500 hover:from-saffron-600 hover:to-orange-600 text-white self-end"
                    >
                      <Send size={16} />
                    </Button>
                  </div>
                </div>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Suggested Questions */}
              <Card className="shadow-lg border-orange-200">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-800 mb-4 flex items-center">
                    <Sparkles className="mr-2 text-saffron-500" size={20} />
                    Suggested Questions
                  </h3>
                  <div className="space-y-2">
                    {suggestedQuestions.map((question, index) => (
                      <Button
                        key={index}
                        variant="ghost"
                        className="w-full text-left justify-start h-auto p-3 text-sm text-gray-700 hover:bg-saffron-50 hover:text-saffron-700"
                        onClick={() => setInputMessage(question)}
                      >
                        <MessageCircle
                          size={14}
                          className="mr-2 flex-shrink-0"
                        />
                        <span className="truncate">{question}</span>
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* About Section */}
              <Card className="shadow-lg border-orange-200">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-800 mb-4 flex items-center">
                    <Heart className="mr-2 text-red-500" size={20} />
                    About GitaGPT
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    GitaGPT provides spiritual guidance by matching your life
                    questions with relevant verses from the Bhagavad Gita. Each
                    response includes the original Sanskrit verse, translation,
                    and Krishna's divine wisdom.
                  </p>
                  <div className="mt-4 grid grid-cols-2 gap-2">
                    <Badge variant="outline" className="text-xs justify-center">
                      700+ Verses
                    </Badge>
                    <Badge variant="outline" className="text-xs justify-center">
                      4 Sources
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Chat;
