import { Link } from 'react-router-dom'
import './Stylepages/404.scss'

function Error404() {
    return (
        <div className="section-erreur">

            <div className="oups">
                <h1>OUPS !</h1>
                <p>Revenir à la page <Link to="/"> Home</Link> </p>
            </div>
            <img src="assets/images/404.webp" alt="Petit robot" />
        </div>
    )
}
export default Error404;