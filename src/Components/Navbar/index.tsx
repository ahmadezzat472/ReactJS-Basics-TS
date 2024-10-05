import './index.scss'

interface IProps {
    isLogin: boolean
    setIsLogin: (val: boolean) => void
}

function Navbar( props: IProps ) {
    const {isLogin, setIsLogin } = props
    
    return (
        <nav>
            <ul className="list">
                <li>
                    <a href="/" >
                        Logo
                    </a>
                </li>
                <li>
                    <a href="/" >
                        Home
                    </a>
                </li>
                <li>
                    <a href="/" >
                        About
                    </a>
                </li>
                <li>
                    <a href="/" >
                        Content
                    </a>
                </li>
                <li>
                    <button 
                        onClick={() => {
                            setIsLogin(!isLogin)
                        }}>
                        { !isLogin? "Login" : "logout"}
                    </button>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar