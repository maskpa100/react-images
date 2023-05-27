import s from './Registration.module.css';

const Registration = () => {
    return (
    <div className={s.authorization}>
        <div className={s.background}>
            <div className={s.item}>
                <h2 className={s.title}>Создания учетной записи</h2>
                <form name="feedback" method="post" action="/registration">
                    <div className={s.text}>Ваш логин</div>
                    <input type="text" name="login" value=""/>
                    <div className={s.text}>Электроная почта</div>
                    <input type="email" name="email" value="" />
                    <div className={s.text}>Введите пороль</div>
                    <input type="password" name="password" />
                    <div className={s.text}>Повторите пороль</div>
                    <input type="password" name="password1" />
                    <input className={s.hidden} type="text" name="reg" value="1" />
                    <input className={s.button} type="submit" name="submit_btn" value="Отправить"/>
                </form>
            </div>
        </div>
    </div>
    );
}

export default Registration;