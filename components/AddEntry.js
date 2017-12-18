import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Platform, StyleSheet } from 'react-native';
import { getMetricMetaInfo, timeToString, getDailyReminderValue } from '../utils/helpers';
import UdaciSlider from './UdaciSlider';
import UdaciSteppers from './UdaciSteppers';
import TextBtn from './TextBtn';
import DateHeader from './DateHeader';
import { Ionicons } from '@expo/vector-icons';
import { submitEntry, removeEntry } from '../utils/api';
import { connect } from 'react-redux';
import { addEntry } from '../actions';
import { white, purple } from '../utils/colors';

function SubmitBtn ({ onPress }) {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={ Platform.OS === 'ios' ? styles.iosSubtmitBtn : styles.androidSubmitBtn}>
            <Text style={styles.subtmitBtnText}>SUBMIT</Text>
        </TouchableOpacity>
    )
}


class AddEntry extends Component {
    state = {
        run: 0,
        bike: 0,
        swim: 0,
        sleep: 0,
        eat: 0
    }

    increment = (metric) => {
        const { max, step } = getMetricMetaInfo(metric);

        this.setState((state) => {
            const count = state[metric] + step;

            return {
                ...state,
                [metric]: count > max ? max : count
            }
        })
    }

    decrement = (metric) => {
        const { step } = getMetricMetaInfo(metric);

        this.setState((state) => {
            count = state[metric] - step
            return {
                ...state,
                [metric]: count < 0 ? 0 : count
            }
        })
    }

    slide = (metric, value) => {
        this.setState(() => ({
            [metric]: value
        }))
    }

    submit = () => {
        const key = timeToString();
        const entry = this.state;

        this.props.dispatch(addEntry({
            [key]: entry
        }))

        this.setState(() => ({ run: 0, bike: 0, swim: 0, sleep: 0, eat: 0 }))

        // navigate to home
        submitEntry({ key, entry })
        // clear local notification

    }

    reset = () => {
        const key = timeToString();

        // update redux
        this.props.dispatch(addEntry({
            [key]: getDailyReminderValue()
        }))
        // Route to home
        removeEntry(key)
    }

    render() {
        const metaInfo = getMetricMetaInfo();

        if(this.props.alreadyLogged) {
            return (
                <View style={styles.center}>
                    <Ionicons
                        name={ Platform.OS === 'ios' ? 'ios-happy-outline' : 'md-happy'}
                        size={100}
                    />
                    <Text>You already logged your information for today.</Text>
                    <TextBtn
                        style={{padding: 10}}
                        onPress={this.reset}>
                        Reset
                    </TextBtn>
                </View>
            )
        }

        return (
            <View style={styles.container}>
                <DateHeader date={(new Date()).toLocaleDateString()}/>
                { Object.keys(metaInfo).map( (key) => {
                    console.log('key', key)
                    const { getIcon, type, ...rest } = metaInfo[key]
                    const value = this.state[key]
                    console.log('key', key)
                    console.log('type', type)
                    console.log(getIcon())
                    return (
                        <View key={key} style={styles.row} >
                            {getIcon()}
                            {type === 'slider'
                                ?   <UdaciSlider
                                        value={value}
                                        onChange={(value) => this.slide(key,value)}
                                        {...rest}
                                    />
                                :   <UdaciSteppers
                                        value={value}
                                        onIncrement={() => this.increment(key)}
                                        onDecrement={() => this.decrement(key)}
                                        {...rest}
                                    />
                            }
                        </View>
                    )
                })}
                <SubmitBtn onPress={this.submit} />
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    const key = timeToString();

    return {
        alreadyLogged: state[key] && typeof state[key].today === 'undefined'
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: white
    },
    row: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center'
    },
        iosSubtmitBtn: {
        backgroundColor: purple,
        padding: 10,
        borderRadius: 7,
        height: 45,
        marginLeft: 40,
        marginRight: 40
    },
    androidSubmitBtn: {
        backgroundColor: purple,
        padding: 10,
        borderRadius: 2,
        height: 45,
        marginLeft: 30,
        marginRight: 30,
        alignSelf: 'flex-end',
        justifyContent: 'center',
        alignItems: 'center'
    },
    subtmitBtnText: {
        color: white,
        fontSize: 22,
        textAlign: 'center'
    },
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 30,
        marginLeft: 30
    }
})

export default connect(mapStateToProps)(AddEntry);
