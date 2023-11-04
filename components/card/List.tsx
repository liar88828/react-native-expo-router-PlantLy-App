import {View} from 'react-native'
import {ListPlant} from "./ListPlant";
import {dataTumbuhan} from '../../assets/jsons/DataTumbuhan.json';
import {Plant} from "../../assets/interfaces/Plant";

export default function List(
    {search}: { search: string }
) {
    const filteredData: Plant[] = dataTumbuhan.filter(
        (el: Plant) => {
            if (search === '') {
                return el;
            } else {
                let name = el.name.toLowerCase()
                return name.includes(search)
            }
        })
    return (<View
            style={{
                borderTopLeftRadius: 25,
                borderTopRightRadius: 25,
                backgroundColor: "rgba(185,255,180,0.61)",
                "paddingHorizontal": 16,
                "paddingTop": 14
            }}>
            <View>{filteredData.map((item, index
            ) => <ListPlant item={item} index={index}
                            key={`${item.name + index}`}/>)}
            </View>
        </View>
    )
}
