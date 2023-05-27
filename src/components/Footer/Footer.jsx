import s from './Footer.module.css';

function Footer() {
  return (
	<footer className={s.footer}>
		<hr className={s.hr}/>
		<p className={s.text}>Copyright © 2010-2023 Company S.L. Все права защищены.</p>
	</footer> 
  );
}

export default Footer;