import { React, useState } from 'react'
import '../../App.css'
import MyBackgroundS01 from './MyBackgroundS01'
import { Col, Row, Image, Button, Modal } from 'react-bootstrap'
import Narrator from '../../assets/narrator_icon.png'
import MyBubbleChat from './MyBubbleChat'
import Pic1 from '../../assets/0_1.png'
import Pic2 from '../../assets/numline_sama.png'
import Pic3 from '../../assets/per4.png'
import Pic4 from '../../assets/task06.png'

function Task06() {
	const [ans, setAns] = useState('')
	const [isMulai, setIsMulai] = useState(false)
	const [showModal, setShowModal] = useState(false)

	const handleClose = () => {
		setShowModal(false)
	}

	const handleMulai = () => {
		setIsMulai(true)
	}

	const handleCek = () => {
		if (ans === '4') {
			window.location.href = '/s01/task07'
		} else {
			setShowModal(true)
		}
	}

	return (
		<MyBackgroundS01>
			<div className="my-container">
				{!isMulai && (
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
							<Col
								style={{
									display: 'flex',
									alignItems: 'center',
								}}
							>
								<MyBubbleChat>
									Perhatikan garis bilangan ini! Lihat{' '}
									<span>titik 0 di sebelah kiri</span> dan{' '}
									<span>titik 1 di sebelah kanan</span>.
								</MyBubbleChat>
							</Col>
						</Row>
						<Row className="my-center">
							<Image
								src={Pic1}
								style={{ width: '600px' }}
							></Image>
						</Row>
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
							<Col
								style={{
									display: 'flex',
									alignItems: 'center',
								}}
							>
								<MyBubbleChat>
									Garis di antara titik 0 dan 1 kita bagi
									menjadi <span>4 daerah sama besar</span>.
								</MyBubbleChat>
							</Col>
						</Row>
						<Row className="my-center">
							<Image
								src={Pic2}
								style={{ width: '600px' }}
							></Image>
						</Row>
					</div>
				)}

				{isMulai && (
					<div className="my-container">
						<Row>
							<Row className="top-row">
								<Col
									className="my-center"
									style={{
										maxWidth: '100px',
									}}
								>
									<Image
										src={Narrator}
										style={{
											maxWidth: '100%',
											height: 'auto',
										}}
									/>
								</Col>
								<Col
									style={{
										display: 'flex',
										alignItems: 'center',
									}}
								>
									<MyBubbleChat>
										Sekarang kita punya 3 titik baru. 1/4,
										2/4, dan 3/4.
									</MyBubbleChat>
								</Col>
							</Row>
						</Row>
						<Row className="my-center">
							<Image
								src={Pic3}
								style={{ width: '600px' }}
							></Image>
						</Row>

						<Row style={{ flex: '0 0 auto' }}>
							<Col
								className="my-center"
								style={{
									maxWidth: '100px',
								}}
							>
								<Image
									src={Narrator}
									style={{
										maxWidth: '100%',
										height: 'auto',
									}}
								/>
							</Col>
							<Col
								style={{
									display: 'flex',
									alignItems: 'center',
								}}
							>
								<MyBubbleChat>
									Berapa bilangan yang tepat untuk mengisi
									kotak merah?
								</MyBubbleChat>
							</Col>
						</Row>
						<Row
							className="my-center"
							style={{ justifyContent: 'space-evenly' }}
						>
							<Image
								src={Pic4}
								style={{ width: '600px' }}
							></Image>
							<input
								type="text"
								style={{
									fontSize: '42px',
									width: '72px',
									borderColor: '#E16565',
									borderWidth: '8px',
									borderRadius: '8px',
								}}
								onChange={(e) => setAns(e.target.value)}
							></input>
						</Row>
					</div>
				)}

				{!isMulai && (
					<Row className="bottom-row">
						<div className="d-grid gap-2">
							<Button size="lg" onClick={handleMulai}>
								Lanjut
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
								disabled={ans === ''}
							>
								Cek
							</Button>
						</div>
					</Row>
				)}

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
		</MyBackgroundS01>
	)
}

export default Task06
