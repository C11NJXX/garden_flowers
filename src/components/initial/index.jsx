import './index.css'
import mainFlower from "../../resources/img/portada.svg"
export default function Initial() {
    return (
        <div className="initial">
            <div className="description-initial">
                <div>
                    <h2>Welcome to Gardens & FLowers!</h2><br />
                    <p>
                        On this page <br />you can find everything you need to have the garden of your dreams.
                    </p>
                </div>
            </div>
            <div className="img-initial">
                <img src= {mainFlower}/>
            </div>
        </div>
    )
}