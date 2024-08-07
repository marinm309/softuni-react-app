import { Route, Routes, Navigate } from 'react-router-dom';

import { useEffect, useState } from 'react';

import { ClientContext, client } from './context/clientContext.js'

import Header from './components/header/Header'
import Footer from './components/footer/Footer';
import HomePage from './components/home-page/HomePage';
import ResultsPage from './components/results-page/ResultsPage';
import PrivacyPolicyPage from './components/privacy-policy/PrivacyPolicyPage';
import TermsOfServicePage from './components/terms-of-service/TermsOfServicePage';
import Login from './components/login/Login';
import Register from './components/register/Register';
import Profile from './components/profile/Profile';
import AddProduct from './components/add-product/AddProduct';

function App() {

	const [ currentUser, setCurrentUser ] = useState(false)
	const [ loading, setLoading ] = useState(true)
	const [ profileInfo, setProfileInfo ] = useState()

	const [csrfToken, setCsrfToken] = useState('')

	useEffect(() => {
		client.get("/users/user")
		.then(function(res) {
			setProfileInfo(res)
			setCurrentUser(true)
			setCsrfToken(res.data.csrf_token)
			setLoading(false)
		})
		.catch(function(error) {
			setCurrentUser(false)
			setLoading(false)
		});
	  }, [])

	if(loading){
		return <div></div>
	}

	return (
		<ClientContext.Provider value={{client: client, currentUser: currentUser, setCurrentUser: setCurrentUser, profileInfo: profileInfo, csrfToken: csrfToken}}>
			<Header />

				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/results/:productQuery" element={<ResultsPage />} />
					<Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
					<Route path="/terms-of-service" element={<TermsOfServicePage />} />
					<Route path="/signin" element={currentUser ? <Navigate to='/' /> : <Login />} />
					<Route path="/signup" element={<Register />} />
					<Route path="/profile" element={currentUser ? <Profile /> : <Navigate to='/' />} />
					<Route path="/add-product" element={<AddProduct />} />
				</Routes>

			<Footer />
		</ClientContext.Provider>
	)
}

export default App
