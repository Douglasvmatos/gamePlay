import React from 'react';
import { ImageBackground, View, Text, FlatList } from 'react-native'
import { BorderlessButton } from 'react-native-gesture-handler';
import { Fontisto } from '@expo/vector-icons'

import { Header } from '../../components/Header';

import { styles } from './styles'
import { theme } from '../../global/styles/theme';

import BannerPng from '../../assets/banner.png'
import { ListHeader } from '../../components/ListHeader';
import { Member } from '../../components/Member';
import { ListDivider } from '../../components/ListDivider';
import { ButtonIcon } from '../../components/ButtonIcon';


export function AppointmentDetails(){
    const members = [
        {
            id: '1',
            username: 'Douglas',
            avatar_url: 'http://github.com/douglasvmatos.png',
            status: 'online'
        },
        {
            id: '2',
            username: 'Jeff',
            avatar_url: 'http://github.com/douglasvmatos.png',
            status: 'offline'
        },
    ]
    return (
        <View style={styles.container}>
            <Header 
            title="Detalhes" 
            action={
                <BorderlessButton>
                    <Fontisto
                        name="share"
                        size={24}
                        color={theme.colors.primary}
                    />
                </BorderlessButton>
                }
            />
            <ImageBackground source={BannerPng} style={styles.banner}>
                <View style={styles.bannerContent}>
                    <Text style={styles.title}>Lendários</Text>
                    <Text style={styles.subtitle}>É hoje que vamos chegar ao challenger sem perder uma partida da md10</Text>
                </View>
            </ImageBackground>
            <ListHeader 
            title="Jogadores"
            subtitle="Total 3"
            />
            <FlatList 
                data={members}
                keyExtractor={item => item.id}
                renderItem={({item}) => (
                    <Member data={item} />
                )}
                ItemSeparatorComponent={() => <ListDivider 
                    />}
                style={styles.member}
            />
            <View style={styles.footer}>
                <ButtonIcon title="Entrar na Partida" />
            </View>

        </View>
    )
}; 

