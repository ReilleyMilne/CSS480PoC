// import { useState } from "react";
import { Link } from 'react-router-dom';

import './Home.css';

export default function ThingsToRead()
{
    return (
        <div className="container">
            <a href="#main-content" className="skip-link">Skip to main content</a>
            <NavBar/>
            <main id="main-content">
                <Things/>
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

function Things()
{
    return (
        <div className="links">
            <section className="keyboard-docs" aria-labelledby="keyboard-heading">
                <h2 id="keyboard-heading">Keyboard Support Guide</h2>
                <p>This site is fully navigable using only a keyboard. Here's how:</p>
                <table className="keyboard-table" aria-label="Keyboard shortcuts">
                    <thead>
                        <tr>
                            <th scope="col">Key</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><kbd>Tab</kbd></td>
                            <td>Move forward through links and navigation items</td>
                        </tr>
                        <tr>
                            <td><kbd>Shift</kbd> + <kbd>Tab</kbd></td>
                            <td>Move backward through links and navigation items</td>
                        </tr>
                        <tr>
                            <td><kbd>Enter</kbd></td>
                            <td>Activate the focused link or button</td>
                        </tr>
                        <tr>
                            <td><kbd>Alt</kbd> + <kbd>H</kbd></td>
                            <td>Jump directly to the Home page</td>
                        </tr>
                        <tr>
                            <td><kbd>Alt</kbd> + <kbd>T</kbd></td>
                            <td>Jump directly to Things To Read</td>
                        </tr>
                        <tr>
                            <td><kbd>Tab</kbd> (first keystroke)</td>
                            <td>Reveals a "Skip to main content" link — press <kbd>Enter</kbd> to bypass the navbar</td>
                        </tr>
                    </tbody>
                </table>
                <p className="keyboard-note">
                    <strong>Usability focus:</strong> This site prioritizes <em>learnability</em> and <em>efficiency</em> for keyboard users.
                    Access keys (<kbd>Alt+H</kbd>, <kbd>Alt+T</kbd>) let returning users navigate instantly without tabbing through
                    the entire navbar each time. The skip link reduces repetitive navigation for screen reader and keyboard-only users
                    which is a key principle of <em>error prevention</em> and <em>efficiency of use</em>.
                </p>
            </section>

            <h1>Interesting Information:</h1>
            <ul className="links-list">
                <li><a href="https://www.geeksforgeeks.org/operating-systems/round-robin-scheduling-in-operating-system/" target="_blank" rel="noreferrer">Round Robin Scheduling</a></li>
                <li><a href="https://edgeworksclimbing.com/" target="_blank" rel="noreferrer">Edgeworks Climbing</a></li>
                <li><a href="https://boulderingproject.com/market/seattle-washington/" target="_blank" rel="noreferrer">SBP</a></li>
                <li><a href="https://akapinn.com/category/korean-stories/" target="_blank" rel="noreferrer">Korean Stories</a></li>
                <li><a href="https://github.com/octokit" target="_blank" rel="noreferrer">Octokit</a></li>
                <li><a href="https://leetcode.com/problemset/" target="_blank" rel="noreferrer">Leetcode</a></li>
                <li><a href="https://github.com/donnemartin/system-design-primer?tab=readme-ov-file#learn-how-to-design-large-scale-systems" target="_blank" rel="noreferrer">System Design Primer</a></li>
                <li><a href="https://www.figma.com/" target="_blank" rel="noreferrer">Figma</a></li>
                <li><a href="https://minesweeper.online/" target="_blank" rel="noreferrer">Minesweeper</a></li>
                <li><a href="https://www.kaggle.com/" target="_blank" rel="noreferrer">Kaggle</a></li>
            </ul>
        </div>
    );
}