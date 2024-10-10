import { faker } from '@faker-js/faker';

const mockFeedData = Array.from({ length: 250 }, (_, index) => {
    const imageCount = faker.number.int({ min: 1, max: 5 });

    const images = Array.from({ length: imageCount }, () => 
        `https://picsum.photos/seed/${faker.string.uuid()}/500/500`
    );

    return {
        id: (index + 1).toString(),
        username: faker.internet.userName(),
        profilePicture: `https://picsum.photos/seed/${faker.string.uuid()}/200/300`,
        images: images,
        description: faker.lorem.sentence(),
        postDate: `2024-10-${String(index % 30 + 1).padStart(2, '0')}`
    };
});

export default mockFeedData;
