import "./Card.css"

const Card = () => {
    return(
        <>
            <div className="blockCard">
                <div className="rowCard">
                    {
                        Array.from({length:12}).map(item => 
                            <div className="Card">
                                <div className="cardImg">
                                    <img src="https://colibriwp.com/blog/wp-content/uploads/2018/07/banner-redimensionat.jpg" alt=""></img>
                                </div>
                                <div className="cardTitle">
                                    <h3>WebSite for big comercial company.</h3>
                                <div>
                            </div>
                        </div>
                    </div>
                        )
                    }
                </div>
            </div>
        </>
    )
}
export default Card;

