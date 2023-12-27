import ApiHandling from '../components/ApiHandling'
import Conditional_rendering from '../components/conditional_rendering'
import Navbar from '../components/Navbar'

const Profile = () => {
  return (
    <div>
        <Navbar />
        <ApiHandling />
        <Conditional_rendering />
    </div>
  )
}

export default Profile