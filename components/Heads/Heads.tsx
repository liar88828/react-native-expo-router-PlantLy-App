import React from 'react';
import {Image, Text, View} from "react-native";

export default function Heads() {
    return (
        <View>
            {/*Avatar*/}
            <View
                style={{
                    marginTop: 16, marginLeft: 16, marginRight: 16, marginBottom: 8, flexDirection: "row",
                    // justifyContent: "space-between",
                    // alignItems: "center"
                }}>
                <Image source={require("../../assets/images/logo.png")}
                       style={{
                           height: 100,
                           width: 100,
                           borderWidth: 2,
                           marginRight: 10,
                           /* borderRadius: 100, borderColor: "green", */
                       }}/>
                {/*<BellIcon size={30} color={"gray"}*/}
                {/*          style={{borderRadius: 100, borderColor: "green", borderWidth: 2}}/>*/}
                <View>
                    <Text style={{fontSize: 40, fontWeight: '600'}}>Hi everyone </Text>
                    <Text style={{fontSize: 30, fontWeight: '600'}}>Make Your Plant, </Text>
                </View>
            </View>
            {/*Hello*/}
            <View/* className="mx-4 space-y-2 mb-2" */
                style={{
                    marginLeft: 16,
                    marginRight: 16,
                    marginBottom: 8,
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'row'
                }}>
                <Text style={{fontSize: 30, fontWeight: '600', marginRight: 6}}> To Your <Text
                    style={{color: "#10B981"}}>Health</Text></Text>
                <Text style={{fontSize: 30, fontWeight: '600'}}>and <Text
                    style={{color: "#f5e033"}}>Life</Text></Text>
            </View>

        </View>
    );
}
