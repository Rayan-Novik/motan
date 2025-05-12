import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';

function App() {
  const [dia, setDia] = useState("");
  const [hora, setHora] = useState("");
  const telefone = "5548992106300"; // Substitua pelo seu número com DDI

  const dias = [
    "Quarta-feira (22/05)",
    "Quinta-feira (23/05)",
    "Sexta-feira (24/05)",
    "Sábado (25/05)",
  ];

  const horas = [
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ];

  const gerarLinkWhatsapp = () => {
    if (!dia || !hora) return "#";
    const mensagem = encodeURIComponent(`Oi! Eu escolhi o dia ${dia} e a hora ${hora} para nosso encontro no restaurante. Vai ser incrível!`);
    return `https://wa.me/${telefone}?text=${mensagem}`;
  };

  // Criar estrelas no fundo
  useEffect(() => {
    const container = document.querySelector(".estrelado-container");
    if (!container) return;

    // Limpar estrelas antigas
    container.querySelectorAll(".estrela").forEach(e => e.remove());

    // Criar novas estrelas
    for (let i = 0; i < 150; i++) {
      const estrela = document.createElement("div");
      estrela.className = "estrela";
      estrela.style.top = `${Math.random() * 100}%`;
      estrela.style.left = `${Math.random() * 100}%`;
      estrela.style.animationDuration = `${1 + Math.random() * 2}s`;
      container.appendChild(estrela);
    }
  }, []);

  return (
    <div className="estrelado-container d-flex justify-content-center align-items-center">
      <div className="convite-box text-center animate__animated animate__fadeIn">
        <h2 className="text-danger mb-4">
          <i className="bi bi-heart-fill"></i> Convite Irresistível
        </h2>
        <p className="mb-4 text-light">Eu sei que você estava esperando esse convite! Vamos fazer esse encontro no restaurante ser inesquecível.</p>

        {/* Imagem do Local */}
        <div className="mb-4">
          <img src="./assets/WhatsApp Image 2025-05-11 at 20.21.56.jpeg" alt="Restaurante" className="img-fluid rounded" />
        </div>

        <div className="mb-3">
          <p><i className="bi bi-building text-warning"></i> Local: Restaurante [Nome do Restaurante]</p>
        </div>

        <div className="form-group mt-3 mb-4">
          <label htmlFor="diaSelect" className="form-label text-light">Escolha o dia perfeito:</label>
          <select
            id="diaSelect"
            className="form-select"
            value={dia}
            onChange={(e) => setDia(e.target.value)}
          >
            <option value="">-- Selecione o dia do nosso encontro --</option>
            {dias.map((d) => (
              <option key={d} value={d}>{d}</option>
            ))}
          </select>
        </div>

        <div className="form-group mt-3 mb-4">
          <label htmlFor="horaSelect" className="form-label text-light">Escolha o horário do nosso encontro:</label>
          <select
            id="horaSelect"
            className="form-select"
            value={hora}
            onChange={(e) => setHora(e.target.value)}
          >
            <option value="">-- Selecione a hora --</option>
            {horas.map((h) => (
              <option key={h} value={h}>{h}</option>
            ))}
          </select>
        </div>

        {dia && hora && (
          <a
            href={gerarLinkWhatsapp()}
            target="_blank"
            className="btn btn-success btn-lg mt-4 rounded-pill shadow-lg"
          >
            Confirmar no WhatsApp - Vamos fazer isso acontecer!
          </a>
        )}
      </div>
    </div>
  );
}

export default App;