// controllers/TurmaController.js

class TurmaController {

    static async pegaTodasAsTurmas(req, res) {
      try {
        const todasAsTurmas = await database.Turmas.findAll()
        return res.status(200).json(todasAsTurmas)
      } catch (error) {
        return res.status(500).json(error.message);
      }
    }

    static async pegaUmaTurma(req, res) {
        const { id } = req.params
        try {
            const turma = await database.Turmas.findOne({
                where: {
                    id: Number(id)
                }
            })
            return res.status(200).json(turma)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async criaTurma(req, res){
        const turma = req.body
        try {
            const turmaCriada = await database.Turmas.create(turma)
            return res.status(200).json(turmaCriada)
        } catch (error) {
            return res.static(500).json(error.message)
        }
    }

    static async atualizaTurma(req, res){
        const { id } = req.params
        const turma = req.body
        try {
            await database.Turma.update(turma, {
                where: {
                    id: Number(id)
                }
            })
            const turmaAlterada = database.Turma.findOne({
                where: {
                    id: Number(id)
                }
            })
            return res.status(200).json(turmaAlterada)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async apagaTurma(req, res){
        const { id } = req.params

        try {
            await database.Turmas.destroy({
                where: {
                    id: Number(id)
                }
            })
            return res.status(200).json({ mensagem: `id ${id} deletado` })
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}