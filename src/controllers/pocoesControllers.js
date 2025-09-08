import express from "express";
import dados from "../models/dados.js";
const { pocoes } = dados;

const getAllPocoes = (req, res) => {
  const { nome, efeito } = req.query;
  let resultado = pocoes;

  if (nome) {
    resultado = resultado.filter((p) =>
      p.nome.toLowerCase().includes(nome.toLowerCase())
    );
  }
  if (efeito) {
    resultado = resultado.filter((p) =>
      p.efeito.toLowerCase().includes(efeito.toLowerCase())
    );
  }
  res.status(200).json({
    total: resultado.length,
    data: resultado,
  });
};

const getPocaoById = (req, res) => {
  let id = req.params.id;
  id = parseInt(id);
  const pocaoEncontrada = pocoes.find((p) => p.id === id);
  if (pocaoEncontrada) {
    res.status(200).json(pocaoEncontrada);
  } else {
    res.status(404).json({ message: "Poção não encontrada" });
  }
};

export { getAllPocoes, getPocaoById };
