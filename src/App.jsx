import { BrowserRouter } from 'react-router-dom'
import Footer from './components/Sections/Footer'
import Header from './components/Sections/Header'
import Home from './pages/Home'

function App() {
	return (
		<>
			<BrowserRouter>
				<Header />
				<Home />
				<Footer />
			</BrowserRouter>
		</>
	)
}

export default App
