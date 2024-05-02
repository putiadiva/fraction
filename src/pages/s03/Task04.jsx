import { React, useState } from 'react'
import '../../App.css'
import MyBackground from './MyBackground'
import MyBubbleChat from './MyBubbleChat'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Col, Row, Image, Form, Button, Modal } from 'react-bootstrap'
import Narrator from '../../assets/narrator_icon.png'
import Pic1 from '../../assets/handw1.png'
import Pic2 from '../../assets/handw2.png'
import Pic4 from '../../assets/112212.png'
import Pic5 from '../../assets/BROWNIE_1_PIRING.png'
import Pic6 from '../../assets/BROWNIE_2_PIRING.png'

function Task04() {
	// TO DO: ganti checkbox dengan radiobutton

	const [showModal, setShowModal] = useState(false)
	const [showHint1, setShowHint1] = useState(false)
	const [showHint2, setShowHint2] = useState(false)
	const [userinfo, setUserInfo] = useState({
		languages: [],
		response: [],
	})

	const handleClose = () => {
		setShowModal(false)
	}

	const handleCek = () => {
		console.log(userinfo.languages)
		console.log(userinfo.response)

		let arr = userinfo.languages

		if (!arr.includes('a') && arr.includes('b')) {
			console.log('benar !!!!!')
			window.location.href = '/s03/task04-true'
		} else {
			console.log('salah !!!!!')
			setShowModal(true)
		}
	}

	const handleChange = (e) => {
		// Destructuring
		const { value, checked } = e.target
		const { languages } = userinfo

		console.log(`${value} is ${checked}`)

		// Case 1 : The user checks the box
		if (checked) {
			setUserInfo({
				languages: [...languages, value],
				response: [...languages, value],
			})

			console.log(userinfo.response)
		}

		// Case 2  : The user unchecks the box
		else {
			setUserInfo({
				languages: languages.filter((e) => e !== value),
				response: languages.filter((e) => e !== value),
			})
			console.log(userinfo.response)
		}
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
							Kawanmu mengambil 2/12 bagian dan kamu mengambil
							1/12 bagian.
							<br />
							Manakah yang <span>lebih besar</span>? 1/12 atau
							2/12?
						</MyBubbleChat>
					</Col>
				</Row>
				<Row className="middle-row my-center">
					<Form>
						<div
							style={{
								display: 'flex',
								justifyContent: 'space-evenly',
							}}
						>
							<div>
								<Form.Group>
									<Col className="my-center">
										<Image
											src={Pic1}
											style={{ height: '200px' }}
										/>
									</Col>
									<br />
									<Col className="my-center">
										<Form.Check
											inline
											name="group1"
											style={{
												transform: 'scale(1.5)',
											}}
											onChange={handleChange}
											value="a"
										/>
									</Col>
								</Form.Group>
							</div>
							<div>
								<Form.Group>
									<Col className="my-center">
										<Image
											src={Pic2}
											style={{ height: '200px' }}
										/>
									</Col>
									<br />
									<Col className="my-center">
										<Form.Check
											inline
											name="group1"
											style={{
												transform: 'scale(1.5)',
											}}
											onChange={handleChange}
											value="b"
										/>
									</Col>
								</Form.Group>
							</div>
						</div>
					</Form>
				</Row>
				<Row className="bottom-row">
					<div className="d-grid gap-2">
						<Button
							size="lg"
							onClick={handleCek}
							disabled={userinfo.response.length == 0}
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
						Di pertanyaan sebelum ini, kamu sudah mengetahui
						gambaran <span>1/12</span> dan <span>2/12</span>. Coba
						ingat-ingat, manakah yang <span>lebih banyak</span>?
						<br />
						<div className="my-center">
							<Image src={Pic6} style={{ width: '200px' }} />
							<Image src={Pic5} style={{ width: '200px' }} />
						</div>
					</Modal.Body>
					<Modal.Footer>
						<Button variant="primary" onClick={handleCloseHint1}>
							Ok. Saya akan coba lagi
						</Button>
						<Button variant="secondary" onClick={handleShowHint2}>
							Saya butuh bantuan lain
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
						Perhatikan gambar di bawah ini! Manakah yang{' '}
						<span>lebih banyak</span>?
						<br />
						<div className="my-center">
							<Image src={Pic4} style={{ width: '300px' }} />
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

export default Task04
