import React, {useState} from 'react'
import { Text } from 'react-native';
import { WellComeMsg, RegisterMain, InputRegister, PasswordContainer, PasswordInput, LoginDirect, ButtonRegister, TextRegisterButton } from "./style"
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons'; 
import theme from "../../theme/theme";
import Toast from 'react-native-toast-message';
import { registerApi } from '../../service/accountService'

function Register ({navigation}) {
    const [eye, setEye] = useState(true)
    const [login, setLogin] = useState("")
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")
    const [conPass, setConPass] = useState("")

    const validEmail = (email) => {
        const validRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(email.match(validRegex)){
            return true
        } else {
            return false
        }
    }

    const handleRegister = async () => {
        if(login == "" || email == "" || pass == "" || conPass == "") {
            Toast.show({
                type: 'error',
                text1: 'Falha ao criar conta',
                text2: 'Preencha todos os campos',
                position: 'top'
              });
        }else if(conPass != pass) {
            Toast.show({
                type: 'error',
                text1: 'Falha ao criar conta',
                text2: 'As senhas devem ser iguais',
                position: 'top'
              });
        }else if(!validEmail(email)){
            Toast.show({
                type: 'error',
                text1: 'Falha ao criar conta',
                text2: 'Insira um e-mail válido',
                position: 'top'
              });
        }else {
            let newUser = {
                username: login,
                email: email,
                role: ["user"],
                password: pass
            }

            Toast.show({
                type: 'info',
                text1: 'Carregando',
                text2: 'Aguarde a resposta',
                position: 'top',
                visibilityTime: 60000
              });

            const request = {status: 200}
            if(request.status == 200){
                Toast.hide()
                Toast.show({
                    type: 'success',
                    text1: 'Registrado com sucesso',
                    text2: 'Vá para página de login para continuar',
                    position: 'top'
                  });
                  navigation.navigate("login")
            }else {
                Toast.hide()
                Toast.show({
                    type: 'error',
                    text1: 'Falha ao criar conta',
                    text2: request.response.data.message,
                    position: 'top'
                  });
            }
         } 
        
        let newUser = {
            username: login,
            email: email,
            role: ["user"],
            password: pass
        }

       

        console.log(newUser)

    }

    const handleLogin = () => {
        navigation.navigate("login")
    }

    return(
        <RegisterMain>
            <WellComeMsg>Gerencie as suas habilidades {'\n'} em seu jogo predileto!</WellComeMsg>
            <InputRegister placeholder="Login" placeholderTextColor={theme.primary} style={{marginTop: 30}} inputMode="text" value={login} onChange={(e) => setLogin(e.nativeEvent .text)}/>
            <InputRegister placeholder="E-mail" placeholderTextColor={theme.primary} inputMode="email" value={email} onChange={(e) => setEmail(e.nativeEvent.text)}/>
            <PasswordContainer>
                <PasswordInput placeholder="Senha" placeholderTextColor={theme.primary} inputMode="text" secureTextEntry={eye} value={pass} onChange={(e) => setPass(e.nativeEvent.text)}/>
                {eye ? <Ionicons name='eye' size={30} onPress={() => setEye(!eye)}/> : <Ionicons name='eye-off' size={30} onPress={() => setEye(!eye)}/>}
            </PasswordContainer>
            <InputRegister placeholder="Confirmar Senha" placeholderTextColor={theme.primary} inputMode="text" secureTextEntry={eye} value={conPass} onChange={(e) => setConPass(e.nativeEvent.text)}/>
            <LoginDirect onPress={handleLogin}>Já possui conta?</LoginDirect>
            <ButtonRegister onPress={handleRegister}><TextRegisterButton>Registrar</TextRegisterButton></ButtonRegister>
        </RegisterMain>
    )
}

export default Register