import { Button, Flex, Stack } from "@chakra-ui/react";
import { InputComponent } from "../../components/Form/InputComponent";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import CadastroUsuario from "../../components/modalCadastroUsuario/ModalUsuario";
import './login.css'
import api from "../../service/config";
import { useHistory } from "react-router-dom"

type SignInFormData = { 
  email: string;
  password: string;
}


export default function SigIn() {
  let history = useHistory();
  
  /**O metodo handleSubmit recebe os valores do register e esses valores podem ser recuperados
   * atraves de um parametro value dentro da function que o handleSubmit do useForm está envolvendo.
   * 
   * Atraves do metodo formState:{errors} é possivel recuperar um booleano se houve algum erro envolvendo o register
   */
  const { register, handleSubmit, formState:{errors}, formState } = useForm()

  const handleSignIn: SubmitHandler<SignInFormData> = async (value) => {
    
    await new Promise((resolve, reject) => {
      return setTimeout(() => {
        resolve(true)
      }, 2000)
    })
    let informacao: any;
    await  api.post('/login',value)
    .then(
      result => {

        informacao = result.data
        if(informacao.data.statuscode == 200){
          localStorage.setItem('username',informacao.data.user.username)
          localStorage.setItem('idUsuario',informacao.data.user._id)
          localStorage.setItem('auth',informacao.data.auth)
          
          history.push("/home") 
        }else{
          alert('usuario ou senha incorreto')
        }
      }
      
      
    )
      
     

  }

  return (
    // Utilizando component Flex do chakra, que funciona como uma div com display:flex por default
    <Flex w={"100vw"} h={"100vh"} alignItems={"center"} justifyContent={"center"}>
      {/**Todo component Flex por padrão é uma div, basta passar por props as="form" para transformalo em forms */}
      <Flex onSubmit={handleSubmit(handleSignIn)} as="form" flexDirection={"column"} maxWidth={360} width={"100%"} bg={"gray.800"} p={"8"} borderRadius={"8"}>
        {/**Component Stack para adicionar espaçamentos nos elementos */}
        <Stack spacing="4">

          <InputComponent errors={errors.email} {...register("email", {required:"Digite um E-mail válido!"})} name={"email"} type="email" label={"E-mail"} />
         
          <InputComponent errors={errors.password} {...register("password", {required:"Digite uma senha válida!"})} name={"password"} type="password" label={"Password"} />
         
        </Stack>
        {/**formState.isSubmitting observa o estado do forms e retorna um booleano */}
        <Button isLoading={formState.isSubmitting} type="submit" mt="6" colorScheme="blackAlpha">Entrar</Button>
        <CadastroUsuario />
      </Flex>
    </Flex>
  )
}
