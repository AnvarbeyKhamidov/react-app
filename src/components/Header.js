import React from 'react';
import Buttons from "./Buttons";

function Header(props) {
    return (
        <>
            <header>
                <nav className="navbar navbar-expand-md">
                    <a href="#" className="navbar-brand">
                        RED <span>ROCK</span>
                    </a>

                    <Buttons/>
                </nav>

                <section className="header__content">
                    <article>
                        <h1>RedRock новый <span>чит!</span></h1>
                        <p>We are one of the largest boosting and in-game currency broker services in
                            the world, boasting a large customer base and unparalleled customer service.
                            The best boosters earn $5,000+ and the best sellers have a $50,000+
                            monthly turnover. Apply today to join their ranks!</p>

                        <div className="header__counter">
                            <div className="counter__left">
                                <h4>1 600 000 +</h4>
                                <h5>количество <br/>
                                    игроков в PUBG</h5>
                            </div>

                            <div className="counter__right">
                                <h4>300 +</h4>
                                <h5>игроков <br/>
                                    с нашим читом RedRock</h5>
                            </div>
                        </div>
                    </article>

                    <div className="header__img">
                        <img src="assets/imgs/man.png" alt="Man"/>
                    </div>
                </section>
            </header>
        </>
    );
}

export default Header;