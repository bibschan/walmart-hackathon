import './../../styles/app.css';

function SingleItem(props) {
    console.log(props)
    return (
        <div className="single-item">
            <div className="product-image">
                <img src={props.props.image} alt=""/>
            </div>
            <div className="product-description">
                <h2>{props.props.name}</h2>
                <p>{props.props.description}</p>
            </div>
            <div className="product-quantity">
                <input>{props.amount}</input>
            </div>
            <div className="product-price">
                <p>{props.props.price}</p>
            </div>
            <div className="product-action-icons">
                <img alt=""/>
                <img alt=""/>
            </div>

        </div>
    )
}

export default SingleItem;