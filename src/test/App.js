import React from 'react';
import './App.css';
import Nav from '../components/Nav.js'
import Header from "../components/Header";
import Section from "../components/SectionPorfilio";
import SectionAbout from "../components/SectionAbout";
import SectionContact from "../components/SectionContact";
import Footer from "../components/Footer";

function App() {
    return (
        <div className="App">
            <Nav/>
            <Header/>
            <Section/>
            <SectionAbout/>
            <SectionContact/>
            <Footer/>
        </div>
    );
}

export default App;