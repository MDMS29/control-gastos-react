import '../assets/navbar.css'

const NavBar = () => {
    return (
        <nav role="navigation">
            <div id="menuToggle">
                <input type="checkbox" />
                <span></span>
                <span></span>
                <span></span>
                {/* <ul id="menu">
                    <span href="#"><li>Home</li></span>
                    <span href="#"><li>About</li></span>
                    <span href="#"><li>Info</li></span>
                    <span href="#"><li>Contact</li></span>
                    <span href="https://erikterwan.com/" target="_blank"><li>Show me more</li></span>
                </ul> */}
            </div>
        </nav>
    )
}

export default NavBar