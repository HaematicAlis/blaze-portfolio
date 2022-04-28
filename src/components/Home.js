import { useState, useEffect } from 'react';
import './Home.css';
import { carrot, github, viewer, vaporwave, alice, carrotwolf, comicviewer, magnify, xicon, credits, red, seventhree, downarrow, backarrow } from '../images';
import { startConfetti } from '../confetti';

const Home = () => {
    const [tab, setTab] = useState('none');
    const [popup, setPopup] = useState({ visible: false, image: 'none'});

    useEffect(() => {
        startConfetti();
    }, []);

    const slide = (id) => {
        const linksContainer = document.getElementById('linksContainer');
        const detailsContainer = document.getElementById('detailsContainer');
        if (tab === id) {
            setTab('none');
            linksContainer.classList.remove('slideLeft');
            detailsContainer.classList.remove('slideRight');
            linksContainer.classList.add('undoSlideLeft');
            detailsContainer.classList.add('undoSlideRight');
        } else {
            setTab(id);
            linksContainer.classList.remove('undoSlideLeft');
            detailsContainer.classList.remove('undoSlideRight');
            linksContainer.classList.add('slideLeft');
            detailsContainer.classList.add('slideRight');
        }
    };

    const getName = () => {
        switch (tab) {
            case 'viewer':
                return 'Blaze Comic Viewer';
            case '7red3':
                return '7Red3 Motion Graphics Studio';
            case 'carrot':
                return 'CarrotWolf - The Wolf Who Cried Carrot';
            case 'github':
                return 'GitHub';
            case 'credits':
                return 'Credits';
            default:
                return '';
        }
    };

    return <>
        {   
            popup.visible && <>
                <div className="popupOverlay" onClick={() => setPopup({ visible: false, image: 'none' })}></div>
                <img className="magnifyImage" src={xicon} alt="xicon" onClick={() => setPopup({ visible: false, image: 'none' })}/>
                <div className="imagePopup">
                    <img className="centeredImage" src={popup.image} alt={popup.image} />
                </div>
            </>
        }
        <div className="outerContainer">
            <img className="vaporwaveImage" src={vaporwave} alt="vaporwave" />
            <span className="titleText" style={{color: 'rgb(7,255,234)', right: '22px', top: '17px'}}>Blaze Wiseman</span>
            <span className="titleText">Blaze Wiseman</span>
            <span className="titleText" style={{color: 'black', right: '25px'}}>Blaze Wiseman</span>
            <div className="homeContainer" id="detailsContainer">
            <div className="homeBar">
                <span style={{position: 'absolute', top: '4px'}}>&nbsp;* {getName()}</span>
                <span className="homeIcon" onClick={() => slide(tab)}>
                    <img className="backarrowImage" src={backarrow} alt="backarrow" />
                </span>
            </div>
                {
                    tab === 'viewer'
                    ? <>
                        <img className="thumbnailImage" src={comicviewer} alt="comicviewer" onClick={() => setPopup({ visible: true, image: comicviewer })} />
                        <img className="magnifyImage" src={magnify} alt="magnify" onClick={() => setPopup({ visible: true, image: comicviewer })} />
                        <hr />
                        <span>·	Comic viewer website for language learning</span><br />
                        <span>· Made with React and MERN stack on Netlify</span><br />
                        <span>·	Uses Imgur API to upload albums as comics</span><br />
                        <span>·	Vocab can be added to each page individually</span><br />
                        <span>· Shelf to view, sort, and manage comics and books</span><br />
                        <span>·	Full vocab list and completion % can be viewed</span><br />
                        <span>·	Integrated dictionary search and zoom settings</span><br />
                        <span><b>· React, MERN, JavaScript, MongoDB, ExpressJS,</b></span><br />
                        <span><b>&nbsp;&nbsp;NodeJS, HTML, CSS, Redux, Material UI</b></span><br />
                        <a className="bottomText" href="https://blaze-comic-viewer.netlify.app" target="_blank" rel="noreferrer">Demo it here with Username: Freeze, Password: 123</a>
                    </>

                    : tab === '7red3'
                    ? <>
                        <img className="thumbnailImage" src={red} alt="red" onClick={() => setPopup({ visible: true, image: red })} />
                        <img className="magnifyImage" src={magnify} alt="magnify" onClick={() => setPopup({ visible: true, image: red })} />
                        <hr />
                        <span>·	Company website for 7Red3</span><br />
                        <span>·	Used as a portfolio of motion graphics work</span><br />
                        <span>·	Motion work shows Vimeo popups</span><br />
                        <span>· Design work shows image collections</span><br />
                        <span>·	Admin dashboard for uploading and managing</span><br />
                        <span>·	Admin can edit and reorder work in the database</span><br />
                        <span><b>· React, JS, HTML, CSS, MySQL, PHP, GoDaddy</b></span><br /><br />
                        <a className="bottomText" href="https://7red3.com" target="_blank" rel="noreferrer">Check it out here!</a>

                    </>

                    : tab === 'carrot'
                    ? <>
                        <img className="thumbnailImage" src={carrotwolf} alt="carrotwolf" onClick={() => setPopup({ visible: true, image: carrotwolf })} />
                        <img className="magnifyImage" src={magnify} alt="magnify" onClick={() => setPopup({ visible: true, image: carrotwolf })} />
                        <hr />
                        <span>·	Turn-based strategy browser game made with React</span><br />
                        <span>·	Used Redux for keeping track of the board state</span><br />
                        <span>·	Controlled using keyboard input and the mouse</span><br />
                        <span>·	Styled with Material UI and custom components</span><br />
                        <span>·	Features enemy AI and random collectable items</span><br />
                        <span><b>· React, JS, HTML, CSS, Redux, Material UI</b></span><br />
                        <a className="bottomText" href="http://hershnagpal.github.io/carrot-client/" target="_blank" rel="noreferrer">Play the game here!</a>

                    </>

                    : tab === 'github'
                    ? <>
                        <img className="aliceImage" src={alice} alt="alice" />
                        <span>HaematicAlis@GitHub</span>
                        <hr />
                        <span>Currently working on:</span><br />
                        <span><b>Portfolio website</b></span><br /><br />
                        <a className="bottomText" href="https://github.com/HaematicAlis" target="_blank" rel="noreferrer">Click here for my GitHub!</a>
                    </>

                    : tab === 'credits'
                    ? <>
                        <span>Confetti particle script: </span>
                        <a href="https://www.cssscript.com/confetti-falling-animation/" target="_blank" rel="noreferrer">CSS Script</a><br />
                        <span>Font: </span>
                        <a href="https://fonts.google.com/specimen/Kosugi+Maru" target="_blank" rel="noreferrer">Kosugi Maru</a><br />
                        <span>Made with: React</span><br />
                        <span>Website and artwork by: me</span>
                    </>

                    : <span></span>
                }
            </div>
            <div className="homeContainer" id="linksContainer">
                <div className="homeBar">
                    <span style={{position: 'absolute', top: '4px'}}>&nbsp;*    Local Disc (C:/{tab === 'none' ? '' : tab})</span>
                    <span className="homeIcon">X</span>
                </div>
                <div className="linkBox" id="viewerBox" style={tab === 'viewer' ? {background: 'rgb(7,255,234)'} : {}} onClick={() => slide('viewer')}>
                    <img src={viewer} width="20" height="20" alt="viewer" />
                    <span> Blaze Comic Viewer</span>
                </div>
                <div className="linkBox" id="7red3box" style={tab === '7red3' ? {background: 'rgb(7,255,234)'} : {}} onClick={() => slide('7red3')}>
                    <img src={seventhree} width="20" height="20" alt="seventhree" />
                    <span> 7Red3</span>
                </div>
                <div className="linkBox" id="carrotBox" style={tab === 'carrot' ? {background: 'rgb(7,255,234)'} : {}} onClick={() => slide('carrot')}>
                    <img src={carrot} width="20" height="20" alt="carrot" />
                    <span> CarrotWolf</span>
                </div>
                <div className="linkBox" id="githubBox" style={tab === 'github' ? {background: 'rgb(7,255,234)'} : {}} onClick={() => slide('github')}>
                    <img src={github} width="20" height="20" alt="github" />
                    <span> GitHub</span>
                </div>
                <div className="linkBox" id="creditsBox" style={tab === 'credits' ? {background: 'rgb(7,255,234)'} : {}} onClick={() => slide('credits')}>
                    <img src={credits} width="20" height="20" alt="credits" />
                    <span> Credits</span>
                </div>
                <a href="http://blazewiseman.com/files/resume.pdf" target="_blank" rel="noreferrer" style={{color: 'black'}}>
                    <div className="linkBox" id="resumeBox" style={tab === 'resume' ? {background: 'rgb(7,255,234)'} : {}}>
                        <img src={downarrow} width="20" height="20" alt="downarrow" />
                        <span> Resume</span>
                    </div>
                </a>
            </div>
        </div>
    </>
};

export default Home;