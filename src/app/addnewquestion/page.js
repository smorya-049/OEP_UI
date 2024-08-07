// pages/index.js
"use client";
import Header from '@/components/Testnav.js';
import QuestionForm from './Questionform.js';

const Home = () => {
    return (
        <div>
            <Header />
            <QuestionForm />
        </div>
    );
};

export default Home;
