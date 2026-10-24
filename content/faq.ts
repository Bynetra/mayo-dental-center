export interface FAQItem {
  id: string;
  question: {
    en: string;
    ar: string;
  };
  answer: {
    en: string;
    ar: string;
  };
  category: "general" | "insurance" | "treatments" | "appointments";
}

export const faqData: FAQItem[] = [
  {
    id: "first-visit",
    category: "general",
    question: {
      en: "What should I expect during my first visit to Mayo Dental Center?",
      ar: "ما الذي يجب أن أتوقعه خلال زيارتي الأولى لمركز مايو لطب الأسنان؟",
    },
    answer: {
      en: "Your first visit includes a welcoming consultation, a comprehensive clinical examination of your teeth and gums, any necessary low-dose digital X-rays, and a one-on-one discussion with Dr. Dixon or our specialists. We create a transparent, prioritized treatment plan before beginning any procedures.",
      ar: "تتضمن زيارتك الأولى استقبالاً ترحيبياً، وفحصاً سريرياً شاملاً لصحة الأسنان واللثة، وتصويراً شعاعياً رقمياً دقيقاً إذا لزم الأمر، وجلسة استشارة خاصة مع د. ديكسون أو أطبائنا المتخصصين لشرح حالتك ووضع خطة علاجية مخصصة ومحددة الأولويات قبل البدء بأي إجراء.",
    },
  },
  {
    id: "insurance",
    category: "insurance",
    question: {
      en: "Which insurance companies do you accept?",
      ar: "ما هي شركات التأمين المعتمدة لديكم في المركز؟",
    },
    answer: {
      en: "We proudly partner with major health insurance providers in Saudi Arabia, including Tawuniya and Medgulf. We are actively expanding our network of insurance partners. For other networks, our front desk provides complete medical claim documentation for direct reimbursement.",
      ar: "نعتمد أبرز شركات التأمين الطبي في المملكة العربية السعودية، ومنها التعاونية وميدغلف، ونعمل باستمرار على توسيع شبكتنا التأمينية. وفي حال كان تأمينك خارج شبكتنا المباشرة، يقدم لك فريق الاستقبال تقارير وفواتير طبية معتمدة لتقديمها لشركة تأمينك واسترداد القيمة مباشرة.",
    },
  },
  {
    id: "tabby",
    category: "insurance",
    question: {
      en: "Can I split my treatment costs into monthly installments with Tabby?",
      ar: "هل يمكنني تقسيط تكلفة العلاج على دفعات شهرية عبر تابي؟",
    },
    answer: {
      en: "Yes! We accept Tabby, allowing you to split your dental care bills into 4 interest-free monthly payments. Simply inform our reception desk at checkout or select Tabby when booking your appointment.",
      ar: "نعم بكل تأكيد! نوفر خدمة الدفع عبر 'تابي' لتقسيط قيمة علاج أسنانك على 4 دفعات شهرية ميسرة دون أي فوائد أو رسوم إضافية. كل ما عليك هو إبلاغ موظف الاستقبال عند السداد.",
    },
  },
  {
    id: "emergency-policy",
    category: "appointments",
    question: {
      en: "How quickly can I be seen for an emergency dental appointment?",
      ar: "ما مدى سرعة استقبال الحالات الطارئة والآلام المفاجئة؟",
    },
    answer: {
      en: "We treat acute pain and dental trauma with urgent same-day priority. Call our clinic directly at +966 13 361 1399 or message our emergency WhatsApp line on +966 550220715 to be triaged into the next available treatment chair.",
      ar: "نعطي الحالات الطارئة والآلام الحادة أولوية الدخول الفوري في نفس اليوم دون انتظار. يمكنك الاتصال بنا مباشرة على 0133611399 966+ أو مراسلتنا فوراً عبر خط طوارئ الواتساب على 0550220715 966+ لتوجيهك لأقرب كرسي علاج متاح.",
    },
  },
  {
    id: "whitening-safety",
    category: "treatments",
    question: {
      en: "Is clinical teeth whitening safe for natural tooth enamel?",
      ar: "هل تبييض الأسنان في العيادة آمن على مينا الأسنان؟",
    },
    answer: {
      en: "Absolutely. Our professional in-office whitening uses clinically tested, pH-balanced formulas that gently lift deep organic stains without weakening enamel or altering tooth structure. We also apply a specialized desensitizing mineralizer immediately following treatment.",
      ar: "آمن تماماً. نستخدم مواد تبييض طبية معتمدة ومتوازنة الحموضة، تعمل على تفكيك التصبغات العضوية العميقة دون أي تأثير على قوة المينا أو بنية السن. كما نطبق مادة معدنية مهدئة بعد الجلسة مباشرة لمنع أي حساسية.",
    },
  },
  {
    id: "dental-implants-permanence",
    category: "treatments",
    question: {
      en: "Are dental implants truly a permanent replacement for missing teeth?",
      ar: "هل تعتبر زراعة الأسنان حلاً دائماً ونهائياً لتعويض السن المفقود؟",
    },
    answer: {
      en: "Yes. Biocompatible titanium implants physically osseointegrate (fuse) with your natural jawbone, functioning just like organic tooth roots. With regular brushing, flossing, and semi-annual clinical hygiene visits, implants are designed to last a lifetime.",
      ar: "نعم، الغرسات المصنوعة من التيتانيوم الحيوي تندمج حيوياً مع عظم الفك الطبيعي وتعمل تماماً كجذور الأسنان الحقيقية. ومع العناية الفموية اليومية والفحص الدوري كل 6 أشهر، صممت زراعة الأسنان لتدوم معك مدى الحياة.",
    },
  },
  {
    id: "pediatric-care",
    category: "treatments",
    question: {
      en: "Do you treat children and family members of all ages?",
      ar: "هل تقدمون رعاية مخصصة للأطفال ولجميع أفراد العائلة؟",
    },
    answer: {
      en: "Yes, Mayo Dental Center is a comprehensive family dental clinic. We offer preventive fluoride varnishes, gentle pediatric checkups, cavity sealants, and early orthodontic assessments in a warm, friendly environment designed to keep young patients calm and fearless.",
      ar: "نعم، مركز مايو هو مركز عائلي متكامل. نقدم خدمات طب أسنان الأطفال الوقائية، وتطبيق الفلورايد، وحشوات وسدادات الشقوق الوقائية، والتقييم المبكر للتقويم في بيئة ودية ومريحة تبدد خوف الأطفال وتزرع الثقة في نفوسهم.",
    },
  },
  {
    id: "hours-location",
    category: "general",
    question: {
      en: "What are your operating hours and exact clinic location in Jubail?",
      ar: "ما هي أوقات العمل الرسمية والموقع الدقيق للمركز في الجبيل؟",
    },
    answer: {
      en: "We are open Saturday through Thursday from 9:00 AM to 9:00 PM (closed on Fridays). We are conveniently located at 3107 King Faisal North (King Faisal Ibn Abd Al Aziz Road) in the Al Dana District, Jubail City Center, with ample street and visitor parking.",
      ar: "نستقبلكم من يوم السبت حتى الخميس من الساعة 9:00 صباحاً وحتى 9:00 مساءً (ويوم الجمعة مغلق). يقع مركزنا في موقع مركزي مميز على شارع الملك فيصل الشمالي (حي الدانة - الجبيل البلد)، مع توفر مواقف سيارات مريحة للمراجعين.",
    },
  },
];

