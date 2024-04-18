import React from 'react';
import { FaHome, FaShieldAlt, FaLightbulb } from 'react-icons/fa'; // Importing specific icons
import styles from './ServicesPage.module.css'; // Ensure you have created a corresponding CSS module

const ServicesPage = () => {
    return (
        <div className={styles.servicesContainer}>
            <h1>Our Services</h1>
            <div className={styles.servicesList}>
                <div className={styles.serviceItem}>
                    <FaHome className={styles.serviceIcon} />
                    <h3>Smart Home Installation</h3>
                    <p>We install and configure smart home systems including lighting, security, and HVAC automation.</p>
                </div>
                <div className={styles.serviceItem}>
                    <FaShieldAlt className={styles.serviceIcon} />
                    <h3>Advanced Security Solutions</h3>
                    <p>Enhance the security of your home with our state-of-the-art security systems including cameras and alarms.</p>
                </div>
                <div className={styles.serviceItem}>
                    <FaLightbulb className={styles.serviceIcon} />
                    <h3>Energy Management</h3>
                    <p>Optimize energy usage with our smart energy solutions that reduce costs and increase efficiency.</p>
                </div>
            </div>
        </div>
    );
};

export default ServicesPage;
