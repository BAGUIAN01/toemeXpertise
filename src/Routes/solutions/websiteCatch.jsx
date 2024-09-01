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

export default function WebsiteCatch() {
  return (
    <Stack spacing={2} >
      <Item>
        Bienvenue chez <strong>ToemeXpertise</strong>, 
        votre partenaire de confiance pour 
        donner vie à vos idées en ligne. 
        Avec notre expertise approfondie 
        dans le <strong>développement de sites web</strong>, 
        nous vous offrons une gamme complète 
        de <strong>solutions sur mesure</strong> pour répondre 
        à vos besoins spécifiques. 
        Explorez nos solutions ci-dessous et découvrez 
        comment nous pouvons transformer votre vision 
        en une réalité numérique <strong>captivante</strong>.
      </Item>
    </Stack>
  );
}
