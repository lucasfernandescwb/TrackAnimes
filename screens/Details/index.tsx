import { View, Text, ScrollView, Image, ActivityIndicator, FlatList } from 'react-native'
import { useRoute } from '@react-navigation/native'

import { useAnime } from '../../hooks/useAnime'
import { CHARACTER } from '../../config/models'

import styles from './styles'
import Character from '../../components/Character'
import MediaInfo from '../../components/MediaInfo'

export default function Details() {
    const route = useRoute()
    const { id } = route.params

    const { data, error, loading } = useAnime(id)

    if (loading) return (
        <View style={{ flex: 1, backgroundColor: '#212121', alignItems: 'center', justifyContent: 'center' }}>
            <ActivityIndicator size='large' />
        </View>
    )

    return (
        <ScrollView style={styles.container}>
            {error && <Text>{error.message}</Text>}
            {data.Media.bannerImage && (
                <View style={{ height: 240, overflow: 'hidden', backgroundColor: '#212121', opacity: .8 }}>
                    <Image
                        source={{ uri: data.Media.bannerImage }}
                        alt={data.Media.title.userPreferred}
                        style={styles.bannerImage}
                        resizeMode='cover'
                    />
                </View>
            )}

            <View style={{ alignItems: 'center', marginTop: data.Media.bannerImage ? -160 : 16, gap: 4 }}>
                <Image
                    source={{ uri: data.Media.coverImage.extraLarge }}
                    alt={data.Media.title.userPreferred}
                    resizeMode='cover'
                    style={styles.coverImage}
                />
                <Text style={styles.animeTitle}>{data.Media.title.userPreferred}</Text>
            </View>

            <View style={{ padding: 16 }}>
                <Text style={styles.description}>{data.Media.description}</Text>

                <View style={{ borderBottomColor: '#666', borderBottomWidth: 1, marginVertical: 24 }} />

                <MediaInfo infos={data} />

                <Text style={{ fontSize: 18, color: 'coral', marginBottom: 16 }}>Most popular characters</Text>

                <View style={{ gap: 16 }}>
                    {data.Media.characters.nodes.map((c: CHARACTER) => (
                        <Character key={c.id} info={c} />
                    ))}
                </View>
            </View>
        </ScrollView>
    )
}