// import {Tabs} from './components/Tabs'
import './App.css'
import TabScreen from './pages/TabScreen';
import Products from './pages/Products';

function App() {
  return (
    <div className='min-h-screen bg-gray-50 py-8 px-4'>
      <TabScreen />
      <Products />
    </div>
  )
}

export default App
