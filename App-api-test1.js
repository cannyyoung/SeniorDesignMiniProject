//Nutrition api key for dept of agriculture: uEPEwLs6B6dcRUNu6KeYJ2iCDRRznxP0AomGKNq4
//https://api.nal.usda.gov/fdc/v1/foods/search?query=apple&pageSize=2&api_key=uEPEwLs6B6dcRUNu6KeYJ2iCDRRznxP0AomGKNq4

import React from "react";
import {
    StyleSheet,
    View,
    ActivityIndicator,
    FlatList,
    Text,
    TouchableOpacity
} from "react-native";


export default class Source extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: "Source Listing",
            headerStyle: { backgroundColor: "#fff" },
            headerTitleStyle: { textAlign: "center", flex: 1 }
        };
    };

    //constructor
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            dataSource: []
        };
    }
    componentDidMount() {

        fetch("https://api.nal.usda.gov/fdc/v1/foods/search?query=apple&pageSize=2&api_key=uEPEwLs6B6dcRUNu6KeYJ2iCDRRznxP0AomGKNq4")
            .then(response => response.json())
            .then((responseJson) => {
                this.setState({
                    loading: false,
                    dataSource: responseJson
                })
            })
            .catch(error => console.log(error)) //to catch the errors if any
    }