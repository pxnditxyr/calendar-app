import { Link, useNavigate } from 'react-router-dom';

export const Navbar = ( { isLogged } : { isLogged : boolean } ) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate( "/" );
    }

    return (
        <header>
            <nav className="h-12 bg-orange-400 flex flex-row justify-between items-center px-4 text-white font-medium text-xl">
                <ul className="flex flex-row space-x-8">
                    <li>
                        <Link to="/" className="p-3 hover:bg-cyan-600 rounded-lg"> Home </Link>
                    </li>
                    <li>
                        <Link to="/about" className="p-3 hover:bg-cyan-600 rounded-lg"> About </Link>
                    </li>
                    <li>
                        <Link to="/ads" className="p-3 hover:bg-cyan-600 rounded-lg"> My ADS </Link>
                    </li>
                    
                </ul>
                <ul className="flex flex-row space-x-5 items-center">
                    {
                        isLogged &&
                        <li>
                            <span className="p-3 text-gray-800"> @Yuki </span>
                        </li>
                    }
                    <li>
                        {
                            isLogged 
                            ?
                            <button 
                                className="font-medium px-3 py-2 rounded-lg hover:bg-red-500"
                                onClick={ handleLogout }
                                >
                                <i className="fas fa-sign-out-alt"></i> Logout
                            </button>
                            : <Link className="font-medium p-3 rounded-lg hover:bg-green-400 hover:text-gray-800 hover:font-bold" to="/auth/signin"> Sign In </Link>

                        }
                        
                    </li>
                    
                </ul>
            </nav>
        </header>
    )
}
