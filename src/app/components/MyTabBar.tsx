import {View, TouchableOpacity} from 'react-native';
import React, {PropsWithChildren} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import MyAppText from './MyAppText';
import textStyle from '../@constants/TextStyle';

const MyTabBar: React.FC<
  PropsWithChildren<{state: any; descriptors: any; navigation: any}>
> = ({state, descriptors, navigation}) => {
  return (
    <View style={{flexDirection: 'row'}}>
      {state.routes.map((route: any, index: any) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({name: route.name, merge: true});
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        let iconButton;

        if (label === 'Movie') {
          iconButton = <Icon name={'film'} size={25} />;
        } else {
          iconButton = <Icon name={'user'} size={25} />;
        }

        return (
          <TouchableOpacity
            key={label}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              paddingTop: 6,
            }}>
            {iconButton}
            <MyAppText type={textStyle.sm_bold}>{label}</MyAppText>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default MyTabBar;
