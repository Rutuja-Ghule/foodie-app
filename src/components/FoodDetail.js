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

export class FoodDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            idMeal: '',
            strMeal: '',
            strCategory: '',
            strArea: '',
            strInstructions: '',
            strMealThumb: '',
            strTags: '',
            strIngredient1: '',
            strIngredient2: '',
            strIngredient3: '',
            strIngredient4: '',
            strIngredient5: '',
            strIngredient6: '',
            strIngredient7: '',
            strIngredient8: '',
            strIngredient9: '',
            strIngredient10: '',
            strIngredient11: '',
            strIngredient12: '',
            strIngredient13: '',
            strIngredient14: '',
            strIngredient15: '',
            strIngredient16: '',
            strIngredient17: '',
            strIngredient18: '',
            strIngredient19: '',
            strIngredient20: '',
            strMeasure1: '',
            strMeasure2: '',
            strMeasure3: '',
            strMeasure4: '',
            strMeasure5: '',
            strMeasure6: '',
            strMeasure7: '',
            strMeasure8: '',
            strMeasure9: '',
            strMeasure10: '',
            strMeasure11: '',
            strMeasure12: '',
            strMeasure13: '',
            strMeasure14: '',
            strMeasure15: '',
            strMeasure16: '',
            strMeasure17: '',
            strMeasure18: '',
            strMeasure19: '',
            strMeasure20: '',
            dateModified: ''
        }
    };

    componentDidMount() {
        this.fetchFoodData();
        console.log('Displaying food data');
        console.log(this.state.idMeal);
        console.log(this.state.strMeal);
    }

    fetchFoodData() {
        fetch('http://www.themealdb.com/api/json/v1/1/lookup.php?i=' + this.props.navigation.state.params.meal.idMeal)
            .then((response) => response.json())
            .then((response) => {
                this.setState({
                    idMeal: response.meals[0].idMeal,
                    strMeal: response.meals[0].strMeal,
                    strCategory: response.meals[0].strCategory,
                    strArea: response.meals[0].strArea,
                    strInstructions: response.meals[0].strInstructions,
                    strMealThumb: response.meals[0].strMealThumb,
                    strTags: response.meals[0].strTags,
                    strIngredient1: response.meals[0].strIngredient1,
                    strIngredient2: response.meals[0].strIngredient2,
                    strIngredient3: response.meals[0].strIngredient3,
                    strIngredient4: response.meals[0].strIngredient4,
                    strIngredient5: response.meals[0].strIngredient5,
                    strIngredient6: response.meals[0].strIngredient6,
                    strIngredient7: response.meals[0].strIngredient7,
                    strIngredient8: response.meals[0].strIngredient8,
                    strIngredient9: response.meals[0].strIngredient9,
                    strIngredient10: response.meals[0].strIngredient10,
                    strIngredient11: response.meals[0].strIngredient11,
                    strIngredient12: response.meals[0].strIngredient12,
                    strIngredient13: response.meals[0].strIngredient13,
                    strIngredient14: response.meals[0].strIngredient14,
                    strIngredient15: response.meals[0].strIngredient15,
                    strIngredient16: response.meals[0].strIngredient16,
                    strIngredient17: response.meals[0].strIngredient17,
                    strIngredient18: response.meals[0].strIngredient18,
                    strIngredient19: response.meals[0].strIngredient19,
                    strIngredient20: response.meals[0].strIngredient20,
                    strMeasure1: response.meals[0].strMeasure1,
                    strMeasure2: response.meals[0].strMeasure2,
                    strMeasure3: response.meals[0].strMeasure3,
                    strMeasure4: response.meals[0].strMeasure4,
                    strMeasure5: response.meals[0].strMeasure5,
                    strMeasure6: response.meals[0].strMeasure6,
                    strMeasure7: response.meals[0].strMeasure7,
                    strMeasure8: response.meals[0].strMeasure8,
                    strMeasure9: response.meals[0].strMeasure9,
                    strMeasure10: response.meals[0].strMeasure10,
                    strMeasure11: response.meals[0].strMeasure11,
                    strMeasure12: response.meals[0].strMeasure12,
                    strMeasure13: response.meals[0].strMeasure13,
                    strMeasure14: response.meals[0].strMeasure14,
                    strMeasure15: response.meals[0].strMeasure15,
                    strMeasure16: response.meals[0].strMeasure16,
                    strMeasure17: response.meals[0].strMeasure17,
                    strMeasure18: response.meals[0].strMeasure18,
                    strMeasure19: response.meals[0].strMeasure19,
                    strMeasure20: response.meals[0].strMeasure20,
                    dateModified: response.meals[0].dateModified,
                });
            });
    }

    render() {
        return (
            <ScrollView contentContainerStyle={styles.column}>
                <Image
                    source={{ uri: this.state.strMealThumb || 'pic' }}
                    style={{ width: 300, height: 300 }} >
                </Image>

                <Text style={styles.titleText}>Ingredients</Text>
                <Text>{this.state.strIngredient1} -- {this.state.strMeasure1}</Text>
                <Text>{this.state.strIngredient2} -- {this.state.strMeasure2}</Text>
                <Text>{this.state.strIngredient3} -- {this.state.strMeasure3}</Text>
                <Text>{this.state.strIngredient4} -- {this.state.strMeasure4}</Text>
                <Text>{this.state.strIngredient5} -- {this.state.strMeasure5}</Text>
                <Text style={styles.titleText}>Instructions</Text>
                <Text>{this.state.strInstructions} </Text>
            </ScrollView>
        );
    }
}


const styles = StyleSheet.create({
    column: {
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 10,
        backgroundColor: '#f4f4f4',
        alignItems: 'center'
    },
    titleText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 3
    }
});