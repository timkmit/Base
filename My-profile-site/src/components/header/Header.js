import "./style.css"

const Header = () => {
    return ( 
        <header className="header">
          <div className="header__wrapper">
              <h1 className="header__title">
                  <strong>Hi, my name is <em>Timur</em></strong><br />
                  a frontend developer
              </h1>
              <div className="header__text">
                  <p>with passion for learning and creating.</p>
              </div>
              <a href="https://vk.com/timkmit" className="btn">Write to me</a>
          </div>
      </header>
     );
}
 
export default Header;