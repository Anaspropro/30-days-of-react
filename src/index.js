import React from 'react';
import ReactDOM from 'react-dom';

const author = {
    firstname: 'Anas',
    lastName: 'Aliu',
}

// Header Component
const Header = () => (
    <header>
        <div className='header-wrapper'>
            <h1>Welcome to 30 days of React</h1>
            <h2>Getting Started React</h2>
            <h3>JavaSript Library</h3>
            <p>Anas Aliu</p>
            <small>14th July, 2023</small>
        </div>
    </header>
)

const yearBorn = 2000
const currentYear = new Date().getFullYear()
const age = currentYear - yearBorn
const personAge = (
    <p>
        {' '}
        {author.firstname} {author.lastName} is {age} years Old
    </p>
)

const TechList = () => {
    
}
const techs = ['HTML', 'CSS', 'JavaScript']
const techsFormatted = techs.map((tech) => <li>{tech}</li>)

// Main Component
const Main = () => (
    <main>
        <div className='main-wrapper'>
            <p>
                Prerequisite to get started{' '}
                <strong>
                    <em>react.js</em>
                </strong>
                :
            </p>
            <ul>{techsFormatted}</ul>
            {personAge}
        </div>
    </main>
)

const Sub =  () => (
    <div className='body-sub'>
        <div ><h1>SUBCRIBE</h1></div>        
        <p>Sign up with your email address to recieve news and update</p>
        <div>
            <input type="text" name="firstname" placeholder='firstname' id="" />
            <input type="text" name="lastname" placeholder='lastname' id="" />
            <input type="email" name="e-mail" placeholder='e-mail' id="" />
        </div>
        <div>
            <button type="submit">Subscribe</button>
        </div>
    </div>
)

// footer component
const Footer = () => (
    <footer>
        <div className='footer-wrapper'>
            <p>Copyright 2020</p>
        </div>
    </footer>
)

const App = () => (
    <div className='app'>
        <Header />
        <Main />
        <Sub />
        <Footer />      
    </div>
)

const rootElement = document.getElementById('root');

ReactDOM.render(<App />, rootElement);
