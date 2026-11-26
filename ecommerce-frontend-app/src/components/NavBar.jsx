import "../style/navBarStylings.css"
let NavBar = function () {
    return (
        <header>
            <div>
                <img src="https://logos-world.net/wp-content/uploads/2022/04/Alfamart-Symbol.png"/>
            </div>
            <nav>
                <ol>
                    <li>Home</li>
                    <li>Login</li>
                    <li>Register</li>
                    <li>About</li>
                    <li>Contact</li>
                </ol>
            </nav>
        </header>
    )
}
export default NavBar;