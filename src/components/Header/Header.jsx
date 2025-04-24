import s from "./header.module.css";

import SearchIcon from "../../assets/icon/Search.svg";

const Header = () => {
    return (
        <>
            <div className={s.header}>
                <h1 className={s.title}>Расписание</h1>
                <div className={s.search}>
                    <input type="text" placeholder="Поиск по предмету" className={s.input} />
                    <img src={SearchIcon} alt="icon" />
                </div>
            </div>
            <div className={s.tabs}>
                <div className={s.tabWrapper}>
                    <div className={`${s.tab} ${s.tabActive}`}>Общая информация</div>
                </div>
                <div className={s.tabWrapper}>
                    <div className={`${s.tab}`}>
                        Табель студента
                        <span className={s.tabCounter}>0</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
