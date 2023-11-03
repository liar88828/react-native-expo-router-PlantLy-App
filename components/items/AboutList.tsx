import {Text, View} from "react-native";
import React from "react";

export default function AboutList({titleAbout, list,}: { titleAbout: string, list: string[] }) {
    return (

        <View style={{
            // "marginVertical": 24,
            padding: 20
        }}>
            <Text style={{fontSize: 20, fontWeight: "bold"}}>
                About
            </Text>
            <Text style={{
                fontSize: 20,
                marginVertical: 20,
                textAlign: "justify"
            }}>
                {titleAbout}
            </Text>
            <View style={{"marginVertical": 8}}>
                {list.length < 0
                    ? <View
                        style={{
                            "marginHorizontal": 8,
                            "flexDirection": "row"
                        }}
                    >
                        <Text style={{fontSize: 10, "fontWeight": '500'}}>
                            Data Kosong
                        </Text>
                    </View>
                    : list.map((d, i) => {
                        return (<View
                                key={`${i + d}`}
                                style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    marginHorizontal: 8,
                                    marginTop: 10
                                }}
                            >
                                <View style={{
                                    marginTop: 6,
                                    height: 20,
                                    width: 20,
                                    "borderRadius": 25,
                                    "backgroundColor": "#34D399"
                                }}
                                >
                                </View>

                                <View
                                    style={{
                                        "marginLeft": 8,
                                        "flexDirection": "row"
                                    }}>
                                    <Text style={{
                                        fontSize: 20,
                                    }}
                                    >{d}</Text>
                                </View>
                            </View>
                        )
                    })}
            </View>
        </View>
    )
}
