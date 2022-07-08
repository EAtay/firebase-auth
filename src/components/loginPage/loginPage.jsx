import React from "react";
import { Link } from "react-router-dom";
import "./loginPage.scss";

const LoginPage= () => {
  return (
    <div>
      <main id="main">
        <div className="container">
          <form action="submit">
            <h1 className="title">Авторизация</h1>
            <p className="username">Введите свой email, телефон или id:</p>
            <input type="text" name="username" placeholder="#3923943294" />
            <p className="password">Введите свой пароль:</p>
            <input type="text" name="name" placeholder="********"/>
            <Link to="/forgot" className="forgotPassword">Забыли пароль?</Link>
            <button className="singIn">Войти</button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default LoginPage;
