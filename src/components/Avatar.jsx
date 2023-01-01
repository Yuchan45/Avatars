//import React, {Component} from 'react';

function Avatar({ name, isBot, isFollowing, onToggleFollow }) {
    const srcImgRobot = "https://avatars.dicebear.com/api/bottts/asdfgdfs.svg";
    const srcImgHuman = "https://avatars.dicebear.com/api/adventurer/asddsf.svg";

    function handleClick(e) {
        //alert("Te sigue?  " + (isFollowing ? "Si" : "No"));
        onToggleFollow();

    }


    return(
        <>  
            <div className="avatar-container" >
                <img src= {isBot ? srcImgRobot : srcImgHuman} alt="" />
                <p className="avatar-name">{ name } <span onClick={handleClick}>{isFollowing ? '✔' : '❌'}</span></p>
            </div>
        </>
    );

};

export default Avatar;