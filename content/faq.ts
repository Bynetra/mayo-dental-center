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
      en: "What should I expect during my first visit to Lucida Dental Center?",
      ar: "ما الذي يجب أن أتوقعه خلال زيارتي الأولى لمركز لوسيدا لطب الأسنان؟",
    },
    answer: {
      en: "Your first visit in Al Waab begins with a thorough diagnostic examination, low-dose digital imaging if clinically indicated, and a personalized consultation led by Dr. Adey Al-Shaar or our attending dental practitioners. We discuss our findings openly and present a clear, phased treatment roadmap before initiating any procedure.",
      ar: "تبدأ زيارتك الأولى في عيادتنا بالوعب بفحص سريري وتشخيصي دقيق، وتصوير شعاعي رقمي منخفض الإشعاع إذا دعت الحاجة، وجلسة استشارة مخصصة يشرف عليها د. عدي الشعار أو الأطباء الممارسون لشرح حالتك ووضع خطة علاجية واضحة ومحددة الخطوات والتكاليف مسبقاً.",
    },
  },
  {
    id: "insurance",
    category: "insurance",
    question: {
      en: "Which health insurance networks and payment systems do you support in Qatar?",
      ar: "ما هي شبكات التأمين الطبي المعتمدة وطرق السداد في قطر؟",
    },
    answer: {
      en: "Lucida Dental Center accommodates major Qatar health insurance networks. We facilitate direct electronic billing for eligible AlKoot insurance policyholders. For QLM, Mednet, Nextcare, and other insurers, our reception desk issues stamped, standardized claim forms and diagnostic reports for expedited patient reimbursement. We also support local NAPS debit cards, Visa, Mastercard, and Tabby.",
      ar: "يتعامل مركز لوسيدا لطب الأسنان مع كبرى شبكات التأمين الصحي في دولة قطر. نوفر التغطية المباشرة للمشتركين المؤهلين ضمن شبكة الكوت للتأمين، كما يقدم مكتب الاستقبال تقارير وفواتير طبية معتمدة ومفصلة لعملاء QLM وميدنت ونكست كير وغيرها من الشركات للاسترداد السريع. كما نقبل بطاقات نافس المحلية، فيزا، ماستركارد، وتابي.",
    },
  },
  {
    id: "tabby",
    category: "insurance",
    question: {
      en: "Can I split my dental treatment costs into monthly installments with Tabby?",
      ar: "هل يمكنني تقسيط تكلفة علاج أسناني على دفعات شهرية عبر تابي؟",
    },
    answer: {
      en: "Yes! Lucida Dental Center accepts Tabby in Qatar, allowing you to divide your dental care invoice into 4 interest-free monthly installments. Simply inform our reception desk during checkout or select Tabby when scheduling your consultation.",
      ar: "نعم بكل تأكيد! يقبل مركز لوسيدا الدفع عبر 'تابي' في قطر، مما يتيح لك تقسيط قيمة فاتورة علاجك على 4 دفعات شهرية ميسرة دون أي فوائد أو رسوم إضافية. كل ما عليك هو إبلاغ موظف الاستقبال عند السداد.",
    },
  },
  {
    id: "emergency-policy",
    category: "appointments",
    question: {
      en: "How quickly can I be seen for an emergency dental issue or severe toothache?",
      ar: "ما مدى سرعة استقبال حالات طوارئ الأسنان والآلام الحادة؟",
    },
    answer: {
      en: "We prioritize acute toothaches, chipped or knocked-out teeth, and sudden dental infections with same-day emergency appointments. Call our clinic directly on +974 4451 1737 or WhatsApp us at +974 5531 1553 to be triaged by Dr. Mohamed Isa and our urgent care team.",
      ar: "نمنح حالات ألم الأسنان الشديد، وكسور الأسنان المفاجئة، والالتهابات الحادة أولوية الدخول الفوري في نفس اليوم. اتصل بنا مباشرة على 1737 4451 974+ أو راسلنا عبر خط طوارئ الواتساب على 1553 5531 974+ ليتم توجيهك لفريق الطوارئ بإشراف د. محمد عيسى.",
    },
  },
  {
    id: "whitening-safety",
    category: "treatments",
    question: {
      en: "Is professional Zoom whitening safe for tooth enamel?",
      ar: "هل تبييض الأسنان بتقنية زوم آمن على مينا الأسنان؟",
    },
    answer: {
      en: "Yes. In-office Zoom teeth whitening uses medical-grade, pH-balanced hydrogen peroxide gel activated by LED wavelength light to break down deep pigments without compromising enamel density. A soothing post-treatment mineralizer is applied to prevent transient sensitivity.",
      ar: "نعم، آمن تماماً ومعتمد طبياً. تستخدم جلسات زوم الاحترافية في العيادة جل تبييض متوازن الحموضة ينشطه ضوء LED لتفتيت التصبغات العميقة دون أي تأثير على صلابة المينا. ويتم تطبيق مادة معدنية مهدئة بعد الجلسة مباشرة لتفادي أي تحسس.",
    },
  },
  {
    id: "dental-implants-permanence",
    category: "treatments",
    question: {
      en: "Are dental implants a permanent solution for missing teeth?",
      ar: "هل تعتبر زراعة الأسنان حلاً دائماً ونهائياً للأسنان المفقودة؟",
    },
    answer: {
      en: "Yes. Biocompatible titanium implants fuse directly with your natural alveolar jawbone through osseointegration, functioning exactly like natural roots. With conscientious daily brushing, flossing, and periodic professional cleanings, implants provide a lifelong foundation for beautiful crowns.",
      ar: "نعم، الغرسات المصنوعة من التيتانيوم الحيوي تلتحم بعظام الفك الطبيعية وتعمل كجذور حقيقية للأسنان. ومع العناية الفموية اليومية والفحص والتنظيف الدوري، تدوم زراعة الأسنان لسنوات طويلة وتمنحك ثباتاً ومظهراً طبيعياً مدى الحياة.",
    },
  },
  {
    id: "pediatric-care",
    category: "treatments",
    question: {
      en: "Does Lucida Dental Center provide pediatric dental care for children?",
      ar: "هل يقدم مركز لوسيدا رعاية مخصصة لأسنان الأطفال؟",
    },
    answer: {
      en: "Yes, we welcome patients of all generations. Our clinic offers gentle pediatric checkups, protective fluoride treatments, pit and fissure sealants, and early orthodontic evaluations in a supportive, reassuring setting designed to make young patients feel at ease.",
      ar: "نعم، نرحب بجميع أفراد العائلة والأطفال. نوفر فحوصات لطيفة للأطفال، وتطبيق الفلورايد المقوي للمينا، وسدادات الشقوق الوقائية، والتقييم المبكر للتقويم في أجواء مريحة وهادئة تزيل أي قلق لدى أطفالكم.",
    },
  },
  {
    id: "hours-location",
    category: "general",
    question: {
      en: "What are your operating hours and exact clinic address in Doha?",
      ar: "ما هي أوقات العمل الرسمية والعنوان الدقيق للمركز في الدوحة؟",
    },
    answer: {
      en: "We are located on Bu Hasa Street (Snay Bu Hasa St) in Al Waab, Doha. Our hours are Saturday through Wednesday: 9:00 AM – 1:00 PM and 4:30 PM – 8:30 PM. On Thursdays we operate continuously from 9:00 AM to 5:00 PM. We are closed on Fridays, with emergency support reachable via WhatsApp.",
      ar: "يقع مركزنا في شارع بوحصا (شارع صنيع بو حصى) بمنطقة الوعب في الدوحة. أوقات عملنا من السبت إلى الأربعاء: 9:00 صباحاً – 1:00 ظهراً ومن 4:30 عصراً – 8:30 مساءً. ويوم الخميس من 9:00 صباحاً وحتى 5:00 مساءً متواصلاً. يوم الجمعة مغلق مع توفر خدمة الطوارئ عبر الواتساب.",
    },
  },
];
