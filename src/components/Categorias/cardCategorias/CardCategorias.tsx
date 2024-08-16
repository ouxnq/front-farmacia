import { Link } from 'react-router-dom'
import Categoria from '../../../models/Categoria'

interface CardCategoriaProps {
    categoria: Categoria
}

function CardCategorias({ categoria }: CardCategoriaProps) {
    return (
        <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
            <header className='py-2 px-6 bg-[#3A405A] text-white font-bold text-2xl'>Categoria</header>
            <p className='pt-4 pl-8 pb-1 text-4xl bg-[#F9DEC9] font-medium h-full'>{categoria.nome}</p>
            <p className='pl-8 pb-4 pt-2 text-xl font-normal bg-[#F9DEC9] h-full'>{categoria.descricao}</p>
            <div className="flex">
                <Link to={`/editarCategoria/${categoria.id}`} className='w-full text-slate-100 bg-[#99B2DD] hover:bg-[#335899] flex items-center justify-center py-2'>
                    <button >Editar</button>
                </Link>
                <Link to={`/deletarCategoria/${categoria.id}`} className='text-slate-100 bg-[#E9AFA3] hover:bg-red-700 w-full flex items-center justify-center'>
                    <button>Deletar</button>
                </Link>
            </div>
        </div>
    )
}

export default CardCategorias