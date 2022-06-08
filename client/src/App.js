import React, { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Login, Register, TodoDashboard, NotFound } from 'pages';
import { Container } from 'global-components/layout';
import CSSReset from 'App.styles';
import '@fontsource/roboto';

const App = () => (
  <Fragment>
    <CSSReset />
    <Container>
      <Router>
        <Routes>
          <Route path="/" element={<TodoDashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </Container>
  </Fragment>
);

export default App;
