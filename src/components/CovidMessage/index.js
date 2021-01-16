import React from "react";
import { View, Text } from "react-native";

import styles from "./styles.js";

const CovidMessage = (props) => {
    return (
        <View style={styles.container}>
            <Text>Travel only if necessary</Text>
            <Text>
                Travel only if necessary , only to upgrade the version and the bing one
                traval
            </Text>
            <Text style={styles.learnMore}>
                Learn more
            </Text>
        </View>
    );
};

export default CovidMessage;