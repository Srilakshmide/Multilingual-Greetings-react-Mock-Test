import './index.css'

const GreetingItem = props => {
  const {itemDetails, setActiveId, isActive} = props
  const {imageUrl, imageAltText, buttonText, id} = itemDetails

  const onClickButton = () => {
    setActiveId(id)
  }

  const btnClassName = isActive ? 'button active-btn' : 'button'

  return (
    <li className="buttons-container">
      <button type="button" className={btnClassName} onClick={onClickButton}>
        {buttonText}
      </button>
      {isActive ? (
        <div className="image-container">
          <img src={imageUrl} alt={imageAltText} className="image" />
        </div>
      ) : (
        ''
      )}
    </li>
  )
}

export default GreetingItem
