import React from 'react';
import "./App.js"
import {hot} from "react-hot-loader";
import Header from './components/Header.js'


const App = () =>
    <div>
        <Header />
        <h1> Hello, World! Are You Hot Loading? </h1>
    </div>

export default hot(module)(App);
