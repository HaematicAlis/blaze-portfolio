import { useState, useEffect } from 'react';
import './Home.css';
import { carrot, github, viewer, anime, tree } from '../images';
import { startConfetti } from '../confetti';

//https://blaze-comic-viewer.netlify.app
//https://hershnagpal.github.io/carrot-client/

const Home = () => {
    const [tab, setTab] = useState('none');

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

    const getContent = () => {
        switch (tab) {
            case 'viewer':
                return <>
                    <span>Viewer</span>
                </>;
            default:
                break;
        }
    };

    return <>
        <div className="outerContainer">
            <img className="animeImage" src={anime} alt="anime" />
            <img className="treeImage" src={tree} alt="tree" />
            <span className="titleText" style={{color: 'rgb(7,255,234)', left: '55px', top: '52px'}}>水を飲む</span>
            <span className="titleText">水を飲む</span>
            <span className="titleText" style={{color: 'black', left: '55px'}}>水を飲む</span>
            <div className="homeContainer" id="detailsContainer">
                {getContent}
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