import React, { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import { Login, Register, TodoDashboard, NotFound } from 'pages';
import Navbar from 'features/navbar/Navbar';
import Footer from 'features/footer/Footer';
import PrivateOutlet from 'features/auth/PrivateOutlet';
import { Container, PageContainer } from 'global-components/layout';
import CSSReset from 'App.styles';
import '@fontsource/roboto';

const App = () => (
  <Fragment>
    <CSSReset />
    <Navbar />
    <Container>
      <PageContainer>
        <Routes>
          <Route path="/" element={<Outlet />}>
            <Route path="*" element={<NotFound />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            <Route element={<PrivateOutlet />}>
              <Route index element={<TodoDashboard />} />
            </Route>
          </Route>
        </Routes>
      </PageContainer>
    </Container>
    <Footer />
  </Fragment>
);

export default App;
