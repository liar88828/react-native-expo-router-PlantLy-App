import {Text, View} from "react-native";
import React, {ReactNode} from "react";

export default function ItemIcons(
    {children, text1, text2}:
        { children: ReactNode, text1: string, text2: string }
) {
    return (<View
            style={{
                "display": "flex",
                "padding": 8,
                "borderRadius": 25,
                "backgroundColor": "#A7F3D0"
            }}
            // className={"flex rounded-full bg-green-200 p-2"}
        >
            <View style={{
                height: 40, width: 40,
                "display": "flex",
                "justifyContent": "center",
                "alignItems": "center",
                "borderRadius": 25,
                "backgroundColor": "#ffffff"

            }}
                // className={"bg-white rounded-full flex items-center justify-center"}
            >
                {children}
            </View>
            <View
                style={{
                    "display": "flex",
                    "paddingVertical": 8,
                    "marginVertical": 4,
                    "alignItems": "center"
                }}
                // className={"flex items-center py-2 space-y-1"}
            >
                <Text style={{fontSize: 16, "fontWeight": '700'}}
                    // className={"font-bold text-neutral-700"}
                >
                    {text1}
                </Text>

                <Text style={{fontSize: 13, fontWeight: '700'}}
                    // className={"font-bold text-neutral-700"}
                >
                    {text2}

                </Text>
            </View>
        </View>


    )
}
