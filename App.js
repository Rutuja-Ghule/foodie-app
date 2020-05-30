import React, { Component } from 'react';
import { FoodList } from './src/components/Foodlist';
import { FoodDetail } from './src/components/FoodDetail';
import { About, Bookmarks } from './src/components/About';
import {
  StackNavigator, TabNavigator, DrawerNavigator
} from 'react-navigation';


export default class App extends Component<{}> {
  render() {
    return (
      <Drawer />
    );
  }
}

const VegetarianList = StackNavigator({
  FoodList: {
    screen: props => <FoodList {...props} category="Vegetarian" />,
    navigationOptions: {
      header: null
    },
  },
  FoodDetail: {
    screen: FoodDetail,
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.meal.strMeal}`,
      tabBarVisible: false,
    }),
  },
});

const DesertList = StackNavigator({
  FoodList: {
    screen: props => <FoodList {...props} category="Desert" />,
    navigationOptions: {
      header: null
    },
  },
  FoodDetail: {
    screen: FoodDetail,
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.meal.strMeal}`,
      tabBarVisible: false,
    }),
  },
});

const VeganList = StackNavigator({
  FoodList: {
    screen: props => <FoodList {...props} category="Vegan" />,
    navigationOptions: {
      header: null
    },
  },
  FoodDetail: {
    screen: FoodDetail,
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.meal.strMeal}`,
      tabBarVisible: false,
    }),
  },
});

const BreakfastList = StackNavigator({
  FoodList: {
    screen: props => <FoodList {...props} category="Breakfast" />,
    navigationOptions: {
      header: null
    },
  },
  FoodDetail: {
    screen: FoodDetail,
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.meal.strMeal}`,
      tabBarVisible: false,
    }),
  },
});

const MiscellaneousList = StackNavigator({
  FoodList: {
    screen: props => <FoodList {...props} category="Miscellaneous" />,
    navigationOptions: {
      header: null
    },
  },
  FoodDetail: {
    screen: FoodDetail,
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.meal.strMeal}`,
      tabBarVisible: false,
    }),
  },
});



// Need to figure out a way to pass param/prop from TabNavigator to StackNavigator
// so that above stackNavigators are not repeated

const Tabs = TabNavigator({
  Vegetarian: {
    screen: VegetarianList,
    navigationOptions: {
      tabBarLabel: 'Vegetarian',
    },
  },
  Desert: {
    screen: DesertList,
    navigationOptions: {
      tabBarLabel: 'Desert',
      tabBarIcon: ({ tintColor }) => <Icon name="list" size={35} color={tintColor} />
    },
  },
  Vegan: {
    screen: VeganList,
    navigationOptions: {
      tabBarLabel: 'Vegan',
    },
  },
  Breakfast: {
    screen: BreakfastList,
    navigationOptions: {
      tabBarLabel: 'Breakfast',
    },
  },
  Miscellaneous: {
    screen: MiscellaneousList,
    navigationOptions: {
      tabBarLabel: 'Other',
    },
  }
}, {
    'lazy': true,
    tabBarOptions: {
      scrollEnabled: true,
      activeTintColor: '#e91e63',
    },
  },
);


const Drawer = DrawerNavigator({

  Home: {
    screen: Tabs,
    navigationOptions: {
      tabBarLabel: 'Home'
    },
  },
  About: {
    screen: About,
    navigationOptions: {
      tabBarLabel: 'Aboutqwrewrw'
    },
  },
  Bookmarks: {
    screen: Bookmarks,
    navigationOptions: {
      tabBarLabel: 'Bookmarks',
      tabBarIcon: ({ tintColor }) => <Icon name="list" size={70} color={tintColor} />
    },
  }

});


