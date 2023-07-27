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

/*________________ React Component _________________*/
class Parent {
    constructor (firstName, lastName, country, title) {
        this.firstName = firstName
        this.lastName = lastName
        this.country = country
        this.title = title
    }
    getPersonInfo(){
        return `${this.firstName} ${this.lastName}, a ${this.title} developer based in ${this.country}`
    }
    parentMethod(){
        // code goes here
    }
}

/* const p1 = new Parent('Ayomide', 'Aliu', 'South Korea', 'Data Science');

class Child extends Parent {
    constructor(firstName, lastName, country, title, skills){
        super(firstName, lastName, country, title)
        this.skills = skills
    }
    getSkills(){
        let len = this.skills.length
        return len > 0 ? this.skills.join(' ') : 'No skills found'
    }
    childMethod(){

    }
}
const skills = ['HTML', 'CSS', 'JS', 'React.Js', 'Bootstrap'];

const child = new Child(
    p1,
    skills
) */

const App = () => (
    <div className='app'>
        <Header />
        <Main />
        <Sub />
        <Footer />
        <Parent />       
    </div>
)

const rootElement = document.getElementById('root');

ReactDOM.render(<App />, rootElement);
