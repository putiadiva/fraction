import { React, useState } from 'react'
import '../../App.css'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Brownie1 from '../../assets/BROWNIE_26.png'
import Brownie2 from '../../assets/BROWNIE_34.png'
import Brownie3 from '../../assets/BROWNIE_43.png'
import Brownie from '../../assets/BROWNIE_BIG_PIRING.png'
import 'bootstrap/dist/css/bootstrap.min.css'
import MyBackground from './MyBackground'
import { Col, Row, Image, Form } from 'react-bootstrap'
import Narrator from '../../assets/narrator_icon.png'
import MyBubbleChat from './MyBubbleChat'

function Task02() {
	const [isMulai, setIsMulai] = useState(false)
	const [showModal, setShowModal] = useState(false)
	const [userinfo, setUserInfo] = useState({
		languages: [],
		response: [],
	})

	const handleMulai = () => {
		setIsMulai(true)
	}

	const handleCek = () => {
		console.log(userinfo.languages)
		console.log(userinfo.response)

		let arr = userinfo.languages

		if (arr.includes('a') && arr.includes('b') && arr.includes('c')) {
			console.log('benar !!!!!')
			window.location.href = '/s02/task02-true'
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
							Pak Dengklek juga mempunyai brownies di dalam loyang
							persegi panjang. Pak Dengklek ingin{' '}
							<span>membaginya</span> menjadi 12 bagian.
							<br />
							<br />
							Ayo bantu Pak Dengklek untuk memotong brownies
							menjadi <span>12 bagian yang sama besar</span>!
						</MyBubbleChat>
					</Col>
				</Row>

				{!isMulai && (
					<Row
						className="my-center"
						style={{
							display: 'flex',
							alignItems: 'center',
							flexGrow: '1',
						}}
					>
						<Image
							src={Brownie}
							style={{
								height: '240px',
								width: 'auto',
							}}
						></Image>
					</Row>
				)}

				{isMulai && (
					<Row className="middle-row">
						<Form>
							<Row>
								<Col>
									<Form.Group>
										<Col className="my-center">
											<Image
												src={Brownie1}
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
								</Col>
								<Col>
									<Form.Group>
										<Col className="my-center">
											<Image
												src={Brownie2}
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
								</Col>
								<Col>
									<Form.Group>
										<Col className="my-center">
											<Image
												src={Brownie3}
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
												value="c"
											/>
										</Col>
									</Form.Group>
								</Col>
							</Row>
						</Form>
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
								disabled={userinfo.response.length == 0}
								onClick={handleCek}
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
					<Modal.Body>
						Kamu belum memilih semua cara yang benar.
						<br />
						<br />
						Ada <span>beberapa cara</span> untuk membaginya menjadi
						12 bagian yang sama besar. Ceklis semua cara yang benar!
					</Modal.Body>
					<Modal.Footer>
						<Button variant="primary" onClick={handleClose}>
							Saya akan coba lagi!
						</Button>
					</Modal.Footer>
				</Modal>
			</div>
		</MyBackground>
	)
}

export default Task02
