//Nutrition api key for dept of agriculture: uEPEwLs6B6dcRUNu6KeYJ2iCDRRznxP0AomGKNq4
//https://api.nal.usda.gov/fdc/v1/foods/search?query=apple&pageSize=2&api_key=uEPEwLs6B6dcRUNu6KeYJ2iCDRRznxP0AomGKNq4
//with barcode code: https://api.nal.usda.gov/fdc/v1/food/{this.state.code}?api_key=uEPEwLs6B6dcRUNu6KeYJ2iCDRRznxP0AomGKNq4

import React from "react";


import {
    StyleSheet,
    View,
    ActivityIndicator,
    FlatList,
    Text,
    TouchableOpacity
} from "react-native";

class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }





    componentDidMount() {
        fetch("https://api.nal.usda.gov/fdc/v1/food/"+ {this.state.code} + "?api_key=uEPEwLs6B6dcRUNu6KeYJ2iCDRRznxP0AomGKNq4")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result.items
                    });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <ul>
                    {items.map(item => (
                        <li key={item.id}>
                            {item.nutrientId} {item.price}
                        </li>
                    ))}
                </ul>
            );
        }
    }


}