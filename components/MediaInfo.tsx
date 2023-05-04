import { ScrollView, View, Text, StyleSheet } from 'react-native'

interface MediaInfoProps {
    infos: {
        Media: {
            season: string;
            seasonYear: number;
            type: string;
            source: string;
            format: string;
            episodes: string;
            averageScore: number;
            status: string;
            genres: string[]
        }
    }
}

export default function MediaInfo({ infos }: MediaInfoProps) {
    return (
        <ScrollView horizontal style={styles.container} contentContainerStyle={{ gap: 8, padding: 16 }}>
            <View style={styles.item}>
                <Text style={styles.first}>STATUS:</Text>
                <Text>{infos.Media.status}</Text>
            </View>

            <View style={styles.item}>
                <Text style={styles.first}>SEASON YEAR:</Text>
                <Text>{infos.Media.seasonYear}</Text>
            </View>

            <View style={styles.item}>
                <Text style={styles.first}>SEASON:</Text>
                <Text>{infos.Media.season}</Text>
            </View>

            <View style={styles.item}>
                <Text style={styles.first}>FORMAT:</Text>
                <Text>{infos.Media.format}</Text>
            </View>

            <View style={styles.item}>
                <Text style={styles.first}>TYPE:</Text>
                <Text>{infos.Media.type}</Text>
            </View>

            <View style={styles.item}>
                <Text style={styles.first}>AVERAGE SCORE:</Text>
                <Text>{infos.Media.averageScore}%</Text>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'whitesmoke',
        borderRadius: 4,
        marginBottom: 16,
    },
    item: {
        flexDirection: 'row',
        gap: 2
    },
    first: {
        color: 'mediumpurple',
        fontWeight: '500'
    }
})