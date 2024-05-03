import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './components/AppRouter'
import Footer from './components/Sections/Footer'
import Header from './components/Sections/Header'
import store from './store/store.js'
function App() {
	return (
		<>
			<BrowserRouter>
				<Provider store={store}>
					<Header />
					<AppRouter />
					<Footer />
				</Provider>
			</BrowserRouter>
		</>
	)
}

export default App
