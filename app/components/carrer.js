import { Box, Typography, Card, CardContent, Divider } from '@mui/material';

const Career = () => {
  const experiences = [
    {
      title: 'Bacaloriat',
      company: 'Lycee HASSAN II',
      duration: 'June 2023 - Sept 2023',
      description: 'Developed and optimized web applications using React and Node.js.',
    },
    {
      title: 'Technicien specialise',
      company: 'OFPPT HAY RIAD',
      duration: 'Jan 2021 - May 2024',
      description: 'Full stuck development Front End and Back End.',
    },
    {
        title: 'Ingenieur Informatique et Reseaux',
        company: 'EMSI',
        duration: 'Jan 2024 - En Cours',
        description: 'Built responsive websites for clients using HTML, CSS, and JavaScript.',
      },
  ];

  return (
    <Box sx={{ padding: 4, backgroundColor: 'transparent', borderRadius: 2 }}>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', textAlign: 'center' }}>
      My Career Education     
       </Typography>


      {/* List of Experiences */}
      {experiences.map((exp, index) => (
     <Card
     key={index}
     sx={{
       mb: 3,
       borderRadius: 2,
       boxShadow: 3,
       backgroundColor: 'rgba(0, 0, 0, 0.4)', // Set the background color
       color: 'white', // Make the text white
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
       <Divider sx={{ my: 1, borderColor: 'white' }} /> {/* Make the divider white */}
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
