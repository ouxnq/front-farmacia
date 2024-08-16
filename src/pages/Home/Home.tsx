import { Link } from 'react-router-dom';
import homeImage from '../../assets/images/homeImage.png'

function Home() {
    return (
        <>
            <div className="bg-[#99b2dd] flex justify-center">
                <div className='container grid grid-cols-2 text-white'>
                    <div className="flex flex-col gap-4 items-center justify-center py-4">
                        <h2 className='text-5xl font-bold'>Seja bem vinde!</h2>
                        <p className='text-xl'>Os melhores preços de toda indústria farmacêutica</p>
                        <div className="">
                            <Link to={'categorias'}>
                                <button className='rounded bg-white text-blue-800 py-2 px-4'>Ver categorias</button>
                            </Link>
                        </div>
                    </div>
                    <div>
                        <img src={homeImage} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;