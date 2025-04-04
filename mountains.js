document.addEventListener("DOMContentLoaded", function() {
    const mountains = [
        { 
            name: "Mount Everest", 
            description: "Experience the world's highest peak.", 
            image: "https://www.planetware.com/photos-large/USCO/colorado-rocky-mountain-national-park.jpg",
            category: "mountain",
            rating: 4.5,
            review: "Absolutely breathtaking views and the overwater bungalows were a dream come true!"
        },
        { 
            name: "Swiss Alps", 
            description: "Discover picturesque landscapes and charming villages.", 
            image: "https://i.natgeofe.com/n/135b255f-f37f-4b23-b0c3-2f0a4c1aa065/1106_4x3.jpg",
            category: "mountain",
            rating: 4.9,
            review: "Absolutely breathtaking views and the overwater bungalows were a dream come true!"
        },
        { 
            name: "Rocky Mountains", 
            description: "Explore the stunning scenery and outdoor adventures of the Rockies.", 
            image: "https://www.planetware.com/photos-large/USCO/colorado-rocky-mountain-national-park.jpg",
            category: "mountain",
            rating: 4.7,
            review: "Absolutely breathtaking views and the overwater bungalows were a dream come true!"
        },
        { 
            name: "Himalayas", 
            description: "Discover ancient cultures and breathtaking landscapes in the Himalayas.", 
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg/495px-Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg",
            category: "mountain",
            rating: 4.8,
            review: "Absolutely breathtaking views and the overwater bungalows were a dream come true!"
        },
        { 
            name: "Andes", 
            description: "Trek through the longest mountain range in the world, the Andes.", 
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUa9CNIMMS8c6cRLcPVualGNtVAwyaxjxVeK3HbUyvQQ&s",
            category: "mountain",
            rating: 4.6,
            review: "Absolutely breathtaking views and the overwater bungalows were a dream come true!"
        },
    ];

    const featuredDestinationsContainer = document.querySelector(".featured-destinations");

    mountains.forEach(destination => {
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
