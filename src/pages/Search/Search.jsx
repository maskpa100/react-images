import s from './Search.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Search = (props) => {


let state = props.searchPage;
let orientationsValue = state.orientationsValue;
let optionValue = state.optionValue;

const IconCheck = <FontAwesomeIcon className={s.iconCheck} icon="fa-solid fa-check" />;

    return (
        <div>
            <div className={s.word}>
                <input id="words_search" type="text" placeholder="Поиск.." name="search"/>
                <button id="words_search_button" type="submit">
                    <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
                </button>
            </div>
            <div className={s.item}>
                <div className={s.orientations}>
                    <button  onClick={props.funOrientationsState}>
                        <span>Ориентация</span>
                        <FontAwesomeIcon className={s.iconDown} icon="fa fa-angle-down" />
                    </button>
                    {state.orientationsState ? 
                        <div className={s.list} >
                            <p onClick={() => props.funOrientationsValue('any')}>
                                Любая ориентация{orientationsValue == "any" ? IconCheck : ''}
                            </p>
                            <p onClick={() => props.funOrientationsValue('horizontal')}>
                                Горизантальные{orientationsValue == "horizontal" ? IconCheck : ''}
                            </p>
                            <p onClick={() => props.funOrientationsValue('vertical')}>
                                Вертикальные{orientationsValue == "vertical" ? IconCheck : ''}
                            </p>
                            <p onClick={() => props.funOrientationsValue('square')}>
                                Квадратые{orientationsValue == "square" ? IconCheck : ''}
                            </p>
                        </div>
                     : ''}
                </div>
                <div className={s.option}>
                    <button onClick={props.funOptionState}>
                        <span>Формат изображения</span>
                        <FontAwesomeIcon className={s.iconDown} icon="fa fa-angle-down" />
                    </button>
                    {state.optionState ?
                    <div className={s.list}>
                        <p onClick={() => props.funOptionValue('any')}>Любой формат{optionValue == "any" ? IconCheck : ''}</p>
                        <p onClick={() => props.funOptionValue('PNG')}>PNG{optionValue == "PNG" ? IconCheck : ''}</p>
                        <p onClick={() => props.funOptionValue('JPEG')}>JPEG{optionValue == "JPEG" ? IconCheck : ''}</p>
                        <p onClick={() => props.funOptionValue('JPG')}>JPG{optionValue == "JPG" ? IconCheck : ''}</p>
                        <p onClick={() => props.funOptionValue('GIF')}>GIF{optionValue == "GIF" ? IconCheck : ''}</p>
                    </div>
                    : ''}
                </div>
            </div>
            <div className={s.search_content}>
                <div className={s.search_container}>
                    <ul className={s.search_image_gallery}>
                        <li>
                            <img src="http://maskpa.ru/img/small/77.jpg" alt=""/>
                        </li>
                        <li>
                            <img src="http://maskpa.ru/img/small/78.jpg" alt=""/>
                        </li>
                        <li>
                            <img src="http://maskpa.ru/img/small/79.gif" alt=""/>
                        </li>
                        <li>
                            <img src="http://maskpa.ru/img/small/80.jpg" alt=""/>
                        </li>
                        <li>
                            <img src="http://maskpa.ru/img/small/81.jpg" alt=""/>
                        </li>
                        <li>
                            <img src="http://maskpa.ru/img/small/82.jpg" alt=""/>
                        </li>
                        <li>
                            <img src="http://maskpa.ru/img/small/83.jpg" alt=""/>
                        </li>
                        <li>
                            <img src="http://maskpa.ru/img/small/84.jpg" alt=""/>
                        </li>
                        <li>
                            <img src="http://maskpa.ru/img/small/86.jpg" alt=""/>
                        </li>
                        <li>
                            <img src="http://maskpa.ru/img/small/87.jpeg" alt=""/>
                        </li>
                        <li>
                            <img src="http://maskpa.ru/img/small/88.jpg" alt=""/>
                        </li>
                        <li>
                            <img src="http://maskpa.ru/img/small/89.jpg" alt=""/>
                        </li>
                    </ul>
                </div>
            </div>

        </div>

    );
}

export default Search;