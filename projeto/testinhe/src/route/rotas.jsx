import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import  CreatePost  from "../pages/CreatePost";
import  UpdatePost  from "../pages/UpdatePost";
import  OnePost  from "../pages/OnePost";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Cadastro from "../pages/Cadastro"
import useAuth from "../hooks/useAuth"

const Private =({Item}) =>{
  const {signed} = useAuth()
    return signed > 0 ? <Item /> : <Login/>
}

const RoutesApp = () => {
    return(
        <BrowserRouter>
        <Fragment>
            <Routes>
                <Route exact path="/home" element={<Private Item={Home}/>} />
                <Route path="/" element={<Login/>} />
                <Route path="/cadastro" element={<Cadastro/>} />
                <Route path="/createPost" element={<CreatePost />} />
                <Route path="/updatePost/:id" element={<UpdatePost />} />
                <Route path="/post/:id" element={<OnePost />} />

            </Routes>
        </Fragment>
        </BrowserRouter>
    );
} 
export default RoutesApp