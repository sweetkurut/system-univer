import { FaArrowLeft } from "react-icons/fa";
import s from "./report.module.css";
import { useNavigate } from "react-router-dom";

const subjects = ["Мат.Анализ", "Русский язык", "Английский язык", "История Казахстана", "Социология", "Политология"];

const dates = ["14.05.2025", "15.05.2025", "16.05.2025", "17.05.2025"];

const Report = () => {
    const nav = useNavigate();
    const handleNavigate = () => {
        nav("/board");
    };

    return (
        <div className={s.wrapper}>
            <div className={s.container}>
                <div className={s.tabel_title}>
                    <div className={s.t_icon}>
                        <FaArrowLeft className={s.arrow} onClick={handleNavigate} />
                        <h2 className={s.title}>Табель студента</h2>
                    </div>
                    <div className={s.periodRow}>
                        <span className={s.periodLabel}>Отчетный период:</span>
                        <input type="date" defaultValue="2025-01-25" className={s.input} />
                        <span className={s.periodLabel}>по</span>
                        <input type="date" defaultValue="2025-05-25" className={s.input} />
                    </div>
                    <div>
                        <div className={s.periodButton}>
                            выбрать отчетный период
                            <img src="/src/assets/icon/calendar.svg" alt="icon" />
                        </div>
                    </div>
                </div>

                <div className={s.pageWrapper}>
                    <div className={s.card}>
                        <div className={s.header}></div>

                        <div className={s.content}>
                            <h3 className={s.subtitle}>Табель за семестр</h3>
                            <div className={s.tableHeader}>
                                <span>Преподаватель:</span>
                                <span>Предмет:</span>
                                {dates.map((date, idx) => (
                                    <span key={idx}>Дата: {date}</span>
                                ))}
                            </div>

                            {subjects.map((subject, idx) => (
                                <div key={idx} className={s.tableRow}>
                                    <span className={s.cell}>К.Динара</span>
                                    <span className={s.cell}>{subject}</span>
                                    {dates.map((_, i) => (
                                        <span key={i} className={s.scoreCell}>
                                            10 баллов
                                        </span>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Report;
