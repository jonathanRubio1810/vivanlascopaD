import React from "react";
import Github from "../../assets/images/socials/face.png";
import Linkedin from "../../assets/images/socials/twit.png";
import Website from "../../assets/images/socials/insta.png";

const socials = [
  {
    id: 1,
    href: "https://github.com/catherineisonline/pizza-time-with-react",
    img: Github,
    name: Github
  },
  {
    id: 2,
    href: "https://www.linkedin.com/in/catherinemitagvaria/",
    img: Linkedin,
    name: Linkedin
  },
  {
    id: 3,
    href: "https://ekaterine-mitagvaria.vercel.app/",
    img: Website,
    name: Website
  }
];

export default class FooterSocials extends React.Component {
  render() {
    return (
      <ul className="flex list-none p-0 space-x-4">
        {socials.map(social => (
          <li key={social.id} className="flex items-center">
            <a
              href={social.href}
              target="_blank"
              rel="noreferrer"
              aria-label={social.name}
              className="flex items-center"
            >
              <img
                src={social.img}
                alt={social.name}
                className="w-8 h-8 object-contain" 
              />
            </a>
          </li>
        ))}
      </ul>
    );
  }
}
