import { NextApiRequest, NextApiResponse } from 'next';
import { controleLivro } from '.';
export default (req: NextApiRequest, res: NextApiResponse) => {
    try {
      if (req.method === 'DELETE') {
        const { codigo } = req.query;
        const codigoNumerico = Number(codigo);
  
        controleLivro.excluir(codigoNumerico);
        res.status(200).json({ message: 'Livro excluído com sucesso!' });
      } else {
        res.setHeader('Allow', ['DELETE']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
      }
    } catch (error) {
      console.error('Erro ao processar a requisição:', error);
      res.status(500).json({ error: 'Erro interno do servidor' });
    }
  };
  