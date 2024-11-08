"use client"; // Add this at the top of the file

import React, { useState, useEffect } from "react";
import styles from "./examcreation.module.css";

/*export default function Home() {
  const [examData, setExamData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://68.183.90.216:8083/secure/testDisplay", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer e20deb5a-873e-4741-b823-ef9ab6133bd8`, // Add your token here
          },
          body: JSON.stringify({
            sub: "Guest",
            tokenId: "e20deb5a-873e-4741-b823-ef9ab6133bd8",
            userId: "oep@gmail.com",
          }),
        });

        if (!response.ok) {
          // Log response for debugging purposes
          const errorText = await response.text();
          console.log("Response Status:", response.status);
          console.log("Response Body:", errorText);
          throw new Error(`HTTP error! status: ${response.status} - ${errorText}`);
        }

        const data = await response.json();
        console.log("API Response Data:", data);
        setExamData(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }*/

  return (
    <main>
      <form className={styles.form} align="center">
        <label className={styles.label}>Exam Name/ Subject Name</label>
        <input
          type="text"
          id="ExamName"
          className={styles.input}
          value={examData?.data[0]?.testName || ""}
          readOnly
        />
        <br />

        <label className={styles.label}>Maximum Marks</label>
        <input
          type="number"
          id="MaxMark"
          className={styles.input}
          value={examData?.data[0]?.totalMarks || ""}
          readOnly
        />
        <br />

        <label className={styles.label}>Approx. Number of Questions</label>
        <input
          type="text"
          id="NoofQues"
          className={styles.input}
          value={examData?.data[0]?.approxQues || ""}
          readOnly
        />
        <br />

        <label className={styles.label}>Maximum Number of Students</label>
        <input
          type="text"
          id="NoofStud"
          className={styles.input}
          value={examData?.data[0]?.approxStudents || ""}
          readOnly
        />
        <br />

        <label className={styles.label}>Expected Date of Exam</label>
        <input
          type="date"
          id="date"
          className={styles.input}
          value={examData?.data[0]?.expDate || ""}
          readOnly
        />
        <br />

        <label className={styles.label}>Expected Time of Exam</label>
        <input
          type="time"
          id="time"
          className={styles.input}
          value={examData?.data[0]?.expTime || ""}
          readOnly
        />
        <br />

        <button type="submit" value="RequestKey" className={styles.btn}>
          Request KEY
        </button>
      </form>
    </main>
  );
