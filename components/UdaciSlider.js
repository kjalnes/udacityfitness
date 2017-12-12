import React from 'react';
import { Text, View, Slider } from 'react-native';

export default function UdaciSlider({ step, unit, value, max, onChange}) {
    return (
        <View>
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
