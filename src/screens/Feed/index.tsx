import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Button, View } from 'react-native';

// import { Container } from './styles';

const Feed: React.FC = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('stories', { para: 'story' });
  };

  const handlePressToPost = () => {
    navigation.navigate('profile', {
      screen: 'post',
    });
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#ddd' }}>
      <Button title="Go to Stories" onPress={handlePress} />
      <Button title="Go to Profile" onPress={handlePressToPost} />
    </View>
  );
};

export default Feed;