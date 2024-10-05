import { IUserData } from '../../interfaces'

interface IProps {
    user: IUserData
}

function ProfileUser({user} : IProps) {
    return (
        <div style={{textAlign:'center', color:'white'}}>
            <h2 style={{marginBottom: 20}}>User Name: {user.userName}</h2>
            <h2 style={{marginBottom: 20}}>Email: {user.email}</h2>
            <h2 style={{marginBottom: 20}}>Address: {user.address}</h2>
        </div>
    )
}

export default ProfileUser