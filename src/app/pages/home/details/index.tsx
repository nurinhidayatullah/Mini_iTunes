import {useRoute} from '@react-navigation/core';
import React from 'react';
import MyAppText from '../../../components/MyAppText';
import IMovies from '../../../@interfaces/MovieInterface';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import textStyle from '../../../@constants/TextStyle';
import Video from 'react-native-video';

const MovieDetailsPage: React.FC<{}> = () => {
  const route = useRoute<any>();
  const movie: IMovies = route.params['params'];
  return (
    <SafeAreaView style={styles.darkTheme}>
      <ScrollView>
        <View style={{...styles.viewContainer, height: 150}}>
          <View style={styles.contentContainer}>
            <Image style={styles.tinyImage} source={{uri: movie.poster}} />
            <View style={styles.content}>
              <MyAppText type={textStyle.heading_bold}>{movie.title}</MyAppText>
              <Text style={styles.advisorContainer}>
                {movie.contentAdvisoryRating}
              </Text>
            </View>
          </View>
        </View>
        <View style={{...styles.viewContainer, height: 400}}>
          <MyAppText type={textStyle.heading_bold}>Trailers</MyAppText>
          <Video
            controls
            source={{uri: movie.trailer}}
            style={styles.backgroundVideo}
          />
        </View>
        <View style={styles.viewContainer}>
          <MyAppText type={textStyle.heading_bold}>About The Movie</MyAppText>
          <MyAppText type={textStyle.md_normal_white}>
            {movie.description}
          </MyAppText>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  darkTheme: {
    backgroundColor: '#000',
    color: 'fff',
    minHeight: '100%',
  },
  viewContainer: {
    paddingHorizontal: 24,
    paddingVertical: 16,
    width: '100%',
    flex: 1,
    borderBottomColor: '#fff',
    borderBottomWidth: 0.5,
  },
  contentContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flex: 4,
  },
  content: {
    paddingHorizontal: 12,
    flex: 3,
  },
  tinyImage: {
    width: '100%',
    height: '100%',
    flex: 1,
  },
  advisorContainer: {
    paddingVertical: 1,
    borderColor: '#fff',
    borderWidth: 0.8,
    flexDirection: 'row',
    flexWrap: 'wrap',
    color: '#fff',
    width: 60,
    textAlign: 'center',
    marginTop: 8,
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    flex: 1,
  },
});
export default MovieDetailsPage;
