import React, { useState } from 'react';
import styles from './StudentPanel.module.css';
import { FaRegCirclePause } from "react-icons/fa6";
import { VscDebugRestart } from "react-icons/vsc";
import { VscDebugStart } from "react-icons/vsc";
import Link from 'next/link';
import Image from 'next/image';


const StudentPanel = () => {
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [blockTime, setBlockTime] = useState('');

  const students = Array.from({ length: 20 }, (_, i) => ({
    name: `Student ${i + 1}`,
    rollNo: `00${i + 1}`,
    details: `Details ${i + 1}`,
    contact: `Contact ${i + 1}`,
    image: `https://via.placeholder.com/50`
  }));

  const handleStudentClick = (student) => {
    setSelectedStudent(student);
  };

  const handleBlock = (time) => {
    console.log(`Blocking ${selectedStudent.name} for ${time}`);
    // Implement block functionality here
  };

  const [blockOpen, setBlockOpen] = useState(false);

  const toggleBlock = () => {
    setBlockOpen(!blockOpen);
  };

  const handleRemove = () => {
    console.log(`Removing ${selectedStudent.name}`);
    // Implement remove functionality here
  };

  return (
    <div className={styles.container}>
      <div className={styles.leftPanel}>
        {selectedStudent ? (
          <>
            <img src={selectedStudent.image} alt="Student" className={styles.studentImg} />
            <p>Name: {selectedStudent.name}</p>
            <p>Roll No: {selectedStudent.rollNo}</p>
            <p>Other details: {selectedStudent.details}</p>
            <p>Contact info: {selectedStudent.contact}</p>
            
            <button onClick={handleRemove} className={styles.removeButton}>Remove</button>
            <button onClick={toggleBlock} className={styles.blockButton}>Block</button>
                    {blockOpen && (
                <div className={styles.block_options}>
                  <ul style={{ listStyleType: 'none', padding: 0 }}>
                    <li><button onClick={() => handleBlock('10 mins')}>For 10 mins</button></li>
                    <li><button onClick={() => handleBlock('15 mins')}>For 15 mins</button></li>
                    <li><button onClick={() => handleBlock('20 mins')}>For 20 mins</button></li>
                    <li><button onClick={() => handleBlock('30 mins')}>For 30 mins</button></li>
                    <li><button onClick={() => handleBlock('permanently')}>Block permanently</button></li>
                  </ul>
                </div>
              )}
          </>
        ) : (
          <p>Select a student to see details</p>
        )}
      </div>

    {/*right panel*/}

        <div className={styles.rightPanel}>
                {/*nav*/}
            <div className={styles.navbar}>
              <div className={styles.searchContainer}>
                <input type="text" placeholder="Search..." className={styles.searchBar} />
              </div>
              <div className={styles.controls}>
                <button className={styles.controlButton}><FaRegCirclePause /></button>
                <button className={styles.controlButton}><VscDebugRestart /></button>
                <button className={styles.controlButton}><VscDebugStart /></button>
              </div>
              <div className={styles.timer}>
                <span>00:00</span>
              </div>
            </div>
                {/*nav*/}
          {students.slice(0, 12).map((student, index) => (
            <div key={index} onClick={() => handleStudentClick(student)} className={styles.studentCard}>
              <img src={student.image} alt="Student" className={styles.studentImage} />
              <p>{student.name}</p>
            </div>
          ))}
          <button className={styles.othersButton}>Others</button>
        </div>
    </div>
  );
};

export default StudentPanel;
