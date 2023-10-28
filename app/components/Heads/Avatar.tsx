import React from 'react';
import {Image, Text, View} from "react-native";

function Avatar() {
    return (
        <View
            style={{
                marginTop: 16,
                marginLeft: 16,
                marginRight: 16,
                marginBottom: 8,
                flexDirection: "row",
                // justifyContent: "space-between",
                // alignItems: "center"
            }}>
            <Image
                source={require("../../../assets/images/logo.png")}
                style={{
                    height: 100, width: 100,
                    // borderRadius: 100,
                    // borderColor: "green",
                    borderWidth: 2,
                    marginRight: 10,

                }}/>
            {/*<BellIcon size={30} color={"gray"}*/}
            {/*          style={{borderRadius: 100, borderColor: "green", borderWidth: 2}}/>*/}
            <View>
                <Text style={{
                    fontSize: 40,
                    fontWeight: '600'
                }}
                >Hi everyone </Text>
                <Text style={{
                    fontSize: 30,
                    fontWeight: '600'
                }}
                >
                    Make Your Plant To,
                </Text>
            </View>

        </View>
    );
}

export default Avatar;
