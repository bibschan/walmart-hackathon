import menuIcon from './../assets/Menu.png';
import notificationIcon from './../assets/Bell.png';
import './../styles/app.css';


function Header() {
    return (
        <div className="header">
            <div className="header-flex">
                <h1>Hi Tammy!</h1>
                <div className="icons">
                    <img src={notificationIcon} alt="" className="icon"/>
                    <img src={menuIcon}  alt="" className="icon"/>
                </div>
            </div>
        </div>
    )
}

export default Header;