import React from 'react';
import { Text, View, Slider, StyleSheet } from 'react-native';

export default function UdaciSlider({ step, unit, value, max, onChange}) {
    return (
        <View style={styles.activityDetails}>
            <Slider
                step={step}
                value={value}
                maximumValue={max}
                minimumValue={0}
                onValueChange={onChange}
                >
            </Slider>
            <View>
                <Text>{value}</Text>
                <Text>{unit}</Text>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
})
