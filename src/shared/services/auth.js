import { useForm } from "react-hook-form";

const users =[
    {email:"contact@wallstballer.com",password:"mondongo",name:"WallStBaller"}
];

export function signIn({email,password}){
    const user = users.find(
        (user) => user.email === email && user.password === password
    );
    if (user === undefined) throw new Error();
    return user;
}