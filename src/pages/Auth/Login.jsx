import { useState } from "react";
import s from "./auth.module.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const nav = useNavigate();

    const [formData, setFormData] = useState({
        login: "",
        password: "",
        rememberMe: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically send the data to your backend
        console.log("Form submitted:", formData);
        nav("/board");
        // Add your authentication logic here
    };

    return (
        <div className={s.banner}>
            <div className={s.wrapper}>
                <div className={s.bg}></div>
                <form className={s.form} onSubmit={handleSubmit}>
                    <h1 className={s.title}>Авторизация</h1>

                    <div className={s.formGroup}>
                        <input
                            type="text"
                            id="login"
                            name="login"
                            value={formData.login}
                            onChange={handleChange}
                            className={s.input}
                            required
                            placeholder="Логин"
                        />
                    </div>

                    <div className={s.formGroup}>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className={s.input}
                            required
                            placeholder="Пароль"
                        />
                    </div>

                    <div className={`${s.formGroup} ${s.rememberMe} flex items-center gap-5`}>
                        <label className={s.customCheckbox}>
                            <input type="checkbox" className={s.rememberMeInput} />
                            <span className={s.checkboxDisplay}></span>
                            Запомнить меня
                        </label>
                    </div>

                    <button type="submit" className={s.submitButton}>
                        Войти
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
