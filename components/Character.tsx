import { View, Image, Text, StyleSheet } from 'react-native'

interface CharacterProps {
    info: {
        id: number;
        name: { userPreferred: string; native: string; }
        image: { large: string; }
    }
}

export default function Character({ info }: CharacterProps) {
    return (
        <View style={styles.container}>
            <Image 
                source={{ uri: info.image.large }} 
                alt={info.name.userPreferred} 
                style={styles.cImage}
                resizeMode='cover'
            />
            <View style={styles.infos}>
                <Text style={styles.highlightName} numberOfLines={1}>{info.name.userPreferred}</Text>
                <Text style={styles.nativeName} numberOfLines={1}>{info.name.native}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 90,
        overflow: 'hidden',
        borderRadius: 4,
        backgroundColor: 'whitesmoke',
        flexDirection: 'row',
        gap: 8
    },
    cImage: {
        width: '30%',
        height: '100%',
        borderTopRightRadius: 4,
        borderBottomRightRadius: 4,
    },
    infos: {
        justifyContent: 'center',
        gap: 8
    },
    highlightName: {
        color: 'coral',
        fontSize: 18,
        fontWeight: '700'
    },
    nativeName: {
        fontSize: 10
    }
})
