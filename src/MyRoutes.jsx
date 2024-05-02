import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'

import Task01s03 from './pages/s03/Task01'
import Task02s03 from './pages/s03/Task02'
import Task02bs03 from './pages/s03/Task02b'
import Task03s03 from './pages/s03/Task03'
import Task04s03 from './pages/s03/Task04'
import Task05s03 from './pages/s03/Task05'
import Task06s03 from './pages/s03/Task06'
import Task07s03 from './pages/s03/Task07'
import Task08s03 from './pages/s03/Task08'
import Task09s03 from './pages/s03/Task09'
import Task10s03 from './pages/s03/Task10'

import Task01Trues03 from './pages/s03/Task01True'
import Task02Trues03 from './pages/s03/Task02True'
import Task02bTrues03 from './pages/s03/Task02bTrue'
import Task03Trues03 from './pages/s03/Task03True'
import Task04Trues03 from './pages/s03/Task04True'
import Task05Trues03 from './pages/s03/Task05True'
import Task06Trues03 from './pages/s03/Task06True'
import Task07Trues03 from './pages/s03/Task07True'
import Task08Trues03 from './pages/s03/Task08True'
import Task09Trues03 from './pages/s03/Task09True'
import Task10Trues03 from './pages/s03/Task10True'
import Summary01s03 from './pages/s03/Summary01'
import Bridging01s03 from './pages/s03/Bridging01'
import TestBackgrounds03 from './pages/s03/TestBackground'

import Narration01 from './pages/s03/Narration01'
import Narration02 from './pages/s03/Narration02'
import Narration03 from './pages/s03/Narration03'
import Narration05 from './pages/s03/Narration05'
import Narration06 from './pages/s03/Narration06'
import Narration08 from './pages/s03/Narration08'

import Task01s02 from './pages/s02/Task01'
import Task02s02 from './pages/s02/Task02'
import Task02bs02 from './pages/s02/Task02b'
import Task03s02 from './pages/s02/Task03'
import Task04s02 from './pages/s02/Task04'
import Task05s02 from './pages/s02/Task05'
import Task06s02 from './pages/s02/Task06'
import Task07s02 from './pages/s02/Task07'
import Task08s02 from './pages/s02/Task08'
import Task09s02 from './pages/s02/Task09'
import Task10s02 from './pages/s02/Task10'

import Task01Trues02 from './pages/s02/Task01True'
import Task02Trues02 from './pages/s02/Task02True'
import Task02bTrues02 from './pages/s02/Task02bTrue'
import Task03Trues02 from './pages/s02/Task03True'
import Task04Trues02 from './pages/s02/Task04True'
import Task05Trues02 from './pages/s02/Task05True'
import Task06Trues02 from './pages/s02/Task06True'
import Task07Trues02 from './pages/s02/Task07True'
import Task08Trues02 from './pages/s02/Task08True'
import Task09Trues02 from './pages/s02/Task09True'
import Task10Trues02 from './pages/s02/Task10True'
import Summary01s02 from './pages/s02/Summary01'
import Bridging01s02 from './pages/s02/Bridging01'
import TestBackgrounds02 from './pages/s02/TestBackground'

import Narration01s02 from './pages/s02/Narration01'
import Narration02s02 from './pages/s02/Narration02'
import Narration03s02 from './pages/s02/Narration03'
import Narration05s02 from './pages/s02/Narration05'
import Narration06s02 from './pages/s02/Narration06'
import Narration08s02 from './pages/s02/Narration08'

import Task01s01 from './pages/s01/Task01'
import Task02s01 from './pages/s01/Task02'
import Task02bs01 from './pages/s01/Task02b'
import Task03s01 from './pages/s01/Task03'
import Task04s01 from './pages/s01/Task04'
import Task05s01 from './pages/s01/Task05'
import Task06s01 from './pages/s01/Task06'
import Task07s01 from './pages/s01/Task07'
import Task08s01 from './pages/s01/Task08'
import Task09s01 from './pages/s01/Task09'
import Task10s01 from './pages/s01/Task10'

function MyRoutes() {
	return (
		<Router>
			<React.Fragment>
				{/* <Routes> */}
				<Route exact path="/s03/nar01" Component={Narration01} />
				<Route exact path="/s03/nar02" Component={Narration02} />
				<Route exact path="/s03/nar03" Component={Narration03} />
				<Route exact path="/s03/nar05" Component={Narration05} />
				<Route exact path="/s03/nar06" Component={Narration06} />
				<Route exact path="/s03/nar08" Component={Narration08} />

				<Route exact path="/s03/task01" Component={Task01s03} />
				<Route exact path="/s03/task02" Component={Task02s03} />
				<Route exact path="/s03/task02b" Component={Task02bs03} />
				<Route exact path="/s03/task03" Component={Task03s03} />
				<Route exact path="/s03/task04" Component={Task04s03} />
				<Route exact path="/s03/task05" Component={Task05s03} />
				<Route exact path="/s03/task06" Component={Task06s03} />
				<Route exact path="/s03/task07" Component={Task07s03} />
				<Route exact path="/s03/task08" Component={Task08s03} />
				<Route exact path="/s03/task09" Component={Task09s03} />
				<Route exact path="/s03/task10" Component={Task10s03} />
				<Route exact path="/s03/summary01" Component={Summary01s03} />
				<Route exact path="/s03/bridging01" Component={Bridging01s03} />
				<Route
					exact
					path="/s03/task01-true"
					Component={Task01Trues03}
				/>
				<Route
					exact
					path="/s03/task02-true"
					Component={Task02Trues03}
				/>
				<Route
					exact
					path="/s03/task02b-true"
					Component={Task02bTrues03}
				/>
				<Route
					exact
					path="/s03/task03-true"
					Component={Task03Trues03}
				/>
				<Route
					exact
					path="/s03/task04-true"
					Component={Task04Trues03}
				/>
				<Route
					exact
					path="/s03/task05-true"
					Component={Task05Trues03}
				/>
				<Route
					exact
					path="/s03/task06-true"
					Component={Task06Trues03}
				/>
				<Route
					exact
					path="/s03/task07-true"
					Component={Task07Trues03}
				/>
				<Route
					exact
					path="/s03/task08-true"
					Component={Task08Trues03}
				/>
				<Route
					exact
					path="/s03/task09-true"
					Component={Task09Trues03}
				/>
				<Route
					exact
					path="/s03/task10-true"
					Component={Task10Trues03}
				/>
				<Route
					exact
					path="/s03/test-bg"
					Component={TestBackgrounds03}
				/>

				<Route exact path="/s02/nar01" Component={Narration01s02} />
				<Route exact path="/s02/nar02" Component={Narration02s02} />
				<Route exact path="/s02/nar03" Component={Narration03s02} />
				<Route exact path="/s02/nar05" Component={Narration05s02} />
				<Route exact path="/s02/nar06" Component={Narration06s02} />
				<Route exact path="/s02/nar08" Component={Narration08s02} />

				<Route exact path="/s02/task01" Component={Task01s02} />
				<Route exact path="/s02/task02" Component={Task02s02} />
				<Route exact path="/s02/task02b" Component={Task02bs02} />
				<Route exact path="/s02/task03" Component={Task03s02} />
				<Route exact path="/s02/task04" Component={Task04s02} />
				<Route exact path="/s02/task05" Component={Task05s02} />
				<Route exact path="/s02/task07" Component={Task07s02} />
				<Route exact path="/s02/task06" Component={Task06s02} />
				<Route exact path="/s02/task08" Component={Task08s02} />
				<Route exact path="/s02/task09" Component={Task09s02} />
				<Route exact path="/s02/task10" Component={Task10s02} />
				<Route exact path="/s02/summary01" Component={Summary01s02} />
				<Route exact path="/s02/bridging01" Component={Bridging01s02} />
				<Route
					exact
					path="/s02/task01-true"
					Component={Task01Trues02}
				/>
				<Route
					exact
					path="/s02/task02-true"
					Component={Task02Trues02}
				/>
				<Route
					exact
					path="/s02/task02b-true"
					Component={Task02bTrues02}
				/>
				<Route
					exact
					path="/s02/task03-true"
					Component={Task03Trues02}
				/>
				<Route
					exact
					path="/s02/task04-true"
					Component={Task04Trues02}
				/>
				<Route
					exact
					path="/s02/task05-true"
					Component={Task05Trues02}
				/>
				<Route
					exact
					path="/s02/task06-true"
					Component={Task06Trues02}
				/>
				<Route
					exact
					path="/s02/task07-true"
					Component={Task07Trues02}
				/>
				<Route
					exact
					path="/s02/task08-true"
					Component={Task08Trues02}
				/>
				<Route
					exact
					path="/s02/task09-true"
					Component={Task09Trues02}
				/>
				<Route
					exact
					path="/s02/task10-true"
					Component={Task10Trues02}
				/>
				<Route
					exact
					path="/s02/test-bg"
					Component={TestBackgrounds02}
				/>

				<Route exact path="/s01/task01" Component={Task01s01} />
				<Route exact path="/s01/task02" Component={Task02s01} />
				<Route exact path="/s01/task02b" Component={Task02bs01} />
				<Route exact path="/s01/task03" Component={Task03s01} />
				<Route exact path="/s01/task04" Component={Task04s01} />
				<Route exact path="/s01/task05" Component={Task05s01} />
				<Route exact path="/s01/task07" Component={Task07s01} />
				<Route exact path="/s01/task06" Component={Task06s01} />
				<Route exact path="/s01/task08" Component={Task08s01} />
				<Route exact path="/s01/task09" Component={Task09s01} />
				<Route exact path="/s01/task10" Component={Task10s01} />
				{/* </Routes> */}
			</React.Fragment>
		</Router>
	)
}

export default MyRoutes
