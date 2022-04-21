import { useState, useEffect } from 'react';
import './Home.css';
import { carrot, github, viewer, anime, tree, alice, carrotwolf, comicviewer, magnify, xicon } from '../images';
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

    return <>
        {   
            popup.visible && <>
                <div className="popupOverlay" onClick={() => setPopup({ visible: false, image: 'none' })}>
                    <img className="magnifyImage" src={xicon} alt="xicon" />
                </div>
                <div className="imagePopup">
                    <img className="centeredImage" src={popup.image} alt={popup.image} height="800" />
                </div>
            </>
        }
        <div className="outerContainer">
            <img className="animeImage" src={anime} alt="anime" />
            <img className="treeImage" src={tree} alt="tree" />
            <span className="titleText" style={{color: 'rgb(7,255,234)', left: '55px', top: '52px'}}>水を飲む</span>
            <span className="titleText">水を飲む</span>
            <span className="titleText" style={{color: 'black', left: '55px'}}>水を飲む</span>
            <div className="homeContainer" id="detailsContainer">
                {
                    tab === 'viewer'
                    ? <>
                        <span><b>Blaze Comic Viewer</b></span><br /><br />
                        <img src={comicviewer} alt="comicviewer" width="400" onClick={() => setPopup({ visible: true, image: comicviewer })} />
                        <img className="magnifyImage" src={magnify} alt="magnify" onClick={() => setPopup({ visible: true, image: carrotwolf })} />
                        <hr />
                        <span>·	Comic viewer website for language learning made with React and MERN stack</span><br />
                        <span>·	Uses Imgur API to upload albums as comics</span><br />
                        <span>·	Vocabulary can be added to each page individually</span><br />
                        <span>·	Full vocab list and comic completion can be viewed from the shelf</span><br />
                        <span>·	Integrated dictionary search and zoom settings</span><br />
                        <span><b>· React, MERN, JavaScript, MongoDB, ExpressJS, NodeJS, HTML, CSS, Redux, Material UI</b></span><br /><br />
                        <a href="https://blaze-comic-viewer.netlify.app">Demo it here with Username: Freeze, Password: 123</a>
                    </>

                    : tab === 'carrot'
                    ? <>
                        <span><b>CarrotWolf</b></span><br /><br />
                        <img src={carrotwolf} alt="carrotwolf" width="400" onClick={() => setPopup({ visible: true, image: carrotwolf })} />
                        <img className="magnifyImage" src={magnify} alt="magnify" onClick={() => setPopup({ visible: true, image: carrotwolf })} />
                        <hr />
                        <span>·	Turn-based strategy browser game made with React</span><br />
                        <span>·	Used Redux for keeping track of the board state</span><br />
                        <span>·	Controlled using keyboard input and the mouse</span><br />
                        <span>·	Styled with Material UI and custom components</span><br />
                        <span>·	Features enemy AI and random collectable items</span><br />
                        <span><b>· React, JS, HTML, CSS, Redux, Material UI</b></span><br /><br />
                        <a href="http://hershnagpal.github.io/carrot-client/">Play the game here!</a>

                    </>

                    : tab === 'github'
                    ? <>
                        <img className="aliceImage" src={alice} alt="alice" />
                        <span>HaematicAlis@GitHub</span>
                        <hr />
                        <span>Currently working on:</span><br />
                        <span><b>Portfolio website</b></span><br /><br />
                        <a href="https://github.com/HaematicAlis">Click here for my GitHub!</a>
                    </>

                    : <span></span>
                }
            </div>
            <div className="homeContainer" id="linksContainer">
                <div className="linkBox" id="viewerBox" style={tab === 'viewer' ? {background: 'rgb(7,255,234)'} : {}} onClick={() => slide('viewer')}>
                    <img src={viewer} width="20" height="20" alt="viewer" />
                    <span> Blaze Comic Viewer</span>
                </div>
                <div className="linkBox" id="carrotBox" style={tab === 'carrot' ? {background: 'rgb(7,255,234)'} : {}} onClick={() => slide('carrot')}>
                    <img src={carrot} width="20" height="20" alt="carrot" />
                    <span> CarrotWolf</span>
                </div>
                <div className="linkBox" id="githubBox" style={tab === 'github' ? {background: 'rgb(7,255,234)'} : {}} onClick={() => slide('github')}>
                    <img src={github} width="20" height="20" alt="github" />
                    <span> GitHub</span>
                </div>
            </div>
        </div>
    </>
};

export default Home;