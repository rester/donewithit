import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import AppImageInput from './AppImageInput'

const AppImageInputList = ({imageUris = [], onRemoveImage, onAddImage}) => {
    return (
        <View style={styles.container}>
            {imageUris.map((uri) => 
            <AppImageInput 
                imageUri={uri} 
                key={uri} 
                onChangeImage={()=> onRemoveImage(uri)}/>)}
            <AppImageInput  onChangeImage={(uri) => onAddImage(uri)}/>
        </View>
    )
}

export default AppImageInputList

const styles = StyleSheet.create({
    container: {
        flexDirection: "row"
    }
})
