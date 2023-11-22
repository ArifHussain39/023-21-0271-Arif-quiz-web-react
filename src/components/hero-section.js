export const  HeroSection = () => {
    return (
        <div style={heroStyle}>
            <h1>Welcome to Our Website</h1>
            <p>Your source for amazing content.</p>
            <a href="/learn-more" style={buttonStyle}>Learn More</a>
        </div>
    );
}

const heroStyle = {
    color: 'black',
    textAlign: 'center',
    padding: '100px 0',
    marginTop: '50px',
    marginBottom: '50px',
};

const buttonStyle = {
    display: 'inline-block',
    padding: '10px 20px',
    background: '#007bff',
    color: '#fff',
    textDecoration: 'none',
    borderRadius: '5px',
    fontSize: '18px',
    marginTop: '20px',
};
