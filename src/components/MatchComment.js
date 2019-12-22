import React from 'react';
import { View, Text, StyleSheet, Image} from 'react-native';

let commentTypes = {
    type1: ['kick off', 'half time', 'full time', 'goal'],
    type2: ['post_match summary', 'yellow card', 'substitution', 'highlight', 'assist', 'stats'],
    type3: ['comment', 'team news']    
}

getIcon = (type) => {
    if(type === 'yellow card') return require('../assets/icons/icon_yellow_card.png');
    if(type === 'goal') return require('../assets/icons/icon_goal.png');
    if(type === 'comment' || type === 'highlight' || type === 'stats' || type === 'assist') return require('../assets/icons/icon_comment.png');
    if(type === 'full time') return require('../assets/icons/icon_full_time.png');
    if(type === 'half time') return require('../assets/icons/icon_half_time.png');
    if(type === 'kick off') return require('../assets/icons/icon_kick_off.png');
    if(type === 'post_match summary') return require('../assets/icons/icon_post_match_summary.png');
    if(type === 'substitution') return require('../assets/icons/icon_substitution.png');
    if(type === 'team news') return require('../assets/icons/icon_team_news.png');
    return require('../assets/icons/icon_comment.png');
}

getStyle = (type) => {
    if(commentTypes.type1.includes(type)) return styles.dark;
    if(commentTypes.type2.includes(type)) return styles.grey;
    else return styles.light;
}

const MatchComment = props => {
    return (
        <View style={styles.container}>
            <View style={[getStyle(props.type), styles.logoContainer]}>
                <Image 
                    style={styles.logo} 
                    source={this.getIcon(props.type)} 
                />
            </View>
            <View style={[getStyle(props.type), styles.event]}>
                <Text style={commentTypes.type1.includes(props.type) ? {color : 'white'} : {}}>{props.comment}</Text>
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