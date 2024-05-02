import { React, useState } from 'react'
import '../../App.css'
import MyBackground from './MyBackground'
import { Col, Row, Image, Button, Modal } from 'react-bootstrap'
import Narrator from '../../assets/narrator_icon.png'
import MyBubbleChat from './MyBubbleChat'
import Pic7 from '../../assets/task07.png'
import Pic8 from '../../assets/hint06.png'
import Pic9 from '../../assets/hint06.png'
import Pic10 from '../../assets/feedback03.png'

function Task07() {
	const [isMulai, setIsMulai] = useState(false)
	const [A, setA] = useState('')
	const [B, setB] = useState('')
	const [C, setC] = useState('')
	const [showModal, setShowModal] = useState(false)
	const [showHint1, setShowHint1] = useState(false)
	const [showHint2, setShowHint2] = useState(false)

	const handleCek = () => {
		if (A === '1' && B === '2' && C === '1') {
			window.location.href = '/s03/task07-true'
		} else {
			setShowModal(true)
		}
	}

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

	return (
		<MyBackground>
			<div className="my-container">
				{!isMulai && (
					<>
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
									Mari kita coba contoh lain lagi!
									<br />
									<br />
									Apa bilangan yang tepat untuk mengisi
									kotak-kotak di bawah?
								</MyBubbleChat>
							</Col>
						</Row>
					</>
				)}

				{isMulai && (
					<>
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
									Mari kita coba contoh lain lagi!
									<br />
									Apa bilangan yang tepat untuk mengisi
									kotak-kotak di bawah?
								</MyBubbleChat>
							</Col>
						</Row>
					</>
				)}

				{!isMulai && (
					<Row className="middle-row my-center">
						<Image src={Pic7} style={{ width: '400px' }}></Image>
					</Row>
				)}

				{isMulai && (
					<Row
						className="middle-row my-center"
						// style={{ justifyContent: 'space-evenly' }}
					>
						<div
							style={{
								display: 'flex',
								justifyContent: 'space-evenly',
							}}
						>
							<div style={{ textAlign: 'center' }}>
								<Image
									src={Pic7}
									style={{ width: '400px' }}
								></Image>
							</div>
							<div style={{ textAlign: 'center' }}>
								<input
									type="text"
									style={{
										width: '72px',
										fontSize: '42px',
										borderColor: '#9D3939',
										borderWidth: '8px',
										borderRadius: '8px',
										paddingLeft: '12px',
									}}
									onChange={(e) => setA(e.target.value)}
								></input>
								<br />
								<br />
								<input
									type="text"
									style={{
										width: '72px',
										fontSize: '42px',
										borderColor: '#6EA551',
										borderWidth: '8px',
										borderRadius: '8px',
										paddingLeft: '12px',
									}}
									onChange={(e) => setB(e.target.value)}
								></input>
								<br />
								<br />
								<input
									type="text"
									style={{
										width: '72px',
										fontSize: '42px',
										borderColor: '#395F9D',
										borderWidth: '8px',
										borderRadius: '8px',
										paddingLeft: '12px',
									}}
									onChange={(e) => setC(e.target.value)}
								></input>
							</div>
						</div>
					</Row>
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
								disabled={A === '' || B === '' || C === ''}
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
						<Modal.Title>
							<b>Belum tepat!</b>
						</Modal.Title>
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
							<Image src={Pic8} style={{ width: '400px' }} />
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
							<Image src={Pic9} style={{ width: '400px' }} />
						</div>
						<br />
						Perhatikan penyebutnya, kemudian perhatikan
						pembilangnya.
						<br />
						<div className="my-center">
							<Image src={Pic10} style={{ width: '220px' }} />
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

export default Task07
