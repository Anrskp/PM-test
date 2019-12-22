import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs'
import HomeScreen from '../screens/HomeScreen';
import MatchScreen from '../screens/MatchScreen';
import TeamScreen from '../screens/TeamScreen'
import MatchDetailScreen from '../screens/MatchDetailScreen'


const matchesNavigatior = createStackNavigator({
    Matches: MatchScreen,
    MatchDetail: MatchDetailScreen
})

const Navigation = createBottomTabNavigator({
    Home: HomeScreen,
    Team: TeamScreen,
    Matches: matchesNavigatior
    

});

export default createAppContainer(Navigation);