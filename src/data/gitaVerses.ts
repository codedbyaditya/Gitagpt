export interface GitaVerse {
  id: string;
  chapter: number;
  verse: number;
  sanskrit: string;
  hindi: string;
  english: string;
  meaning_hindi: string;
  meaning_english: string;
  source: string;
  source_image: string;
  source_quality: "best" | "good" | "excellent";
  tags: string[];
  category: string;
  practical_application: string;
  life_situation: string[];
}

export const gitaVerses: GitaVerse[] = [
  {
    id: "2.14",
    chapter: 2,
    verse: 14,
    sanskrit:
      "मात्रास्पर्शास्तु कौन्तेय शीतोष्णसुखदुःखदाः। आगमापायिनोऽनित्यास्तांस्तितिक्षस्व भारत।।",
    hindi:
      "हे कुन्तीपुत्र! सर्दी-गर्मी और सुख-दुःख को देने वाले इन्द्रियों और इनके विषयों के संयोग तो आने-जाने वाले और अनित्य हैं, इसलिए हे भारत! इनको सहन कर।",
    english:
      "O son of Kunti, the contact between the senses and the sense objects gives rise to fleeting perceptions of happiness and distress. These are non-permanent, and come and go like the winter and summer seasons. O descendant of Bharata, one must learn to tolerate them without being disturbed.",
    meaning_hindi:
      "सुख-दुख, हार-जीत, सफलता-असफलता सब कुछ क्षणिक है। धैर्य रखें और इन्हें सहन करें।",
    meaning_english:
      "Happiness and distress, victory and defeat, success and failure are all temporary. Practice patience and tolerance.",
    source: "Yatharth Geeta",
    source_image:
      "https://cdn.builder.io/api/v1/assets/91dee6dff05e4edeb389ea8ac7a33180/yatharth-de8a37",
    source_quality: "best",
    tags: ["stress", "failure", "patience", "tolerance", "temporary"],
    category: "emotional_balance",
    practical_application:
      "जब आप तनाव में हों तो याद रखें कि यह स्थिति अस्थायी है। धैर्य रखें और समय के साथ सब ठीक हो जाएगा।",
    life_situation: [
      "job_stress",
      "exam_failure",
      "relationship_problems",
      "financial_crisis",
    ],
  },
  {
    id: "2.47",
    chapter: 2,
    verse: 47,
    sanskrit:
      "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन। मा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि।।",
    hindi:
      "तेरा कर्म करने में ही अधिकार है, उसके फलों में कभी नहीं। इसलिए तू कर्मों के फल का हेतु मत बन और तेरी अकर्म में भी आसक्ति न हो।",
    english:
      "You have a right to perform your prescribed duty, but not to the fruits of action. Never consider yourself the cause of the results of your activities, and never be attached to not doing your duty.",
    meaning_hindi:
      "अपना कर्म करते जाओ, फल की चिंता मत करो। यह जीवन का सबसे महत्वपूर्ण सिद्धांत है।",
    meaning_english:
      "Focus on your actions, not the results. This is the most important principle of life.",
    source: "ISKCON Gita",
    source_image:
      "https://cdn.builder.io/api/v1/assets/91dee6dff05e4edeb389ea8ac7a33180/isckon-229285",
    source_quality: "excellent",
    tags: ["karma", "duty", "action", "results", "detachment"],
    category: "karma_yoga",
    practical_application:
      "काम में असफलता के डर से काम करना बंद न करें। बस अपना बेस्ट दें, रिजल्ट की चिंता न करें।",
    life_situation: [
      "work_pressure",
      "competitive_exams",
      "business_ventures",
      "career_decisions",
    ],
  },
  {
    id: "6.5",
    chapter: 6,
    verse: 5,
    sanskrit:
      "उद्धरेदात्मनात्मानं नात्मानमवसादयेत्। आत्मैव ह्यात्मनो बन्धुरात्मैव रिपुरात्मनः।।",
    hindi:
      "अपने द्वारा अपना उद्धार करे और अपना पतन न करे क्योंकि यह मनुष्य आप ही अपना मित्र है और आप ही अपना शत्रु है।",
    english:
      "One must deliver himself with the help of his mind, and not degrade himself. The mind is the friend of the conditioned soul, and his enemy as well.",
    meaning_hindi:
      "अपने मन को नियंत्रित करें। आप अपने सबसे बड़े मित्र भी हैं और शत्रु भी।",
    meaning_english:
      "Control your mind. You are your own greatest friend and your own worst enemy.",
    source: "Gorakhpur Press Gita",
    source_image:
      "https://cdn.builder.io/api/v1/assets/91dee6dff05e4edeb389ea8ac7a33180/gorakhpur-gita-4b0fde",
    source_quality: "good",
    tags: ["self_control", "mind", "friend", "enemy", "inner_strength"],
    category: "self_development",
    practical_application:
      "नकारात्मक विचारों को सकारात्मक में बदलें। अपने मन की boss आप हैं, मन की नहीं।",
    life_situation: [
      "depression",
      "anxiety",
      "negative_thoughts",
      "self_doubt",
    ],
  },
  {
    id: "3.27",
    chapter: 3,
    verse: 27,
    sanskrit:
      "प्रकृतेः क्रियमाणानि गुणैः कर्माणि सर्वशः। अहंकारविमूढात्मा कर्ताहमिति मन्यते।।",
    hindi:
      "वास्तव में सम्पूर्ण कर्म सब प्रकार से प्रकृति के ग��णों द्वारा किये जाते हैं, परन्तु अहंकार से मोहित हुआ मनुष्य 'मैं कर्ता हूँ' ऐसा मानता है।",
    english:
      "The spirit soul bewildered by the influence of false ego thinks himself the doer of activities that are in actuality carried out by the three modes of material nature.",
    meaning_hindi:
      "अहंकार छोड़ें। सब कुछ प्रकृति के नियमों से हो रहा है, आप केवल निमित्त हैं।",
    meaning_english:
      "Give up ego. Everything happens according to nature's laws, you are just an instrument.",
    source: "Yatharth Geeta",
    source_image:
      "https://cdn.builder.io/api/v1/assets/91dee6dff05e4edeb389ea8ac7a33180/yatharth-de8a37",
    source_quality: "best",
    tags: ["ego", "humility", "nature", "doership", "surrender"],
    category: "ego_management",
    practical_application:
      "सफलता मिले तो अहंकार न करें, असफलता मिले तो हार न मानें। दोनों स्थितियों में विनम्र रहें।",
    life_situation: [
      "success_pride",
      "failure_despair",
      "leadership_roles",
      "team_conflicts",
    ],
  },
  {
    id: "18.66",
    chapter: 18,
    verse: 66,
    sanskrit:
      "सर्वधर्मान्परित्यज्य मामेकं शरणं व्रज। अहं त्वां सर्वपापेभ्यो मोक्षयिष्यामि मा शुचः।।",
    hindi:
      "सम्पूर्ण धर्मों को त्यागकर केवल मेरी शरण में आ जा। मैं तुझे सम्पूर्ण पापों से मुक्त कर दूंगा, तू शोक मत कर।",
    english:
      "Abandon all varieties of religion and just surrender unto Me. I shall deliver you from all sinful reactions. Do not fear.",
    meaning_hindi:
      "ईश्वर की शरण में जाओ। वह सभी कष्टों से मुक्ति दिलाएंगे। डरने की कोई बात नहीं।",
    meaning_english:
      "Surrender to God. He will liberate you from all sufferings. There is nothing to fear.",
    source: "ISKCON Gita",
    source_image:
      "https://cdn.builder.io/api/v1/assets/91dee6dff05e4edeb389ea8ac7a33180/isckon-229285",
    source_quality: "excellent",
    tags: ["surrender", "liberation", "fear", "divine_protection", "moksha"],
    category: "surrender",
    practical_application:
      "जब सब कुछ असंभव लगे तो भगवान पर भरोसा रखें। वे आपका सबसे बड़ा सहारा हैं।",
    life_situation: [
      "hopelessness",
      "fear_of_death",
      "guilt",
      "spiritual_crisis",
    ],
  },
];

export const getDailyVerse = (): GitaVerse => {
  const today = new Date().getDate();
  const index = today % gitaVerses.length;
  return gitaVerses[index];
};

export const getRandomVerse = (): GitaVerse => {
  const randomIndex = Math.floor(Math.random() * gitaVerses.length);
  return gitaVerses[randomIndex];
};

export const getVersesByTag = (tag: string): GitaVerse[] => {
  return gitaVerses.filter((verse) => verse.tags.includes(tag.toLowerCase()));
};

export const getVersesByCategory = (category: string): GitaVerse[] => {
  return gitaVerses.filter((verse) => verse.category === category);
};
