import {Text, View} from "react-native";
import React from "react";

export default function Memasak({memasak}: { memasak: string[] }) {
    return (<View style={{"marginVertical": 24,}}>
            <Text style={{fontSize: 20, fontWeight: "bold"}}>
                Cara Memasak
            </Text>
            <View style={{"marginVertical": 8}}>
                {memasak.length < 0
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
                    : memasak.map((d, i) => {
                        return (<View
                                key={`${i + d}`}
                                style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    marginHorizontal: 8,
                                    // alignItems: "center"
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
                                        "fontWeight": '500'
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
