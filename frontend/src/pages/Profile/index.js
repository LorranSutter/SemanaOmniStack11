import React from 'react';
import { Link } from 'react-router-dom';
import { FiPower } from 'react-icons/fi';
import { FiTrash2 } from 'react-icons/fi';

import './styles.css';

import logoImage from '../../assets/logo.svg';

export default function Profile() {
    return (
        <div className="profile-container">
            <header>
                <img src={logoImage} alt="Be The Hero" />
                <span>Welcome, APAD</span>

                <Link to="/incidents/new" className="button">Register new incident</Link>
                <button type="button">
                    <FiPower size={18} color="#E02041" />
                </button>
            </header>

            <h1>Registered incidents</h1>

            <ul>
                <li>
                    <strong>Incident:</strong>
                    <p>Incident test</p>

                    <strong>Description:</strong>
                    <p>Description test</p>

                    <strong>Value:</strong>
                    <p>$ 120.00</p>

                    <button type="button">
                        <FiTrash2 size={20} color="#A8A8B3"/>
                    </button>
                </li>
                <li>
                    <strong>Incident:</strong>
                    <p>Incident test</p>

                    <strong>Description:</strong>
                    <p>Description test</p>

                    <strong>Value:</strong>
                    <p>$ 120.00</p>

                    <button type="button">
                        <FiTrash2 size={20} color="#A8A8B3"/>
                    </button>
                </li>
                <li>
                    <strong>Incident:</strong>
                    <p>Incident test</p>

                    <strong>Description:</strong>
                    <p>Description test</p>

                    <strong>Value:</strong>
                    <p>$ 120.00</p>

                    <button type="button">
                        <FiTrash2 size={20} color="#A8A8B3"/>
                    </button>
                </li>
                <li>
                    <strong>Incident:</strong>
                    <p>Incident test</p>

                    <strong>Description:</strong>
                    <p>Description test</p>

                    <strong>Value:</strong>
                    <p>$ 120.00</p>

                    <button type="button">
                        <FiTrash2 size={20} color="#A8A8B3"/>
                    </button>
                </li>
            </ul>
        </div>
    );
}