import React from 'react';
import { View, Text, StyleSheet, Image} from 'react-native';
import icons from '../assets/icons';

let commentTypes = {
    dark: ['kick off', 'half time', 'full time', 'goal'],
    grey: ['post_match summary', 'yellow card', 'substitution', 'highlight', 'assist', 'stats'],
    light: ['comment', 'team news']    
}

getStyle = (type) => {
    if(commentTypes.dark.includes(type)) return styles.dark;
    if(commentTypes.grey.includes(type)) return styles.grey;
    else return styles.light;
}

const MatchComment = props => {
    return (
        <View style={styles.container}>
            <View style={[getStyle(props.type), styles.logoContainer]}>
                <Image 
                    style={styles.logo} 
                    source={icons[props.type]} 
                />
            </View>
            <View style={[getStyle(props.type), styles.event]}>
                <Text style={commentTypes.dark.includes(props.type) ? {color : 'white'} : {}}>{props.comment}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flexDirection: 'row',
    },

    event: {
        padding: 20,
        flex: 5
    },

    logoContainer: {
        flex: 1,
        padding: 20
    },

    logo: {
        height: 40,
        width: 40
    },

    light: {
        borderBottomColor: 'lightgrey', 
        borderBottomWidth: 1
    }, 

    grey: {
        backgroundColor: 'lightgrey', 
        borderBottomColor: 'white',
        borderBottomWidth: 2    
    },

    dark : {
        backgroundColor: 'grey', 
        color: 'white'
    }
})

export default MatchComment;
