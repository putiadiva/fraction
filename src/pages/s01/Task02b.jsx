import { React, useState } from 'react'
import '../../App.css'
import MyBackgroundS01 from './MyBackgroundS01'
import MyBubbleChat from './MyBubbleChat'
import Narrator from '../../assets/narrator_icon.png'
import { Col, Row, Image, Form, Button } from 'react-bootstrap'
import Pic1 from '../../assets/14_pizza.png'
import Pic2 from '../../assets/14_brownies.png'
import Modal from 'react-bootstrap/Modal'

function Task02b() {
	const [showModal, setShowModal] = useState(false)
	const [userinfo, setUserInfo] = useState({
		languages: [],
		response: [],
	})
	const handleCek = () => {
		let arr = userinfo.languages

		if (!arr.includes('a') && arr.includes('b')) {
			window.location.href = '/s01/task03'
		} else {
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
		<MyBackgroundS01>
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
							Apakah 1/4 pizza sama dengan 1/4 brownies?
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
							<Image src={Pic1} style={{ width: '220px' }} />
							<Image src={Pic2} style={{ width: '220px' }} />
						</div>
						<Form>
							<Form.Group>
								<Form.Check
									inline
									name="group1"
									style={{
										transform: 'scale(1.5)',
									}}
									onChange={handleChange}
									value="a"
								></Form.Check>
								<span
									style={{ fontSize: '20px', color: 'black' }}
								>
									Sama
								</span>
							</Form.Group>
							<br />
							<Form.Group>
								<Form.Check
									inline
									name="group1"
									style={{
										transform: 'scale(1.5)',
									}}
									onChange={handleChange}
									value="b"
								></Form.Check>
								<span
									style={{ fontSize: '20px', color: 'black' }}
								>
									Beda
								</span>
							</Form.Group>
						</Form>
					</div>
				</Row>
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
					{/* className="test-bg" */}
					<Modal.Body>Ayo coba lagi!</Modal.Body>
					<Modal.Footer>
						<Button variant="primary" onClick={handleClose}>
							Saya akan coba lagi!
						</Button>
					</Modal.Footer>
				</Modal>
			</div>
		</MyBackgroundS01>
	)
}

export default Task02b
