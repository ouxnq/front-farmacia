import { Link } from "react-router-dom"


function NavBar() {
    return (
        <div className='w-full bg-[#3a405a] text-white flex justify-center py-4'>
            <div className="container flex justify-between text-lg">
                <Link to='/home' className="text-2xl font-semibold">Farmácia Precin</Link>
                <div className='flex gap-4'>
                    <p>Produtos</p>
                    <Link to='/categorias' className='hover:underline'>Categorias</Link>
                    <Link to='/cadastroCategoria' className='hover:underline'>Cadastrar categoria</Link>
                </div>
            </div>
        </div>
    )
}

export default NavBar

