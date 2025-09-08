import express from "express";
import dados from "../models/dados.js";
const { bruxos } = dados;

const getAllBruxos = (req, res) => {
  const { nome, ano, casa, especialidade } = req.query;
  let resultado = bruxos;

  if (nome) {
    resultado = resultado.filter((h) =>
      h.nome.toLowerCase().includes(nome.toLowerCase())
    );
  }

  if (ano) {
    resultado = resultado.filter((h) =>
      h.ano.toLowerCase().includes(ano.toLowerCase())
    );
  }

  if (casa) {
    resultado = resultado.filter((h) =>
      h.casa.toLowerCase().includes(casa.toLowerCase())
    );
  }
  if (especialidade) {
    resultado = resultado.filter((h) =>
      h.especialidade.toLowerCase().includes(especialidade.toLowerCase())
    );
  }

  res.status(200).json({
    total: resultado.length,
    data: resultado,
  });
};

const getBruxoById = (req, res) => {
  let id = req.params.id;
  id = parseInt(id);
  const bruxoEncontrado = bruxos.find((b) => b.id === id);
  if (bruxoEncontrado) {
    res.status(200).json(bruxoEncontrado);
  } else {
    res.status(404).json({ message: "Bruxo não encontrado" });
  }
};

export { getAllBruxos, getBruxoById };
