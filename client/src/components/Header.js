import menuIcon from './../assets/Menu.png';
import notificationIcon from './../assets/Bell.png';
import './../styles/app.css';
import searchInput from './../assets/Search.png';
import banner from './../assets/Banner.png';
import yourFavoritesHeader from './../assets/Title.png';
import orderWillArrive from './../assets/order-arrival-date.png';

function Header(props) {
    const redirect = () => {
        window.location.href = '/cart'
    }
    return (
        <div className="header">
            <div className="header-flex">
                <h2 className="username">Hi Tammy!</h2>
                <div className="icons">
                    <img src={notificationIcon} alt="" className="icon"/>
                    <img src={menuIcon}  alt="" className="icon"/>
                </div>
            </div>
            <div categories--header>
                <img src={yourFavoritesHeader} alt="" className="favoritesHeader"/>
                <img src={searchInput} alt="" className="searchInput"/>
            </div>
            {}
            <img src={banner} onClick = {redirect}alt="" className="banner"/>
        </div>
    )
}

export default Header;