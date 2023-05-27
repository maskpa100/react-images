import s from './Login.module.css';

const Login = () => {
    return (
    <div className={s.authorization}>
        <div className={s.background}>
            <div className={s.item}>
                <h2 className={s.title}>Авторизация</h2>
                <form method="POST" action="/login">
                    <div className={s.text}>Ваш логин</div>
                    <input type="text" name="login" required="required"/>
                    <div className={s.text}>Ваш пороль</div>
                    <input type="password" name="password" required="required"/>
                    <input className={s.hidden} type="text" name="log_in" value="login" required="required"/>
                    <input className={s.button} type="submit" name="submit_btn" value="Отправить"/>
                </form>
            </div>
        </div>
    </div>
    );
}

export default Login;