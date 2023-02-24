/*
import {Component} from 'react';
import {useNavigate} from 'react-router';

class LoginClass extends Component {

    username;
    password;
    router;

    constructor(props) {
        super(props);
        this.state = {
            remember: false
        };
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const navigate = useNavigate();
        navigate('dashboard');
    }

    render() {
        return (
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Is going:
                        <input
                                name="isGoing"
                                type="text"
                                checked={this.state.username}
                                onChange={this.handleInputChange}/>
                    </label>
                    <br/>
                    <label>
                        Password:
                        <input
                                name="password"
                                type="password"
                                value={this.state.password}
                                onChange={this.handleInputChange}/>
                    </label>
                    <br/>
                    <label>
                        Remember me:
                        <input
                                name="RememberLogin"
                                type="checkbox"
                                checked={this.state.remember}
                                onChange={this.handleInputChange}/>
                    </label>
                    <br/>
                    <button type="submit">Login</button>
                </form>
        );
    }
}

export default LoginClass;
*/
