import * as React from 'react';
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

export default function WebsiteTextSection() {
  return (
    <Stack spacing={2} marginTop={10}>
      <Item>
        <div>
          <h2 style={{textAlign:'center'}}>ToemeXpertise: Expertise Polyvalente en Technologies Web</h2>
          <p>ToemeXpertise possède une expertise étendue dans divers domaines clés des technologies web, garantissant ainsi une satisfaction optimale pour vous et vos clients.</p>
          <ul>
            <li><strong>Frameworks CSS:</strong> Nous maîtrisons une gamme variée de frameworks CSS tels que Bootstrap, Material UI et Tailwind CSS, assurant des conceptions modernes et réactives pour vos projets.</li>
            <li><strong>Frameworks JavaScript:</strong> Nos compétences s'étendent également aux frameworks JavaScript, notamment React, Vue.js et Angular, permettant ainsi de créer des applications web dynamiques et interactives.</li>
            <li><strong>Gestion de l'état:</strong> Nous excellons dans la gestion de l'état des applications grâce à des outils tels que Redux, Vuex et React Context, assurant ainsi une expérience utilisateur fluide et cohérente.</li>
            <li><strong>API CP:</strong> Nous sommes expérimentés dans le développement et l'intégration d'APIs, permettant une communication efficace entre les différentes parties de votre application.</li>
            <li><strong>Backend:</strong> Notre expertise en développement backend avec des technologies telles que Laravel, Node.js et Django garantit des fonctionnalités robustes et évolutives pour vos applications.</li>
            <li><strong>Base de données:</strong> Nous sommes compétents dans le choix et la gestion de bases de données relationnelles et non relationnelles telles que MySQL, MongoDB et PostgreSQL, assurant ainsi une manipulation efficace des données.</li>
            <li><strong>Contrôle de version et CI/CD:</strong> Nous utilisons des outils de contrôle de version comme Git et des services de déploiement comme Docker et Heroku pour assurer une gestion efficace du code et des déploiements en continu.</li>
            <li><strong>Authentification:</strong> Nous implémentons des solutions d'authentification sécurisées telles que JWT et OAuth, garantissant la protection des données sensibles et la confidentialité des utilisateurs.</li>
            <li><strong>Cloud:</strong> Nous avons une expérience dans l'utilisation de services cloud tels que AWS, Azure et Google Cloud Platform pour héberger, scaler et gérer vos applications web avec fiabilité et flexibilité.</li>
          </ul>
        </div>
      </Item>
    </Stack>
  );
}
