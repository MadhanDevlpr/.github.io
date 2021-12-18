import React from 'react';

const Header = () => {
    window.onscroll = function(){
        if ((window.innerWidth >= 900)){
            if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                document.getElementById('header').style.backgroundSize = "150% auto"
                
            }else{
                document.getElementById('header').style.backgroundSize = "100% auto"
            }
        }
        };
    return (
        <header id="header">
            <h1>HI THERE I'M ,<br/><span className="glow">aadithya</span></h1>
            <h3>I build highly interactive sites with pure css and javascript, the languages well known for me are <code>Python, Html, Css, Sass, Javacript</code>, the tools and frameworks I use are <code>Vs Code, React, Flask, Git Bash, WSL.</code></h3>
            <a id="know-more" href="#about">know more</a>
            <a id="projects-btn" href="#projectss">projects</a>
        </header>
    )
}
export default Header
