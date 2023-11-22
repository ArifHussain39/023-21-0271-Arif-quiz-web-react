
import logo from '../assets/imgs/ibalogo.png'  // Import your logo path here

function Footer() {
    return (
        <footer className="bg-dark text-light py-4 mt-5">
            <div className="container">
                <div className="row text-center align-items-center d-flex justify-content-center">
                    <img src={logo} alt="Logo" className="img-fluid" style={{ maxWidth: '100px' }} />
                    <p>&copy; 2023 Your Company. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
