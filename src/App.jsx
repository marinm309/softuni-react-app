import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/Header'
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import ResultsPage from './components/ResultsPage';

function App() {

  return (
    <>
		<Router>

			<Header />

				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/results/:productQuery" element={<ResultsPage />} />
				</Routes>

			<Footer />
			
		</Router>
    </>
  )
}

export default App
