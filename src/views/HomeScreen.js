import React from "react";
import M from "materialize-css";
import { Link } from "react-router-dom";
import { Fragment } from "react";


export default class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            src: this.props.src
        }
    }
    componentDidMount() {
        let elem = document.querySelector('.carousel');
        M.Carousel.init(elem, { duration: 200, fullWidth: false });

        let elems = document.querySelectorAll('.collapsible');
        M.Collapsible.init(elems);

        let elemss = document.querySelectorAll('.parallax');
        M.Parallax.init(elemss);

        let elemsss = document.querySelectorAll('.sidenav');
        M.Sidenav.init(elemsss);

        var elemssss = document.querySelectorAll('.fixed-action-btn');
        M.FloatingActionButton.init(elemssss, {
            direction: 'left',
            hoverEnabled: false
        });
    }
    render() {
        return (
            <Fragment>
                <nav>
                    <div className="nav-wrapper teal lighten-1">
                        <a href="#" className="brand-logo"><img src="/foxlogo.png" widdth="64px" height="64px" /></a>
                        <ul id="nav-mobile" className="right hide-on-med-and-down my-padding">
                            <li><Link href="sass.html">Races</Link></li>
                            <li><Link href="badges.html">Enviroment</Link></li>
                            <li><Link href="collapsible.html">History</Link></li>
                        </ul>
                    </div>
                </nav>

               <div className="fixed-action-btn">
                <ul id="slide-out" className="sidenav">
                    <li><div className="user-view">
                        <div className="background">
                            <img src="images/office.jpg" />
                        </div>
                        <a href="#user"><img className="circle" src="images/yuna.jpg" /></a>
                        <a href="#name"><span className="white-text name">John Doe</span></a>
                        <a href="#email"><span className="white-text email">jdandturk@gmail.com</span></a>
                    </div></li>
                    <li><a href="#!"><i className="material-icons">cloud</i>First Link With Icon</a></li>
                    <li><a href="#!">Second Link</a></li>
                    <li><div className="divider"></div></li>
                    <li><a className="subheader">Subheader</a></li>
                    <li><a className="waves-effect" href="#!">Third Link With Waves</a></li>
                </ul>
                <a href="#" data-target="slide-out" className="sidenav-trigger btn-floating btn-large red"><i className="material-icons">menu</i></a>
               </div>

                <div className="container">
                    <div className="row">
                        <div className="col l6">
                            <div className="carousel">
                                <a className="carousel-item" href="#one!"><img src="https://www.liveanimalslist.com/mammals/images/swift-fox-picture.jpg" /></a>
                                <a className="carousel-item" href="#two!"><img src="https://i.pinimg.com/originals/61/6c/d2/616cd22156e1062241e9744c75a2303c.jpg" /></a>
                                <a className="carousel-item" href="#three!"><img src="https://images.unsplash.com/photo-1485094142704-b05d3759b589?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" /></a>
                                <a className="carousel-item" href="#four!"><img src="https://www.state.nj.us/dep/fgw/images/wildlife/fox_gl.jpg" /></a>
                            </div>
                        </div>
                        <div className="col l6">
                            <ul className="collapsible popout pt1">
                                <li>
                                    <div className="collapsible-header"><i className="material-icons">filter_drama</i>First</div>
                                    <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                                </li>
                                <li>
                                    <div className="collapsible-header"><i className="material-icons">place</i>Second</div>
                                    <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                                </li>
                                <li>
                                    <div className="collapsible-header"><i className="material-icons">whatshot</i>Third</div>
                                    <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                                </li>
                                <li>
                                    <div className="collapsible-header"><i className="material-icons">whatshot</i>Four</div>
                                    <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col l12">
                            <div className="parallax-container">
                                <div className="parallax"><img src="/fox_parallax.jpg" /></div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col l12">
                            <table className="highlight pt1">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Item Name</th>
                                        <th>Item Price</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr>
                                        <td>Alvin</td>
                                        <td>Eclair</td>
                                        <td>$0.87</td>
                                    </tr>
                                    <tr>
                                        <td>Alvin</td>
                                        <td>Eclair</td>
                                        <td>$0.87</td>
                                    </tr>
                                    <tr>
                                        <td>Alan</td>
                                        <td>Jellybean</td>
                                        <td>$3.76</td>
                                    </tr>
                                    <tr>
                                        <td>Jonathan</td>
                                        <td>Lollipop</td>
                                        <td>$7.00</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s12 m6">
                            <div className="card">
                                <div className="card-image">
                                    <img src="https://www.pulpandpapercanada.com/wp-content/uploads/2019/09/fall2018-forests.jpg" />
                                    <span className="card-title">Card Title</span>
                                    <a className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">add</i></a>
                                </div>
                                <div className="card-content">
                                    <p>I am a very simple card. I am good at containing small bits of information.
                                                 I am convenient because I require little markup to use effectively.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col s12 m6">
                            <div className="card">
                                <div className="card-image">
                                    <img src="https://www.pulpandpapercanada.com/wp-content/uploads/2019/09/fall2018-forests.jpg" />
                                    <span className="card-title">Card Title</span>
                                    <a className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">add</i></a>
                                </div>
                                <div className="card-content">
                                    <p>I am a very simple card. I am good at containing small bits of information.
                                                 I am convenient because I require little markup to use effectively.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}