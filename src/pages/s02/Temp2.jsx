import { React, useState } from 'react'
import '../../App.css'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Pizza1 from '../../assets/pizza1.png'
import Pizza2 from '../../assets/pizza2.png'
import Pizza3 from '../../assets/pizza3.png'
import Pizza4 from '../../assets/pizza4.jpg'
import 'bootstrap/dist/css/bootstrap.min.css'

function Temp2() {
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
		// misal KJ nya a DAN b

		console.log(userinfo.languages)
		console.log(userinfo.response)

		let arr = userinfo.languages

		if (
			arr.includes('a') &&
			arr.includes('b') &&
			!arr.includes('c') &&
			!arr.includes('d')
		) {
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
		<div className="container">
			<h1>Temp 2</h1>
			<div className="card">
				<div className="card-body">
					Selain itu, Pak Dengklek juga mempunyai brownies di dalam
					loyang persegi. Pak Dengklek ingin membaginya menjadi 12
					bagian.
					<br />
					<br />
					Ayo bantu Pak Dengklek untuk memotong brownies menjadi 12
					bagian yang sama besar.
					<br />
					<button
						type="button"
						className="btn btn-primary"
						onClick={handleMulai}
						disabled={isMulai}
					>
						Mulai
					</button>
				</div>
			</div>

			{isMulai && (
				<div className="row">
					<form>
						<div className="input-group">
							<div className="col input-group-prepend">
								<img
									className="img-fluid"
									src={Pizza1}
									alt="test alt pizza 1"
								/>
								<input
									type="checkbox"
									name="languages"
									value="a"
									onChange={handleChange}
								/>
							</div>
							<div className="col input-group-prepend">
								<img
									className="img-fluid"
									src={Pizza2}
									alt="test alt pizza 2"
								/>
								<input
									type="checkbox"
									name="languages"
									value="b"
									onChange={handleChange}
								/>
							</div>
							<div className="col input-group-prepend">
								<img
									className="img-fluid"
									src={Pizza3}
									alt="test alt pizza 3"
								/>
								<input
									type="checkbox"
									name="languages"
									value="c"
									onChange={handleChange}
								/>
							</div>
							<div className="col input-group-prepend">
								<img
									className="img-fluid"
									src={Pizza4}
									alt="test alt pizza 4"
								/>
								<input
									type="checkbox"
									name="languages"
									value="d"
									onChange={handleChange}
								/>
							</div>
						</div>
					</form>

					<textarea
						className="form-control text"
						name="response"
						value={userinfo.response}
						placeholder="The checkbox values will be displayed here "
						id="floatingTextarea2"
						style={{ height: '150px' }}
						onChange={handleChange}
					></textarea>

					<button
						type="button"
						className="btn btn-primary"
						disabled={userinfo.response.length == 0}
						onClick={handleCek}
					>
						Cek
					</button>
				</div>
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
					Perhatikan apakah setiap bagiannya sama besar!
					<br />
					Dan perhatikan apakah ada lebih dari satu jawaban!
				</Modal.Body>
				<Modal.Footer>
					<Button variant="primary" onClick={handleClose}>
						Saya akan coba lagi
					</Button>
				</Modal.Footer>
			</Modal>
		</div>
	)
}

export default Temp2
