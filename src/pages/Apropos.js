import './Stylepages/Apropos.scss'

function Apropos() {
    return (
        <div className="apropos-container">
            
            <section className="histoire">
                <h1>À propos </h1>
                <p>En 2023, j'ai entrepris une reconversion professionnelle pour devenir developpeur,
                    passionnée par l'informatique. Au cours de cette période j'ai exploré les bases du web et ce fut une expérience captivante.
                </p>
                <p>Je suis actuellement en plein parcours pour devenir intégrateur web, un objectif qui nécessite une formation continue dans une variété de technologies web. En approfondissant mes compétences en front-end. Je m'assure de maîtriser des langages tels que JavaScript, sass, et des frameworks comme React.  
                </p>
                <p>Je compte me former pour devenir développeur full-stack. Cela implique d'approfondir mes connaissances à la fois en front-end et en back-end, en me familiarisant avec des langages tels que JavaScript, Python, ainsi qu'avec des frameworks comme React et Node.js. Cette formation complète me permettra de gérer l'intégralité du développement d'applications web, de l'interface utilisateur jusqu'aux interactions avec la base de données.   </p>
            </section>
            <section className="objectifs">
                <h2>Mes objectifs</h2>
                <div className="objectif-content">
                <i class="fa-solid fa-leaf fa-2x"></i>
                    <h3>Green code</h3>

                    <p>Apprendre et intégrer des pratiques de green code dans mes projets web afin de réduire l'empreinte écologique des applications et promouvoir
                        une approche durable du numérique.
                    </p>
                </div>
                <div className="objectif-content">
                <i class="fa-solid fa-wand-magic-sparkles fa-2x"></i>
                    <h3>UX Design</h3>
                    <p>S'efforcer de créer des interfaces utilisateur qui ne sont pas seulement fonctionnelles mais aussi attrayantes et intuitives. Cela implique de comprendre les principes de design.</p>
                </div>
                <div className="objectif-content">
                <i class="fa-solid fa-graduation-cap fa-2x"></i>
                    <h3>Continuer d'apprendre</h3>
                    <p>En tant que développeur web, il est crucial de rester informé des évolutions technologiques et de continuellement affiner ses compétences. Se tenir à jour à travers des projets.</p>
                </div>
            </section>
            <section className="hobbies">
               

                <div className="hobbie-content first">
                    <h2>Mes Hobbies</h2>
                    <img src="/portfolio/assets/images/hardware.webp" alt="composants d'ordinateurs" />
                    <h2>Le Hardware </h2>
                    <p>Je me passionne pour le bricolage électronique, un hobby qui marie créativité et technologie. En tant que développeur web, j’ai trouvé que diversifier mes compétences avec le hardware enrichit considérablement mon profil technique. Je travaille avec des microcontrôleurs comme Arduino ou Raspberry Pi pour créer des projets variés, allant de systèmes domotiques intelligents à des robots personnalisés.  </p>
                </div>
               <div className='hobbie-align'>
                <div className="hobbie-content second color1">
                <i class="fa-solid fa-book fa-3x"></i>
                    <h2>Lecture</h2>
                    <p>La lecture m'aide à développer ma compréhension des autres, affûte mon esprit critique et stimule ma créativité. Elle est pour moi une source constante de détente et d'inspiration, et un moyen privilégié de continuer à apprendre et à grandir, tant sur le plan personnel que professionnel.</p>
                </div>

                <div className="hobbie-content second color2">
                <i class="fa-solid fa-gamepad fa-3x"></i>
                    <h2>Jeux Vidéo</h2>
                    <p> Le jeu vidéo développe ma capacité à résoudre des problèmes, améliore ma coordination et ma réactivité, tout en me permettant de me détendre et de m'évader du quotidien. C'est également une opportunité pour tisser des liens avec d'autres joueurs autour du globe, partageant des défis et des succès. Pour moi, jouer n'est pas seulement un loisir, c'est une passion qui nourrit mon esprit et élargit mes horizons.</p>
                </div>
                <div className="hobbie-content second color3">
                <i class="fa-solid fa-film fa-3x"></i>
                    <h2>Cinéma</h2>
                    <p>Je suis passionné par le cinéma, une passion qui me transporte à travers différentes époques et cultures. Chaque film est une fenêtre ouverte sur un monde nouveau, offrant des perspectives uniques et des émotions variées. Le cinéma stimule mon imagination, aiguise ma compréhension des récits visuels et sonores, et enrichit ma sensibilité artistique. </p>
                </div>

                <div className="hobbie-content second color4">
                <i class="fa-solid fa-music fa-3x"></i>
                    <h2>Musique </h2>
                    <p>Qu'il s'agisse de découvrir de nouveaux genres, d'écouter des classiques ou d'explorer les créations d'artistes émergents, chaque morceau apporte une nouvelle dimension à mon quotidien. La musique stimule ma créativité, éveille mes émotions et me permet de m'exprimer de manière unique. Elle est également un moyen de connexion universelle, me rapprochant des autres à travers des rythmes et des mélodies partagés. 
                    </p>
                </div>
               </div> 
            </section>
        </div>
    )
}
export default Apropos;