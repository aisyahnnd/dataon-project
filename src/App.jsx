// import { TextInput } from './Components'
// import { Dashboard } from './Pages'
import { FilterTrainingEvent } from './Parts'
// import { FilterTrainingEvent } from './Parts'
import ReactDOM from 'react-dom'
function App () {
  return (
    <div>
      <FilterTrainingEvent></FilterTrainingEvent>
    </div>
  )
}
ReactDOM.render(<App />, document.getElementById('root'))
export default App
