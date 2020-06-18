import { useState, useEffect } from 'react';
import { Input, Button } from 'semantic-ui-react';
import bg from 'public/images/bg.jpg';
import strings from 'strings/fa.json';
import constants from 'strings/constants.json';

export default function Home() {
  const [username, setUsername] = useState<String>('');
  const [password, setPassword] = useState<String>('');

  const [login, setLogin] = useState(false);
  const [loading, setLoading] = useState(true);

  const onLoginClicked = (): void => {
    if (login) {
      localStorage.removeItem(constants.TOKEN);
      setLogin(false);
    } else {
      localStorage.setItem(constants.TOKEN, 'LOGIN_TOKEN');
      setLogin(true);
    }
  };

  useEffect(() => {
    if (localStorage.getItem(constants.TOKEN) === 'LOGIN_TOKEN') setLogin(true);
    else setLogin(false);
    setLoading(false);
  }, []);
  const Login = () => {
    return (
      <section>
        <h1>{strings.WELCOME_TITLE}</h1>
        <Input
          value={username}
          onChange={(e) => setUsername(e.currentTarget.value)}
          className='input-username'
          icon={{ name: 'user', circular: true, link: true }}
          placeholder={strings.USERNAME_PLACEHOLDER}
        />
        <Input
          value={password}
          onChange={(e) => setPassword(e.currentTarget.value)}
          type='password'
          className='input-username'
          icon={{ name: 'key', circular: true, link: true }}
          placeholder={strings.PASSWORD_PLACEHOLDER}
        />
        <Button onClick={onLoginClicked} color='green'>
          {strings.LOGIN}
        </Button>
      </section>
    );
  };

  const Logout = () => {
    return (
      <section>
        <h1>{strings.WELCOME_TITLE}</h1>
        <h2>{username + ' ' + strings.WELCOME_MESSAGE}</h2>
        <Button onClick={onLoginClicked} color='red'>
          {strings.LOGOUT}
        </Button>
      </section>
    );
  };
  return (
    <div className='login-container'>
      {loading ? '' : login ? <Logout /> : <Login />}
      <img src={bg} alt={strings.APP_NAME} />
    </div>
  );
}
