export default function Header() {
    return (
        <header style={headerStyle}>
            <h1>My Website</h1>
            <nav>
                <ul style={navStyle}>
                    <li><a href="/" style={linkStyle}>Home</a></li>
                    <li><a href="/about" style={linkStyle}>About</a></li>
                    <li><a href="/contact" style={linkStyle}>Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}

const headerStyle = {
    background: '#333',
    color: '#fff',
    padding: '10px',
    textAlign: 'center',
};

const navStyle = {
    listStyle: 'none',
    display: 'flex',
    justifyContent: 'center',
};

const linkStyle = {
    color: '#fff',
    textDecoration: 'none',
    margin: '0 10px',
    padding: '5px 10px', // Add padding to make it look like a button
    borderRadius: '5px',   // Add border radius for rounded corners
    backgroundColor: '#007bff', // Background color for the button
    transition: 'background-color 0.3s', // Add a smooth transition for hover effect

    // Hover effect
    ':hover': {
        backgroundColor: '#0056b3',
    },
};
