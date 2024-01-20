import Evento from '../models/evento.js';

class EventosController {
  static acesso = () => process.env.EVENTO_FLAG === 'true';

  static listarEvento = async (req, res) => {
    if (this.acesso()) {
      try {
        const resultado = await Evento.pegarEventos();
        return res.status(200).json({ eventos: resultado });
      } catch (error) {
        return res.status(500).json(error.message);
      }
    } else {
      return res.status(404).send();
    }
  };
}

export default EventosController;
