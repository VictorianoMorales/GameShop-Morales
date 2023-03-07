import CartWidget from "./CartWidget";

function NavBar(){
    return(        
        <header class="header">
            <h2>
                GameShop
            </h2>
            <nav>
                <ul class="menu">
                    <li><button class="boton active">Todos</button></li>
                    <li><button class="boton">Nuevos Lanzamientos</button></li>
                    <li><button class="boton">Mas Populares</button></li>
                    <CartWidget/>
                </ul>
            </nav>
        </header>        
    )
};

export default NavBar;