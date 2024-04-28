import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Carousel.scss'; // Assurez-vous d'importer votre fichier SCSS

const HobbyCarousel = () => {
  const hobbies = [
    {
      icon: 'fa-solid fa-book fa-3x',
      title: 'Lecture',
      description:
        "La lecture m'aide à développer ma compréhension des autres, affûte mon esprit critique et stimule ma créativité. Elle est pour moi une source constante de détente et d'inspiration, et un moyen privilégié de continuer à apprendre et à grandir, tant sur le plan personnel que professionnel.",
      color: 'color1', // Classe CSS de couleur
    },
    {
      icon: 'fa-solid fa-gamepad fa-3x',
      title: 'Jeux Vidéo',
      description:
        "Le jeu vidéo développe ma capacité à résoudre des problèmes, améliore ma coordination et ma réactivité, tout en me permettant de me détendre et de m'évader du quotidien. C'est également une opportunité pour tisser des liens avec d'autres joueurs autour du globe, partageant des défis et des succès. Pour moi, jouer n'est pas seulement un loisir, c'est une passion qui nourrit mon esprit et élargit mes horizons.",
      color: 'color2',
    },
    {
      icon: 'fa-solid fa-film fa-3x',
      title: 'Cinéma',
      description:
        "Je suis passionné par le cinéma, une passion qui me transporte à travers différentes époques et cultures. Chaque film est une fenêtre ouverte sur un monde nouveau, offrant des perspectives uniques et des émotions variées. Le cinéma stimule mon imagination, aiguise ma compréhension des récits visuels et sonores, et enrichit ma sensibilité artistique.",
      color: 'color3',
    },
    {
      icon: 'fa-solid fa-music fa-3x',
      title: 'Musique',
      description:
        "Qu'il s'agisse de découvrir de nouveaux genres, d'écouter des classiques ou d'explorer les créations d'artistes émergents, chaque morceau apporte une nouvelle dimension à mon quotidien. La musique stimule ma créativité, éveille mes émotions et me permet de m'exprimer de manière unique. Elle est également un moyen de connexion universelle, me rapprochant des autres à travers des rythmes et des mélodies partagés.",
      color: 'color4',
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <Slider {...settings}>
      {hobbies.map((hobby, index) => (
        <div key={index}>
          <div className="hobbie-align">
            <div className={`hobbie-content second ${hobby.color}`}>
              <i className={hobby.icon}></i>
              <h2>{hobby.title}</h2>
              <p>{hobby.description}</p>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default HobbyCarousel;
