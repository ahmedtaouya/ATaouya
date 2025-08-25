import { useTranslation } from 'react-i18next';

const Career = () => {
  const { t } = useTranslation();
  const experiences = t("career.experiences", { returnObjects: true });

  return (
    <div className="p-8 bg-transparent rounded-lg">
      <h2 className="text-3xl font-bold text-center mb-6">
        {t("career.title")}
      </h2>

      {/* List of Experiences */}
      {Array.isArray(experiences) && experiences.map((exp, index) => (
        <div
          key={index}
          className="mb-6 rounded-xl shadow-lg rounded-2xl p-4 bg-gradient-to-b from-[#202A31] via-[#3A4852] to-[#202A31] shadow-xl border border-white/10 text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
        >
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2">
              {exp.title}
            </h3>
            <p className="text-white text-opacity-80 italic mb-3">
              {exp.company} - {exp.duration}
            </p>
            <div className="border-t border-white border-opacity-30 my-3"></div>
            <p className="text-white text-opacity-90">
              {exp.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Career;