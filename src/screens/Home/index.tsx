import React, { useState } from 'react'
import { View, FlatList, Text } from 'react-native'

import { styles } from './styles'

import { Profile } from '../../components/Profile'
import { ButtonAdd } from '../../components/ButtonAdd/ButtonAdd'
import { CategorySelector } from '../../components/CategorySelector'
import { ListHeader } from '../../components/ListHeader'
import { Appointment } from '../../components/Appointment'
import { ListDivider } from '../../components/ListDivider'

import { useNavigation } from '@react-navigation/native'



export function Home() {
    const [category, setCategory] = useState('')

    const navigation = useNavigation()

    const appointments = [
        {
            id: '1',
            guild: {
                id: '1',
                name: 'Lendários',
                icon: null,
                owner: true
            },
            category: '1',
            date: '13/12 ás 11:14h',
            description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
        },
        {
            id: '2',
            guild: {
                id: '1',
                name: 'Lendários',
                icon: null,
                owner: true
            },
            category: '1',
            date: '13/12 ás 11:14h',
            description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
        }
    ]

    function handleCategorySelect(categoryId: string) {
        categoryId === category ? setCategory('') : setCategory(categoryId)
    }

    function handleAppointmentDetails() {
        navigation.navigate('AppointmentDetails')
    }
    function handleAppointmentCreate() {
        navigation.navigate('AppointmentCreate')
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                < Profile />
                <ButtonAdd onPress={handleAppointmentCreate} />
            </View>
            <View>
                <CategorySelector
                    categorySelected={category}
                    setCategory={handleCategorySelect}
                />
                <ListHeader
                    title="Partidas Agendadas"
                    subtitle="Total 6"
                />

            </View>
            <FlatList
                data={appointments}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <Appointment
                        data={item}
                        onPress={handleAppointmentDetails}
                    />
                )}
                ItemSeparatorComponent={() => <ListDivider />}
                contentContainerStyle={{ paddingBottom: 69}}
                style={styles.matches}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}