import React, { PureComponent } from 'react';

class  Navbar extends PureComponent {
    render() {
        return (
            <nav>
                <i className="navbar-logo fa-solid fa-bolt-lightning"></i>
                <span className="navbar-title">Habit Tracker</span>
                <span className="navbar-count">{this.props.totalCount}</span>
            </nav>
        );
    }
}

export default Navbar;