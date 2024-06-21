// route
import { useParams } from "react-router-dom"

import './css/productDetail.css'

import primula from "../resources/img/products/flor1.jpg"
import heartSvg from '../resources/icons/heart.svg'
import giraso from "../resources/img/products/flor2.jpg"

//redux 
import { useDispatch } from 'react-redux';
import { addToWishlist } from '../redux/actions';

export default function ProductDetail() {
    // 根据产品id，选择性渲染
    const { id } = useParams();

    // 根据 id 获取不同产品的数据
    function getProductDetails(id) {
        switch (id) {
            case 'primula':
                return {
                    id: 'primula',
                    name: 'Primrose',
                    image: '../resources/img/products/flor1.jpg',
                    price: 150,
                    description:
                        'Primrose description...',
                };
            case 'giraso':
                return {
                    id: 'giraso',
                    name: 'Sunflower',
                    image: '../resources/img/products/flor2.jpg',
                    price: 100,
                    description:
                        'Sunflower description...',
                };
            default:
                return null;
        }
    }

    // 获取产品信息
    const product = getProductDetails(id);

    // Redux
    const dispatch = useDispatch();
    //处理添加心愿单点击事件
    function handleAddToWishlist() {
        // 发送动作给 Redux，添加产品到心愿单
        dispatch(addToWishlist(product));
        alert('Added to wishlist!');
    }
    switch (id) {
        case 'primula':
            return (
                <main>
                    <div className="ficha-flor">
                        <div className="detalles">
                            <div className="foto-flor">
                                <img src={primula} />
                            </div>
                            <div className="compra-flor">
                                <h2>Primrose(胭脂花)</h2>
                                {/* <p>Price: $150.00</p> */}
                                {/* <div className="cantidad">
                                    <label>Quantity:</label>
                                    <input type="number" />
                                </div>
                                <div className="ubicacion">
                                    <label>Location:</label>
                                    <select>
                                        <option>JiLin</option>
                                        <option>NeiMeng</option>
                                        <option>HeBei</option>
                                        <option>ShanXi</option>
                                        <option>ShanXi</option>
                                    </select>
                                </div> */}
                                <div className="botones">
                                    {/* <button>Confirm</button> */}
                                    <div className="wishlist-button" onClick={handleAddToWishlist}><img src={heartSvg} />Add to wishList</div>
                                </div>
                            </div>
                        </div>
                        <div className="descripcion">
                            <h3>Description:</h3><br />
                            <p>
                                &nbsp;&nbsp;It has abundant foliage, with oblong, toothed leaves with a rough texture that are yellowish-green and somewhat
                                lighter on the underside. Some species can reach up to 40 cm in height. Its five-petaled flowers
                                They are born in the center formed by the foliage and have different sizes and shades: pink, purplish, red or red.
                                yellow, with a central speck of different hues in some of the varieties. From them comes a soft
                                aroma. They are obtained from seeds that need to be planted in autumn or spring, flowering in winter or winter.
                                summer, respectively.
                            </p>
                            <p>
                                &nbsp;&nbsp; It requires well-fertilized soils, prepared for flowering plants, but without excesses. Must have good drainage
                                of water, as excess water causes its leaves to take on a yellowish color. The sun in excess, above
                                Everything during the summer harms it, so it must be placed in the semi-shade, this also makes it
                                A good plant for bright interiors. It is resistant to low temperatures but not to harsh ones
                                Frost.
                            </p>
                        </div>
                    </div>
                </main>
            );

        case 'giraso':
            return (
                <main>
                    <div className="ficha-flor">
                        <div className="detalles">
                            <div className="foto-flor">
                                <img src={giraso} />
                            </div>
                            <div className="compra-flor">
                                <h2>Sunflower</h2>
                                {/* <p>Price: $100.00</p>
                                <div className="cantidad">
                                    <label>Quantity:</label>
                                    <input type="number" />
                                </div>
                                <div className="ubicacion">
                                    <label>Location</label>
                                    <select>
                                        <option>DongBei</option>
                                        <option>XinJiang</option>
                                        <option>NeiMeng</option>
                                    </select>
                                </div> */}
                                <div className="botones">
                                    {/* <button>Confirm</button> */}
                                    <div className="wishlist-button" onClick={handleAddToWishlist}><img src={heartSvg} />Add to wishList</div>
                                </div>
                            </div>
                        </div>
                        <div className="descripcion">
                            <h3>Description:</h3><br />
                            <p>
                                向日葵是一年生植物(顾名思义:annuus)，可达3米高。茎通常直立且无柄。大多数叶茎，互生，叶柄，心形基部和锯齿状边缘。下脸通常或多或少呈肿块，有时呈腺状，上脸无毛。总苞为半球形或扁平，长15-40毫米，可达20厘米以上。被称为丝状苞片的包膜苞片数量为20-30个，甚至超过100个，椭圆形到披针形——在先端急剧缩小——纵向神经，边缘通常是钝的或多毛的，就像它们的外表面一样，很少无毛。有三齿厘米鳞片的容器，有较大的中齿和多毛的尖端。叶数15-30个，最多100个，颜色从黄色到橙色到红色，长2.5
                                -5厘米;小花，从150到1000，与红棕色的雄蕊颜色相同。果实椭圆形瘦果，基部稍短，3-15毫米长，无毛或几乎无毛，有非常细的垂直沟槽，颜色深，通常几乎为黑色，但也可能是白色、红色、蜂蜜色或斑纹或有较轻的纵向条纹。vilano由两个2-
                                3.5毫米的披针形鳞片组成，并伴有或不伴有多达四个0.5 -1毫米的钝鳞片，所有鳞片都是早期脱落的。
                            </p>
                        </div>
                    </div>
                </main>
            );

    }
}