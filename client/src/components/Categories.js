
import category1 from './../assets/Item_Card.png';
import category2 from './../assets/Item_Card (1).png';
import category3 from './../assets/Item_Card (2).png';
import category4 from './../assets/Item_Card (3).png';
import category5 from './../assets/Item_Card (4).png';
import category6 from './../assets/Item_Card (5).png';
import './../styles/app.css';

function Categories() {

    return (
        <div className="categories">
            <div className="categories--content">
                <img src={category1} alt="" className="category"/>
                <img src={category2} alt="" className="category"/>
                <img src={category3} alt="" className="category"/>
                <img src={category4} alt="" className="category"/>
                <img src={category5} alt="" className="category"/>
                <img src={category6} alt="" className="category"/>
            </div>
        </div>
    )
}

export default Categories;