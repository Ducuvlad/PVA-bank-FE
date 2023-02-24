import {useNavigate} from 'react-router';

function LoginForm() {

    var username;
    var password;
    var remember = true;
    const navigate = useNavigate();
    function handleSubmit() {
        navigate('/dashboard')
    }

    return (
            <form onSubmit={handleSubmit}>
                <label>
                    User name:
                    <input
                            name="isGoing"
                            type="text"
                            checked={username}
                    />
                </label>
                <br/>
                <label>
                    Password:
                    <input
                            name="password"
                            type="password"
                            value={password}
                    />
                </label>
                <br/>
                <label>
                    Remember me:
                    <input
                            name="RememberLogin"
                            type="checkbox"
                            checked={remember}/>
                </label>
                <br/>
                <button className={'button-3'} type="submit">Login</button>
            </form>
    );
}

export default LoginForm;
