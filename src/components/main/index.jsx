import './index.css'
import Container_details from '../container-details'
export default function Main() {
    return (
        <main>
            <h2 className="title-main">Take a look at what we have for you</h2>
        <Container_details/>
            {/* <!-- TODO:此处记得修改网址 --> */}
            <p className="url-site">Puede consultar esta página en la url <a
                href="https://leningael.github.io/flowershop/">https://leningael.github.io/flowershop</a></p>
        </main>
    )
}