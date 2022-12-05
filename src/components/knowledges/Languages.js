import React, { Component } from 'react';
import ProgressBar from './ProgressBar';

class Languages extends Component {
    state = {
        languages:[
            {id: 2, value: "Css", xp:1.4},
            {id: 1, value: "Javascript", xp:1},
            {id: 3, value: "React", xp:0.6},
        ],
        frameworks: [
            {id: 2, value: "sass", xp:0.8},
            {id: 1, value: "React", xp:0.6},
        ] 
    }

    render(){
        let {languages, frameworks} = this.state
        return (
            <div className="languagesFrameworks">
                <ProgressBar languages = {languages} className="languagesDisplay" title="languages"/>
                <ProgressBar languages = {frameworks} title="frameworks & bibliothèques" className="frameworksDisplay"/>
            </div>
        );

    }
};

export default Languages;