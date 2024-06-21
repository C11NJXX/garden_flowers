import './index.css'
// 图片url
import flower from "../../resources/img/flores-detalle.jpg"
import pot from "../../resources/img/maceta-detalle.jpg"

import { Link } from 'react-router-dom'

export default function Container_details() {
    return (
        <div className="container-details">
            <div className="description description-flowers">
                <h3>Flower</h3>
                <p>
                    We currently have TWO different types of flowers but we will soon have many more. 
                </p>
            </div>
            <div className="photo-flowers">
                {/* <!-- 此处使用路由实现 --> */}
                <Link to="/catalog"><img src={flower} title="Flowers" /></Link>
            </div>
            <div className="description description-pots">
                <h3>Pots</h3><br />
                <p>
                    In order for your flowers to shine, they need a good pot.We will soon update some beautiful pots for you~
                </p>
            </div>
            <div className="photo-pots">
                {/* <!-- 此处使用路由实现 --> */}
                <Link to="/catalog"><img src={pot} title="Pots" /></Link>
            </div>
        </div>
    )
}