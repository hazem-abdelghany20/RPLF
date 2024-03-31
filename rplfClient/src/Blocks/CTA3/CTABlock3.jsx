import { useNavigate } from 'react-router'
import './css.css'


const CTABlock3 = ({ block }) => {
    const navigate = useNavigate()
    const goTo = (type, page, url, newTab) => {
        if (type == "page") {
            if (page.title == "Home") {
                navigate(`/`)
            } else {
                navigate(`/${page.title}`)
            }

        }
    }

    return (
        <div className='cta3__outer__container'>
            <div className='header'>
                <h2>{block.headline}</h2>
                <span>{block.paragraph}</span>
            </div>
            <div className='buttons__outer__container'>
                <div className='buttons__container'>
                    {
                        block.buttons.map(button => (
                            <button className='button' onClick={() => goTo(button.type, button.page, button.url, button.newTab)}>
                                {button.label}
                            </button>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default CTABlock3