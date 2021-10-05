import "./Header.css"

const Header = () =>{
    return(
        <>
            <div className="mainNav"> 
                <div className="inlineNav">
                    <h2 className="navLogo"><a>MUNi's
                    PORTFOLIO</a></h2>
                    <ul>
                        <li className="navItem"><a href="">About</a></li>
                        <li className="navItem"><a href="">My Skills</a></li>
                        <li className="navItem"><a href="">Contact</a></li> 
                        <li className="navItem"><a href="">My Works</a></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Header;