import { BrowserRouter } from 'react-router-dom'
import Header from './components/Sections/Header'
import Home from './pages/Home'

function App() {
	return (
		<>
			<BrowserRouter>
				<Header />
				<Home />
			</BrowserRouter>
		</>
	)
}

export default App
