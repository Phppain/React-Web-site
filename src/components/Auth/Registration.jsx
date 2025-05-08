import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Auth.css";

export const Registration = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    // Здесь позже будет логика регистрации
    console.log("Регистрация:", { email, password });
    navigate("/login");
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleRegister}>
        <h2>Регистрация</h2>
        <input
          type="email"
          placeholder="Почта"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Зарегистрироваться</button>
        <p onClick={() => navigate("/login")} className="auth-link">
          Уже есть аккаунт? Войти
        </p>
      </form>
    </div>
  );
};