document.addEventListener("DOMContentLoaded", function() {
    const forests = [
        { 
            name: "Amazon Rainforest", 
            description: "Explore the lush greenery of the Amazon.", 
            image: "https://hips.hearstapps.com/hmg-prod/images/mata-atlantica-atlantic-forest-in-brazil-royalty-free-image-1668724621.jpg?resize=1200:*",
            category: "forest",
            rating: 4.8,
            review: "Absolutely breathtaking views and the overwater bungalows were a dream come true!"
        },
        { 
            name: "Black Forest", 
            description: "Experience Germany's mystical and enchanting forest.", 
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaT60DBIX68IbG8Qnru_u6GFbJKOuHYvX8WjiLG6QhEw&s*",
            category: "forest",
            rating: 4.5,
            review: "Absolutely breathtaking views and the overwater bungalows were a dream come true!"
        },
        { 
            name: "Yosemite National Park", 
            description: "Discover the stunning beauty of Yosemite's forests and waterfalls.", 
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxehx3EE52Rwm8RCLzz47X5zv3RGXZcvzrHyN0iuzKpw&s",
            category: "forest",
            rating: 4.7,
            review: "Absolutely breathtaking views and the overwater bungalows were a dream come true!"
        },
        { 
            name: "Bialowieza Forest", 
            description: "Explore Europe's last primeval forest, home to unique wildlife.", 
            image: "https://static.toiimg.com/thumb/msid-103053443,width-748,height-499,resizemode=4,imgsize-120434/.jpg",
            category: "forest",
            rating: 4.6,
            review: "Absolutely breathtaking views and the overwater bungalows were a dream come true!"
        },
        { 
            name: "Tongass National Forest", 
            description: "Visit the largest national forest in the United States, located in Alaska.", 
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQou_2Lsz77qWjeLkmhKKvTBEThI0tPNBUO2S0dldE7hg&s",
            category: "forest",
            rating: 4.7,
            review: "Absolutely breathtaking views and the overwater bungalows were a dream come true!"
        },
    ];

    const featuredDestinationsContainer = document.querySelector(".featured-destinations");

    forests.forEach(destination => {
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
