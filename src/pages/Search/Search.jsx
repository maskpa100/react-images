import { useLayoutEffect } from 'react';
import s from './Search.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios';
import {useState} from 'react';

const Search = (props) => {

let state = props.searchPage;
let orientationsValue = state.orientationsValue;
let optionValue = state.optionValue;

const IconCheck = <FontAwesomeIcon className={s.iconCheck} icon="fa-solid fa-check" />;
    const  [words, setVal]  = useState("");

    return (
        <div>
            <div className={s.word}>
                <input id="words_search" type="text" placeholder="Поиск.." name="search" value={words} onChange={(ev) => setVal(ev.target.value)} />
                <button id="words_search_button" onClick={() => props.getWords(words)} type="submit">
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
                <p className={s.count}>Найдено результатов : {state.totalCount}</p>
                    <ul className={s.search_image_gallery}>
			            {props.searchPage.images.map(p => {
			                return  <li key={p.id}>
			                            <img src={p.url} alt=""/>
			                        </li>
			            })}
                    </ul>
                </div>
            </div>

        </div>


    );
}

export default Search;