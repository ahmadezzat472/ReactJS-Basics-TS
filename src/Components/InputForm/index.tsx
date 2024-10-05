import { ChangeEvent } from "react"
import "./index.scss"
import { IUserData } from "../../interfaces"
import { formInputData } from "../../data"

interface Iprops {
    userData: IUserData
    setUserData: (val: IUserData) => void
    setIsLogin: (val: boolean) => void
}

function InputForm({userData , setUserData, setIsLogin} : Iprops) {

    const handleChange = (event: ChangeEvent<HTMLInputElement>) =>{
        const {value , name} = event.target
        setUserData({
            ... userData,
            [name]: value,
        })
    }    

    return (
        <form 
            className='login-form'
            onSubmit={(e) => {
                e.preventDefault()
            }}
        >
            {
                formInputData.map( (input, idx) => 
                    <div className='input-wrapper' key={idx}>
                        <label htmlFor={input.id} >{input.label}</label>
                        <input 
                            type={input.type} 
                            name={input.name} 
                            id={input.id} 
                            value={userData[input.name]} 
                            onChange={(e) => handleChange(e)} 
                        />
                    </div>
                )
            }
            <button 
                onClick={() => {
                    setIsLogin(true)
                }}
            >
                Login
            </button>
        </form>
    )
}

export default InputForm