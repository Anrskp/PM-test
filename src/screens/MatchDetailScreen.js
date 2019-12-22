import React from 'react';
import { Text, View, FlatList } from 'react-native';
import { data } from '../mock-data/match'
import MatchComment from '../components/MatchComment'

const MatchDetailScreen = props => {

    return(
        <View>
            <View>
                <Text> {data.matchInfo.competition.name} </Text>
                <Text> {data.matchInfo.description} </Text>
            </View>

            <FlatList
                data={data.message}
                keyExtractor={item => item.id}
                renderItem={({item}) => {
                    return ( 
                        <MatchComment 
                            comment={item.comment}
                            type={item.type}
                        />
                    )
                }}
            />
        </View>
    )
}

export default MatchDetailScreen;