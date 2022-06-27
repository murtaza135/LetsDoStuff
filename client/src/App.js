import React, { Fragment } from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import { Login, Register, TodoDashboard, NotFound } from 'pages';
import Navbar from 'features/navbar/Navbar';
import Footer from 'features/footer/Footer';
import PrivateOutlet from 'features/routing/PrivateOutlet';
import PublicOnlyOutlet from 'features/routing/PublicOnlyOutlet';
import { Container, PageContainer } from 'global-components/layout';
import { Alert } from 'global-components/ui';
import CSSReset from 'App.styles';
import '@fontsource/roboto';
import AlertWrapper from 'features/alert/AlertWrapper';

const App = () => (
  <Fragment>
    <CSSReset />
    <Navbar />
    <Container>
      <PageContainer $gap="3.5rem">
        <Alert variant="danger">Error: Could not load todos</Alert>
        <AlertWrapper>
          <Routes>
            <Route path="/" element={<Outlet />}>
              <Route path="*" element={<NotFound />} />

              <Route element={<PublicOnlyOutlet />}>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
              </Route>

              <Route element={<PrivateOutlet />}>
                <Route index element={<TodoDashboard />} />
              </Route>
            </Route>
          </Routes>
        </AlertWrapper>
      </PageContainer>
    </Container>
    <Footer />
  </Fragment>
);

export default App;
