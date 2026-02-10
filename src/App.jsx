import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import TracksPage from './pages/TracksPage';
import ImportantDatesPage from './pages/ImportantDatesPage';
import DoctoralColloquiumPage from './pages/DoctoralColloquiumPage';
import JournalsPage from './pages/JournalsPage';
import RegistrationPage from './pages/RegistrationPage';
import CommitteePage from './pages/CommitteePage';
import { ROUTES } from './constants/routes';

import ScrollToTop from './components/layout/ScrollToTop';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path={ROUTES.HOME} element={<HomePage />} />
          <Route path={ROUTES.ABOUT} element={<AboutPage />} />
          <Route path={ROUTES.TRACKS} element={<TracksPage />} />
          <Route path={ROUTES.IMPORTANT_DATES} element={<ImportantDatesPage />} />
          <Route path={ROUTES.DOCTORAL_COLLOQUIUM} element={<DoctoralColloquiumPage />} />
          <Route path={ROUTES.JOURNALS} element={<JournalsPage />} />
          <Route path={ROUTES.REGISTRATION} element={<RegistrationPage />} />
          <Route path={ROUTES.COMMITTEE} element={<CommitteePage />} />
        </Route>
      </Routes>
    </Router>
  );
}
