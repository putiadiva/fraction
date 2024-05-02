import React from 'react'
import '../../App.css'
import BG1_2 from '../../assets/BG1_2.png'

function MyBackground({ children }) {
	return (
		<div
			className="outer-div"
			style={{
				backgroundImage: `url(${BG1_2})`,
				backgroundRepeat: 'no-repeat',
				backgroundSize: 'cover',
			}}
		>
			<div className="inner-div">{children}</div>
		</div>
	)
}

export default MyBackground
