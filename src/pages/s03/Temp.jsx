import React from 'react'
import '../../App.css'

function Temp() {
	return (
		<div className="container">
			<h1>Temp</h1>
			<div className="card">
				<div className="card-body">
					Pak Dengklek membuat satu loyang pizza yang besar. Pak
					Dengklek ingin membagikannya kepada kamu dan tiga orang
					temanmu.
					<br />
					<br />
					Ayo bantu Pak Dengklek untuk memotong pizza sehingga kamu
					dan tiga orang kawanmu mendapat bagian yang sama besar.
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
					<Modal.Title>
						<b>Belum tepat!</b>
					</Modal.Title>
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

export default Temp
