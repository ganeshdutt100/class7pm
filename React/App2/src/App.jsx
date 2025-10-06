
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import Cards from './components/Cards'
import './style.css'
import Card from './components/Card'
import Card2 from './components/Card2'

function App() {
  // const [count, setCount] = useState(0)
  let para1 = " Card1 Lorem ipsum dolor sit amet consectetur adipisicing elit.Ipsum reiciendis itaque aperiam numquam molestias rem blanditiis non ea minus cumque atque, sed sunt eaque veniam, consequatur exercitationem iure autem error?"
  let para2 = " Card2 Lorem ipsum dolor sit amet consectetur adipisicing elit.Ipsum reiciendis itaque aperiam numquam molestias rem blanditiis non ea minus cumque atque, sed sunt eaque veniam, consequatur exercitationem iure autem error?"
  return (
    <>
      <Navbar logoName='firstWeb' />
      {/* <Card cardName="Card1" cardBody={para1} />
      <Card cardName="Card2" cardBody={para2} /> */}
      <Card2 cardBody={para1} cardName="Card1" />
      <Card2 cardBody={para2} cardName="Card2" />
      {/* <HeroSection /> */}
      {/* <Cards /> */}
    </>
  )
}

export default App
