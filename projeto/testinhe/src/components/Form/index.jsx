import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { api } from '../../lib/axios';
import './styles.css';


export function Form({ title, textButton, onAction }) {
  const { id } = useParams();
  const [formData, setFormData] = useState({ titulo: '', descricao: '', conteudo: '' });

  useEffect(() => {
    if (id) {
      api.get(`/posts/${id}`)
        .then(response => setFormData(response.data))
        .catch(err => console.log(err));
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAction(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <h2 className="form-title">{title}</h2>
      <div className="form-group">
        <label htmlFor="titulo">Título:</label>
        <input
        placeholder='Um título criativo para sua postagem'
          type="text"
          id="titulo"
          name="titulo"
          value={formData.titulo}
          onChange={handleChange}
          className="form-input"
        />
      </div>
      <div className="form-group">
        <label htmlFor="descricao">Descrição:</label>
        <input
        placeholder='Descreva seu post em poucas palavras'
          type="text"
          id="descricao"
          name="descricao"
          value={formData.descricao}
          onChange={handleChange}
          className="form-input"
        />
      </div>
      <div className="form-group">
        <label htmlFor="conteudo">Conteúdo:</label>
        <textarea
        placeholder='Informe detelhadamente o que você esta pensando...'
          type="text"
          id="conteudo"
          name="conteudo"
          value={formData.conteudo}
          onChange={handleChange}
          className="form-input"
        />
      </div>
      <button type="submit" className="form-button">Ok!{textButton}</button>
    </form>
  );
}
