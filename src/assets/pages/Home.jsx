import CategoryList from '../components/CategoryList'
import EventHandler from '../components/EventHandler'
import Navbar from '../components/Navbar'
import UseRef from '../components/UseRef'

const Home = () => {
    const Item = {
        "id" : 1,
        "name" : "product 1",
        "description" : "This is the description",
        "price" : 19.99,
        "category" : "Category 1"
      }
  return (
    <div>
        <Navbar />
        <UseRef />
        <CategoryList item = {Item} />
        <EventHandler />
    </div>
  )
}

export default Home