import React from "react";
import { View, Text } from "react-native";


import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

import styles from "./styles.js";

const HomeSearch = (props) => {
    return (
        <View>
            <Text>notJust a component</Text>
            {/* Input Box */}
            <View style={styles.inputBox}>
                <Text style={styles.inputText}>Where To?</Text>

                <View style={styles.timeContainer}>
                    <AntDesign name={"clockcircle"} size={16} color={'#535353'} />
                    <Text>Now</Text>
                    <MaterialIcons name={'keyboard-arrow-down'} size={16} />
                </View>
            </View>

            {/* Previous conversation */}


            {/* later conversation */}
        </View>
    );
};

export default HomeSearch;