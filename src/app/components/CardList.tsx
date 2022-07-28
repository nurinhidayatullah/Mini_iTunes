import React from 'react';
import IMovies from '../@interfaces/MovieInterface';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import MyAppText from './MyAppText';
import Icon from 'react-native-vector-icons/FontAwesome5';
import textStyle from '../@constants/TextStyle';
import moment from 'moment';
import { useNavigation } from '@react-navigation/core';

const CardList: React.FC<{movie: IMovies}> = ({movie}) => {
    const navigation = useNavigation<any>();
    const goToDetail = () => {
        navigation.navigate('details', {
            params: movie
        });
    }
  return (
    <TouchableOpacity onPress={goToDetail} style={styles.viewContainer}>
      <View style={styles.contentContainer}>
        <Image style={styles.tinyImage} source={{uri: movie.poster}} />
        <View style={styles.content}>
          <MyAppText type={textStyle.md_bold}>{movie.title}</MyAppText>
          <MyAppText type={textStyle.md_normal}>{movie.genre}</MyAppText>
          <MyAppText type={textStyle.md_bold}>{moment(movie.releaseDate).format('D MMM yyyy')}</MyAppText>
        </View>
      </View>
      <View style={styles.chevronBtn}>
        <Icon name={'chevron-right'} size={20} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  viewContainer: {
    paddingHorizontal: 24,
    paddingVertical: 16,
    display: 'flex',
    flexDirection: 'row',
    height: 125,
    width: '100%',
    flex: 1,
    borderBottomColor: '#222',
    borderBottomWidth: 0.5
  },
  contentContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 4
  },
  content: {
    paddingHorizontal: 12,
    flex: 3
  },
  chevronBtn: {
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    flex: 0.2
  },
  tinyImage: {
    width: '100%',
    height: '100%',
    flex: 1
  },
});

export default CardList;
