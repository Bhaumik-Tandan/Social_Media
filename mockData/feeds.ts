const mockFeedData = Array.from({ length: 250 }, (_, index) => ({
    id: (index + 1).toString(),
    username: `user${index + 1}`,
    avatar: `https://picsum.photos/seed/picsum/200/300`,
    images: [
        `https://picsum.photos/seed/picsum/200/300`,
        `https://picsum.photos/seed/picsum/200/300`
    ],
    description: `Sample description for post ${index + 1}`,
    postDate: `2024-10-${String(index % 30 + 1).padStart(2, '0')}`,
    liked: Math.random() < 0.5 // Randomly assign true or false
}));

export default mockFeedData;
