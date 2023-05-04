import { Image, Text, TouchableOpacity } from 'react-native'

import { ANIME, NavProps } from '../config/models'
import { useNavigation } from '@react-navigation/native'

interface CardProps {
    data: ANIME
}

export default function Card({ data }: CardProps) {
    const navigation = useNavigation<NavProps>()

    return (
        <TouchableOpacity style={{ width: 190, height: 260 }} onPress={() => navigation.navigate('Details', { id: data.id })}>
            <Image 
                source={{ uri: data.coverImage.extraLarge }} 
                alt='Naruto and Kakashi' 
                resizeMode='cover'
                style={{ 
                    width: '100%', 
                    height: '100%', 
                    overflow: 'hidden', 
                    borderRadius: 4,
                }}
            />
            <Text style={{ color: '#fff' }} numberOfLines={2}>{data.title.userPreferred}</Text>
        </TouchableOpacity>
    )
}