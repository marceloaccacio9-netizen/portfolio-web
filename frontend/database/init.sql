-- Criar banco de dados
CREATE DATABASE IF NOT EXISTS portfolio_db;
USE portfolio_db;

-- Tabela de Alunos
CREATE TABLE IF NOT EXISTS alunos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    foto_url VARCHAR(255),
    apresentacao TEXT,
    email VARCHAR(100),
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabela de Trabalhos
CREATE TABLE IF NOT EXISTS trabalhos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    aluno_id INT NOT NULL,
    titulo VARCHAR(200) NOT NULL,
    descricao TEXT,
    area VARCHAR(50) NOT NULL,
    link_projeto VARCHAR(255),
    imagem_url VARCHAR(255),
    bimestre INT,
    total_votos INT DEFAULT 0,
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (aluno_id) REFERENCES alunos(id) ON DELETE CASCADE,
    INDEX idx_area (area),
    INDEX idx_votos (total_votos)
);

-- Tabela de Votos
CREATE TABLE IF NOT EXISTS votos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    trabalho_id INT NOT NULL,
    ip_votante VARCHAR(50),
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (trabalho_id) REFERENCES trabalhos(id) ON DELETE CASCADE,
    UNIQUE KEY unique_vote (trabalho_id, ip_votante)
);

-- Inserir dados de exemplo
INSERT INTO alunos (nome, foto_url, apresentacao, email) VALUES
('João Silva', 'https://via.placeholder.com/150', 'Estudante apaixonado por tecnologia', 'joao@email.com'),
('Maria Santos', 'https://via.placeholder.com/150', 'Amante das ciências naturais', 'maria@email.com'),
('Pedro Oliveira', 'https://via.placeholder.com/150', 'Futuro matemático', 'pedro@email.com');

INSERT INTO trabalhos (aluno_id, titulo, descricao, area, bimestre, total_votos) VALUES
(1, 'Sistema de Automação Residencial', 'Projeto de IoT com Arduino e sensores', 'Tecnico', 3, 15),
(2, 'Estudo sobre Fotossíntese', 'Análise experimental do processo fotossintético', 'Ciencias_Natureza', 2, 12),
(3, 'Análise de Funções Quadráticas', 'Estudo aplicado de parábolas', 'Matematica', 3, 8);