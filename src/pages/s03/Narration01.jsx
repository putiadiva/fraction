import React from 'react'
import '../../App.css'
import MyBackground from './MyBackground'
import { Row, Image, Button } from 'react-bootstrap'
import PakDengklek from '../../assets/PAK_DENGKLEK_5.png'
import PakDengklek2 from '../../assets/PAK_DENGKLEK.png'
import Pizza from '../../assets/PIZZA_UTUH.png'

function Narration01() {
	const handleLanjut = () => {
		window.location.href = '/s03/task01'
	}
	return (
		<MyBackground>
			<div className="my-container">
				<Row className="middle-row">
					<div
						style={{
							justifyContent: 'space-around',
							padding: '40px',
						}}
					>
						<div
							style={{
								display: 'flex',
								flexDirection: 'row',
								marginBottom: '12px',
							}}
						>
							<Image
								src={PakDengklek}
								style={{ width: '120px' }}
							/>
							<div
								style={{
									display: 'flex',
									alignItems: 'center',
								}}
							>
								<div
									style={{
										backgroundColor: '#badec4',
										padding: '12px',
										marginLeft: '12px',
										borderRadius: '12px',
									}}
								>
									Halo teman-teman! Selamat datang di Taman
									Matematika!
								</div>
							</div>
						</div>
						<div style={{ marginBottom: '12px' }}>
							Pak Dengklek, guru matematika mu, mengadakan piknik
							bersama murid-muridnya. Pak Dengklek telah
							menyediakan banyak makanan serta tikar-tikar untuk
							kamu dan teman-temanmu duduk menikmati makanan.
						</div>
						<div
							style={{
								display: 'flex',
								flexDirection: 'row',
								marginBottom: '12px',
							}}
						>
							<Image
								src={PakDengklek2}
								style={{ width: '120px' }}
							/>
							<Image src={Pizza} style={{ height: '120px' }} />
							<div
								style={{
									display: 'flex',
									alignItems: 'center',
								}}
							>
								<div
									style={{
										backgroundColor: '#badec4',
										padding: '12px',
										marginLeft: '12px',
										borderRadius: '12px',
									}}
								>
									Ayo mendekat ke sini! Lihat pizza besar ini!
								</div>
							</div>
						</div>
						<div style={{ marginBottom: '12px' }}>
							Rupanya, Pak Dengklek mengajak kamu dan
							teman-temanmu piknik di taman ini untuk
							bersenang-senang sekaligus belajar! Ayo belajar
							bersama Pak Dengklek!
						</div>
					</div>
				</Row>
				<Row className="bottom-row">
					<div className="d-grid gap-2">
						<Button size="lg" onClick={handleLanjut}>
							Lanjut!
						</Button>
					</div>
				</Row>
			</div>
		</MyBackground>
	)
}

export default Narration01

// #badec4
// #9dc7a8
// #9cd380
