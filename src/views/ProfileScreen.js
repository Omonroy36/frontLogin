import React from "react";
import { Navbar } from "../components/Navbar";

export default function ProfileScreen() {

    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col l12">
                        <div className="row">
                            <div className="col s12 m12 l12">
                                <div className="card blue-grey darken-1">
                                    <div className="card-content white-text">
                                        <span className="card-title">Perfil de usuario</span>
                                        <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p>
                                    </div>
                                    <div className="card-action">
                                        <a href="/#">Configurar perfil</a>
                                        <a href="/#">Agregar una historia</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}