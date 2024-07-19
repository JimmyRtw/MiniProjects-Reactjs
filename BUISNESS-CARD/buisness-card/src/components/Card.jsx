import email from '../buisness-card-images/email.png'
import Facebook from '../buisness-card-images/Facebook-Icon.png'
import github from '../buisness-card-images/GitHub-Icon.png'
import instagrame from '../buisness-card-images/Instagram-Icon.png'
import linkedin from '../buisness-card-images/linked-in.png'
import twitter from '../buisness-card-images/Twitter-Icon.png'


export default function Card(){
    return (
        <div className="main-container">
        <div className="inner-container">
            <div className="image-container"></div>
            <div className="content-container">
                <h1>Laura Smith</h1>
                <h2>Front-end developer</h2>
                <h3>sample website url</h3>

                <div className="button-container">
                    <button className="email-button">
                        <img src={email} alt=""/>
                        <span>Email</span>
                    </button>
                    <button className="linked-button">
                        <img src={linkedin} alt=""/>
                        <span>linked-in</span>
                    </button>
                </div>

                <div className="details-container">
                    <div className="section-1">
                        <h2>About</h2>
                        <h6>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</h6>
                    </div>
                    <div className="section-2">
                        <h2>Interests</h2>
                        <h6>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</h6>
                    </div>
                </div>
            </div>
            <div className="footer-container">
                <img src={Facebook}/>
                <img src={github}/>
                <img src={instagrame}/>
                <img src={twitter}/>
            </div>
        </div>
    </div>
    )
}