import { View, Text, ImageBackground, ScrollView } from 'react-native'

import WELCOME_IMG from '../../assets/welcome_img.png'

import styles from './styles'
import Feed from '../../components/Feed'

export default function Home() {
    return (
        <ScrollView contentContainerStyle={{ padding: 16, backgroundColor: '#212121' }}>

            <ImageBackground 
                source={WELCOME_IMG} 
                alt='Naruto and Kakashi' 
                style={styles.bannerImg}
                resizeMode='cover'
            >
                <View style={{ paddingVertical: 64 }}>
                    <Text style={styles.h1}>Welcome to Track Animes! 😎</Text>
                </View>
            </ImageBackground>

            <Feed title='Trending now' sort='TRENDING_DESC' />

            <Feed title='Popular this season' sort='TRENDING_DESC' seasonYear={2023} />

            <Feed title='All time popular' sort='POPULARITY_DESC' />

        </ScrollView>
    )
}