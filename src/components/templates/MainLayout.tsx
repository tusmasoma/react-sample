import React from 'react';
import { AppBar, Toolbar, Typography, Container } from '@mui/material';

type MainLayoutProps = {
  children: React.ReactNode;
};

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            My Application
          </Typography>
        </Toolbar>
      </AppBar>
      <Container>
        {children}
      </Container>
    </>
  );
};
