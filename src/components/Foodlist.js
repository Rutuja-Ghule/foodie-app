import React, { Component } from 'react';
import {
  Text,
  View,
  ListView,
  ScrollView,
  Image,
  StyleSheet,
  TouchableHighlight
} from 'react-native';

export class FoodList extends Component {
    constructor(props) {
      super(props);
      const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
      this.state = {
        foodDataSource: ds,
      };
    }
  
    componentDidMount() {
      console.log('Fetching data');
      this.fetchFoodData();
    }
  
    fetchFoodData() {
      fetch('http://www.themealdb.com/api/json/v1/1/filter.php?c=' + this.props.category)
        .then((response) => response.json())
        .then((response) => {
          console.log('This is the response');
          console.log(response);
          this.setState({
            foodDataSource: this.state.foodDataSource.cloneWithRows(response.meals)
          });
        });
    }
  
    onPress(meal) {
      console.log(meal);
      this.props.navigation.navigate('FoodDetail', { meal: meal });
    }
  
    renderRow(meal, sectionId, rowId, highlightRow) {
      return (
        <TouchableHighlight onPress={() => { this.onPress(meal) }}>
          <View style={styles.row}>
            <Image
              source={{ uri: meal.strMealThumb }}
              style={{ width: 60, height: 50 }}>
            </Image>
            <Text style={styles.rowText}> {meal.strMeal} </Text>
          </View>
        </TouchableHighlight>
      );
    }
  
    render() {
      return (
        <ListView
          dataSource={this.state.foodDataSource}
          renderRow={this.renderRow.bind(this)}
        />
      );
    }
  }


  const styles = StyleSheet.create({
    row: {
      flexDirection: 'row',
      justifyContent: 'center',
      padding: 10,
      backgroundColor: '#f4f4f4',
      marginBottom: 3
    },
    rowText: {
      flex: 1
    },
  });