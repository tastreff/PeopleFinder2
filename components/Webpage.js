import * as React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Webpage() {
    const navigate = useNavigate();

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
                <div className="container">

                    <a className="navbar-brand logo-text page-scroll" href="#">PeopleFinder</a>

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-awesome fas fa-bars"></span>
                        <span className="navbar-toggler-awesome fas fa-times"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a className="nav-link page-scroll" href="#description" style={{color: "#19ca94"}}>DESCRIPTION <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link page-scroll" href="#news" style={{color: "#19ca94"}}>NEWS</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link page-scroll" href="#reviews" style={{color: "#19ca94"}}>REVIEWS</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link page-scroll" href="#download" style={{color: "#19ca94"}}>DOWNLOAD</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link page-scroll" href="/sign-in" style={{color: "#ff556e"}}>LOGIN</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <header className="header">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="text-container">
                                <h1>PeopleFinder Mobile App</h1>
                                <p className="p-large p-heading">Find the right people for your needs with PeopleFinder mobile app powered by Taylor Streff Technologies. Our new design connects people from around the world in seconds. Download now to see for yourself.</p>
                                <a className="btn-solid-lg" href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer"><i className="fab fa-apple"></i>DOWNLOAD</a>
                                <a className="btn-solid-lg" href="https://play.google.com/store/apps?hl=en&gl=US" target="_blank" rel="noopener noreferrer"><i className="fab fa-google-play"></i>DOWNLOAD</a>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="image-container">
                                <img className="img-fluid" src={require("../images/mobileapp.png")} alt="Photo of PeopleFinder Mobile App Interface" width="300" height="400"></img>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="deco-white-circle-1">
                    <img src={require("../images/decorative-white-circle.png")} alt="white circle"></img>
                </div>
                <div className="deco-white-circle-2">
                    <img src={require("../images/decorative-white-circle.png")} alt="white circle"></img>
                </div>
                <div className="deco-blue-circle">
                    <img src={require("../images/decorative-blue-circle.png")} alt="blue circle"></img>
                </div>
                <div className="deco-yellow-circle">
                    <img src={require("../images/decorative-yellow-circle.png")} alt="yellow circle"></img>
                </div>
                <div className="deco-green-diamond">
                    <img src={require("../images/decorative-green-diamond.png")} alt="green diamond"></img>
                </div>
            </header>

            <div className="cards-1">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">

                            <div className="card">
                                <div className="card-image red">
                                    <i className="fas fa-star "></i>
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">Specialized Searches</h5>
                                </div>
                            </div>

                            <div className="card">
                                <div className="card-image yellow">
                                    <i className="fas fa-comments"></i>
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">Real Time Conversations</h5>
                                </div>
                            </div>

                            <div className="card">
                                <div className="card-image blue">
                                    <i className="fas fa-users "></i>
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">Connect People</h5>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div id="description" className="basic-1">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="image-container">
                                <img className="img-fluid" style={{verticalAlign:"top"}} src={require("../images/worldconnections.jpg")} alt="App Connecting People Across World"></img>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="text-container">
                                <h2>Become the #1 HR Recruiter</h2>
                                <p>PeopleFinder is the first mobile app to connect you with people in real time. Try it now to see the results!</p>
                                <ul className="list-unstyled li-space-lg">
                                    <li className="media">
                                        <i className="fas fa-check-square"></i>
                                        <div className="media-body">Analyse and evaluate your current status and productivity</div>
                                    </li>
                                    <li className="media">
                                        <i className="fas fa-check-square"></i>
                                        <div className="media-body">Search for people based on your company needs</div>
                                    </li>
                                    <li className="media">
                                        <i className="fas fa-check-square"></i>
                                        <div className="media-body">Start conversations around the world with one click</div>
                                    </li>
                                    <li className="media">
                                        <i className="fas fa-check-square"></i>
                                        <div className="media-body">Check back in on your people at any time</div>
                                    </li>
                                    <li className="media">
                                        <i className="fas fa-check-square"></i>
                                        <div className="media-body">See the improved results in no more than a couple of weeks</div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="news" className="basic-2">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h2>News Feed</h2>
                            <p className="p-heading">See how PeopleFinder is being used in the industry!</p>
                        </div>
                    </div>

                    <div id="screens" className="slider">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="boxes">
                                        <p id="box1">News can be statically added here!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div id="reviews" className="user-review">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h2>User Reviews</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">

                            <div className="card">
                                <div className="card-image">
                                    <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
                                    <hr className="review-line"></hr>
                                </div>
                                <div className="card-body">
                                    <div className="review-text">I love using PeopleFinder for my business needs. It meets all my requirements and it actually helps a lot with finding the right people.</div>
                                    <div className="review-author">Flavio Esposito - HR Manager</div>
                                </div>
                            </div>

                            <div className="card">
                                <div className="card-image">
                                    <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
                                    <hr className="review-line"></hr>
                                </div>
                                <div className="card-body">
                                    <div className="review-text">After trying out a large number of apps I decided to give PeopleFinder a try and what a wonderful surprise it was.</div>
                                    <div className="review-author">Noah Sioson - VP of HR</div>
                                </div>
                            </div>

                            <div className="card">
                                <div className="card-image">
                                    <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
                                    <hr className="review-line"></hr>
                                </div>
                                <div className="card-body">
                                    <div className="review-text">Never dreamed I could learn so fast how to grow my business to levels I never thought possible.</div>
                                    <div className="review-author">Jay Frisco - Marketer</div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div className="counter">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div id="counter">
                                <div className="cell">
                                    <i className="fas fa-users"></i>
                                    <div className="counter-value number-count">241</div>
                                    <p className="counter-info">Happy Users</p>
                                </div>
                                <div className="cell">
                                    <i className="fas fa-map-marker-alt yellow"></i>
                                    <div className="counter-value number-count">59</div>
                                    <p className="counter-info">Companies Helped</p>
                                </div>
                                <div className="cell">
                                    <i className="fas fa-cog blue"></i>
                                    <div className="counter-value number-count">152</div>
                                    <p className="counter-info">Good Reviews</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div><div id="download" className="basic-3">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="image-container">
                                    <img className="img-fluid" src={require("../images/download-iphone.png")} alt="App on an iPhone" width="60%" height="auto"></img>
                                </div>
                                <p className="p-large">Do you feel like you're wasting time with small stuff instead of working towards your goals? Start using Sync to organize your time and get a grip on your personal development</p>
                                <a className="btn-solid-lg" href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer"><i className="fab fa-apple"></i>DOWNLOAD</a>
                                <a className="btn-solid-lg" href="https://play.google.com/store/apps?hl=en&gl=US" target="_blank" rel="noopener noreferrer"><i className="fab fa-google-play"></i>DOWNLOAD</a>
                            </div>
                        </div>
                    </div>
                    <div className="deco-white-circle-1">
                        <img src={require("../images/decorative-white-circle.png")} alt="white circle"></img>
                    </div>
                    <div className="deco-white-circle-2">
                        <img src={require("../images/decorative-white-circle.png")} alt="white circle"></img>
                    </div>
                    <div className="deco-blue-circle">
                        <img src={require("../images/decorative-blue-circle.png")} alt="blue circle"></img>
                    </div>
                    <div className="deco-yellow-circle">
                        <img src={require("../images/decorative-yellow-circle.png")} alt="yellow circle"></img>
                    </div>
                    <div className="deco-green-diamond">
                        <img src={require("../images/decorative-green-diamond.png")} alt="green diamond"></img>
                    </div>
                </div>
            
            <div className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="footer-col first">
                                <h5>About PeopleFinder</h5>
                                <p className="p-small">PeopleFinder is a landing page HTML template built with Bootstrap 4 for presenting mobile apps</p>
                            </div>
                            <div className="footer-col third">
                                <h5>Creative License</h5>
                                <ul className="list-unstyled li-space-lg p-small">
                                    <a rel="license" href="http://creativecommons.org/licenses/by/4.0/"><img alt="Creative Commons License" style={{borderWidth:0}} src={require("https://i.creativecommons.org/l/by/4.0/88x31.png")} /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           
            <div className="copyright">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <p className="p-small">Copyright © 2020 <a href="https://inovatik.com">Inovatik</a> - All rights reserved</p>
                        </div>
                    </div>
                </div>
            </div></> 
);
};



