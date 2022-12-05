import { ErrorResponse } from "@remix-run/router";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const LoginForm = () => {
  // all states go in here before return
  // check notion context on useState & useEffect
  // Use react hook forms to create forms.
  // Create first register & login - later Api.js will be passed to get fetch, axios to make petitions to the backend.
  // Example : API.post("users/create/", formData) -> devuelve una respuesta, la cual, podemos añadir al contexto y tenerla en toda nuestra aplicación
  //const[user, setuser] = useState() // user collects value / setUser gives value.
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  }
 // ask about error & errors.
  return (
    <form class="form-box" onSubmit={handleSubmit(onSubmit)}>
      <label>
        Name
        <input type="text" {...register("name", { required: true })} />
        {/* {errors.name?.type === "required" && "Name is required"} */}
      </label>
      <label>
        Email
        <input
          type="email"
          {...register("email", {
            required: true,
            pattern:
            /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
            
          },
          //{errors.email?.type === 'required' && "Email is required"},
          //{errors.email?.type === 'pattern' && "Enter a valid email adress: example@example.com"}
          )}
         
        />
      </label>
      <label>
        Password
        <input type="password" {...register("password",{required:true, pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$/ })} />
        {/* {errors.password?.type === 'required' && "Password is required"}
        {errors.password?.type === 'pattern' && "Enter a valid password: Password must contain at least 8 characters, 1 uppercase, 1 lowercase, 1 symbol & 1 number"}       */}
      </label>
      <button>Send</button>
    </form>
  );
};

export default LoginForm;
