import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Alunos
export const listarAlunos = () => api.get('/alunos');
export const buscarAluno = (id) => api.get(`/alunos/${id}`);
export const criarAluno = (dados) => api.post('/alunos', dados);
export const atualizarAluno = (id, dados) => api.put(`/alunos/${id}`, dados);
export const deletarAluno = (id) => api.delete(`/alunos/${id}`);

// Trabalhos
export const listarTrabalhos = (area = null) => {
  const url = area ? `/trabalhos?area=${area}` : '/trabalhos';
  return api.get(url);
};
export const buscarTrabalho = (id) => api.get(`/trabalhos/${id}`);
export const criarTrabalho = (dados) => api.post('/trabalhos', dados);
export const atualizarTrabalho = (id, dados) => api.put(`/trabalhos/${id}`, dados);
export const deletarTrabalho = (id) => api.delete(`/trabalhos/${id}`);
export const rankingArea = (area) => api.get(`/ranking/${area}`);

// Votos
export const votar = (trabalhoId) => api.post(`/votar/${trabalhoId}`);
export const verificarVoto = (trabalhoId) => api.get(`/verificar-voto/${trabalhoId}`);

export default api;