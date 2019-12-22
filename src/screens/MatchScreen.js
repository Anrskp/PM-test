import React from 'react';
import { Text, View, Button } from 'react-native';

const MatchScreen = props => {

    return(
        <View>
            <Button title={"Liverpool vs Manchester City"} onPress={() => {props.navigation.navigate('MatchDetail')}}/>
        </View>
    )
}

export default MatchScreen;