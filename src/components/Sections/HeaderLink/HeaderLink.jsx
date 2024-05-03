import { Link } from 'react-router-dom'

function HeaderLink({ path, text }) {
	return (
		<>
			<Link to={path}>
				<li className=' border-t border-b xl:border-none hover:opacity-50  cursor-pointer xl:opacity-50 xl:text-2xl xl:transition-all xl:ease-in-out xl:hover:opacity-100'>
					{text}
				</li>
			</Link>
		</>
	)
}

export default HeaderLink
