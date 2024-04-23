import { BrowserRouter } from 'react-router-dom'
import AppRouter from './components/AppRouter'
import Footer from './components/Sections/Footer'
import Header from './components/Sections/Header'

function App() {
	return (
		<>
			<BrowserRouter>
				<Header />
				<AppRouter />
				<Footer />
			</BrowserRouter>
		</>
	)
}

export default App
