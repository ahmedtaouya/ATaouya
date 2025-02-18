import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Importation des traductions
const resources = {
  en: {
    translation: {
      "hero.greeting": "Hello",
      "hero.title": "My name is Ahmed TAOUYA",
      "button.descrption": " Software, future ingenieur and network engineer",
      "button.download": "Download CV",
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
      
    "title": "Full-stack Developer",
    "description1": "Passionate about innovation and modern technologies, I am a versatile developer with expertise in web development and software design. Currently in my third year of computer and network engineering at EMSI.",
    "description2": "My experience includes ambitious projects and participation in a hackathon, where I won first place with an innovative solution developed in a team.",
    "description3": "My analytical mindset, ability to solve complex problems, and passion for collaborative work allow me to thrive in dynamic environments.",
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
      "button.download": "Télécharger le CV",
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
  
    "title": "Développeur Full-stack",
    "description1": "Passionné par l'innovation et les technologies modernes, je suis un développeur polyvalent avec une expertise en développement web et en conception de logiciels. Actuellement en 3ème année d’ingénierie informatique et réseaux à l’EMSI.",
    "description2": "Mon expérience inclut des projets ambitieux, ainsi que la participation à un hackathon, où j'ai remporté la première place grâce à une solution innovante développée en équipe.",
    "description3": "Mon esprit d’analyse, ma capacité à résoudre des problèmes complexes et mon goût pour le travail collaboratif me permettent de m’épanouir dans des environnements dynamiques.",
  "contactInfo": "Informations de contact",
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
     
        "title": "مطوّر Full-stack",
        "description1": "شغوف بالابتكار والتقنيات الحديثة، أنا مطوّر متعدد المهارات بخبرة في تطوير الويب وتصميم البرمجيات. حاليًا في السنة الثالثة من الهندسة المعلوماتية والشبكات في EMSI.",
        "description2": "تشمل خبرتي مشاريع طموحة، بالإضافة إلى المشاركة في هاكاثون، حيث فزت بالمركز الأول بفضل حل مبتكر تم تطويره ضمن فريق.",
        "description3": "تسمح لي قدرتي التحليلية، والقدرة على حل المشكلات المعقدة، وشغفي بالعمل التعاوني، بالنجاح في بيئات ديناميكية.",
        "contactInfo": "معلومات الاتصال",
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
