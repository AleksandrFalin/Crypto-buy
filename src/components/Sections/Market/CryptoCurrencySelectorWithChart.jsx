import { useState } from 'react'

function CryptoCurrencySelectorWithChart({ currentValue, setValue }) {
	const [isFocused, setIsFocused] = useState(false)

	function handleFocus() {
		setIsFocused(true)
	}

	function handleBlur() {
		setIsFocused(false)
	}

	function changeValue(e) {
		setValue(e.currentTarget.value)
		setIsFocused(false)
	}
	return (
		<select
			className='absolute z-10 ml-28 xl:ml-4 text-black outline-none'
			onChange={changeValue}
			onFocus={handleFocus}
			onBlur={handleBlur}
			size={isFocused && 6}
		>
			{currentValue?.map(value => (
				<option key={value} className='text-black' value={value}>
					{value}
				</option>
			))}
		</select>
	)
}

export default CryptoCurrencySelectorWithChart
