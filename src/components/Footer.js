const Footer = () => {
    return(
        <>
            <div className="container">
                <footer className="py-3 my-4">
                    <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Home</a></li>
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">AboutUs</a></li>
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Vehicels</a></li>
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Services</a></li>
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Contact Us</a></li>
                    </ul>
                    <div data-testid="footer-content">
                        <p className="text-center text-body-secondary">© 2024 ABC Automobiles</p>
                    </div>
                </footer>
            </div>
        </>

    )
}


export default Footer;