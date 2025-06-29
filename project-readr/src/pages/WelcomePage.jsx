import { Link } from "react-router-dom"
import './WelcomePage.css'

export function WelcomePage(){
    return (
        <>
            <div className="welcome-hero">
                <div className="left-div">
                <h1>Welcome to <span>Readr</span></h1>
                <p>Swipe. Shelve. Read</p>
      
                <div className="hero-buttons">
                    <Link to="/SignIn">
                    <button className="sign-in-btn">Sign In</button>
                    </Link>
                    <Link to="/SignUp">
                    <button className="get-started-btn">Get Started</button>
                    </Link>
                </div>
                </div>
                
            </div>
        </>
    )
}