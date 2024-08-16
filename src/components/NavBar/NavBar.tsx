

function NavBar() {
    return (
        <div className='w-full bg-[#3a405a] text-white flex justify-center py-4'>
            <div className="container flex justify-between text-lg">
                <h2 className="text-2xl font-semibold">Farmácia Precin</h2>
                <div className='flex gap-4'>
                    <p>Produtos</p>
                    <p>Categorias</p>
                    <p>Cadastrar Categoria</p>
                </div>
            </div>
        </div>
    )
}

export default NavBar

