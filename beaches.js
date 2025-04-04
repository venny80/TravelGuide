document.addEventListener("DOMContentLoaded", function() {
    const beaches = [
        { 
            name: "Bora Bora", 
            description: "Enjoy crystal-clear waters and overwater bungalows.", 
            image: "https://cdn.shopify.com/s/files/1/0115/5645/4457/files/IMG_3459-Edit-Edit-1_2048x2048.jpg?v=1555813629",
            category: "beach",
            rating: 4.5,
            review: "Absolutely breathtaking views and the overwater bungalows were a dream come true!"
        },
        { 
            name: "Maldives", 
            description: "Relax on the stunning beaches of the Maldives.", 
            image: "https://assets-news.housing.com/news/wp-content/uploads/2022/07/21152615/MALDIVES-FEATURE-compressed.jpg",
            category: "beach",
            rating: 4.5,
            review: "Absolutely breathtaking views and the overwater bungalows were a dream come true!"
        },
        { 
            name: "Hawaii", 
            description: "Explore the diverse landscapes and rich culture of Hawaii.", 
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn6ix3KSD1v0PcdBjGCzjPqOUeeyXatUbFkn4EvqEYag&s",
            category: "beach",
            rating: 4.6,
            review: "Absolutely breathtaking views and the overwater bungalows were a dream come true!"
        },
        { 
            name: "Fiji", 
            description: "Discover the pristine beaches and vibrant marine life of Fiji.", 
            image: "https://wallpapers.com/images/hd/bora-bora-pictures-ervnvly5nnoh4rqq.jpg",
            category: "beach",
            rating: 4.4,
            review: "Absolutely breathtaking views and the overwater bungalows were a dream come true!"
        },
        { 
            name: "Seychelles", 
            description: "Experience luxury and tranquility on the beaches of Seychelles.", 
            image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/68/9a/3d/overwater-bungalows.jpg?w=700&h=-1&s=1",
            category: "beach",
            rating: 4.7,
            review: "Absolutely breathtaking views and the overwater bungalows were a dream come true!"
        },
    ];

    const featuredDestinationsContainer = document.querySelector(".featured-destinations");

    beaches.forEach(destination => {
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
