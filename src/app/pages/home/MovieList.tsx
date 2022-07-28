import React, {useEffect, useMemo, useState} from 'react';
import {FlatList, View} from 'react-native';
import IMovies from '../../@interfaces/MovieInterface';
import CardList from '../../components/CardList';

const MovieListView: React.FC<{}> = () => {
  const [movies, setMovies] = useState<any[]>([]);

  const getMovies = async () => {
    try {
      const response = await fetch(
        'https://itunes.apple.com/search?term=marvel&media=movie&limit=25',
      );
      const json = await response.json().then(response => {
        setMovies(response['results']);
      });
      return json;
    } catch (error) {
      throw error;
    }
  };

  const moviesComputing = useMemo(() => computingMovies(movies), [movies]);

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <View style={{minHeight: '100%'}}>
      <FlatList
        data={moviesComputing}
        renderItem={({item}) => <CardList movie={item} />}
      />
    </View>
  );
};

const computingMovies = (movies: any[]) => {
  let result: IMovies[] = [];
  movies.forEach(el => {
    let movie: IMovies = {
      title: el['trackName'],
      poster: el['artworkUrl100'],
      genre: el['primaryGenreName'],
      releaseDate: el['releaseDate'],
      contentAdvisoryRating: el['contentAdvisoryRating'],
      trailer: el['previewUrl'],
      description: el['longDescription'],
    };
    result.push(movie);
  });
  return result;
};
export default MovieListView;
