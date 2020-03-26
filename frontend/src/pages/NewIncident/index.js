import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css';

import logoImage from '../../assets/logo.svg';

export default function NewIncident() {
    return (
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={logoImage} alt="Be The Hero" />

                    <h1>Register new incident</h1>
                    <p>Describe the incident in detail to find a hero to solve it</p>

                    <Link to="/profile" className="back-link">
                        <FiArrowLeft size={16} color="#E02041" />
                        Back to home
                    </Link>
                </section>

                <form >
                    <input placeholder="Title incident" />
                    <textarea placeholder="Description"></textarea>
                    <input placeholder="Value in CAD" />

                    <button className="button" type="submit">Register</button>
                </form>
            </div>
        </div>
    );
}