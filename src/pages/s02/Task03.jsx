import React, { useState } from 'react'
import '../../App.css'
import MyBackground from './MyBackground'
import MyBubbleChat from './MyBubbleChat'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Col, Row, Image, Button, Modal } from 'react-bootstrap'
import Narrator from '../../assets/narrator_icon.png'
import Brownie1 from '../../assets/BROWNIE_1_PIRING.png'
import Brownie2 from '../../assets/BROWNIE_2_PIRING.png'
import Pic4 from '../../assets/1_12_2_12.png'

function Task03() {
	const [isMulai, setIsMulai] = useState(false)
	const [A, setA] = useState('')
	const [B, setB] = useState('')
	const [C, setC] = useState('')
	const [D, setD] = useState('')
	const [showModal, setShowModal] = useState(false)

	const handleMulai = () => {
		setIsMulai(true)
	}

	const handleCek = () => {
		console.log(`A = ${A}`)
		console.log(`B = ${B}`)
		console.log(`C = ${C}`)
		console.log(`D = ${D}`)
		console.log(A === '1')
		console.log(A === 1)
		if (A === '1' && B === '12' && C === '2' && D === '12') {
			window.location.href = '/s02/task03-true'
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
							Sekarang brownies Pak Dengklek sudah terbagi menjadi
							12 potong yang sama besar.
							<br />
							Dari 12 potong ini, kamu{' '}
							<span>mengambil 1 potong</span> dan kawanmu{' '}
							<span>mengambil 2 potong</span>
							.
							<br />
							<br />
							Bagaimana{' '}
							<span>cara menuliskannya dalam pecahan</span>? Mari
							kita coba!
						</MyBubbleChat>
					</Col>
				</Row>

				{!isMulai && (
					<Row className="middle-row my-center">
						<Image
							src={Pic4}
							style={{
								height: '280px',
								width: 'auto',
							}}
						></Image>
					</Row>
				)}

				{isMulai && (
					<Row className="middle-row">
						<div
							style={{
								display: 'flex',
								justifyContent: 'space-evenly',
								alignItems: 'center',
							}}
						>
							<div
								style={{
									// backgroundColor: 'grey',
									padding: '10px',
									display: 'flex',
									alignItems: 'center',
								}}
							>
								<div
								// style={{ backgroundColor: 'red' }}
								>
									<Image
										src={Brownie1}
										style={{ marginRight: '10px' }}
									/>
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
											width: '40px',
											fontSize: '30px',
											marginBottom: '10px',
											marginLeft: '6px',
											marginRight: '6px',
										}}
										onChange={(e) => setA(e.target.value)}
									/>
									<div
										style={{
											borderTop: '3px solid black',
											width: '100%',
											borderRadius: '12px',
										}}
									></div>
									<input
										type="text"
										style={{
											width: '40px',
											fontSize: '30px',
											marginTop: '10px',
											marginLeft: '6px',
											marginRight: '6px',
										}}
										onChange={(e) => setB(e.target.value)}
									/>
								</div>
							</div>
							<div
								style={{
									// backgroundColor: 'grey',
									padding: '10px',
									display: 'flex',
									alignItems: 'center',
								}}
							>
								<div
								// style={{ backgroundColor: 'red' }}
								>
									<Image
										src={Brownie2}
										style={{ marginRight: '10px' }}
									/>
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
											width: '40px',
											fontSize: '30px',
											marginBottom: '10px',
											marginLeft: '6px',
											marginRight: '6px',
										}}
										onChange={(e) => setC(e.target.value)}
									/>
									<div
										style={{
											borderTop: '3px solid black',
											width: '100%',
											borderRadius: '12px',
										}}
									></div>
									<input
										type="text"
										style={{
											width: '40px',
											fontSize: '30px',
											marginTop: '10px',
											marginLeft: '6px',
											marginRight: '6px',
										}}
										onChange={(e) => setD(e.target.value)}
									/>
								</div>
							</div>
						</div>
					</Row>
				)}

				{!isMulai && (
					<Row className="bottom-row">
						<div className="d-grid gap-2">
							<Button size="lg" onClick={handleMulai}>
								Mulai
							</Button>
						</div>
					</Row>
				)}

				{isMulai && (
					<Row className="bottom-row">
						<div className="d-grid gap-2">
							<Button
								size="lg"
								onClick={handleCek}
								disabled={
									A === '' || B === '' || C === '' || D === ''
								}
							>
								Cek
							</Button>
						</div>
					</Row>
				)}

				{/* False */}
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

export default Task03
