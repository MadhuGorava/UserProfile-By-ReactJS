import UserProfile from './Components/UserProfile'

import './App.css'

const userDetailsList = [
  {
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Madhu',
    role: 'SoftwareDeveloper',
  },
  {
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'GoravaMadhu',
    role: 'SoftwareEngineer',
  },
  {
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'MadhuJack',
    role: 'TechnicalSupport',
  },
  {
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'MadhuSparrow',
    role: 'JavaDeveloper',
  },
]

const App = () => (
  <div className="list-container">
    <h1 className="title">users List</h1>
    <ul>
      {userDetailsList.map(eachItem => (
        <UserProfile userDetails={eachItem} key={eachItem.uniqueNo} />
      ))}
    </ul>
  </div>
)

export default App
