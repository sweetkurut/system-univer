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
        nav("/calendar");
        // Add your authentication logic here
    };

    return (
        <div className={s.banner}>
            <div className={s.wrapper}>
                <form className={s.form} onSubmit={handleSubmit}>
                    <h1 className={s.title}>Авторизация</h1>

                    <div className={s.formGroup}>
                        <label htmlFor="login" className={s.label}>
                            Логин
                        </label>
                        <input
                            type="text"
                            id="login"
                            name="login"
                            value={formData.login}
                            onChange={handleChange}
                            className={s.input}
                            required
                        />
                    </div>

                    <div className={s.formGroup}>
                        <label htmlFor="password" className={s.label}>
                            Пароль
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className={s.input}
                            required
                        />
                    </div>

                    <div className={`${s.formGroup} ${s.rememberMe}`}>
                        <input
                            type="checkbox"
                            id="rememberMe"
                            name="rememberMe"
                            checked={formData.rememberMe}
                            onChange={handleChange}
                            className={s.rememberMeInput}
                        />
                        <label htmlFor="rememberMe" className={s.label}>
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
