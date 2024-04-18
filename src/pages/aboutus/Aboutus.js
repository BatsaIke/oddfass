import React from 'react';
import styles from './AboutUsPage.module.css'; // Assume you have CSS module for styling
import logo from '../../images/log.webp'; // Path to your logo image

const AboutUsPage = () => {
    const smartHomeImage = "https://images.samsung.com/is/image/samsung/assets/us/home-appliances/mlps/03212024/03/01_DT.jpg?$720_N_JPG$";

    return (
        <div className={styles.container}>
            <section className={styles.hero}>
                <img src={logo} alt="ODDFAS LTD Logo" className={styles.logo}/>
                <h1>Welcome to ODDFAS LTD</h1>
                <p>Leading Innovation in Smart Home Technology</p>
            </section>
            <section className={styles.companyOverview}>
                <h2>About Our Company</h2>
                <p>Founded on the principles of innovation and excellence, ODDFAS LTD is dedicated to revolutionizing how technology is used at home. We blend cutting-edge technology with everyday functionality to create smart home solutions that are not only sophisticated but also intuitive to use. Our systems, ranging from smart lighting to advanced security, integrate seamlessly into daily life, enhancing convenience and energy efficiency. Our latest innovation includes a smart fridge that not only keeps your food fresh but also tracks your groceries and automatically orders refills when supplies run low, ensuring you never run out of your essentials.</p>
                <img src={smartHomeImage} alt="Smart Home Technology" className={styles.featuredImage}/>
            </section>
            <section className={styles.services}>
                <h2>Our Services</h2>
                <p>We provide comprehensive in-home installation and monitoring services for all your smart gadgets. Our team of experts will not only help you set up your devices but will also ensure they are optimized for your living space. Whether it’s installing a new smart security system or integrating smart appliances, we manage all aspects of setup and configuration. Plus, our ongoing monitoring services ensure that your devices are always functioning optimally, with real-time support available to address any issues.</p>
            </section>
            <section className={styles.missionStatement}>
                <h2>Our Mission</h2>
                <p>At ODDFAS LTD, our mission is to empower homeowners by integrating cutting-edge technology into their daily lives. We strive to create a seamless and connected home environment where technology anticipates the homeowner's needs and acts accordingly. Our smart home solutions are designed to provide ultimate convenience, enhanced security, and improved energy efficiency, making homes smarter and more responsive. By focusing on user-friendly and adaptive technologies, we help transform the concept of a house into a responsive, intuitive home.</p>
            </section>
            <section className={styles.values}>
                <h2>Our Values</h2>
                <ul>
                    <li><strong>Innovation:</strong> We are committed to pioneering new technologies and redefining what it means to live in a smart home. Our team continually pushes the boundaries of what is possible in home automation.</li>
                    <li><strong>Customer Centricity:</strong> Our customers are at the heart of everything we do. We listen to their needs and design solutions that not only meet but exceed their expectations. Every product we develop is crafted with the user's lifestyle in mind, ensuring ease of use and seamless integration into their daily routines.</li>
                    <li><strong>Integrity:</strong> We conduct our business with the highest standards of honesty and transparency. We believe that trust is the foundation of our relationships with customers, partners, and employees.</li>
                </ul>
            </section>
        </div>
    );
};

export default AboutUsPage;
