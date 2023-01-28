// Write your code here
import './index.css'

const TabItem = props => {
  const {tabs, changeTab, isActive} = props
  const {displayText, tabId} = tabs

  const onChangeTab = () => changeTab(tabId)

  const styleTab = isActive ? 'active-tab' : ''

  return (
    <li className="tab-item">
      <button className={styleTab} type="button" onClick={onChangeTab}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
