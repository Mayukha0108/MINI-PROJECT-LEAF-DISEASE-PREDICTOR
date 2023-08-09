import React from "react";
import Popup from "./popup";
import './about.css'


const About = () => {

    return (
        <div className="main">
          <ProfileCard
            name="K. Vineeth"
            role="Full Stack Developer"
            imageUrl="https://media.licdn.com/dms/image/C4D03AQHBOeEIw9aROQ/profile-displayphoto-shrink_800_800/0/1662521467686?e=2147483647&v=beta&t=5kEogrHxjVl8fgJCsRsHzOECgvp9YFGExBOCe_DxWyA"
            socialLinks={[
              { name: 'Facebook', iconClass: 'fab fa-facebook' },
              { name: 'Instagram', iconClass: 'fab fa-instagram' },
              { name: 'Twitter', iconClass: 'fab fa-twitter' },
            ]}
          />
          <ProfileCard
            name="E. Mayukha"
            role="ML Engineer"
            imageUrl="https://media.licdn.com/dms/image/C5603AQEcsGOb-z0fqw/profile-displayphoto-shrink_800_800/0/1636277855544?e=1697068800&v=beta&t=6zvAF20o1dkMTsRic4X8dmVFpMgqfFEBIS3EHYjq5p0"
            socialLinks={[
              { name: 'Facebook', iconClass: 'fab fa-facebook' },
              { name: 'Instagram', iconClass: 'fab fa-instagram' },
              { name: 'Twitter', iconClass: 'fab fa-twitter' },
            ]}
          />
          <ProfileCard
            name="I. Bhanu Teja"
            role="Front End Developer"
            imageUrl="https://media.licdn.com/dms/image/C4E03AQE5z3BZuUnvAw/profile-displayphoto-shrink_800_800/0/1626455811918?e=1697068800&v=beta&t=j-m4KYe-Xd_mJw6EKutihvU2BBCUv90FOV1lxgriXr4"
            socialLinks={[
              { name: 'Facebook', iconClass: 'fab fa-facebook' },
              { name: 'Instagram', iconClass: 'fab fa-instagram' },
              { name: 'Twitter', iconClass: 'fab fa-twitter' },
            ]}
          />
        </div>
      );
    };
    
    const ProfileCard = ({ name, role, imageUrl, socialLinks }) => {
      return (
        <div className="profile-card">
          <div className="img">
            <img src={imageUrl} alt={name} />
          </div>
          <div className="caption">
            <h3>{name}</h3>
            <p>{role}</p>
            <div className="social-links">
              {socialLinks.map((link, index) => (
                <a key={index} href="#">
                  <i className={link.iconClass}></i>
                </a>
              ))}
            </div>
          </div>
        </div>
      );
};

export default About;
