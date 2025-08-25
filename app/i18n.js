import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Importation des traductions
const resources = {
  en: {
    translation: {
      "hero.greeting": "Hello",
      "hero.title": "I'm  Ahmed TAOUYA",
      "button.descrption": " Software, future ingenieur and network engineer",
      "button.download": "Download My CV",
      "career.title": "My Career Education",
      "career.experiences": [
        {
          "title": "Baccalaureate",
          "company": "Lycee HASSAN II",
          "duration": "June 2023 - Sept 2023",
          "description": "Developed and optimized web applications using React and Node.js."
        },
        {
          "title": "Specialized Technician",
          "company": "OFPPT HAY RIAD",
          "duration": "Jan 2021 - May 2024",
          "description": "Full-stack development: Front-End and Back-End."
        },
        {
          "title": "Computer & Network Engineer",
          "company": "EMSI",
          "duration": "Jan 2024 - Present",
          "description": "Built responsive websites for clients using HTML, CSS, and JavaScript."
        }
      ],

      "description1": " Passionate about innovation and modern technologies, I am a versatile developer with expertise in web development and software design. Currently, I am in my third year of Computer and Network Engineering at EMSI, constantly seeking opportunities to grow and challenge myself.",
      "description2": "My experience spans ambitious projects, hackathons, and collaborative work, including winning first place in a team-based hackathon with an innovative solution. I excel at translating complex requirements into elegant, functional solutions using technologies like React.js, Node.js, Angular, and more.",
      "description3": "I have a strong analytical mindset and a natural curiosity, which enables me to tackle complex problems efficiently. I enjoy working in dynamic environments and thrive when collaborating with diverse teams to bring impactful projects to life.",
      "description4": "Beyond coding, I am deeply interested in modern UI/UX practices, system architecture, and continuous learning. I am committed to writing clean, maintainable code and delivering solutions that balance performance, usability, and innovation.",
       "quote": "MedTrack is a medication management app that lets users track their medicine intake, get reminders, and manage their prescriptions.",
      "contactInfo": "Contact Information",
      "location": "4 avenue SIDI maussa doukali, SALE, SALA AL JADIDA",
      "phone": "0652954880",
      "email": "ahmad.taouya@gmail.com",
      "getInTouch": "Get in Touch",
      "name": "Name",
      "emailLabel": "Email",
      "message": "Message",
      "submit": "Submit"

    }
  },
  fr: {
    translation: {
      "hero.greeting": "Bonjour",
      "hero.title": "Je m'appelle Ahmed TAOUYA ",
      "button.descrption": " Software, futur ingénieur informatique et réseaux",
      "button.download": "Télécharger Mon CV",
      "career.title": "Mon Parcours Éducatif",
      "career.experiences": [
        {
          "title": "Baccalauréat",
          "company": "Lycée HASSAN II",
          "duration": "Juin 2023 - Sept 2023",
          "description": "Développement et optimisation d’applications web avec React et Node.js."
        },
        {
          "title": "Technicien Spécialisé",
          "company": "OFPPT HAY RIAD",
          "duration": "Jan 2021 - Mai 2024",
          "description": "Développement full-stack : Front-End et Back-End."
        },
        {
          "title": "Ingénieur en Informatique et Réseaux",
          "company": "EMSI",
          "duration": "Jan 2024 - Présent",
          "description": "Création de sites web responsifs pour des clients en utilisant HTML, CSS et JavaScript."
        }
      ],

      "description1": "Passionné par l'innovation et les technologies modernes, je suis un développeur polyvalent avec une expertise en développement web et conception logicielle. Actuellement, je suis en 3ème année d’ingénierie informatique et réseaux à l’EMSI, toujours à la recherche d’opportunités pour grandir et me challenger.",

      "description2": "Mon expérience couvre des projets ambitieux, des hackathons et du travail collaboratif, y compris une première place gagnée en équipe lors d’un hackathon avec une solution innovante. Je suis doué pour traduire des exigences complexes en solutions élégantes et fonctionnelles grâce à des technologies comme React.js, Node.js, Angular, et plus.",

      "description3": "J’ai une forte capacité d’analyse et une curiosité naturelle, ce qui me permet de résoudre efficacement des problèmes complexes. J’aime travailler dans des environnements dynamiques et je m’épanouis en collaboration avec des équipes diverses pour concrétiser des projets impactants.",

      "description4": "Au-delà du code, je m'intéresse profondément aux pratiques modernes de l’UI/UX, à l’architecture système et à l’apprentissage continu. Je m’engage à écrire un code propre, maintenable et à fournir des solutions qui équilibrent performance, usability, et innovation.", "contactInfo": "Informations de contact",
      "Expériences1": "Expériences",
      "Expériences2": "Expériences",
      "Expériences3": "Expériences",
          "quote": "MultiQuiz de Questions avec un système de points et de chat en temps réel.",

      "location": "4 avenue SIDI maussa doukali, SALE, SALA AL JADIDA",
      "phone": "0652954880",
      "email": "ahmad.taouya@gmail.com",
      "getInTouch": "Nous contacter",
      "name": "Nom",
      "emailLabel": "E-mail",
      "message": "Message",
      "submit": "Envoyer"
    }
  },
  ar: {
    translation: {
      "hero.greeting": "مرحبا",
      "hero.title": "اسمي أحمد تويا ",
      "button.descrption": "  برمجيات، مهندس كمبيوتر وشبكات مستقبلي",
      "button.download": "تحميل السيرة الذاتية",
      "career.title": "مساري التعليمي",
      "career.experiences": [
        {
          "title": "البكالوريا",
          "company": "ثانوية الحسن الثاني",
          "duration": "يونيو 2023 - سبتمبر 2023",
          "description": "تطوير وتحسين تطبيقات الويب باستخدام React و Node.js."
        },
        {
          "title": "تقني متخصص",
          "company": "OFPPT حي الرياض",
          "duration": "يناير 2021 - مايو 2024",
          "description": "تطوير كامل: الواجهة الأمامية والخلفية."
        },
        {
          "title": "مهندس معلومات وشبكات",
          "company": "EMSI",
          "duration": "يناير 2024 - حاليا",
          "description": "تصميم مواقع ويب متجاوبة للعملاء باستخدام HTML و CSS و JavaScript."
        }
      ],

      "description1": "متحمس للابتكار والتقنيات الحديثة، أنا مطور متعدد المهارات بخبرة في تطوير الويب وتصميم البرمجيات. حالياً، أنا في السنة الثالثة من هندسة الحاسوب والشبكات في EMSI، وأسعى دائماً لاغتنام الفرص للنمو وتحدي نفسي.",

      "description2": "خبرتي تشمل مشاريع طموحة، هاكاثونات، والعمل الجماعي، بما في ذلك الفوز بالمركز الأول في هاكاثون جماعي بحل مبتكر. أجيد تحويل المتطلبات المعقدة إلى حلول أنيقة وعملية باستخدام تقنيات مثل React.js، Node.js، Angular، وأكثر.",

      "description3": "لدي عقلية تحليلية قوية وفضول طبيعي يمكنني من التعامل مع المشكلات المعقدة بكفاءة. أحب العمل في بيئات ديناميكية وأزدهر عند التعاون مع فرق متنوعة لتحقيق مشاريع مؤثرة.",

      "description4": "بعيداً عن البرمجة، لدي اهتمام عميق بممارسات UI/UX الحديثة، وهندسة الأنظمة، والتعلم المستمر. ألتزم بكتابة كود نظيف وقابل للصيانة، وتقديم حلول توازن بين الأداء، وسهولة الاستخدام، والابتكار.",

      "contactInfo": "معلومات الاتصال",


    "quote": "MedTrack هو تطبيق لإدارة الأدوية يسمح للمستخدمين بمتابعة تناول أدويتهم، الحصول على تذكيرات، وإدارة وصفاتهم",

      "location": "4 شارع سيدي موسى الدوكالي، سلا، سلا الجديدة",
      "phone": "0652954880",
      "email": "ahmad.taouya@gmail.com",
      "getInTouch": "اتصل بنا",
      "name": "الاسم",
      "emailLabel": "البريد الإلكتروني",
      "message": "الرسالة",
      "submit": "إرسال"

    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en", // Langue par défaut
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
