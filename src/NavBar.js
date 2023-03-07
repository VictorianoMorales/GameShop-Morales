import CartWidget from "./CartWidget";

function NavBar(){
    return(        
        <header className="header">
            <h2>
                GameShop
            </h2>
            <nav>
                <ul className="menu">
                    <li><button className="boton active">Todos</button></li>
                    <li><button className="boton">Nuevos Lanzamientos</button></li>
                    <li><button className="boton">Mas Populares</button></li>
                    <CartWidget/>
                </ul>
            </nav>
        </header>        
    )
};

export default NavBar;