import React from 'react'
import '../../App.css'
import MyBackground from './MyBackground'
import { Row } from 'react-bootstrap'

function TestBackground() {
	return (
		<MyBackground>
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
		</MyBackground>
	)
}

export default TestBackground
