import React, {Component} from 'react';
import {Route, Routes} from "react-router-dom";
import Layout from "../../components/Layout";
import Home from "../HomePage/HomePage";
import MoviePage from "../MoviePage/MoviePage";
import GamePage from "../GamePage/GamePage";
import Login from "../Login/Login";

class App extends Component {
    render() {
        const app = (
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/movies' element={<MoviePage/>}/>
                <Route path='/games' element={<GamePage/>}/>
                <Route path='/login' element={<Login/>}/>
            </Routes>
        )
        return (
            <div className="HomePage">
                <Layout content={app}/>
            </div>
        );
    }
}

export default App;