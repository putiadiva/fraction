import React from 'react'
import '../../App.css'
import MyBackground from './MyBackground'
import { Row, Button } from 'react-bootstrap'

function Narration08() {
	const handleLanjut = () => {
		window.location.href = '/s02/task08'
	}
	return (
		<MyBackground>
			<div className="my-container" style={{ padding: '8px' }}>
				<Row className="middle-row">
					<div style={{ justifyContent: 'space-around' }}>
						<div>Apakah kamu masih semangat?</div>
					</div>
				</Row>
				<Row className="bottom-row">
					<div className="d-grid gap-2">
						<Button size="lg" onClick={handleLanjut}>
							Lanjut!
						</Button>
					</div>
				</Row>
			</div>
		</MyBackground>
	)
}

export default Narration08
