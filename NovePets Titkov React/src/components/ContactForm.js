import { useState } from 'react';

// Начальные пустые значения для формы
const defaultContact = {
  name: '',
  email: '',
  topic: '',
  msg: ''
};

const ContactForm = () => {
  // Хук useState создает переменную contact (где лежат данные) и функцию setContact (чтобы их менять)
  const [contact, setContact] = useState(defaultContact);

  // Функция сохранения в Local Storage
  const saveMessage = () => {
    // Превращаем объект в строку и сохраняем в браузере
    localStorage.setItem("contact", JSON.stringify(contact));
    alert("Contact saved!"); // Сообщение пользователю
    resetForm(); // Очищаем форму
  };

  // Функция очистки формы
  const resetForm = () => {
    setContact(defaultContact);
  };

  return (
    <div className="panel">
      <h2>Contact form</h2>
      <form className="form">
        
        {/* Поле ИМЯ */}
        <div className="field">
          <label htmlFor="name">Name</label>
          <input 
            id="name" 
            name="name" 
            placeholder="Your name"
            // Привязываем значение инпута к нашему стейту
            value={contact.name}
            // Когда пишем букву, обновляем стейт. ...contact копирует старые поля, чтобы не стереть email/topic
            onChange={e => setContact({ ...contact, name: e.target.value })} 
          />
        </div>

        {/* Поле EMAIL */}
        <div className="field">
          <label htmlFor="email">Email</label>
          <input 
            id="email" 
            name="email" 
            placeholder="you@example.com"
            value={contact.email}
            onChange={e => setContact({ ...contact, email: e.target.value })}
          />
        </div>

        {/* Поле ТЕМА */}
        <div className="field">
          <label htmlFor="topic">Topic</label>
          <input 
            id="topic" 
            name="topic" 
            placeholder="Recommendation / Adoption / Question"
            value={contact.topic}
            onChange={e => setContact({ ...contact, topic: e.target.value })}
          />
        </div>

        {/* Поле СООБЩЕНИЕ (textarea) */}
        <div className="field">
          <label htmlFor="msg">Message</label>
          <textarea 
            id="msg" 
            name="msg" 
            placeholder="Tell us about your lifestyle..."
            value={contact.msg}
            onChange={e => setContact({ ...contact, msg: e.target.value })}
          />
        </div>

        {/* КНОПКИ */}
        <div className="hero-actions">
          {/* type="button" важно, чтобы форма не перезагружала страницу сама по себе */}
          <button className="btn primary" type="button" onClick={saveMessage}>
            Send message
          </button>
          <button className="btn danger" type="button" onClick={resetForm}>
            Reset
          </button>
        </div>

      </form>
    </div>
  );
};

export default ContactForm;


/*
const saveMessage = () => {
    fetch(`${BACKEND_URL}/contact`, {
        
        headers: {
            
        }
    }).then(res => res.json())
    .then(res => setContacts(res))
}*/