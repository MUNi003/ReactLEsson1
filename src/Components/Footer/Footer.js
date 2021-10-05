import "./Footer.css"


const Footer = () =>{
    return(
        <>
            <div className="mainFooter">
                <h2>Contact ME</h2>
                <ul className="inlineFooter">
                    <li><a href=""><i class="fab fa-twitter"></i><span>twitter</span></a></li>
                    <li><a href=""><i class="fab fa-telegram-plane"></i><span>telegram</span></a></li>
                    <li><a href=""><i class="fab fa-instagram"></i><span>instagram</span></a></li>
                    <li><a href=""><i class="fab fa-facebook-f"></i><span>facebook</span></a></li>
                    <li><a href=""><i class="fab fa-invision"></i><span>linkedin</span></a></li>
                </ul>
            </div>
        </>
    )
}


export default Footer;