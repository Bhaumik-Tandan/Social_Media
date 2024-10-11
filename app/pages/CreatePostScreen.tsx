import PostImagePicker from 'app/components/PostImagePicker';
import React, { useState } from 'react';
import { Alert, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';

const CreatePostScreen = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleCreatePost = () => {
        if (!title || !description) {
            Alert.alert('Error', 'Please fill out all fields');
            return;
        }

        // Add your post creation logic here
        Alert.alert('Post Created', `Title: ${title}\nDescription: ${description}`);

        // Reset fields after creating post
        setTitle('');
        setDescription('');
    };

    return (
        <SafeAreaView style={styles.container}>
            <PostImagePicker />

            <TextInput style={styles.input} placeholder="Title" value={title} onChangeText={setTitle} />
            <TextInput
                style={styles.input}
                placeholder="Description"
                value={description}
                onChangeText={setDescription}
                multiline
                numberOfLines={4}
            />
            <TouchableOpacity style={styles.button} onPress={handleCreatePost}>
                <Text style={styles.buttonText}>Create Post</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    input: {
        height: 50,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 16,
    },
    button: {
        backgroundColor: '#007bff',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});

export default CreatePostScreen;
