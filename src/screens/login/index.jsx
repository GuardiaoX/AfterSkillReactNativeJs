import React, {useState} from 'react'
import { Text } from 'react-native';
import { WellComeMsg, LoginMain, InputLogin, PasswordContainer, PasswordInput, LoginDirect, ButtonLogin, TextLoginButton } from "./style"
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons'; 
import theme from "../../theme/theme";
import Toast from 'react-native-toast-message';
import { registerApi } from '../../service/accountService'

function Login ({ navigation }) {
    const [eye, setEye] = useState(true)
    const [login, setLogin] = useState("")
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")
    const [conPass, setConPass] = useState("")

   

    const handleLogin = async () => {
        if(login == "" || pass == "") {
            Toast.show({
                type: 'error',
                text1: 'Falha ao criar conta',
                text2: 'Preencha todos os campos',
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
                    text1: 'Entrou com sucesso',
                    text2: 'Divirta-se! 😁',
                    position: 'top'
                  });
                navigation.navigate('home')
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

    }

    return(
        <LoginMain>
            <WellComeMsg>Gerencie as suas habilidades {'\n'} em seu jogo predileto!</WellComeMsg>
            <InputLogin placeholder="Login" placeholderTextColor={theme.primary} style={{marginTop: 30}} inputMode="text" value={login} onChange={(e) => setLogin(e.nativeEvent .text)}/>
            <PasswordContainer>
                <PasswordInput placeholder="Senha" placeholderTextColor={theme.primary} inputMode="text" secureTextEntry={eye} value={pass} onChange={(e) => setPass(e.nativeEvent.text)}/>
                {eye ? <Ionicons name='eye' size={30} onPress={() => setEye(!eye)}/> : <Ionicons name='eye-off' size={30} onPress={() => setEye(!eye)}/>}
            </PasswordContainer>
            <ButtonLogin onPress={handleLogin}><TextLoginButton>Entrar</TextLoginButton></ButtonLogin>
        </LoginMain>
    )
}

export default Login