import React from "react";
import { View, Text } from "react-native";


import HomeMap from "../../components/HomeMap";
import CovidMessage from "../../components/CovidMessage";
import HomeSearch from "../../components/HomeSearch";


import styles from "./styles.js";


const HomeScreen = (props) => {
    return (
        <View>
            <HomeMap />

            {/* Covid Message */}
            <CovidMessage />

            {/* Bottom Camp */}
            <HomeSearch />

        </View>
    );
};

export default HomeScreen;