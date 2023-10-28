import React, {useEffect, useState} from 'react';
import {NativeSyntheticEvent, ScrollView, StatusBar, TextInputChangeEventData, View} from "react-native";
import Categories from "./components/categories";
import {categoriesPlant} from '../assets/jsons/CategoriesPlant.json';
import ListPlants from "./components/ListPlants";
import Heads from "./components/Heads/Heads";
import SearchInput from "./components/Heads/SearchInput";
import {dataTumbuhan} from '../assets/jsons/DataTumbuhan.json';
import {Plant} from "../assets/interfaces/Plant";
{/*--------------  Menu Utama  -------------------*/
}

function Index() {
    const [activeCategory, setActiveCategory] = useState("Toga")
    const [categories, setCategories] = useState<{ name: string; img: string; }[]>([])
    const [plant, setPlant] = useState<Plant[]>([])
    const [search, setSearch] = useState<string>('')
    const onChangeSearch = (query: NativeSyntheticEvent<TextInputChangeEventData>) => {
        // console.log(query.nativeEvent.text)
        setSearch(query.nativeEvent.text)
    };
    // setPlant(dataTumbuhan)

    useEffect(() => {
        setCategories(categoriesPlant)
        // setPlant()
        // getRecipe()
    }, [])

    const handleCategory = (category: any) => {
        // getRecipe(category)
        setActiveCategory(category)

    }


    return (
        <View style={{
            display: 'flex',
            backgroundColor: "#ECFDF5"
        }}>
            <StatusBar barStyle={"dark-content"}/>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{paddingBottom: 50}}
            >
                <Heads/>
                <SearchInput search={onChangeSearch}/>

                {/* --------- category */}
                {/*{categories.length > 0 && <Categories activeCategory={activeCategory}*/}
                {/*                                      handleCategory={handleCategory}*/}
                {/*                                      categories={categories}/>}*/}
                {categories.length > 0 && <ListPlants //plant={dataTumbuhan}
                                                      search={search}/>}

                {/*<Link href={"/two"} asChild><Button title={"Open tab two"}/></Link>*/}
                {/*<Link href={"/error"} asChild><Button title={"error"}/></Link>*/}
            </ScrollView>
        </View>
    );
}

export default Index;
