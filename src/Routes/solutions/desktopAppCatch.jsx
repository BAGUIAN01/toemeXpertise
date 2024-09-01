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

export default function DesktopAppCatch() {
  return (
    <Stack spacing={2} >
      <Item>
      Bienvenue chez ToemeXpertise, votre partenaire de confiance 
      pour concrétiser vos <strong>projets logiciels</strong>. Avec notre expertise 
      approfondie dans le <strong>développement de logiciels</strong> sur mesure, 
      nous vous proposons une gamme complète de solutions adaptées à vos besoins spécifiques. 
      Explorez nos services ci-dessous et découvrez comment nous pouvons 
      transformer vos idées en des applications logicielles <strong>performantes</strong> et <strong>intuitives</strong>.
      </Item>
    </Stack>
  );
}
