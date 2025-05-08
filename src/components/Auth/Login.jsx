import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Auth.css";
import { useDispatch } from "react-redux";
import { login } from "../../feauters/auth/authSlice.js";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const dispatch = useDispatch();

    const handleLogin = (e) => {
    e.preventDefault();
    const fakeUser = { email };
    dispatch(login(fakeUser));
    navigate("/");
    };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleLogin}>
        <h2>Вход</h2>
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
        <button type="submit">Войти</button>
        <p onClick={() => navigate("/registr")} className="auth-link">
          Нет аккаунта? Зарегистрируйтесь
        </p>
      </form>
    </div>
  );
};