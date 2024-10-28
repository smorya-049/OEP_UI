import React, { useState } from "react";
import styles from "./LogInForm.module.css";
import Link from "next/link";

const LogInForm = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);

        try {
            const response = await fetch("http://68.183.90.216:8083/secure/adminLogin", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    emailID: username,
                    password: password,
                }),
            });

            const data = await response.json();

            if (response.ok && !data.errFlag) {
                console.log("Login successful:", data);
                // You can save the session data, redirect, or perform other actions
            } else {
                setError(data.message || "Login failed. Please try again.");
            }
        } catch (err) {
            console.error("Error logging in:", err);
            setError("An error occurred. Please try again later.");
        }
    };

    return (
        <div className={styles.LogInPage}>
            <form autoComplete="off" className="form" onSubmit={handleSubmit}>
                <p className={styles.p1}>UNLOCK THE TEST ZONE!</p>
                <p className={styles.p2}>LOG IN NOW TO START.</p>
                <label htmlFor="username" />
                <input
                    type="email"
                    className={styles.input}
                    placeholder="Username"
                    required
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <label htmlFor="password" />
                <input
                    type="password"
                    className={styles.input}
                    placeholder="Password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button className={styles.buttonlogin} type="submit">Login</button>
                {error && <p className={styles.error}>{error}</p>}
            </form>
            <div className={styles.horizontal_line_container}>
                <hr className={styles.horizontal_line} />
                <span className={styles.text_between}>OR</span>
                <hr className={styles.horizontal_line} />
            </div>
            <p className={styles.p3}>
                Are you a new user? <Link href="/signup" className={styles.signup}>Create an account</Link>
            </p>
        </div>
    );
};

export default LogInForm;