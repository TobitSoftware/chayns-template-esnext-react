import React from 'react';

const HEADLINE = 'React ToDo-Tapp',
    DESCRIPTION = 'This Tapp was build using React and webpack v2.';

const Intro = () => {
    return (
        <div className="tapp_intro">
            <h1 className="headline">
                {HEADLINE}
            </h1>
            <p>
                {DESCRIPTION}
            </p>
        </div>
    );
};

export default Intro;