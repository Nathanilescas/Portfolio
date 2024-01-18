class HeaderText extends React.Component {
    render() {
        const textStyle = {
            color: '#010101',
            fontFamily: 'Arial, sans-serif',
            fontSize: '1.5em',
            fontWeight: "900",
            letterSpacing: '.1em',
            textAlign: 'center'
        };
        const pStyle = {
            fontFamily: 'Brush Script MT',
            fontSize: '1.5em'
        }

        return(
            <div>
                <h1 style={textStyle}>Nathan Ilescas's</h1>
                <br/>
                <h1 style={pStyle}>Portfolio</h1>
            </div>
        );
    }
}

const Header = <HeaderText />

   ReactDOM.render(Header, document.getElementById('Header-Text'));







