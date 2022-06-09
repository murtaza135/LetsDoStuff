import React, { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Login, Register, TodoDashboard, NotFound } from 'pages';
import Navbar from 'features/navbar/Navbar';
import Footer from 'features/footer/Footer';
import { Container } from 'global-components/layout';
import CSSReset from 'App.styles';
import '@fontsource/roboto';

const App = () => (
  <Fragment>
    <CSSReset />
    <Router>
      <Navbar />
      <Container>
        <Routes>
          <Route path="/" element={<TodoDashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  </Fragment>
);

export default App;
