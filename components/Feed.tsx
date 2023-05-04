import { View, Text, ScrollView } from 'react-native'

import { GET_MEDIA_QUERY } from "../config/models";
import { useMedia } from "../hooks/useMedia";
import Card from './Card';

export default function Feed({ sort, seasonYear, title }: GET_MEDIA_QUERY) {
    const { data, error, loading } = useMedia(sort, seasonYear)

    if (loading) return <Text style={{ display: 'none' }}>Loading...</Text>

    return (
        <View style={{ marginBottom: 16 }}>
            {error && <Text style={{ color: '#fff', fontSize: 20, marginBottom: 16 }}>{error.message}</Text>}
            {!error && <Text style={{ color: '#fff', fontSize: 20, marginBottom: 16 }}>{title}</Text>}

            {!error && (
                <ScrollView horizontal contentContainerStyle={{ gap: 16, height: 300 }}>
                    {data.Page.media.map((anime: any) => <Card key={anime.id} data={anime} />)}
                </ScrollView>
            )}
        </View>
    )
}