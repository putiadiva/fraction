import React from 'react'
import VerticalFraction from './VerticalFraction'

const Comparison09 = ({ numerator, denominator, fontSize, inputWidth }) => {
	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<VerticalFraction
				numerator={numerator}
				denominator={denominator}
				fontSize={fontSize}
			/>
			<input
				type="text"
				style={{
					fontSize: `${fontSize}`,
					width: `${inputWidth}`,
					marginLeft: '10px',
					marginRight: '10px',
				}}
			/>
			<VerticalFraction
				numerator={numerator}
				denominator={denominator}
				fontSize={fontSize}
			/>
		</div>
	)
}

export default Comparison09
