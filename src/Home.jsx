import { useState } from "react";
import { Link } from 'react-router-dom';

import './Home.css';

import catImage from "./assets/cats.jpg"

export default function Home()
{
    return (
        <div className="container">
            <a href="#main-content" className="skip-link">Skip to main content</a>
            <NavBar/>
            <main id="main-content" style={{ display: "contents" }}>
                <WelcomeMessage/>
                <AboutMe/>
                <InterestList/>
            </main>
        </div>
    );
}

function NavBar()
{
    return (
        <div className="navbar">
            <nav>
                <ul className="navbar">
                    <li><Link to="/" accessKey="h" aria-label="Home (alt+h)">Home</Link></li>
                    <li><Link to="/things-to-read" accessKey="t" aria-current="page" aria-label="Things to Read (alt+t)">Things To Read</Link></li>
                </ul>
            </nav>
        </div>
    );
}

function WelcomeMessage()
{
    return (
        <div className='home welcome-message'>
            <h1>Hi welcome to my website!</h1>
        </div>
    );
}

function AboutMe()
{
    return (
        <div className='home about-me'>
            <p>My name is Reilley. I'm a senior by credits, but this is only my third year at UWB. I'm a Computer Science and Software Engineering major. And I have two cats.</p>
            <img src={catImage} alt="picture of two cats on a cat tree."/>
        </div>
    );
}

function InterestList()
{
    const[elements, setElements] = useState(
        [
            "Rock Climbing",
            "Programming",
            "Playing with my cats"
        ]
    );

    function rotateList()
    {
        const rotatedList = [];

        for(let i = 1; i <= elements.length; i++)
        {
            if(i >= elements.length)
            {
                rotatedList.push(elements[0]);
            }
            else
            {
                rotatedList.push(elements[i]);
            }
        }

        setElements(rotatedList);
    }

    return (
        <div className='home interest-list'>
            <p>Below is a list of some things I like to do in my free time:</p>
            <ul>
                {elements.map((element, index) =>
                    <li key={index}>{element}</li>
                )}
            </ul>
            <button onClick={rotateList} aria-label="Reorder the interest list.">Click to reorder!</button>
        </div>
    );
}