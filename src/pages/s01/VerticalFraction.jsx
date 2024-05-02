import React from 'react'
import '../../App.css'

const VerticalFraction = ({ numerator, denominator, fontSize }) => {
	return (
		<div
			style={{
				display: 'inline-block',
				flexDirection: 'column',
				alignItems: 'center',
				marginLeft: '6px',
				marginRight: '6px',
			}}
		>
			<div style={{ fontSize: `${fontSize}` }}>{numerator}</div>
			<div
				style={{
					borderTop: '1px solid black',
					width: '100%',
					margin: '0.2em 0',
				}}
			></div>
			<div style={{ fontSize: `${fontSize}` }}>{denominator}</div>
		</div>
	)
}

export default VerticalFraction
