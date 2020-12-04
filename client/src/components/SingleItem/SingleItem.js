import './../../styles/app.css';

function SingleItem(props) {
    return (
        <div className="single-item">
            <div className="product-image">
                <img src={props.image} alt=""/>
            </div>
            <div className="product-description">
                <h2>{props.name}</h2>
                <p>{props.description}</p>
            </div>
            <div className="product-quantity">
                <p>{props.amount}</p>
            </div>
            <div className="product-price">
                <p>{props.price}</p>
            </div>
            <div className="product-action-icons">
                <img alt=""/>
                <img alt=""/>
            </div>

        </div>
    )
}

export default SingleItem;