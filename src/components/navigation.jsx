export const Nav = (props) => {
    return (
        <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
            <div className="container">
                <div className="navbar-header">
                    <button type="button"
                        className="navbar-toggle collapsed"
                        data-toggle="collapse"
                        data-target="#bs-navbar"
                    >
                        {''}
                        <span className="sr-only">'Abrir Menu'</span>
                        <span className="icon-bar"></span>{''}
                        <span className="icon-bar"></span>{''}
                        <span className="icon-bar"></span>{''}
                        <span className="icon-bar"></span>{''}
                    </button>
                    <a href="#page-top" className="navbar-brand page-scroll">
                        Koit Network
                    </a>
                </div>
                <div className="collapse navbar-collapse" id="bs-navbar">
                    <ul className="nav navbar-nav navbar-right">
                        <li>
                            <a href="#a" className="page-scroll">1</a>
                        </li>
                        <li>
                            <a href="#a" className="page-scroll">2</a>
                        </li>
                        <li>
                            <a href="#a" className="page-scroll">3</a>
                        </li>
                        <li>
                            <a href="#a" className="page-scroll">4</a>
                        </li>
                        <li>
                            <a href="#a" className="page-scroll">5</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}