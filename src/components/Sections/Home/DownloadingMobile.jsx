function DownloadingMobile() {
	return (
		<section className='w-80-m-auto text-center xl:w-1280-m-auto xl:flex xl:gap-40'>
			<img
				className='mb-4  xl:order-1 xl:w-5/12 xl:relative xl:-top-4 xl:mb-0 '
				src='mobile-app.svg'
			/>
			<div className='xl:px-4'>
				<h2 className=' text-4xl mb-4 xl:text-5xl xl:mb-8 xl:text-left'>
					Trade anywhere
				</h2>
				<p className='text-left opacity-50 mb-8 xl:text-lg xl:mb-12'>
					Anytime,anywhere.Trade crypto on your terms
				</p>
				<div className='flex flex-col'>
					<div className='relative flex flex-row gap-4 items-center before:border-b before:border-b-gray-50 before:absolute before:w-full before:bottom-0 before:opacity-50 pb-4'>
						<img
							className=' cursor-pointer w-8 xl:w-12'
							src='company-icons/apple.svg'
							alt='apple'
						/>
						<div className='text-left'>
							<p className='opacity-50 xl:text-2xl'>Dowland from</p>
							<h4 className=' text-xl xl:text-2xl'>Appstore</h4>
						</div>
					</div>
					<div className='relative flex flex-row gap-4 items-center pt-4'>
						<button className=' text-2xl w-8 bg-blue-400  rounded-2xl xl:w-12 xl:text-4xl xl:py-1 xl:px-2 xl:rounded-full'>
							&rarr;
						</button>
						<div className='text-left'>
							<p className='opacity-50 xl:text-2xl'>Dowland from</p>
							<h4 className=' text-xl xl:text-2xl'>Google Play</h4>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default DownloadingMobile
