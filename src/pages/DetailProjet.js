import React from 'react';
import SkillCard  from '../components/SkillCard/SkillCard';
import projet from '../Projets.json';
import { useParams } from "react-router-dom";
import './Stylepages/DetailProjet.scss'

function DetailProjet() {

    const params = useParams();
    //Constante qui contient le tableau strictement égal à l'id dans l'url
    const project = projet.find((element) => element.id === params.idprojet)

    if (!project) {
        // Afficher un message ou rediriger vers une page d'erreur
        return <div>Projet introuvable</div>;
    }

    return (
        <div className='project'>
            
                <title>{project.title} </title>
                <meta name="description"
                    content="`Description d'un projet professionnel web responsive"></meta>
            
            <section className='section-description'>
                <div className='mission'>
                    <h1> {project.title} </h1>
                    <p className='date'>{project.date} </p>
                    <p> {project.description} </p>
                    <h2>Compétences et outils utilisés</h2>
                    <div className='tags-container'>
                        {project.tags.map((tag, index) => <SkillCard key={index} src={tag.img_src} alt={tag.img_alt} title={tag.title} />)}
                    </div>

                    <h2>En savoir plus </h2>

                    <div className='link-projets'>
                        <a href={project.linkGithub} className='icon-projet'>
                            <img src="/assets/images/github-link.png" alt="icon github" className='icon' />
                            <span>Source</span>
                        </a>
                        {project.linkPage && ( 
                            <a href={project.linkPage} className='icon-projet'>
                                <img src="/assets/images/web.png" alt="icon site web" className='icon' />
                                <span>Site</span>
                            </a>)}
                    </div>
                </div>
                
            </section>
            <div className='cover-container'>
                    <img src={project.imgDetail} alt={project.altimgDetail} className='cover' />
                </div>
        </div>
    )

}
export default DetailProjet;