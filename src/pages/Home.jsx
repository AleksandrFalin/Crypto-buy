import DownloadingMobile from '../components/Sections/Home/DownloadingMobile'
import LearnCrypto from '../components/Sections/Home/LearnCrypto'
import MarketLeaders from '../components/Sections/Home/MarketLeaders'
import MarketTrend from '../components/Sections/Home/MarketTrend'
import Welcome from '../components/Sections/Home/Welcome'

function Home() {
	return (
		<main className='mb-8'>
			<Welcome />
			<MarketLeaders />
			<LearnCrypto />
			<MarketTrend />
			<DownloadingMobile />
		</main>
	)
}

export default Home
