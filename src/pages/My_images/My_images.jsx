import s from './My_images.module.css';

const My_images = (props) => {


    return (
        <div>
        <section className={s.my_images}>
            <div className={s.header}>
                <h2>Мои изображения</h2>
                <a href="/loading_img" className="my-images_button">Добавить изображения</a>
            </div>

            <table>
                <tbody>
                    <tr>
                        <th>Изображения</th>
                        <th>Ключевые слова</th>
                        <th>Ширина</th>
                        <th>Высота</th>
                        <th className="my-images_date">Дата добавления</th>
                        <th>Расширения</th>
                        <th>Удалить</th>
                    </tr>
                    <tr>
                        <td>
                            <img src="https://demotivation.ru/wp-content/uploads/2020/05/s1200-9-46-1024x768.jpg" alt="tyhujk"/>
                        </td>
                        <td>Девушка</td>
                        <td>2048</td>
                        <td>1356</td>
                        <td>9 Мая 2023</td>
                        <td>jpg</td>
                        <td>
                            <a href="#" className={s.delete}>Удалить</a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <img src="https://besthqwallpapers.com/Uploads/10-11-2016/9577/thumb-case-ih-optum-300-2016-tractors-new-tractors-agricultural-machinery.jpg" alt="сапролд Бапргошлщдж"/>
                        </td>
                        <td>Трактор, в поле</td>
                        <td>1900</td>
                        <td>1086</td>
                        <td>7 Мая 2023</td>
                        <td>jpeg</td>
                        <td>
                            <a href="#" className={s.delete}>Удалить</a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <img src="https://sun9-23.userapi.com/impf/c853624/v853624962/71901/a2taCh7ZVjI.jpg?size=320x249&quality=96&sign=3b30785f4dc27476b5dc4b700a0397cf&c_uniq_tag=7O4a0LoOVsAy5Rd69voFaFXEt9IOXNU5_J1RHpmx-s8&type=album" alt="трактор"/>
                        </td>
                        <td>Лев</td>
                        <td>768</td>
                        <td>768</td>
                        <td>23 Апреля 2023</td>
                        <td>jpg</td>
                        <td>
                            <a href="#" className={s.delete}>Удалить</a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </section>
        </div>
    );
}

export default My_images;