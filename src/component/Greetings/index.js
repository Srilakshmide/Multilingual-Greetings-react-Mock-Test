import {Component} from 'react'
import './index.css'

class Greetings extends Component {
  state = {language: 'English'}

  handleLanguageChange = language => {
    this.setState({language})
  }

  render() {
    const {language} = this.state
    const {languageGreetingsList} = this.props

    return (
      <div className="bg-container">
        <h1 className="heading">Multilingual Greetings</h1>
        <ul className="buttons-container">
          {languageGreetingsList.map(languageGreeting => (
            <li>
              <button
                type="button"
                key={languageGreeting.id}
                className={
                  language === languageGreeting.buttonText
                    ? 'active-btn button'
                    : 'button'
                }
                onClick={() =>
                  this.handleLanguageChange(languageGreeting.buttonText)
                }
              >
                {languageGreeting.buttonText}
              </button>
            </li>
          ))}
        </ul>
        <div className="image-container">
          <img
            src={
              languageGreetingsList.find(
                languageGreeting => languageGreeting.buttonText === language,
              ).imageUrl
            }
            alt={
              languageGreetingsList.find(
                languageGreeting => languageGreeting.buttonText === language,
              ).imageAltText
            }
            className="image"
          />
        </div>
      </div>
    )
  }
}

export default Greetings
