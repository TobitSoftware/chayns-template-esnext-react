import React from 'react';

const HEADLINE = "chayns user selector",
    DESCRIPTION = "This tapp lets chayns® Managers switch to an 'admin mode' which displays secured content and enables to select users via the chayns® person finder. " +
        "Selected users will be added to a list that can be seen in both admin and user modes." +
        "This is an example of a ModeSwitch implementation and shows you how to secure content by UAC groups.";

const Intro = () => {
    return (
        <div className="tapp__intro">
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