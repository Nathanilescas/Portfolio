class HeaderText extends React.Component {
    render() {
        const textStyle = {
            color: '#010101',
            fontFamily: '"Jazz LET", fantasy', // Change the font later
            fontSize: '1.5em',
            letterSpacing: '.1em',
            textAlign: 'center'
        };

        return(
            <div>
                <h1 style={textStyle}>Nathan's Portfolio</h1>
            </div>
        );
    }
}

const Header = <HeaderText />

   ReactDOM.render(Header, document.getElementById('Header-Text'));







