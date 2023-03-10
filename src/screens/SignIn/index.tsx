import React from "react"
import { View, 
         Text,
         Image,
         Alert,
         ActivityIndicator
         } from 'react-native'

import { styles } from "./style"
import { ButtonIcon } from "../../components/ButtonIcon"

import IllustrationImg from '../../assets/illustration.png'

import { useAuth } from "../../hooks/auth"
import { theme } from "../../global/styles/theme"


export function SignIn() {
  const { loading, signIn } = useAuth()

  async function handleSignIn() {
    try {
      await signIn();
    } catch (error) {
      Alert.alert('Não foi possível autenticar')
    }
  }

  return (
    <View style={styles.container}>
    
    <Image source={IllustrationImg} 
           style={styles.image}  
           resizeMode='stretch'
    />
    <View style={styles.content}>
        <Text style={styles.title}> 
            Conecte-se {'\n'}
            e organize suas {'\n'}
            jogatinas.
        </Text>
        <Text style={styles.subtitle}>
        Crie grupos para jogar seus games {`\n`}
        favoritos com seus amigos
        </Text>

        {
          loading ? <ActivityIndicator color={theme.colors.primary} />  :
          <ButtonIcon 
          title="Entrar com Discord"
          activeOpacity={0.7}
          onPress={handleSignIn}
          />

        }
    </View>
    </View>
  )
}