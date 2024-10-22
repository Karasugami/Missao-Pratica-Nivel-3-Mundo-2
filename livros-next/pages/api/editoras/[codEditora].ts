import { NextApiRequest, NextApiResponse } from 'next';
import { controleEditora } from '.';
export default (req: NextApiRequest, res: NextApiResponse) => {
    try {
      if (req.method === 'GET') {
        const { codEditora } = req.query;
        const codigo = Number(codEditora);
        const nomeEditora = controleEditora.getNomeEditora(codigo);
  
        if (nomeEditora) {
          res.status(200).json({ nome: nomeEditora });
        } else {
          res.status(404).json({ error: 'Editora não encontrada' });
        }
      } else {
        res.setHeader('Allow', ['GET']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
      }
    } catch (error) {
      console.error('Erro ao processar a requisição:', error);
      res.status(500).json({ error: 'Erro interno do servidor' });
    }
  };
  