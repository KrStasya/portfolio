import React from 'react';
import './App.css';
import Header from "./header/Header";
import Hello from "./hello/Hello";
import Resume from "./resume/Resume"
import Portfolio from "./portfolio/Portfolio";
import {Contact} from "./contact/Contact";
import {Work} from "./work/Work";
import Footer from "./footer/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <Hello/>
            <Resume/>
            <Portfolio/>
            <Work/>
            <Contact/>
            <Footer/>
        </div>
    );
}

export default App;
