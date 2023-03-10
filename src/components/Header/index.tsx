import React, { ReactNode } from 'react';
import { View, Text } from 'react-native'

import { BorderlessButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons'

import { styles } from './styles'
import { theme } from '../../global/styles/theme';
import { useNavigation } from '@react-navigation/native';

type Props = {
    title: string,
    action?: ReactNode
}

export function Header({ title, action}: Props){

    const navigation = useNavigation()

    function handleGoBack() {
        navigation.goBack()
    }

    return (
        <View style={styles.container}>
               <BorderlessButton onPress={handleGoBack}>
                    <Feather
                        name="arrow-left"
                        size={24}
                        color={theme.colors.heading}
                    />
               </BorderlessButton>
               <Text style={styles.title}>{title}</Text>

               {
                action 
                ?
                <View>
                    { action}
                </View>
                :
                <View style={{width: 24}}/>
               }
        </View>
    )
}; 

