import "../App.css";


function Header ({componentText,componentTheme}) {
    return(
        <header className="header-container">
        <div className="header-content">
          <h2 className="title">
            <a href="/">{componentText}</a>
          </h2>
          <p className="theme-changer">
            <i className="fa-regular fa-moon" />
            &nbsp;&nbsp;{componentTheme}
          </p>
        </div>
      </header>
    )
}

export default Header