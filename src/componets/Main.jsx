import Cards from "./Card";

const Main = (props) => {
    
    return (
    <main>
        <section id="comicstop">
            <div id="container-top">
            </div>
            <div className=" container-bottom">
                <div className="container-relative">
                <h3 id="title-container-bottom"> <mark> CURRENT SERIES</mark></h3>
                <Cards comics={ props.comics }/>
                <button>LOAD MORE</button>
                </div>
            </div>
        </section>
        <section id="comicsbottom">
            <div className="container">
                <ul>
                    <li className="container-li">
                        <figure>
                            <img src="src\assets\img\buy-comics-digital-comics.png" alt="" />
                        </figure>
                        <span>DIGITAL COMICS</span>
                    </li>
                    <li className="container-li">
                        <figure>
                            <img src="src\assets\img\buy-comics-merchandise.png" alt="" />
                        </figure>
                        <span>DC MERCHANDISE</span>
                    </li>
                    <li className="container-li">
                        <figure>
                            <img src="src\assets\img\buy-comics-subscriptions.png" alt="" />
                        </figure>
                        <span>SUBSCRIPTION</span>
                    </li>
                    <li className="container-li">
                        <figure>
                            <img src="src\assets\img\buy-comics-shop-locator.png" alt="" />
                        </figure>
                        <span>COMIC SHOP LOCATOR</span>
                    </li>
                    <li className="container-li">
                        <figure>
                            <img src="src\assets\img\buy-dc-power-visa.svg" alt="" />
                        </figure>
                        <span>DC POWER VISA</span>
                    </li>
                </ul>
            </div>
        </section>
    </main>
)
    
}

export default Main;