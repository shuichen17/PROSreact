import React from 'react';
import LanguageList from './LanguageList.jsx';
class Language extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayMenu: false,
            
            select: [
                {
                    id: 0,
                    title: 'English',
                    greeting: 'Welcome'
                },
                {
                    id: 1,
                    title: 'Japanese',
                    greeting: 'ようこそ'
                },
                {
                    id: 2,
                    title: 'Franch',
                    greeting: 'Bienvenue'
                },
                {
                    id: 3,
                    title: 'Hindi',
                    greeting: 'स्वागत हे'
                },
                {
                    id: 4,
                    title: 'German',
                    greeting: 'Herzlich willkommen'
                }
            ]
        };
        this.showDropdownMenu = this.showDropdownMenu.bind(this);
        this.hideDropdownMenu = this.hideDropdownMenu.bind(this);
    }
    showDropdownMenu(event) {
        event.preventDefault();
        this.props.action();
        this.setState({ displayMenu: true }, () => {
            document.addEventListener('click', this.hideDropdownMenu);
        });
    }
    hideDropdownMenu() {
        this.setState({ displayMenu: false }, () => {
            document.removeEventListener('click', this.hideDropdownMenu);
        })
    }
    render() {
        return (
            <div className="dropdown" style={{ background: 'red', width: '200px' }}>
                <div className="button" onClick={this.showDropdownMenu}> Language </div>
                {this.state.displayMenu ? (
                    <ul style={{ background: 'white' }}>
                        {this.state.select.map((element) => <LanguageList key={element.id} greeting={element.greeting}
                            title={element.title}
                            selectLanguage={this.props.selectLanguage} />)}
                    </ul>
                ) : (null)}
            </div>
        )
    }
};
export default Language;