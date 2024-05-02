import './App.css'
import { BrowserRouter } from 'react-router-dom'
import MyRoutes from './MyRoutes'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
	return (
		<BrowserRouter>
			<MyRoutes />
		</BrowserRouter>
	)
}

export default App
