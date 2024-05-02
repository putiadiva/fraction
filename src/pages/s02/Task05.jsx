import React, { useState } from 'react'
import '../../App.css'
import MyBackground from './MyBackground'
import MyBubbleChat from './MyBubbleChat'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Col, Row, Image, Button, Modal } from 'react-bootstrap'
import Narrator from '../../assets/narrator_icon.png'
import Pic1 from '../../assets/add.png'

function Task05() {
	const [A, setA] = useState('')
	const [B, setB] = useState('')
	const [showModal, setShowModal] = useState(false)

	const handleCek = () => {
		if (A === '3' && B === '12') {
			window.location.href = '/s02/task05-true'
		} else {
			setShowModal(true)
		}
	}

	const handleClose = () => {
		setShowModal(false)
	}
	return (
		<MyBackground>
			<div className="my-container">
				<Row className="top-row">
					<Col
						className="my-center"
						style={{
							maxWidth: '100px',
						}}
					>
						<Image
							src={Narrator}
							style={{ maxWidth: '100%', height: 'auto' }}
						/>
					</Col>
					<Col style={{ display: 'flex', alignItems: 'center' }}>
						<MyBubbleChat>
							Jika potongan brownies yang kamu dan kawanmu ambil{' '}
							<span>dijumlahkan</span>, berapa jumlahnya dalam
							pecahan?
						</MyBubbleChat>
					</Col>
				</Row>

				<Row className="middle-row">
					<div
						style={{
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
						}}
					>
						<div>
							<Image src={Pic1} />
						</div>
						<div
							style={{
								// backgroundColor: 'green',
								display: 'flex',
								flexDirection: 'column',
							}}
						>
							<input
								type="text"
								style={{
									width: '60px',
									fontSize: '42px',
									marginBottom: '10px',
									marginLeft: '10px',
									marginRight: '10px',
								}}
								onChange={(e) => setA(e.target.value)}
							/>
							<div
								style={{
									borderTop: '6px solid #26272e',
									width: '100%',
									borderRadius: '12px',
								}}
							></div>
							<input
								type="text"
								style={{
									width: '60px',
									fontSize: '42px',
									marginTop: '10px',
									marginLeft: '10px',
									marginRight: '10px',
								}}
								onChange={(e) => setB(e.target.value)}
							/>
						</div>
					</div>
				</Row>

				<Row className="bottom-row">
					<div className="d-grid gap-2">
						<Button
							size="lg"
							onClick={handleCek}
							disabled={A === '' || B === ''}
						>
							Cek
						</Button>
					</div>
				</Row>
				<Modal
					show={showModal}
					onHide={handleClose}
					centered
					backdrop="static"
					keyboard={false}
				>
					<Modal.Header closeButton>
						<Modal.Title>Belum tepat!</Modal.Title>
					</Modal.Header>
					<Modal.Body>Ayo coba lagi!</Modal.Body>
					<Modal.Footer>
						<Button variant="primary" onClick={handleClose}>
							Saya akan coba lagi
						</Button>
					</Modal.Footer>
				</Modal>
			</div>
		</MyBackground>
	)
}

export default Task05
