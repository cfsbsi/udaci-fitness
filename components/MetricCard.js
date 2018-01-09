import React from 'react'
import {View, StyleSheet, Text} from 'react-native'
import DataHeader from './DateHeader'
import {getMetricMetaInfo} from '../utils/helpers'
import {gray} from '../utils/colors'

export default function MetricCard({date, metrics}) {
    return (
        <View>
            {date && <DataHeader date={date}/>}
            {Object.keys(metrics).map((metric) => {
                const {getIcon, displayName, unit, backgroundColor} = getMetricMetaInfo(metric)

                return (
                    <View style={styles.metric} key={metric}>
                        {getIcon()}
                        <View>
                            <Text style={{fontSize: 20}}>
                                {displayName}
                            </Text>
                            <Text style={{fontSize: 16, color: gray}}>
                                {metrics[metric]} {unit}
                            </Text>
                        </View>
                    </View>
                )
            })}
        </View>
    )
}