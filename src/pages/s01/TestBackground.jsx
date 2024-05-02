import React from 'react'
import '../../App.css'
import MyBackgroundS01 from './MyBackgroundS01'
import { Row } from 'react-bootstrap'

function TestBackground() {
	return (
		<MyBackgroundS01>
			<div className="my-container">
				<Row className="top-row" style={{ backgroundColor: 'red' }}>
					aaa
					<br />
					aaa
					<br />
					aaa
				</Row>
				<Row
					className="middle-row"
					style={{
						backgroundColor: 'green',
					}}
				>
					bbb
				</Row>
				<Row
					className="bottom-row"
					style={{ backgroundColor: 'yellow' }}
				>
					ccc
					<br />
					ccc
					<br />
					ccc
				</Row>
			</div>
		</MyBackgroundS01>
	)
}

export default TestBackground
