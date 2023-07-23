import React from 'react';
import ReactDOM from 'react-dom';



const welcome = 'Welcome to 30 days of React'
const title = 'Getting Started React'
const subtitle = 'JavaSript Library'
const author = {
    firstname: 'Anas',
    lastName: 'Aliu',
}
const date = '14th July, 2023'

const header = (
    <header>
        <div className='header-wrapper'>
            <h1>{welcome}</h1>
            <h2>{title}</h2>
            <h3>{subtitle}</h3>
            <p>Instructor: {author.firstname} {author.lastName}</p>
            <small>Date: {date}</small>
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

const main = (
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

const copyRight = 'Copyright 2020.'

const footer = (
    <footer>
        <div className='footer-wrapper'>
            <p>
                {copyRight}
            </p>
        </div>
    </footer>
)

const textStyle = {
    textAlign: 'center',
    fontSize: "20px",
    margin: "20px",
}

const sub = (
    <div class='bodySub'>
        <div style={textStyle} class='txt'><h1>SUBCRIBE</h1></div>
        
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

}



const app = (
    <div className='app'>
        {header}
        {main}
        {sub}
        {footer}
        {Parent}
    </div>
)

const rootElement = document.getElementById('root')

ReactDOM.render(app, rootElement)
