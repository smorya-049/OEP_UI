import React, { useState, useEffect } from "react";
import styles from "./SignUpForm.module.css";
import { FaPhoneAlt } from 'react-icons/fa';
import myInterceptor from "@/lib/interceptor";

const SignUpForm = () => {
    const [formData, setFormData] = useState({
        emailID: "",
        password: "",
        organisationName: "",
        contactNO: "",
        name: ""
    });
    const [responseMessage, setResponseMessage] = useState("");

    // Auto-clear responseMessage after 5 seconds if set
    useEffect(() => {
        if (responseMessage) {
            const timer = setTimeout(() => setResponseMessage(""), 5000);
            return () => clearTimeout(timer);
        }
    }, [responseMessage]);

    // Handle input change
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await myInterceptor.post("/secure/adminRegister", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();
            if (data.errFlag) {
                setResponseMessage(data.errMsg || "An error occurred. Please try again.");
            } else {
                setResponseMessage(data.message || "Successfully registered!");
            }
        } catch (error) {
            setResponseMessage("Failed to register. Please check your network connection.");
            console.error("Registration error:", error);
        }
    };

    return (
        <div className={styles.SignUpPage}>
            <form autoComplete="off" className="form" onSubmit={handleSubmit}>
                <p className={styles.p1}>UNLOCK THE TEST ZONE!</p>
                <p className={styles.p2}>LOG IN NOW TO START.</p>
                
                <input
                    type="text"
                    name="name"
                    className={styles.input}
                    placeholder="Username"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                />
                
                <input
                    type="email"
                    name="emailID"
                    className={styles.input}
                    placeholder="E-mail"
                    required
                    value={formData.emailID}
                    onChange={handleInputChange}
                />

                <input
                    type="number"
                    name="contactNO"
                    className={styles.input}
                    placeholder="Contact No."
                    required
                    value={formData.contactNO}
                    onChange={handleInputChange}
                />

                <input
                    type="text"
                    name="organisationName"
                    className={styles.input}
                    placeholder="Organisation Name"
                    required
                    value={formData.organisationName}
                    onChange={handleInputChange}
                />

                <input
                    type="password"
                    name="password"
                    className={styles.input}
                    placeholder="Password"
                    required
                    value={formData.password}
                    onChange={handleInputChange}
                />

                <button className={styles.buttonsign} type="submit">Register</button>
            </form>

            {responseMessage && <p className={styles.responseMessage}>{responseMessage}</p>}

            <div className={styles.horizontal_line_container}>
                <hr className={styles.horizontal_line} />
                <span className={styles.text_between}>OR</span>
                <hr className={styles.horizontal_line} />
            </div>
            
            <p className={styles.p3}>
                <FaPhoneAlt size={17} style={{ marginRight: '6px' }} />
                <a className={styles.contactus}>Contact Us</a> to generate key
            </p>
        </div>
    );
};

export default SignUpForm;
