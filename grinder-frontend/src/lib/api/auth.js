import client from './client';

export const signup = ({userid,username,password})=>
    client.post("/api/auth/signup",{userid,username,password});

export const signin = ({userid,password})=>
    client.post("/api/auth/signin",{userid,password});