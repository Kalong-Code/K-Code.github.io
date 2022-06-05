import React from 'react'
// import styled from 'styled-components';
import Typical from 'react-typical';


function Profile() {
    return (
        <div className='Profile-container'>
            <div className="profile-parent">
                <div className="profile-details">
                    <div className="colz">
                        <div className="colz-icon">

                        <a href="/" ><i className='fa fa-facebook-square'></i></a>
                        <a href="/" ><i className='fa fa-linkedin-square'></i></a>
                        <a href="/" ><i className='fa fa-instagram-square'></i></a>
                        <a href="/" ><i className='fa fa-youtube-square'></i></a>
                        <a href="/" ><i className='fa fa-twitter-square'></i></a>
                        <a href="/" ><i className='fa fa-google-plus-square'></i>
                        </a>
                        </div>
                    </div>
                    <div className="profile-details-name">
                        <span className="primary-text">
                            {""}
                            Hi, I'M <span className="highlighted-text">Boniface</span>
                        </span>
                    </div>
                    <div className="profile-details-role">
                        {""}
                        <h1>
                           {""}
                           <Typical
                           loop={Infinity}
                           steps={["Enthusiastic Data Analysit 👨‍💼🎓",
                           1080,
                           "Enthusiastic Data Scientist 🤓",
                           1080,
                           "Machine Learning Methods 💻",
                           1080,
                           ]}
                           />
                        </h1>
                        <span className="profile-role-tagline">
                        Passionate about data analysis and experiments,  with a solid background in data science and statistics, and using data insights to drive business \growth.
                        </span>
                    </div>
                    <div className="profile-option">
                        <button className='btn primary-btn'>
                            Hire Me{""}
                        </button>
                        <a href="/" download= "http://localhosts">
                            <button className="btn hightlighted-btn">Resume</button>
                        </a>
                    </div>
                </div>
                <div className="profile-picture">
                    <div className="profile-picture-background">

                    </div>
                </div>
            </div>

        </div>
        
    )
    
}

export default Profile;

