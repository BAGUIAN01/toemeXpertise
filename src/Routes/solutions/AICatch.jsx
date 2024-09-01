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

export default function AICatch() {
  return (
    <Stack spacing={2} >
      <Item>
        Bienvenue chez ToemeXpertise, 
        votre partenaire de confiance pour concrétiser 
        vos projets en <strong>Intelligence Artificielle (IA)</strong> 
        et en <strong>Data Science</strong>. Avec notre savoir-faire avancé 
        dans ces domaines, nous vous proposons une palette 
        complète de services sur mesure pour répondre à vos 
        besoins les plus spécifiques. Découvrez ci-dessous notre 
        gamme de solutions <strong>innovantes</strong>, conçues pour transformer 
        vos idées en des applications numériques <strong>performantes et pertinentes</strong>.
      </Item>
    </Stack>
  );
}
