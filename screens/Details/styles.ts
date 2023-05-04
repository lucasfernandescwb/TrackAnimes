import { StyleSheet } from "react-native"

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#212121',
        color: '#fff',
    },
    header: {
        height: 240,
        position: 'relative'
    },
    bannerImage: {
        width: '100%',
        height: '100%',
    },
    coverImage: {
        width: 190,
        height: 260,
        overflow: 'hidden',
        borderRadius: 4,
    },
    animeTitle: {
        fontSize: 18,
        color: 'coral',
        paddingHorizontal: 16,
    },
    description: {
        color: '#fff'
    },
})
