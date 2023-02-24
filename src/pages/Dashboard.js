import logo from '../logo.svg';
import LoginForm from '../components/LoginForm';
import {Link} from 'react-router-dom';
import CardModel from '../components/CardModel';

function Dashboard() {
    return (
            <div className="App">
                <header className="App-header">
                    <p>Welcome to the main page</p>
                    <CardModel></CardModel>
                    <Link to={'/user'}>
                        <button className={'button-3'}>User details</button>
                    </Link>
                </header>
            </div>
    );
}

export default Dashboard;
