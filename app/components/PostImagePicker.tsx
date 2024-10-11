import * as ImagePicker from 'expo-image-picker'; // Ensure you have expo-image-picker installed
import React, { useState } from 'react';
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity } from 'react-native';

const PostImagePicker = () => {
    const [image, setImage] = useState(null);
    const [permissionGranted, setPermissionGranted] = useState(null); // State to track permission

    const pickImage = async () => {
        // Ask the user for permission to access the camera roll
        const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

        setPermissionGranted(permissionResult.granted); // Update permission state

        if (permissionResult.granted === false) {
            alert('Permission to access camera roll is required!');
            return;
        }

        const result = await ImagePicker.launchImageLibraryAsync();

        if (!result.canceled) {
            setImage(result.assets[0].uri); // Set the image URI to state
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            {!permissionGranted ? (
                <TouchableOpacity style={styles.permissionButton} onPress={pickImage}>
                    <Text style={styles.text}>Grant Permission to Access Images</Text>
                </TouchableOpacity>
            ) : (
                <>
                    {!image ? (
                        <TouchableOpacity style={styles.imageContainer} onPress={pickImage}>
                            <Text style={styles.text}>Tap to select an image</Text>
                        </TouchableOpacity>
                    ) : (
                        <Image source={{ uri: image }} style={styles.image} />
                    )}
                </>
            )}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black', // Black background
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageContainer: {
        backgroundColor: '#333', // Darker background for better contrast
        padding: 20,
        borderRadius: 10,
    },
    permissionButton: {
        backgroundColor: '#f44336', // Red color for the permission button
        padding: 20,
        borderRadius: 10,
        marginBottom: 20,
    },
    text: {
        color: 'white',
        fontSize: 18,
        textAlign: 'center',
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
});

export default PostImagePicker;
