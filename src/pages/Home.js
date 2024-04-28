import React from 'react';
import imgPresentation from '../assets/images/img-presentation.webp';
import './Stylepages/Home.scss';
import SkillCard from '../components/SkillCard/SkillCard';

function Home() {
  return (
    <div>
      <title>Portfolio de PAB || Intégrateur Web</title>
      <meta
        name="description"
        content="Découvrez le portfolio de PAB, développeur Front-End situé en Ardèche. Explorez ses projets web et plongez dans son parcours professionnel."
      />
      <section className="section-presentation">
        <div className="presentation-container">
          <div className='titre'>
            <div className="presentation">
                    <h1>Curriculum Vitae</h1>
                    <p>Vous trouverez ici des informations typiques telles que mes formations ou mes compétences.</p>
                    <p>En tant que développeur web, je suis passionné par la création de solutions numériques innovantes. Ma capacité à transformer des idées en produits concrets est soutenue par une expertise technique solide et une curiosité insatiable pour les dernières technologies.
                    </p>
                    <p>Toujours à l'affût des dernières tendances et pratiques de développement, je m'efforce d'améliorer continuellement mes compétences pour offrir des produits de pointe. Ma passion pour le code et mon engagement envers l'excellence garantissent des solutions fiables et esthétiques, répondant aux exigences les plus élevées. </p> 
                </div>
          </div>
                    <a href="https://www.linkedin.com/in/pa-barnouin" aria-label="Lien Linkedin" ><div className="button-linkedin"> Mon compte Linkedin </div></a>
        </div>
        <img src={imgPresentation} alt="bureau de développeur" className="image-presentation" />
      </section>
      <section className="skills-soft">
                    <h2>Compétences</h2>
                    <div className="skills-soft-container">
                        <SkillCard src="html.png" alt="Logo du langage Html" title="HTML" />
                        <SkillCard src="css-3.png" alt="Logo du langage CSS" title="CSS" />
                        <SkillCard src="sass.png" alt="Logo du langage SASS" title="Sass" />
                        <SkillCard src="javascript.png" alt="Logo du langage JavaScript" title="JavaScript" />
                        <SkillCard src="react.png" alt="Logo du langage React" title="React" />
                    </div>
                </section>
                <section className="skills-soft">
                    <h2>Mes outils</h2>
                    <div className="skills-soft-container">
                        <SkillCard src="figma.png" alt="Logo du logiciel Figma" title="Figma" />
                        <SkillCard src="vs-code.png" alt="Logo du logiciel VS Code" title="VS-code" />
                    </div>
                </section>
    </div>
  );
}

export default Home;
