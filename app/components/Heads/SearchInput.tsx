import {NativeSyntheticEvent, TextInput, TextInputChangeEventData, View} from "react-native";
import React from "react";

export default function SearchInput({search}: {
    search: (query: NativeSyntheticEvent<TextInputChangeEventData>) => void
}) {
    return <View
        style={{
            marginVertical: 16,
            position: "relative",
            marginHorizontal: 16,
            flexDirection: "row",
            alignItems: "center",
            borderRadius: 25,
        }}>

        <TextInput
            onChange={search}
            placeholder="search any plant"
            style={{
                fontSize: 16,
                paddingVertical:5,
                "paddingLeft": 16,
                "lineHeight": 24,
                "letterSpacing": 2,
                fontWeight: "bold",
                borderWidth: 2,
                borderColor: "gray",
                borderRadius: 10,
                width: 300,
                backgroundColor: "rgba(255,255,255,0.55)",

            }}
        />
        {/*<View*/}
        {/*    style={{*/}
        {/*        "padding": 6,*/}
        {/*        "borderRadius": 25,*/}
        {/*        "backgroundColor": "#ffffff",*/}
        {/*        position: "absolute",*/}
        {/*        right: 2*/}

        {/*    }}*/}
        {/*    //className="bg-white rounded-full p-3"*/}
        {/*>*/}
        {/*    <MagnifyingGlassIcon size={10}*/}
        {/*                         strokeWidth={3}*/}
        {/*                         color={"gray"}/>*/}
        {/*</View>*/}
    </View>;
}
