import React, { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Login, Register, TodoDashboard, NotFound } from 'pages';
import { PageContainer } from 'global-components/layout';
import CSSReset from 'App.styles';
import '@fontsource/roboto';

const App = () => (
  <Fragment>
    <CSSReset />
    <PageContainer>
      <Router>
        <Routes>
          <Route path="/" element={<TodoDashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </PageContainer>
  </Fragment>
);

export default App;
