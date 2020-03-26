import React from 'react';
import { Link } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import './styles.css'

import logoImage from '../../assets/logo.svg';
import heroesImage from '../../assets/heroes.png';

export default function Logon() {
    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImage} alt="Be The Hero" />

                <form>
                    <h1>Do your logon</h1>

                    <input placeholder="Your ID" />
                    <button type="submit" className="button">Enter</button>

                    <Link to="/register" className="back-link">
                        <FiLogIn size={16} color="#E02041" />
                        I don't have register
                    </Link>
                </form>
            </section>

            <img src={heroesImage} alt="Heroes" />
        </div>
    );
}