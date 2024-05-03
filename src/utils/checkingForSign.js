function checkingForSign(number) {
	switch (Math.sign(number)) {
		case 1:
			return true
		case -1:
			return false
		case 0:
			return true
		case -0:
			return false
	}
}

export default checkingForSign
