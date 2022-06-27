import React from 'react';
import "./forgot.scss";

const ForgotPage = () => {
    return (
        <div>
            <main id='main'>
                <div className="container">
                    <form action="submit">
                        <h1 className='title'>Забыли пароль?</h1>
                        <p className='username'>Введите свой email:</p>
                        <input type="text" name="username" placeholder='sanekya_san@mail.ru'/>
                        <button className='sendMail'>Отправить письмо</button>
                    </form>
                </div>
            </main>
        </div>
    );
};

export default ForgotPage;