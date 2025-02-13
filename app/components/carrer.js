import { Box, Typography, Card, CardContent, Divider } from '@mui/material';
import { useTranslation } from 'react-i18next';

const Career = () => {
  const { t } = useTranslation();

  const experiences = t('career.experiences', { returnObjects: true });

  return (
    <Box sx={{ padding: 4, backgroundColor: 'transparent', borderRadius: 2 }}>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', textAlign: 'center' }}>
        {t("career.title")}
      </Typography>

      {/* List of Experiences */}
      {experiences.map((exp, index) => (
        <Card
          key={index}
          sx={{
            mb: 3,
            borderRadius: 2,
            boxShadow: 3,
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            color: 'white',
            transition: 'transform 0.3s',
            '&:hover': { transform: 'translateY(-5px)', boxShadow: 6 },
          }}
        >
          <CardContent>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
              {exp.title}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" sx={{ fontStyle: 'italic', color: 'white' }}>
              {exp.company} - {exp.duration}
            </Typography>
            <Divider sx={{ my: 1, borderColor: 'white' }} />
            <Typography variant="body2" sx={{ color: 'white' }}>
              {exp.description}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default Career;
