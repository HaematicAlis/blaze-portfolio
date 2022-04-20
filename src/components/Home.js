import { useState } from 'react';
import './Home.css';
import { carrot, github, viewer } from '../images';

//https://blaze-comic-viewer.netlify.app
//https://hershnagpal.github.io/carrot-client/

const Home = () => {
    const [tab, setTab] = useState('none');

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
        <div className="homeContainer" id="detailsContainer">
            <span>{tab}</span>
        </div>
        <div className="homeContainer" id="linksContainer">
            <div className="linkBox" id="viewerBox" style={tab === 'viewer' ? {background: 'cornflowerblue'} : {}} onClick={() => slide('viewer')}>
                <img src={viewer} width="20" height="20" alt="viewer" />
                <span> Blaze Comic Viewer</span>
            </div>
            <div className="linkBox" id="carrotBox" style={tab === 'carrot' ? {background: 'cornflowerblue'} : {}} onClick={() => slide('carrot')}>
                <img src={carrot} width="20" height="20" alt="carrot" />
                <span> CarrotWolf</span>
            </div>
            <div className="linkBox" id="githubBox" style={tab === 'github' ? {background: 'cornflowerblue'} : {}} onClick={() => slide('github')}>
                <img src={github} width="20" height="20" alt="github" />
                <span> GitHub</span>
            </div>
        </div>
    </>
};

export default Home;