import { React, useState } from 'react'
import '../../App.css'
import MyBackgroundS01 from './MyBackgroundS01'
import MyBubbleChat from './MyBubbleChat'
import Narrator from '../../assets/narrator_icon.png'
import { Col, Row, Image, Button, Modal } from 'react-bootstrap'
import Pic1 from '../../assets/half.png'
import Pic2 from '../../assets/sepertiga.png'
import Pic3 from '../../assets/sama2.png'
import VerticalFraction from './VerticalFraction'

function Task08() {
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
		if (A === '=' && B === '>' && C === '>' && D === '>') {
			window.location.href = '/s01/task09'
		} else {
			setShowModal(true)
		}
	}

	const handleClose = () => {
		setShowModal(false)
	}

	return (
		<MyBackgroundS01>
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
									Mari perhatikan bahwa 1/2 berada{' '}
									<span>di satu garis yang sama</span> dengan
									2/4 dan 3/6. Perhatikan juga bahwa 2/3
									berada <span>di satu garis yang sama</span>{' '}
									dengan 4/6.
								</MyBubbleChat>
							</Col>
						</Row>
						<Row className="middle-row my-center">
							<Image
								src={Pic1}
								style={{ maxWidth: '380px' }}
							></Image>
							<Image
								src={Pic2}
								style={{ maxWidth: '380px' }}
							></Image>
						</Row>
						<Row className="bottom-row">
							<div className="d-grid gap-2">
								<Button size="lg" onClick={handleMulai}>
									Mengerti, lanjut!
								</Button>
							</div>
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
									Isilah kotak-kotak di bawah ini dengan{' '}
									<span>{'='}</span>, <span>{'<'}</span>, atau{' '}
									<span>{'>'}</span>!
								</MyBubbleChat>
							</Col>
						</Row>
						<Row className="middle-row">
							<div
								style={{
									display: 'flex',
									justifyContent: 'space-evenly',
									alignItems: 'center',
								}}
							>
								<div>
									<Image
										src={Pic3}
										style={{ maxWidth: '380px' }}
									/>
								</div>
								<div
									style={{
										// backgroundColor: 'green',
										display: 'flex',
										flexDirection: 'column',
									}}
								>
									{/* kiri */}
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
												onChange={(e) =>
													setA(e.target.value)
												}
											/>
											<VerticalFraction
												numerator={2}
												denominator={4}
												fontSize={'22px'}
											/>
										</div>
										{/* e o q01 */}

										{/* q02 */}
										<div
											style={{
												display: 'flex',
												alignItems: 'center',
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
												onChange={(e) =>
													setB(e.target.value)
												}
											/>
											<VerticalFraction
												numerator={1}
												denominator={3}
												fontSize={'22px'}
											/>
										</div>
										{/* e o q02 */}

										{/* q03 */}
										<div
											style={{
												display: 'flex',
												alignItems: 'center',
											}}
										>
											<VerticalFraction
												numerator={5}
												denominator={6}
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
												onChange={(e) =>
													setC(e.target.value)
												}
											/>
											<VerticalFraction
												numerator={4}
												denominator={6}
												fontSize={'22px'}
											/>
										</div>
										{/* e o q03 */}

										{/* q03 */}
										<div
											style={{
												display: 'flex',
												alignItems: 'center',
											}}
										>
											<VerticalFraction
												numerator={3}
												denominator={4}
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
												onChange={(e) =>
													setD(e.target.value)
												}
											/>
											<VerticalFraction
												numerator={2}
												denominator={3}
												fontSize={'22px'}
											/>
										</div>
										{/* e o q03 */}
									</div>
									{/* e o kiri */}
								</div>
							</div>
						</Row>
						<Row className="bottom-row">
							<div className="d-grid gap-2">
								<Button
									size="lg"
									onClick={handleCek}
									disabled={
										A === '' ||
										B === '' ||
										C === '' ||
										D === ''
									}
								>
									Cek
								</Button>
							</div>
						</Row>
					</>
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

export default Task08
