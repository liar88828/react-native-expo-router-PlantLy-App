import {Image, Pressable, Text, View} from "react-native";
import {useRouter} from "expo-router";
import {Plant} from "../../assets/interfaces/Plant";

export const FlatPlant = ({item, index,}: { item: Plant, index: number }) => {
    const router = useRouter()
    return (
        <View style={{
            backgroundColor: "rgb(230,255,230)",
            marginTop: 10,
            borderRadius: 20,

        }}>
            <Pressable
                style={{
                    width: '100%',
                    display: "flex",
                    flexDirection: "row",
                }}
                onPress={() => router.push(`/detail/${item.id}?back=search`)}>
                <Image
                    source={{uri: item.img}}
                    style={{width: '25%', height: 100, borderRadius: 35, margin: 5}}
                />
                <View style={{margin: 5, display: "flex", justifyContent: "center", gap: 5}}>
                    <View style={{display: "flex", flexDirection: "row", alignItems: "center", gap: 2}}>
                        <Text style={{fontSize: 20, "fontWeight": '700'}}>
                            {item.name.length > 20 ? item.name.slice(0, 20) + '...' : item.name}
                        </Text>
                        <Text style={{fontSize: 16, "fontWeight": '700'}}>({item.family})</Text>
                    </View>

                    <View style={{flexDirection: "row", display: 'flex', gap: 10}}>
                        <Text style={{"fontWeight": '700'}}>Di Tanam</Text>
                        <Text style={{textTransform: "uppercase", fontWeight: '700'}}>({item.area})</Text>
                    </View>

                    <View style={{flexDirection: "row", display: 'flex', gap: 10}}>
                        <Text style={{"fontWeight": '700'}}>Harga </Text>
                        <Text style={{textTransform: "uppercase", fontWeight: '700'}}>Rp.{item.harga} / Kg</Text>
                    </View>

                    <View style={{flexDirection: "row", display: 'flex', gap: 10}}>
                        <Text style={{"fontWeight": '700'}}>Panen </Text>
                        <Text style={{textTransform: "uppercase", fontWeight: '700'}}>{item.panen} Bulan</Text>
                    </View>
                </View>
            </Pressable>
        </View>
    )
}
