import React, { useState, useEffect } from "react";
import styles from "./LogInForm.module.css";
import Link from "next/link";
import myInterceptor from "@/lib/interceptor";

const LogInForm = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [submit, setSubmit] = useState(false);

    // useEffect for handling form submission and API call
    useEffect(() => {
        if (!submit) return;

        const loginUser = async () => {
            setLoading(true);
            setError(null);

            try {
        const response = await myInterceptor.post("/secure/adminLogin", {
            emailID: username,
            password: password,
        });

        const data = response.data; 

                if (response.ok && !data.errFlag) {
                    console.log("Login successful:", data);
                    // Handle successful login, e.g., saving session data
                } else {
                    setError(data.message || "Login failed. Please try again.");
                }
            } catch (err) {
                console.error("Error logging in:", err);
                setError("An error occurred. Please try again later.");
            } finally {
                setLoading(false);
                setSubmit(false);
            }
        };

        loginUser();
    }, [submit, username, password]);

    // useEffect for clearing error message after 5 seconds
    useEffect(() => {
        if (!error) return;

        const timer = setTimeout(() => setError(null), 5000);
        return () => clearTimeout(timer);
    }, [error]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmit(true); // Trigger the submit state, which will activate the login effect
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
                <button className={styles.buttonlogin} type="submit" disabled={loading}>
                    {loading ? "Logging in..." : "Login"}
                </button>
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
