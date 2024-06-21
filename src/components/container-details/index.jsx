import './index.css'

import flower from "../../resources/img/flores-detalle.jpg"
import pot from "../../resources/img/maceta-detalle.jpg"

import { Link } from 'react-router-dom'

export default function Container_details() {
    return (
        <div className="container-details">
            <div className="description description-flowers">
                <h3>Flower</h3>
                <p>
                    We currently have eight different types of flowers but we will soon have many more. You can also
                    choose between different colors.
                </p>
            </div>
            <div className="photo-flowers">
                {/* <!-- TODO:此处要使用路由实现 --> */}
                <Link to="/catalog"><img src={flower} title="Flowers" /></Link>
            </div>
            <div className="description description-pots">
                <h3>Pots</h3><br />
                <p>
                    In order for your flowers to shine, they need a good pot. We currently have four different
                    models, each with different material. Check out the models available in the catalog.
                </p>
            </div>
            <div className="photo-pots">
                {/* <!-- TODO:此处要使用路由实现 --> */}
                <Link to="/catalog"><img src={pot} title="Pots" /></Link>
            </div>
        </div>
    )
}