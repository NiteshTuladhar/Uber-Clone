import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const HeaderButton = ({text}) => (
    
    <TouchableOpacity style={{ backgroundColor: "black", paddingVertical: 6, paddingHorizontal:16, borderRadius:30 }}>
        <Text style={{ color: 'white', fontSize: 15, fontWeight: "900" }}>{text}</Text>
    </TouchableOpacity>
    
);

const HeaderTabs = () => {
    return (
        <View style={{ flexDirection: "row", alignSelf:"center" }}>
            { /* HeaderButton */}
            <HeaderButton text="Delivery" />

            { /* HeaderButton */}
            <HeaderButton text="Pickup" />

        </View>
    )
}

export default HeaderTabs

const styles = StyleSheet.create({})
