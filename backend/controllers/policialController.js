const Policial= require('../models/policialModel');

exports.createPolicial = async (req, res) => {
    try {
        const { rg_civil, rg_militar, cpf, data_nascimento, matricula } = req.body;

        if (!rg_civil || !rg_militar || !cpf || !data_nascimento || !matricula) {
            return res.status(400).json({ error: 'Todos os campos deverão ser preenchidos obrigatoriamente' });
        }

        const id = await Policial.create({ rg_civil, rg_militar, cpf, data_nascimento, matricula });
        res.status(201).json({ message: 'Policial cadastrado com sucesso', id });

    } catch (error) {
        console.error('Erro ao cadastrar Policial:', error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
};

exports.listarPoliciais = async (req, res) => {
    try {
        const policiais = await Policial.findAll();
        res.status(200).json(policiais);
    } catch (error) {
        console.error('Erro ao listar Policiais:', error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
};
