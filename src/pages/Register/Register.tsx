import React, { ReactElement, useState } from "react";
/* import 'bulma/css/bulma.min.css'; */
import { Box, Content, Form } from "react-bulma-components";
import { Link } from "react-router-dom";
import { Input } from "../../components/Input/Input";
export const Register = (args: any): ReactElement => {
    const [ username, setUsername] = useState("")
    const [ password, setPassword] = useState("")
    const [ email, setEmail] = useState("")

    return (
      <Box style={{ display: "flex", justifyContent: 'center', alignItems: 'center', height: 'calc(100vh - 90px)', backgroundColor: '#F2F5F2' }} >
        <Content
          style={{
            padding: '3rem',
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: "white",
            boxShadow: "2px 2px 2px black",
          }}
        >
          <h1 style={{ marginBottom: '25px' }}>Sign in</h1>
          <Input setValue={setUsername} label={"Username"} placeholder={"e.g. John Doe"} />
          <Input setValue={setEmail} label={"Email"} placeholder={"Please enter a valid email"} />
          <Input setValue={setUsername} label={"Username"} placeholder={"e.g. John Doe"} />
          <Input setValue={setPassword} label={"Password"} placeholder={"password"} />
          <Link to={"register"}>Pas encore inscrit ?</Link>
          <p>Mot de passe oublié ?</p>
        </Content>
      </Box>
  );
};
