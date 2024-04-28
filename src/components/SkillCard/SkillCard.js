import "./SkillCard.scss";

function SkillCard(props) {
    const file_url = '/portfolio/assets/images/' + props.src;

    return (
        <div className="skills-soft-content ">
            <div className={`skills-soft-logo ${props.title.toLowerCase()}`}>
                <img src={file_url} alt={props.alt} />
            </div>
            <h3>
                {props.title}
            </h3>
        </div>
    )
}
export default SkillCard;