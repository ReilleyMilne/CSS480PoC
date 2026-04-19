import { useState } from "react";

import './Home.css';

import catImage from "./assets/cats.jpg"

export default function Home()
{
    return (
        <div className="container">
            <WelcomeMessage/>
            <AboutMe/>
            <InterestList/>
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
            <button onClick={rotateList}>Click to reorder!</button>
        </div>
    );
}