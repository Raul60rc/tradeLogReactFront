import React from 'react'

function SignIn(){
    const [user,setUser] = useState(null);
    const authenticated = user != null;

    const login =({email, password}) => setUser (signIn({email,password}));
    const logout = () => setUser(null);

    return (
        
    )
}

export default SignIn