document.addEventListener("DOMContentLoaded", function() {
    const cities = [
        { 
            name: "Paris", 
            description: "Explore the City of Light, known for its art, fashion, and culture.", 
            image: "https://images.adsttc.com/media/images/6008/934c/63c0/172f/0100/000f/newsletter/shutterstock_1850845516.jpg?1611174726",
            category: "city",
            rating: 4.7,
            review: "Absolutely breathtaking views and the overwater bungalows were a dream come true!"
        },
        { 
            name: "New York City", 
            description: "Experience the bustling metropolis of NYC, famous for its landmarks and attractions.", 
            image: "https://www.planetware.com/photos-large/USNY/new-york-city-statue-of-liberty.jpg",
            category: "city",
            rating: 3.5,
            review: "Absolutely breathtaking views and the overwater bungalows were a dream come true!"
        },
        { 
            name: "Tokyo", 
            description: "Discover the vibrant energy and rich culture of Japan's capital city.", 
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFBViTGdF6HZtOzEi1ci4CCWZdm_lRlI3irA9-vK28kQ&s",
            category: "city",
            rating: 4.8,
            review: "Absolutely breathtaking views and the overwater bungalows were a dream come true!"
        },
        { 
            name: "London", 
            description: "Experience history, royalty, and iconic landmarks in the heart of England.", 
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC7qiOIgNc1gCta8cBfazlAc8MmpPgQnU4mh5U3PZA2Q&s",
            category: "city",
            rating: 4.6,
            review: "Absolutely breathtaking views and the overwater bungalows were a dream come true!"
        },
        { 
            name: "Rome", 
            description: "Explore the ancient ruins and Renaissance art of Italy's capital city.", 
            image: "https://www.planetware.com/photos-large/I/italy-rome-colosseum.jpg",
            category: "city",
            rating: 4.7,
            review: "Absolutely breathtaking views and the overwater bungalows were a dream come true!"
        }
    ];

    const featuredDestinationsContainer = document.querySelector(".featured-destinations");

    cities.forEach(destination => {
        const destinationCard = document.createElement("div");
        destinationCard.classList.add("destination-card");
        
        const image = document.createElement("img");
        image.src = destination.image;
        image.alt = destination.name;
        image.style.width = "300px"; 
        image.style.height = "250px"; 

        destinationCard.appendChild(image);

        const heading = document.createElement("h2");
        heading.textContent = destination.name;
        destinationCard.appendChild(heading);

        const description = document.createElement("p");
        description.textContent = destination.description;
        destinationCard.appendChild(description);

        const rating = document.createElement("p");
        rating.textContent = `Rating: ${destination.rating}/5`;
        rating.classList.add("rating");
        rating.style.display = "none";
        destinationCard.appendChild(rating);

        const review = document.createElement("p");
        review.textContent = `Review: ${destination.review}`;
        review.classList.add("review");
        review.style.display = "none";
        destinationCard.appendChild(review);

        destinationCard.addEventListener("mouseenter", function() {
            rating.style.display = "block";
            review.style.display = "block";
        });

        destinationCard.addEventListener("mouseleave", function() {
            rating.style.display = "none";
            review.style.display = "none";
        });

        featuredDestinationsContainer.appendChild(destinationCard);
    });
});

