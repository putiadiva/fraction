import { React, useState } from 'react'
import '../../App.css'
import MyBackground from './MyBackground'
import MyBubbleChat from './MyBubbleChat'
import Narrator from '../../assets/narrator_icon.png'
import { Col, Row, Image, Button, Modal } from 'react-bootstrap'
import VerticalFraction from './VerticalFraction'

function Task09() {
	const [A, setA] = useState('')
	const [B, setB] = useState('')
	const [C, setC] = useState('')
	const [showModal, setShowModal] = useState(false)

	const handleCek = () => {
		if (A === '<' && B === '<' && C === '>') {
			window.location.href = '/s02/task09-true'
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
							Sekarang, tanpa bantuan gambar atau garis bilangan,
							coba bandingkan pecahan-pecahan berikut ini!
							<br />
							<br />
							Isilah kotak-kotak di bawah ini dengan{' '}
							<span>{'='}</span>, <span>{'<'}</span>, atau{' '}
							<span>{'>'}</span>!
						</MyBubbleChat>
					</Col>
				</Row>
				<Row className="middle-row my-center">
					<div
						style={{
							display: 'flex',
							justifyContent: 'space-evenly',
						}}
					>
						<div
							style={{
								textAlign: 'center',
							}}
						>
							{/* q01 */}
							<div
								style={{
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
								}}
							>
								<VerticalFraction
									numerator={1}
									denominator={2}
									fontSize={'22px'}
								/>

								<input
									type="text"
									style={{
										fontSize: '20px',
										width: '60px',
										marginLeft: '6px',
										marginRight: '6px',
									}}
									onChange={(e) => setA(e.target.value)}
								/>
								<VerticalFraction
									numerator={2}
									denominator={2}
									fontSize={'22px'}
								/>
							</div>
							{/* e o q01 */}

							{/* q02 */}
							<div
								style={{
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
								}}
							>
								<VerticalFraction
									numerator={2}
									denominator={8}
									fontSize={'22px'}
								/>

								<input
									type="text"
									style={{
										fontSize: '20px',
										width: '60px',
										marginLeft: '6px',
										marginRight: '6px',
									}}
									onChange={(e) => setB(e.target.value)}
								/>
								<VerticalFraction
									numerator={7}
									denominator={8}
									fontSize={'22px'}
								/>
							</div>
							{/* e o q02 */}

							{/* q03 */}
							<div
								style={{
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
								}}
							>
								<VerticalFraction
									numerator={10}
									denominator={12}
									fontSize={'22px'}
								/>

								<input
									type="text"
									style={{
										fontSize: '20px',
										width: '60px',
										marginLeft: '6px',
										marginRight: '6px',
									}}
									onChange={(e) => setC(e.target.value)}
								/>
								<VerticalFraction
									numerator={5}
									denominator={12}
									fontSize={'22px'}
								/>
							</div>
							{/* e o q03 */}
						</div>
						{/* e o kiri */}
					</div>
				</Row>
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
					<Modal.Body>Belum tepat. Coba lagi!</Modal.Body>
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

export default Task09
