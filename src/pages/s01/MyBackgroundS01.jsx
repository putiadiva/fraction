import React from 'react'
import '../../App.css'
import BG1_2 from '../../assets/BG1_2.png'

function MyBackgroundS01S01({ children }) {
	return (
		<div
			className="outer-div"
			style={{
				backgroundColor: '#f0fffd',
			}}
			// style={{
			// 	backgroundImage: `url(${BG1_2})`,
			// 	backgroundRepeat: 'no-repeat',
			// 	backgroundSize: 'cover',
			// }}
		>
			<div className="inner-div">{children}</div>
		</div>
	)
}

export default MyBackgroundS01S01
