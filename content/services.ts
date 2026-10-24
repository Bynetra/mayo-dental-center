export interface ServiceDetail {
  id: string;
  slug: string;
  title: {
    en: string;
    ar: string;
  };
  duration: string;
  durationMinutes: number;
  category: {
    en: string;
    ar: string;
  };
  shortDescription: {
    en: string;
    ar: string;
  };
  fullDescription: {
    en: string;
    ar: string;
  };
  whoIsItFor: {
    en: string;
    ar: string;
  };
  procedureSteps: {
    step: number;
    title: { en: string; ar: string };
    desc: { en: string; ar: string };
  }[];
  benefits: { en: string; ar: string }[];
  aftercare: { en: string; ar: string }[];
  faqs: {
    question: { en: string; ar: string };
    answer: { en: string; ar: string };
  }[];
  image: string;
  iconName: string;
  isEmergency?: boolean;
}

export const servicesData: ServiceDetail[] = [
  {
    id: "checkup",
    slug: "general-checkup-with-treatment-planning",
    title: {
      en: "General checkup with treatment planning",
      ar: "فحص عام مع تخطيط العلاج",
    },
    duration: "30 min",
    durationMinutes: 30,
    category: {
      en: "Preventive Care",
      ar: "الرعاية الوقائية",
    },
    shortDescription: {
      en: "Comprehensive examination of your teeth, gums, and oral tissues with personalized digital treatment roadmap.",
      ar: "فحص شامل ودقيق للأسنان واللثة وأنسجة الفم مع وضع خطة علاجية رقمية ومخصصة لصحتك.",
    },
    fullDescription: {
      en: "Regular dental checkups are essential to maintaining a healthy smile. Our general dental exam includes a comprehensive examination of your teeth, gums and mouth to detect any potential problems early. We will discuss any findings and develop a personalized treatment plan tailored to your specific needs and goals.",
      ar: "تعد الفحوصات الدورية للأسنان ركيزة أساسية للحفاظ على ابتسامة صحية وجميلة. يتضمن الفحص العام في مركزنا كشفاً دقيقاً وشاملاً للأسنان واللثة وتجويف الفم للكشف المبكر عن أي مشكلات محتملة، مع مناقشة كافة النتائج ووضع خطة علاجية مخصصة تناسب احتياجاتك وأهدافك بدقة.",
    },
    whoIsItFor: {
      en: "New patients, annual preventive visits, and anyone experiencing mild dental sensitivity or wanting a full oral health review.",
      ar: "المرضى الجدد، والزيارات الدورية السنوية للوقاية، ولكل من يعاني من تحسس خفيف أو يرغب في تقييم شامل لصحة فمه وأسنانه.",
    },
    procedureSteps: [
      {
        step: 1,
        title: { en: "Clinical Examination", ar: "الفحص السريري الدقيق" },
        desc: { en: "Visual inspection of teeth, bite alignment, and periodontal gum pockets.", ar: "معاينة بصرية دقيقة للأسنان ووضعية الإطباق وصحة أنسجة اللثة المحيطة." },
      },
      {
        step: 2,
        title: { en: "Digital Imaging", ar: "التصوير الشعاعي الرقمي" },
        desc: { en: "Low-dose digital X-rays to assess interdental areas, roots, and jawbone health.", ar: "صور شعاعية رقمية منخفضة الإشعاع لتقييم ما بين الأسنان والجذور وسلامة عظام الفك." },
      },
      {
        step: 3,
        title: { en: "Personalized Roadmap", ar: "وضع الخطة العلاجية" },
        desc: { en: "Detailed review of findings with transparent recommendations and priority phases.", ar: "مراجعة شفافة للنتائج مع تحديد أولويات العلاج والخيارات المتاحة لكل حالة." },
      },
    ],
    benefits: [
      { en: "Early detection prevents costly complex procedures", ar: "الكشف المبكر يمنع تطور المشكلات ويجنبك الإجراءات المعقدة" },
      { en: "Clear transparent clinical priorities without surprise costs", ar: "أولويات علاجية واضحة وشفافة دون أي تكاليف غير متوقعة" },
      { en: "Comprehensive screening for gum disease and enamel wear", ar: "فحص وقائي متكامل ضد أمراض اللثة وتآكل مينا الأسنان" },
    ],
    aftercare: [
      { en: "Follow recommended oral hygiene routine at home", ar: "الالتزام بروتين النظافة الفموية اليومي الموصى به" },
      { en: "Schedule prioritized treatment sessions according to your plan", ar: "جدولة جلسات العلاج بحسب الأولويات المتفق عليها في خطتك" },
    ],
    faqs: [
      {
        question: { en: "How often should I get a general dental checkup?", ar: "كم مرة يجب أن أخضع لفحص دوري للأسنان؟" },
        answer: { en: "We recommend a routine examination and cleaning every 6 months to ensure lasting oral health.", ar: "نوصي بإجراء الفحص الدوري وتنظيف الأسنان كل 6 أشهر لضمان استدامة صحة الفم." },
      },
      {
        question: { en: "Are digital X-rays included if needed?", ar: "هل يتضمن الفحص تصويراً شعاعياً إذا دعت الحاجة؟" },
        answer: { en: "Diagnostic imaging is assessed by the dentist during consultation and discussed prior to capture.", ar: "يحدد الطبيب مدى الحاجة للتصوير الشعاعي أثناء الفحص ويناقش ذلك معك بشفافية تامة." },
      },
    ],
    image: "/images/original/service-general-checkup.webp",
    iconName: "Stethoscope",
  },
  {
    id: "scaling",
    slug: "scaling-and-polishing",
    title: {
      en: "Scaling and polishing",
      ar: "ازالة الترسبات و تلميع الاسنان",
    },
    duration: "30 min",
    durationMinutes: 30,
    category: {
      en: "Hygiene & Prevention",
      ar: "العناية والنظافة",
    },
    shortDescription: {
      en: "Professional ultrasonic calculus removal and high-gloss polishing for fresh breath and pink, healthy gums.",
      ar: "إزالة الترسبات الجيرية بالأمواج فوق الصوتية وتلميع الأسنان لنفَس منعش ولثة صحية ووردية.",
    },
    fullDescription: {
      en: "Keep your smile sparkling and your gums healthy with our professional plaque removal and teeth polishing service.",
      ar: "حافظ على بريق ابتسامتك وصحة لثتك من خلال خدمتنا المتخصصة في إزالة طبقات الجير والبلاك وتلميع أسطح الأسنان بعناية فائقة ولطف تام.",
    },
    whoIsItFor: {
      en: "Anyone with visible tartar buildup, staining from tea or coffee, bleeding gums, or due for their semi-annual hygiene visit.",
      ar: "لكل من يعاني من تراكم الجير، وتصبغات الشاي والقهوة، ونزيف اللثة الخفيف، أو لمن حان موعد تنظيفه الدوري النصف سنوي.",
    },
    procedureSteps: [
      {
        step: 1,
        title: { en: "Ultrasonic Scaling", ar: "إزالة الجير بالموجات الصوتية" },
        desc: { en: "Vibrational water-assisted tip gently breaks down hardened tartar above and below gum line.", ar: "رأس دقيق بالموجات الصوتية ورذاذ الماء يفتت الترسبات الجيرية المتصلبة بأمان ولطف." },
      },
      {
        step: 2,
        title: { en: "Micro-Polishing", ar: "التلميع السطحي الدقيق" },
        desc: { en: "Gentle prophylaxis paste smooths tooth surfaces, making future plaque adhesion difficult.", ar: "معجون تلميع طبي متخصص ينعم أسطح الأسنان ويصعب التصاق البلاك مستقبلاً." },
      },
    ],
    benefits: [
      { en: "Halts and reverses early gingivitis and bleeding gums", ar: "يوقف ويعالج المراحل الأولى من التهاب اللثة ونزيفها" },
      { en: "Removes stubborn surface stains from coffee, tea, and tobacco", ar: "يزيل التصبغات السطحية العنيدة الناتجة عن القهوة والشاي" },
      { en: "Immediate sensation of cleanliness and fresh oral hygiene", ar: "إحساس فوري بالنظافة والانتعاش الفموي الكامل" },
    ],
    aftercare: [
      { en: "Avoid strongly staining drinks for 2 hours post-polishing", ar: "تجنب المشروبات شديدة الصبغة لمدة ساعتين بعد التلميع" },
      { en: "Brush gently twice daily using a soft-bristle toothbrush", ar: "تنظيف الأسنان بلطف مرتين يومياً بفرشاة ناعمة" },
    ],
    faqs: [
      {
        question: { en: "Does teeth scaling hurt or thin the enamel?", ar: "هل تنظيف الجير يسبب ألماً أو يضعف مينا الأسنان؟" },
        answer: { en: "No. Modern ultrasonic scaling only targets the calculus without scraping away natural enamel.", ar: "على الإطلاق. تقنية الموجات الصوتية الحديثة تستهدف الجير فقط دون أي مساس بطبقة المينا الطبيعية." },
      },
    ],
    image: "/images/original/service-scaling-polishing.jpg",
    iconName: "Sparkles",
  },
  {
    id: "fluoride",
    slug: "fluoride-application",
    title: {
      en: "Fluoride application",
      ar: "تطبيق الفلورايد لمنع تسوس الأسنان",
    },
    duration: "15 min",
    durationMinutes: 15,
    category: {
      en: "Enamel Protection",
      ar: "حماية وتقوية المينا",
    },
    shortDescription: {
      en: "Concentrated mineral treatment that remineralizes weakened enamel and provides long-lasting defense against decay.",
      ar: "علاج بالمعادن المركزة يعيد تمعدن المينا الضعيفة ويمنح حماية ممتدة ضد التسوس.",
    },
    fullDescription: {
      en: "Protect your teeth and prevent tooth decay with our fluoride application service. Fluoride is a natural mineral that strengthens teeth, helps fight tooth decay and is ideal for patients of all ages",
      ar: "احمِ أسنانك وامنحها دفاعاً قوياً ضد التسوس عبر خدمة تطبيق الفلورايد الطبي. الفلورايد معدن طبيعي يعزز صلابة الأسنان ويقاوم الأحماض البكتيرية المسببة للنخر، وهو خيار مثالي وموصى به للأطفال والبالغين على حد سواء.",
    },
    whoIsItFor: {
      en: "Children developing permanent teeth, adults with high cavity susceptibility, or patients with sensitive tooth roots.",
      ar: "الأطفال في مراحل نمو الأسنان الدائمة، والبالغون المعرضون لتكرار التسوس، وأصحاب جذور الأسنان الحساسة.",
    },
    procedureSteps: [
      {
        step: 1,
        title: { en: "Tooth Preparation", ar: "تجفيف وتحضير الأسنان" },
        desc: { en: "Teeth are gently isolated and dried for optimal mineral absorption.", ar: "تجفيف سطح الأسنان بلطف لضمان أعلى مستوى لامتصاص جزيئات الفلورايد." },
      },
      {
        step: 2,
        title: { en: "Varnish Application", ar: "تطبيق الفلورايد المركز" },
        desc: { en: "Quick, tasteless clinical fluoride varnish is applied with a soft micro-brush.", ar: "وضع طبقة واقية سريعة من ورنيش الفلورايد الطبي باستخدام فرشاة دقيقة." },
      },
    ],
    benefits: [
      { en: "Strengthens microscopic weak spots before visible cavities form", ar: "يقوي النقاط الضعيفة مجهرياً قبل أن تتحول إلى تسوسات ظاهرة" },
      { en: "Significantly reduces cold and sweet tooth sensitivity", ar: "يقلل بشكل ملحوظ من تحسس الأسنان تجاه البرودة والسكريات" },
      { en: "Safe, swift, and entirely painless 15-minute appointment", ar: "إجراء آمن وسريع وغير مؤلم على الإطلاق خلال 15 دقيقة فقط" },
    ],
    aftercare: [
      { en: "Refrain from eating crunchy foods or hot liquids for 30 minutes", ar: "الامتناع عن الأطعمة الصلبة والمشروبات الساخنة لمدة 30 دقيقة" },
      { en: "Do not brush or floss until the following morning to maximize absorption", ar: "تأجيل تنظيف الأسنان بالفرشاة حتى صباح اليوم التالي لتحقيق أقصى امتصاص" },
    ],
    faqs: [
      {
        question: { en: "Is fluoride safe for young children?", ar: "هل الفلورايد آمن للأطفال الصغار؟" },
        answer: { en: "Yes, our clinical varnish sets instantly upon contact with saliva and cannot be swallowed.", ar: "نعم تماماً، فالورنيش الطبي يتماسك فور ملامسته للعاب ولا يمكن ابتلاعه." },
      },
    ],
    image: "/images/original/service-fluoride.jpg",
    iconName: "ShieldCheck",
  },
  {
    id: "extraction",
    slug: "tooth-extraction",
    title: {
      en: "Tooth extraction",
      ar: "خلع الأسنان",
    },
    duration: "1 hr",
    durationMinutes: 60,
    category: {
      en: "Surgical & Restorative",
      ar: "الجراحة والترميم",
    },
    shortDescription: {
      en: "Gentle, atraumatic removal of non-restorable, broken, or impacted teeth with advanced local anesthesia.",
      ar: "إزالة مريحة ولطيفة للأسنان المتضررة أو المكسورة أو المطمورة مع أحدث تقنيات التخدير الموضعي.",
    },
    fullDescription: {
      en: "When a tooth needs to be removed due to decay or damage, our tooth extraction service ensures a safe and comfortable experience",
      ar: "عندما تقتضي الضرورة إزالة السن بسبب تسوس عميق لا يمكن ترميمه أو كسر شديد، تضمن لك خدمتنا في خلع الأسنان تجربة آمنة وخالية من الألم مع عناية فائقة بسلامة العظام واللثة المحيطة.",
    },
    whoIsItFor: {
      en: "Severely damaged teeth, problematic wisdom teeth, crowded arches preparing for braces, or loose teeth with advanced bone loss.",
      ar: "الأسنان التالفة كلياً، وأضراس العقل المسببة للآلام أو الالتهابات، وتجهيز الفك للتقويم، والأسنان المفقودة للدعم العظمي.",
    },
    procedureSteps: [
      {
        step: 1,
        title: { en: "Profound Anesthesia", ar: "التخدير الموضعي التام" },
        desc: { en: "Complete numbness verified before any instrumentation begins.", ar: "التأكد من التخدير الموضعي التام للمنطقة قبل البدء بأي خطوة." },
      },
      {
        step: 2,
        title: { en: "Atraumatic Removal", ar: "الخلع بأقل قدر من الرض" },
        desc: { en: "Preserves surrounding bone architecture for future implant placement if desired.", ar: "حفظ البنية العظمية المحيطة لتسهيل إمكانية الزراعة مستقبلاً." },
      },
    ],
    benefits: [
      { en: "Eliminates chronic localized infection and painful swelling", ar: "يقضي على مصادر العدوى المزمنة والانتفاخات المؤلمة" },
      { en: "Prevents infection from spreading to adjacent healthy teeth", ar: "يمنع انتقال الالتهاب إلى الأسنان السليمة المجاورة" },
      { en: "Clear post-operative instructions for swift, uncomplicated healing", ar: "إرشادات ما بعد العلاج واضحة تضمن شفاءً سريعاً ومريحاً" },
    ],
    aftercare: [
      { en: "Bite firmly on the gauze pad for 45 minutes", ar: "العض بثبات على الشاش الطبي لمدة 45 دقيقة" },
      { en: "Avoid drinking through a straw, smoking, or vigorous rinsing for 24 hours", ar: "تجنب استخدام الماصة أو التدخين أو المضمضة القوية لمدة 24 ساعة" },
    ],
    faqs: [
      {
        question: { en: "Will I feel pain during the tooth extraction?", ar: "هل سأشعر بأي ألم أثناء خلع السن؟" },
        answer: { en: "No pain is felt during the procedure; you will only feel mild mechanical pressure.", ar: "لن تشعر بأي ألم بفضل التخدير الموضعي المتقدم، بل ستشعر فقط بضغط خفيف ومحتمل." },
      },
    ],
    image: "/images/original/service-extraction.jpg",
    iconName: "Scissors",
  },
  {
    id: "root-canal",
    slug: "root-canal-treatment",
    title: {
      en: "Root canal treatment",
      ar: "علاج الجذور",
    },
    duration: "1 hr",
    durationMinutes: 60,
    category: {
      en: "Endodontics",
      ar: "علاج العصب والجذور",
    },
    shortDescription: {
      en: "Precision endodontic therapy that relieves acute toothache, cleans infected canals, and saves your natural tooth.",
      ar: "علاج دقيق للجذور يقضي على ألم الأسنان الحاد، ويعقم القنوات المصابة، ويحافظ على سنك الطبيعي.",
    },
    fullDescription: {
      en: "Preserve your natural teeth and relieve pain with our root canal treatment. This procedure treats any infections in the dental root, preventing further decay and restoring dental health",
      ar: "حافظ على أسنانك الطبيعية وتخلص من الآلام الحادة مع خدمة علاج الجذور. يزيل هذا الإجراء الدقيق الالتهابات من لب السن وقنواته العصبية، مما يوقف انتشار العدوى ويعيد للسن وظيفته الطبيعية لسنوات طويلة.",
    },
    whoIsItFor: {
      en: "Patients suffering from throbbing spontaneous toothache, prolonged pain to hot/cold, or visible abscess on the gum.",
      ar: "المرضى الذين يعانون من ألم نابض ومستمر، أو حساسية مفرطة للحرارة والبرودة، أو وجود خراج لثوي مرافق للسن.",
    },
    procedureSteps: [
      {
        step: 1,
        title: { en: "Canal Cleaning", ar: "تنظيف وتعقيم القنوات" },
        desc: { en: "Diseased pulp is gently extracted and canals are disinfected with medical irrigants.", ar: "إزالة النسيج اللبي المصاب بدقة وتطهير القنوات بمحاليل تعقيم طبية متطورة." },
      },
      {
        step: 2,
        title: { en: "Biocompatible Sealing", ar: "حشو وإغلاق الجذور" },
        desc: { en: "Canals are filled and hermetically sealed to block future bacterial reinfection.", ar: "ملء القنوات بمادة حيوية مانعة للتسرب لمنع عودة البكتيريا مجدداً." },
      },
    ],
    benefits: [
      { en: "Immediately stops intense dental throbbing and nerve agony", ar: "إيقاف فوري للآلام العصبية الحادة والمزعجة" },
      { en: "Saves the natural tooth and avoids expensive extraction and replacement", ar: "إنقاذ السن الطبيعي وتجنب الحاجة للخلع والتعويضات المكلفة" },
      { en: "Restores normal chewing ability and jaw alignment", ar: "استعادة وظيفة المضغ الطبيعية وراحة الإطباق الكاملة" },
    ],
    aftercare: [
      { en: "Avoid chewing hard items on the treated tooth until final crown placement", ar: "تجنب مضغ الأطعمة الصلبة على السن المعالج حتى تركيب التاج النهائي" },
      { en: "Mild soreness for 2-3 days can be managed with standard pain relievers", ar: "يمكن السيطرة على الانزعاج الخفيف لأول يومين بمسكنات الألم الموصوفة" },
    ],
    faqs: [
      {
        question: { en: "Is a root canal painful?", ar: "هل علاج عصب وجذور الأسنان مؤلم؟" },
        answer: { en: "With modern local anesthesia, root canal treatment is as comfortable as receiving a routine filling.", ar: "مع تقنيات التخدير الموضعي الحديثة، أصبح علاج الجذور مريحاً تماماً مثل وضع حشوة عادية." },
      },
    ],
    image: "/images/original/service-root-canal.jpg",
    iconName: "Activity",
  },
  {
    id: "whitening",
    slug: "tooth-whitening",
    title: {
      en: "Tooth whitening",
      ar: "تبييض الأسنان",
    },
    duration: "1 hr",
    durationMinutes: 60,
    category: {
      en: "Cosmetic Dentistry",
      ar: "طب الأسنان التجميلي",
    },
    shortDescription: {
      en: "Safe, chairside clinical brightening that lifts deep enamel discolorations by multiple shades in a single session.",
      ar: "تبييض سريري آمن داخل العيادة يزيل التصبغات العميقة ويفتح لون الأسنان بعدة درجات في جلسة واحدة.",
    },
    fullDescription: {
      en: "Get a brighter, more confident smile with our professional teeth whitening services",
      ar: "احصل على ابتسامة أكثر إشراقاً وثقة مع خدمات تبييض الأسنان الاحترافية في مركزنا، باستخدام مواد طبية آمنة تحمي اللثة والمينا وتمنحك بياضاً طبيعياً متألقاً.",
    },
    whoIsItFor: {
      en: "Adults seeking a brighter smile for upcoming weddings, milestones, interviews, or to reverse years of dietary staining.",
      ar: "للراغبين في ابتسامة مشرقة لمناسباتهم الخاصة، أو من يريدون إزالة تصبغات سنوات من الشاي والقهوة والتدخين.",
    },
    procedureSteps: [
      {
        step: 1,
        title: { en: "Gum Isolation", ar: "حماية وعزل اللثة" },
        desc: { en: "Gums and lips are carefully protected with a light-cured barrier.", ar: "تطبيق حاجز حماية طبي لعزل اللثة والشفاه تماماً عن مادة التبييض." },
      },
      {
        step: 2,
        title: { en: "Clinical Gel Activation", ar: "تطبيق الجل وتنشيطه" },
        desc: { en: "Medical-grade whitening agent is applied in supervised intervals for maximum radiance.", ar: "تطبيق جل تبييض سريري احترافي على جولات محددة للحصول على أفضل إشراقة." },
      },
    ],
    benefits: [
      { en: "Noticeable, dramatic brightening achieved in just 60 minutes", ar: "نتائج مبهرة وواضحة تلاحظها خلال 60 دقيقة فقط" },
      { en: "Clinically formulated with desensitizing agents to protect enamel", ar: "تركيبة علاجية متطورة بمواد مهدئة تحمي المينا من التحسس" },
      { en: "Customized shade matching tailored to your skin tone and preference", ar: "تحديد درجة البياض المناسبة للون بشرتك ومظهرك الطبيعي" },
    ],
    aftercare: [
      { en: "Follow the 'white diet' for 48 hours: avoid coffee, tea, dark sauces, and smoking", ar: "اتباع 'الحمية البيضاء' لمدة 48 ساعة بتجنب القهوة والشاي والمأكولات الملونة والتدخين" },
      { en: "Use a sensitivity toothpaste if mild thermal reaction occurs", ar: "استخدام معجون مخصص للأسنان الحساسة في حال حدوث تحسس خفيف مؤقت" },
    ],
    faqs: [
      {
        question: { en: "How long do professional whitening results last?", ar: "كم تدوم نتائج التبييض السريري؟" },
        answer: { en: "Results typically last 1 to 2 years depending on dietary habits and oral hygiene routine.", ar: "تدوم النتائج عادة من سنة إلى سنتين بحسب عاداتك الغذائية ونمط العناية اليومي." },
      },
    ],
    image: "/images/original/service-whitening.jpg",
    iconName: "Sun",
  },
  {
    id: "hollywood-smile",
    slug: "hollywood-smile",
    title: {
      en: "Hollywood smile",
      ar: "ابتسامة هوليود",
    },
    duration: "1 hr",
    durationMinutes: 60,
    category: {
      en: "Smile Makeover",
      ar: "تجميل وتصميم الابتسامة",
    },
    shortDescription: {
      en: "Custom-crafted ceramic veneers and aesthetic harmony designed to create a symmetrical, celebrity-grade smile.",
      ar: "عدسات خزفية مصممة خصيصاً وتناسق جمالي متكامل يمنحك ابتسامة متناسقة وجذابة تشبه ابتسامة المشاهير.",
    },
    fullDescription: {
      en: "Transform your smile into a dazzling masterpiece through our Hollywood Smile services. These services combine multiple different treatments to achieve a bright, flawless smile.",
      ar: "حوّل ابتسامتك إلى لوحة فنية ساحرة من خلال خدمات ابتسامة هوليوود المتكاملة. نجمع بين أحدث تقنيات تصميم الابتسامة الرقمي والعدسات التجميلية فائقة الرقة لنمنحك ابتسامة مشرقة ومثالية تليق بملامحك.",
    },
    whoIsItFor: {
      en: "Patients with intrinsic tooth discoloration, chipped edges, slight misalignments, or irregular spacing desiring a full aesthetic upgrade.",
      ar: "من يعانون من تصبغات عميقة غير قابلة للتبييض، أو حواف مكسورة، أو فراغات بين الأسنان، ويرغبون في ترقية جمالية شاملة.",
    },
    procedureSteps: [
      {
        step: 1,
        title: { en: "Digital Aesthetic Design", ar: "التصميم الرقمي للابتسامة" },
        desc: { en: "Custom mock-up previewing tooth contours, shade, and proportion before crafting.", ar: "تصميم ومعاينة ثلاثية الأبعاد لشكل الابتسامة واللون وتناسب الأسنان قبل التنفيذ." },
      },
      {
        step: 2,
        title: { en: "Veneer Bonding", ar: "تثبيت العدسات الخزفية" },
        desc: { en: "Hand-finished ultra-thin porcelain veneers bonded permanently with medical adhesive.", ar: "تثبيت عدسات البورسلين فائقة الدقة بمواد لاصقة طبية دائمة وعالية القوة." },
      },
    ],
    benefits: [
      { en: "Permanent, stain-resistant brilliance that never discolors with age", ar: "بياض دائم ومقاوم للتصبغات لا يتأثر بالمشروبات أو تقدم العمر" },
      { en: "Corrects minor gaps, uneven shapes, and chipped tooth surfaces", ar: "يعالج الفراغات وعدم انتظام أشكال الأسنان والتآكل السطحي" },
      { en: "Boosts personal confidence with natural facial symmetry", ar: "يعزز الثقة بالنفس ويضفي تناسقاً وتناغماً جذاباً مع تقاسيم الوجه" },
    ],
    aftercare: [
      { en: "Wear a nightguard if you have a habit of clenching or grinding teeth", ar: "ارتداء واقي الأسنان الليلي في حال وجود عادة الجز على الأسنان أثناء النوم" },
      { en: "Maintain routine biannual checkups and professional cleanings", ar: "الحفاظ على مواعيد الفحص الدوري والتنظيف مرتين سنوياً" },
    ],
    faqs: [
      {
        question: { en: "Do veneers look artificial or overly bulky?", ar: "هل تبدو العدسات التجميلية مصطنعة أو بارزة؟" },
        answer: { en: "No. Our veneers are ultra-thin and custom-shaded to reflect natural light just like tooth enamel.", ar: "كلا، نعتمد عدسات فائقة الرقة مصممة خصيصاً لتعكس الضوء بنفس حيوية مينا الأسنان الطبيعية." },
      },
    ],
    image: "/images/original/service-hollywood-smile.jpg",
    iconName: "Smile",
  },
  {
    id: "orthodontics",
    slug: "orthodontics",
    title: {
      en: "Orthodontics",
      ar: "علاج وتقويم الأسنان",
    },
    duration: "1 hr",
    durationMinutes: 60,
    category: {
      en: "Alignment & Bite Correction",
      ar: "تقويم الأسنان وتعديل الإطباق",
    },
    shortDescription: {
      en: "Modern ceramic braces, metal brackets, and clear aligners to align crooked teeth and fix bite irregularities.",
      ar: "تقويم شفاف وخزفي ومعدني متطور لتعديل اعوجاج الأسنان وإصلاح مشكلات الإطباق بدقة.",
    },
    fullDescription: {
      en: "Get a beautifully symmetrical smile and improve your oral health with our comprehensive orthodontic treatment. Whether you have crooked teeth, gaps, or bite issues, our orthodontists are here to help",
      ar: "احصل على ابتسامة متناسقة وجذابة وعزز صحة فمك عبر علاج التقويم الشامل في مركز مايو. سواء كنت تعاني من ازدحام الأسنان، أو الفراغات، أو مشاكل في الإطباق، فإن أطباء التقويم لدينا يقدمون لك أحدث الحلول وأكثرها راحة.",
    },
    whoIsItFor: {
      en: "Teens and adults with crowded teeth, crossbite, overbite, or gaps desiring functional alignment and a symmetrical smile.",
      ar: "المراهقون والبالغون الذين يعانون من تراكب الأسنان، أو تباعدها، أو صعوبة في المضغ بسبب مشاكل الإطباق.",
    },
    procedureSteps: [
      {
        step: 1,
        title: { en: "Orthodontic Diagnostic Scan", ar: "الفحص والمسح التشخيصي" },
        desc: { en: "Digital 3D impressions and cephalometric analysis to map tooth movement.", ar: "أخذ قياسات ثلاثية الأبعاد وتحليل شعاعي لتخطيط مسار حركة الأسنان." },
      },
      {
        step: 2,
        title: { en: "Appliance Fitting & Monitoring", ar: "تركيب التقويم والمتابعة الدورية" },
        desc: { en: "Placement of brackets or delivery of clear aligner series with monthly progress checks.", ar: "تركيب الحاصرات أو تسليم قوالب التقويم الشفاف مع جلسات متابعة شهرية." },
      },
    ],
    benefits: [
      { en: "Significantly easier tooth brushing and reduced risk of periodontal disease", ar: "تسهيل تنظيف الأسنان بالفرشاة وخفض احتمالية التهابات اللثة" },
      { en: "Balances biting pressure across jaws to prevent joint strain (TMJ)", ar: "توزيع متوازن لقوى المضغ لحماية مفصل الفك من الإجهاد" },
      { en: "Long-term aesthetic improvement that lasts a lifetime", ar: "تحسين جمالي دائم يمنحك ابتسامة واثقة مدى الحياة" },
    ],
    aftercare: [
      { en: "Maintain diligent hygiene around brackets using orthodontic floss and interdental brushes", ar: "العناية الفائقة بالنظافة حول الحاصرات باستخدام خيط التقويم والفرشاة المخصصة" },
      { en: "Consistently wear your custom retainer following active treatment", ar: "الالتزام بارتداء مثبت الأسنان بعد انتهاء مرحلة العلاج الفعالة" },
    ],
    faqs: [
      {
        question: { en: "Can adults get orthodontic treatment or is it only for teenagers?", ar: "هل يمكن للبالغين تركيب تقويم الأسنان أم أنه مخصص للمراهقين فقط؟" },
        answer: { en: "Orthodontics is highly effective at any age. Over 40% of our orthodontic patients are adults.", ar: "التقويم فعال وناجح في أي عمر، وأكثر من 40% من مراجعي التقويم لدينا هم من فئة البالغين." },
      },
    ],
    image: "/images/enhanced/service-orthodontics.jpg", // Enhanced high-res photography asset
    iconName: "Layers",
  },
  {
    id: "implants",
    slug: "dental-implants",
    title: {
      en: "Dental implants",
      ar: "زراعة الأسنان",
    },
    duration: "2 hr",
    durationMinutes: 120,
    category: {
      en: "Permanent Tooth Replacement",
      ar: "تعويض الأسنان المفقودة الدائم",
    },
    shortDescription: {
      en: "Titanium fixtures surgically anchored into the jawbone, providing a lifelong, natural-looking replacement for missing teeth.",
      ar: "غرسات تيتانيوم حيوية تثبت في عظم الفك، لتوفر بديلاً دائماً وطبيعياً بنسبة 100% للأسنان المفقودة.",
    },
    fullDescription: {
      en: "Restore your smile with our advanced dental implant services. Dental implants provide a permanent solution to replace missing teeth",
      ar: "استعد كامل وظيفة أسنانك وجمال ابتسامتك مع خدمات زراعة الأسنان المتقدمة. توفر زراعة الأسنان الحل الدائم والأكثر تطوراً لتعويض الأسنان المفقودة دون الحاجة لنحت الأسنان المجاورة.",
    },
    whoIsItFor: {
      en: "Patients missing one or multiple teeth seeking a permanent non-removable alternative to bridges or loose dentures.",
      ar: "لمن فقد سناً أو أكثر ويرغب في بديل ثابت ودائم يغنيه عن الجسور التقليدية أو أطقم الأسنان المتحركة.",
    },
    procedureSteps: [
      {
        step: 1,
        title: { en: "Bone Assessment & 3D Planning", ar: "تقييم العظام والتخطيط ثلاثي الأبعاد" },
        desc: { en: "CBCT 3D scan evaluates bone volume and optimal implant trajectory.", ar: "فحص شعاعي ثلاثي الأبعاد لتقييم كثافة العظم وتحديد الزاوية المثلى للغرسة." },
      },
      {
        step: 2,
        title: { en: "Precision Implantation", ar: "التثبيت الجراحي الدقيق للغرسة" },
        desc: { en: "Biocompatible titanium post is positioned gently under local anesthesia.", ar: "وضع غرسة التيتانيوم الحيوية بلطف ودقة فائقة تحت التخدير الموضعي." },
      },
      {
        step: 3,
        title: { en: "Crown Loading", ar: "تركيب التاج النهائي" },
        desc: { en: "After osseointegration, a lifelike porcelain crown is permanently locked in place.", ar: "بعد اندماج الغرسة مع العظم، يتم تثبيت التاج الخزفي المصمم ليطابق أسنانك الطبيعية." },
      },
    ],
    benefits: [
      { en: "Prevents jawbone shrinkage and facial collapse following tooth loss", ar: "يمنع تآكل عظام الفك وتراجع ملامح الوجه بعد فقدان الأسنان" },
      { en: "Does not require trimming or damaging neighboring healthy teeth", ar: "لا يتطلب برد أو نحت الأسنان السليمة المجاورة كما في الجسور" },
      { en: "Looks, feels, and functions exactly like a natural organic tooth", ar: "يبدو ويعمل ويشعر به المراجع تماماً مثل السن الطبيعي" },
    ],
    aftercare: [
      { en: "Stick to soft, lukewarm nutrition for the initial 48 hours", ar: "تناول الأطعمة اللينة والدافئة خلال أول 48 ساعة" },
      { en: "Use gentle antibacterial mouthwash as prescribed by your surgeon", ar: "استخدام المضمضة الطبية المطهرة الموصوفة وفق التعليمات" },
    ],
    faqs: [
      {
        question: { en: "How long does a dental implant last?", ar: "كم تدوم زراعة الأسنان؟" },
        answer: { en: "With proper daily hygiene and regular checkups, dental implants are designed to last a lifetime.", ar: "مع العناية الفموية اليومية والفحوصات الدورية، صممت زراعة الأسنان لتدوم مدى الحياة." },
      },
    ],
    image: "/images/original/service-dental-implants.jpg",
    iconName: "Anchor",
  },
  {
    id: "emergency",
    slug: "emergency-appointments",
    title: {
      en: "Emergency appointments",
      ar: "موعد فوري للحالات الطارئة",
    },
    duration: "30 min",
    durationMinutes: 30,
    category: {
      en: "Urgent Dental Relief",
      ar: "طوارئ وتسكين الألم الفوري",
    },
    shortDescription: {
      en: "Immediate same-day clinical triage for acute toothache, knocked-out teeth, broken restorations, and dental trauma.",
      ar: "استقبال فوري في نفس اليوم لآلام الأسنان الحادة، والكسور، وسقوط الحشوات أو الأسنان جراء الحوادث.",
    },
    fullDescription: {
      en: "If you are experiencing sudden or severe tooth pain, our emergency dental service is here to provide you with immediate care and pain relief",
      ar: "إذا كنت تعاني من ألم مفاجئ أو شديد في الأسنان، فإن خدمة المواعيد الطارئة في مركز مايو جاهزة لتقديم الرعاية الطبية الفورية وتسكين الألم دون انتظار.",
    },
    whoIsItFor: {
      en: "Patients with acute throbbing pain, visible facial swelling, knocked-out or fractured teeth, or loose restorations.",
      ar: "حالات الألم الشديد غير المحتمل، وتورم الوجه، والأسنان المكسورة أو المتخلخلة بسبب الرضوض، وسقوط التيجان أو الحشوات.",
    },
    procedureSteps: [
      {
        step: 1,
        title: { en: "Rapid Clinical Triage", ar: "التشخيص الفوري والتسكين" },
        desc: { en: "Instant priority evaluation and local anesthesia to halt acute agony immediately.", ar: "فحص فوري وتطبيق التخدير الموضعي لوقف الألم الحاد على الفور." },
      },
      {
        step: 2,
        title: { en: "Emergency Stabilization", ar: "تثبيت الحالة وعلاج الطوارئ" },
        desc: { en: "Temporary dressing, abscess drainage, or emergency bonding to stabilize the tooth.", ar: "وضع ضماد مسكن، أو تصريف الخراج، أو تثبيت السن المتضرر لمنع المضاعفات." },
      },
    ],
    benefits: [
      { en: "Priority fast-track entry to an operatory chair without delay", ar: "أولوية الدخول المباشر لكرسي العلاج دون انتظار" },
      { en: "Immediate targeted pain relief using clinical-grade interventions", ar: "تسكين فوري وفعال للألم باستخدام أحدث العلاجات الطبية" },
      { en: "Direct coordination via dedicated emergency WhatsApp line", ar: "تنسيق مباشر وسريع عبر خط الواتساب المخصص للطوارئ" },
    ],
    aftercare: [
      { en: "Take prescribed medications exactly on schedule", ar: "تناول الأدوية والمضادات الموصوفة بدقة بحسب المواعيد" },
      { en: "Attend your scheduled follow-up visit for definitive restoration", ar: "حضور موعد المتابعة المحدد لإكمال العلاج الدائم للسن" },
    ],
    faqs: [
      {
        question: { en: "What should I do if a permanent tooth is completely knocked out?", ar: "ماذا أفعل إذا سقط سني الدائم بالكامل نتيجة ضربة؟" },
        answer: { en: "Hold the tooth by the crown (never touch the root), rinse gently in milk or saline, and reach our clinic within 60 minutes for the highest re-implantation success.", ar: "أمسك السن من التاج فقط (ولا تلمس الجذر أبداً)، واشطفه برفق في حليب أو محلول ملحي، وتوجه إلى عيادتنا خلال 60 دقيقة لزيادة فرصة إعادة تثبيته بنجاح." },
      },
    ],
    image: "/images/original/service-emergency.webp",
    iconName: "Zap",
    isEmergency: true,
  },
];

