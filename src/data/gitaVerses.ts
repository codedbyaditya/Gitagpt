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
  tags: string[];
  category: string;
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
    tags: ["stress", "failure", "patience", "tolerance", "temporary"],
    category: "emotional_balance",
  },
  {
    id: "2.47",
    chapter: 2,
    verse: 47,
    sanskrit:
      "कर्मण्येवाधिकारस्ते मा फलेष�� कदाचन। मा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि।।",
    hindi:
      "तेरा कर्म करने में ही अधिकार है, उसके फलों में कभी नहीं। इसलिए तू कर्मों के फल का हेतु मत बन और तेरी अकर्म में भी आसक्ति न हो।",
    english:
      "You have a right to perform your prescribed duty, but not to the fruits of action. Never consider yourself the cause of the results of your activities, and never be attached to not doing your duty.",
    meaning_hindi:
      "अपना कर्म करते जाओ, फल की चिंता मत करो। यह जीवन का सबसे महत्वपूर्ण सिद्धांत है।",
    meaning_english:
      "Focus on your actions, not the results. This is the most important principle of life.",
    source: "ISKCON Gita",
    tags: ["karma", "duty", "action", "results", "detachment"],
    category: "karma_yoga",
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
    tags: ["self_control", "mind", "friend", "enemy", "inner_strength"],
    category: "self_development",
  },
  {
    id: "7.19",
    chapter: 7,
    verse: 19,
    sanskrit:
      "बहूनां जन्मनामन्ते ज्ञानवान्मां प्रपद्यते। वासुदेवः सर्वमिति स महात्मा सुदुर्लभः।।",
    hindi:
      "बहुत जन्मों के अन्त में ज्ञानवान् पुरुष मुझको प्राप्त होता है। वासुदेव सब कुछ है- ऐसा जानने वाला वह महात्मा अति दुर्लभ है।",
    english:
      "After many births and deaths, he who is actually in knowledge surrenders unto Me, knowing Me to be the cause of all causes and all that is. Such a great soul is very rare.",
    meaning_hindi:
      "ईश्वर सब कुछ में व्याप्त है। इस सत्य को समझना और अनुभव करना दुर्लभ है।",
    meaning_english:
      "God pervades everything. Understanding and experiencing this truth is rare.",
    source: "Ramakrishna Mission Gita",
    tags: ["knowledge", "surrender", "divine", "rare", "wisdom"],
    category: "spiritual_realization",
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
    tags: ["surrender", "liberation", "fear", "divine_protection", "moksha"],
    category: "surrender",
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
