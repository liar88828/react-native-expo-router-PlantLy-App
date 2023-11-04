import {Image, Pressable, Text, View} from "react-native";
import {useRouter} from "expo-router";
import {Plant} from "../../assets/interfaces/Plant";

export const ListPlant = ({item, index,}: { item: Plant, index: number }) => {
    const router = useRouter()
    return (
        <View>
            <Pressable
                style={{
                    width: '100%',
                    "display": "flex",
                    "marginBottom": 16,
                    "marginTop": 4,
                    "justifyContent": "center"
                }}
                onPress={() => router.push(`/detail/${item.id}?back=home`)}
            >
                <Image
                    source={{uri: item.img}}
                    style={{width: '100%', height: index % 3 == 0 ? 150 : 200, borderRadius: 35}}
                />
                <View style={{display: "flex", flexDirection: "row", alignItems: "center", gap: 10}}>
                    <Text style={{fontSize: 20, "fontWeight": '700'}}>{item.name.length > 20 ? item.name.slice(0, 20) + '...' : item.name}</Text>
                    <Text style={{fontSize: 16, "fontWeight": '700'}}>({item.family})</Text>
                </View>
            </Pressable>
        </View>
    )
}
