import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

function FormContato() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    mensagem: ''
  });
  const [enviado, setEnviado] = useState(false);
  const [erro, setErro] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.nome || !formData.email || !formData.mensagem) {
      setErro('Por favor, preencha todos os campos');
      return;
    }

    // Aqui você pode adicionar a lógica para enviar para o backend
    console.log('Dados do formulário:', formData);
    
    setEnviado(true);
    setErro('');
    setFormData({ nome: '', email: '', mensagem: '' });

    setTimeout(() => setEnviado(false), 5000);
  };

  return (
    <Form onSubmit={handleSubmit}>
      {enviado && (
        <Alert variant="success">
          Mensagem enviada com sucesso! Entraremos em contato em breve.
        </Alert>
      )}
      {erro && (
        <Alert variant="danger">{erro}</Alert>
      )}

      <Form.Group className="mb-3">
        <Form.Label>Nome</Form.Label>
        <Form.Control
          type="text"
          name="nome"
          value={formData.nome}
          onChange={handleChange}
          placeholder="Seu nome completo"
          required
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>E-mail</Form.Label>
        <Form.Control
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="seu@email.com"
          required
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Mensagem</Form.Label>
        <Form.Control
          as="textarea"
          rows={5}
          name="mensagem"
          value={formData.mensagem}
          onChange={handleChange}
          placeholder="Digite sua mensagem..."
          required
        />
      </Form.Group>

      <Button variant="primary" type="submit" className="w-100">
        Enviar Mensagem
      </Button>
    </Form>
  );
}

export default FormContato;