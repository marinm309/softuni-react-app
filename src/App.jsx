import { Route, Routes } from 'react-router-dom';

import Header from './components/header/Header'
import Footer from './components/footer/Footer';
import HomePage from './components/home-page/HomePage';
import ResultsPage from './components/results-page/ResultsPage';
import PrivacyPolicyPage from './components/privacy-policy/PrivacyPolicyPage';
import TermsOfServicePage from './components/terms-of-service/TermsOfServicePage';
import Login from './components/login/Login';
import Register from './components/register/Register';

function App() {

  return (
    <>
		<Header />

			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/results/:productQuery" element={<ResultsPage />} />
				<Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
				<Route path="/terms-of-service" element={<TermsOfServicePage />} />
				<Route path="/signin" element={<Login />} />
				<Route path="/signup" element={<Register />} />
			</Routes>

		<Footer />
    </>
  )
}

export default App
