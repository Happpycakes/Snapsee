import React from 'react';

const MainPage = (props) => {
    console.log(props.data);
    return (
        <div className="text-center">
            <h2 className="display-4">Welcome to Snapsee {props.data.data.me.displayName}</h2>
            <img src={props.data.data.me.bitmoji.avatar} alt="bitmoji of user"/>
        </div>
    );
};

export default MainPage;