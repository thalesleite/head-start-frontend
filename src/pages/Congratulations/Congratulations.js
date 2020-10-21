import React from 'react';

import { Alert, AlertTitle } from '@material-ui/lab';
import { Grid } from '@material-ui/core';
import { HashLink as Link } from 'react-router-hash-link';


import './Congratulations.scss';

function Congratulations() {
  return (
    <div className="container congratulations">
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Alert severity="success" center={'true'}>
            <AlertTitle>Parabéns! Você finalizou o curso Food Safety - HACCP(Level 1). </AlertTitle>
            O certificado foi enviado para o seu email!
          </Alert>
        </Grid>
        <Grid item xs={12}>
          <Link
            className="btn-purple"
            to="/dashboard"
          >
            Voltar para Área do Aluno
          </Link>
        </Grid>
      </Grid>
    </div>
  );
}


export default Congratulations;