import { faker } from '@faker-js/faker';

const mockProfileData = {
    username: faker.internet.userName(),
    profilePicture: `https://picsum.photos/seed/${faker.string.uuid()}/100/100`, // Random avatar image
    bio: faker.lorem.sentence(), // Random bio using faker
    followers: Math.floor(Math.random() * 1000), // Random number of followers
    posts: Array.from({ length: 9 }, (_, index) => ({
        id: index + 1,
        imageUrl: `https://picsum.photos/seed/${faker.string.uuid()}/200/200`, // Random post image
        description: faker.lorem.sentence(), // Random post description using faker
        postDate: faker.date.recent({ days: 30 }).toISOString().split('T')[0], // Recent random date within last 30 days
        liked: Math.random() < 0.5, // Randomly liked or not
    })),
};

export default mockProfileData;
