import { React, useState } from 'react'
import '../../App.css'
import MyBackground from './MyBackground'
import { Col, Row, Image, Button, Modal } from 'react-bootstrap'
import Narrator from '../../assets/narrator_icon.png'
import MyBubbleChat from './MyBubbleChat'
import Pic1 from '../../assets/0_1.png'
import Pic2 from '../../assets/numline_sama.png'
import Pic3 from '../../assets/per4.png'
import Pic4 from '../../assets/task06.png'
import Pic5 from '../../assets/hint06.png'
import Pic6 from '../../assets/feedback03.png'

function Task06() {
	const [ans, setAns] = useState('')
	const [isMulai, setIsMulai] = useState(false)
	const [showModal, setShowModal] = useState(false)
	const [showHint1, setShowHint1] = useState(false)
	const [showHint2, setShowHint2] = useState(false)

	const handleClose = () => {
		setShowModal(false)
	}

	const handleShowHint1 = () => {
		setShowModal(false)
		setShowHint1(true)
	}

	const handleCloseHint1 = () => {
		setShowModal(false)
		setShowHint1(false)
	}

	const handleShowHint2 = () => {
		setShowModal(false)
		setShowHint1(false)
		setShowHint2(true)
	}

	const handleCloseHint2 = () => {
		setShowModal(false)
		setShowHint1(false)
		setShowHint2(false)
	}

	const handleMulai = () => {
		setIsMulai(true)
	}

	const handleCek = () => {
		if (ans === '4') {
			window.location.href = '/s03/task06-true'
		} else {
			setShowModal(true)
		}
	}

	return (
		<MyBackground>
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
						<Button variant="secondary" onClick={handleShowHint1}>
							Saya butuh bantuan
						</Button>
					</Modal.Footer>
				</Modal>

				{/* Hint 1 */}
				<Modal
					show={showHint1}
					onHide={handleCloseHint1}
					centered
					backdrop="static"
					keyboard={false}
				>
					<Modal.Header closeButton>
						<Modal.Title>Hint 1</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						Perhatikan kembali contoh berikut!
						<br />
						<div className="my-center">
							<Image src={Pic5} style={{ width: '400px' }} />
						</div>
						<br />
						Perhatikan penyebutnya, kemudian perhatikan
						pembilangnya.
					</Modal.Body>
					<Modal.Footer>
						<Button variant="primary" onClick={handleCloseHint1}>
							Ok. Saya akan coba lagi
						</Button>
						<Button variant="secondary" onClick={handleShowHint2}>
							Pembilang & Penyebut ?
						</Button>
					</Modal.Footer>
				</Modal>

				{/* Hint 2 */}
				<Modal
					show={showHint2}
					onHide={handleCloseHint2}
					centered
					backdrop="static"
					keyboard={false}
				>
					<Modal.Header closeButton>
						<Modal.Title>Hint 2</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						Perhatikan kembali contoh berikut!
						<br />
						<div className="my-center">
							<Image src={Pic5} style={{ width: '400px' }} />
						</div>
						<br />
						Perhatikan penyebutnya, kemudian perhatikan
						pembilangnya.
						<br />
						<div className="my-center">
							<Image src={Pic6} style={{ width: '220px' }} />
						</div>
					</Modal.Body>
					<Modal.Footer>
						<Button variant="primary" onClick={handleCloseHint2}>
							Ok. Saya akan coba lagi
						</Button>
					</Modal.Footer>
				</Modal>
			</div>
		</MyBackground>
	)
}

export default Task06
