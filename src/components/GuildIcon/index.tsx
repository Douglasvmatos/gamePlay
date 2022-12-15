import React from 'react'
import { Image } from 'react-native'

import { styles } from './styles'


export function GuildIcon() {
 const uri = 'https://cdn-icons-png.flaticon.com/512/2335/2335349.png'

    return (
        <Image
        source={{ uri }}
        style= {styles.image}
        resizeMode="cover"
        />
    )
}