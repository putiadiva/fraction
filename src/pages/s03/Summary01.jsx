import React, { useState } from 'react'
import '../../App.css'
import MyBackground from './MyBackground'
import MyBubbleChat from './MyBubbleChat'
import Narrator from '../../assets/narrator_icon.png'
import { Col, Row, Image, Button } from 'react-bootstrap'
import Pic1 from '../../assets/pizza-perempat.png'
import Pic2 from '../../assets/112212.png'
import Pic3 from '../../assets/contoh_operasi_1.png'
import Pic4 from '../../assets/contoh_operasi_2.png'

function Summary01() {
	const [idx, setIdx] = useState(0)
	const handleLanjut = () => {
		if (idx === 2) {
			window.location.href = '/s03/nar06'
		}
		setIdx(idx + 1)
	}

	return (
		<MyBackground>
			<div className="my-container">
				{idx === 0 && (
					<Row
						className="my-center"
						style={{
							display: 'flex',
							alignItems: 'center',
							flexGrow: '1',
						}}
					></Row>
				)}
				<Row style={{ flex: '0 0 auto' }}>
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
						{idx === 0 && (
							<MyBubbleChat>
								Pecahan adalah salah satu{' '}
								<span>jenis bilangan</span>. Kamu mungkin sudah
								mengenal bilangan asli, bilangan bulat, bilang
								cacah, dan kali ini kamu mengenal bilangan
								pecahan.
								<br />
								<br />
								Pecahan dituliskan dalam bentuk <span>
									a/b
								</span>{' '}
								(dibaca a per b) dengan <span>b</span> tidak
								sama dengan nol.
								<br />
								<br />
								Ada beberapa macam pecahan, yaitu{' '}
								<span>pecahan biasa</span>,{' '}
								<span>pecahan campuran</span>, dan{' '}
								<span>pecahan desimal</span>. Kamu akan
								mempelajarinya lebih lanjut di
								kesempatan-kesempatan lain.
							</MyBubbleChat>
						)}
						{idx === 1 && (
							<MyBubbleChat>
								Pecahan dapat menjelaskan tentang pembagian.
								Seperti contoh yang sudah lihat sebelumnya, satu
								dari empat potong pizza dapat kita tuliskan
								sebagai pecahan 1/4. Dua dari dua belas potong
								brownies bisa kita tuliskan sebagai pecahan
								2/12.
							</MyBubbleChat>
						)}
						{idx === 2 && (
							<MyBubbleChat>
								Karena pecahan merupakan bilangan, maka kita
								dapat melakukan berbagai operasi seperti operasi
								penjumlahan, pengurangan, perkalian, dan
								pembagian.
							</MyBubbleChat>
						)}
					</Col>
				</Row>
				<Row className="my-center middle-row">
					{idx === 1 && (
						<>
							<Image
								src={Pic1}
								style={{
									height: '260px',
									width: 'auto',
									// flexGrow: '1',
								}}
							></Image>
							<Image
								src={Pic2}
								style={{
									height: '220px',
									width: 'auto',
									// flexGrow: '1',
								}}
							></Image>
						</>
					)}

					{idx === 2 && (
						<>
							<Image
								src={Pic3}
								style={{
									height: '220px',
									width: 'auto',
									// flexGrow: '1',
								}}
							></Image>
							<div style={{ width: '100px' }}></div>
							<Image
								src={Pic4}
								style={{
									height: '220px',
									width: 'auto',
									// flexGrow: '1',
								}}
							></Image>
						</>
					)}
				</Row>
				<Row style={{ flex: '0 0 auto' }}>
					<div className="d-grid gap-2">
						<Button size="lg" onClick={handleLanjut}>
							Mengerti, lanjut!
						</Button>
					</div>
				</Row>
			</div>
		</MyBackground>
	)
}

export default Summary01
