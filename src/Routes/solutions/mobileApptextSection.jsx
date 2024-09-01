import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
 
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'justify',
  marginBottom:'20px',
  fontSize:'medium'
}));

export default function MobileAppTextSection() {
  return (
    <Stack spacing={2} marginTop={10}>
      <Item>
        <div>
          <h2 style={{textAlign:'center'}}>ToemeXpertise: Expertise Polyvalente en Technologies Mobiles</h2>
          <p>ToemeXpertise possède une expertise étendue dans divers domaines clés des technologies mobiles, garantissant ainsi une satisfaction optimale pour vous et vos clients.</p>
          <ul>
            <li><strong>Outils de développement :</strong> Flutter, React Native, Windev Mobile, Kivy</li>
            <li><strong>Plateformes prises en charge :</strong> iOS, Android</li>
            <li><strong>Bases de données :</strong> MySQL, PostgreSQL, MongoDB, SQLite</li>
          </ul>
        </div>
      </Item>
    </Stack>
  );
}
