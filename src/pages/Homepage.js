import logo from '../logo.svg';
import LoginForm from '../components/LoginForm';
import LoginClass from '../components/LoginClass';

function Homepage() {
    return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        Welcome to PVA bank
                    </p>
                    <LoginForm/>
                </header>
            </div>
    );
}

export default Homepage;
