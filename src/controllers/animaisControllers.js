import express from "express";
import dados from "../models/dados.js";
const { animais } = dados;

const getAllAnimais = (req, res) => {
  const { nome, tipo } = req.query;
  let resultado = animais;

  if (nome) {
    resultado = resultado.filter((a) =>
      a.nome.toLowerCase().includes(nome.toLowerCase())
    );
  }
  if (tipo) {
    resultado = resultado.filter((a) =>
      a.tipo.toLowerCase().includes(tipo.toLowerCase())
    );
  }
  res.status(200).json({
    total: resultado.length,
    data: resultado,
  });
};

const getAnimalById = (req, res) => {
  let id = req.params.id;
  id = parseInt(id);
  const animalEncontrado = animais.find((a) => a.id === id);
  if (animalEncontrado) {
    res.status(200).json(animalEncontrado);
  } else {
    res.status(404).json({ message: "Animal não encontrado" });
  }
};

export { getAllAnimais, getAnimalById };
