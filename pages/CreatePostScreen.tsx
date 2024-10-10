import React, { useState } from 'react';
import {
    Alert,
    Button,
    Image,
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity
} from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';

const CreatePostScreen = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [imageUri, setImageUri] = useState(null);

    const handleImagePicker = () => {
        const options = {
            mediaType: 'photo',
            quality: 1,
        };

        launchImageLibrary(options, (response) => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.assets) {
                const selectedImage = response.assets[0];
                setImageUri(selectedImage.uri);
            }
        });
    };

    const handleSubmit = () => {
        // Validate inputs
        if (!title || !description || !imageUri) {
            Alert.alert('Error', 'Please fill all fields and select an image.');
            return;
        }

        // Here you would typically send the post data to your server
        console.log('Post Submitted:', { title, description, imageUri });

        // Reset form
        setTitle('');
        setDescription('');
        setImageUri(null);
        Alert.alert('Success', 'Post created successfully!');
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.header}>Create Post</Text>
            <TextInput
                style={styles.input}
                placeholder="Title"
                value={title}
                onChangeText={setTitle}
            />
            <TextInput
                style={styles.input}
                placeholder="Description"
                value={description}
                onChangeText={setDescription}
                multiline
                numberOfLines={4}
            />
            <TouchableOpacity style={styles.imagePicker} onPress={handleImagePicker}>
                <Text style={styles.imagePickerText}>
                    {imageUri ? 'Change Image' : 'Select Image'}
                </Text>
            </TouchableOpacity>
            {imageUri && (
                <Image
                    source={{ uri: imageUri }}
                    style={styles.selectedImage}
                />
            )}
            <Button title="Submit Post" onPress={handleSubmit} />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    imagePicker: {
        backgroundColor: '#f0f0f0',
        padding: 10,
        alignItems: 'center',
        marginBottom: 10,
    },
    imagePickerText: {
        color: '#007BFF',
    },
    selectedImage: {
        width: '100%',
        height: 200,
        borderRadius: 8,
        marginBottom: 10,
    },
});

export default CreatePostScreen;
