// Write your code here
import './index.css'

const AppItem = props => {
  const {apps} = props
  const {appName, imageUrl} = apps

  return (
    <li className="app-item">
      <img className="app-image" src={imageUrl} alt={appName} />
      <p className="app-name">{appName}</p>
    </li>
  )
}

export default AppItem
