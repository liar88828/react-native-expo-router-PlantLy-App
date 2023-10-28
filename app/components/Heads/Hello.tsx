import React from 'react';
import {Text, View} from "react-native";

function Hello() {
    return (
        <View/* className="mx-4 space-y-2 mb-2" */
            style={{marginLeft: 16, marginRight: 16, marginBottom: 8, marginTop: 8, display:'flex',flexDirection:'row'}}>
            <Text style={{fontSize: 30, fontWeight: '600', marginRight:6}}>Your <Text style={{color: "#10B981"}}>Health</Text></Text>
            <Text style={{fontSize: 30, fontWeight: '600'}}>and Your <Text style={{color: "#10B981"}}>Life</Text></Text>
        </View>
    );
}

export default Hello;
