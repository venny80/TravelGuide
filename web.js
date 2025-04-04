document.addEventListener("DOMContentLoaded", function() {
    const username = localStorage.getItem("username");
    if (username) {
        const userWelcome = document.getElementById("userWelcome");
        userWelcome.textContent = `Welcome, ${username}!`; 
    }
    const sliderImages = [
        "https://images.pexels.com/photos/38326/pexels-photo-38326.jpeg",
        "https://images.pexels.com/photos/618833/pexels-photo-618833.jpeg",
        "https://images.pexels.com/photos/994605/pexels-photo-994605.jpeg",
        "https://images.pexels.com/photos/38136/pexels-photo-38136.jpeg?auto=compress&cs=tinysrgb&w=600"
    ];
    let currentSlide = 0;

    function nextSlide() {
        currentSlide = (currentSlide + 1) % sliderImages.length;
        showSlide(currentSlide);
    }

    function showSlide(index) {
        const slider = document.querySelector(".slider");
        slider.style.backgroundImage = `url('${sliderImages[index]}')`;
        currentSlide = index;
        const dots = document.querySelectorAll(".dot");
        dots.forEach((dot, i) => {
            dot.classList.toggle("active", i === index);
        });
    }

    setInterval(nextSlide, 5000);

    const beaches = [];
    const mountains = [];
    const forests = [];
    const cities = [];

    const featuredDestinations = [
        { 
            name: "Bora Bora", 
            description: "Enjoy crystal-clear waters and overwater bungalows.", 
            image: "https://cdn.shopify.com/s/files/1/0115/5645/4457/files/IMG_3459-Edit-Edit-1_2048x2048.jpg?v=1555813629",
            category: "beach",
            rating: 4.5,
        },
        { 
            name: "Maldives", 
            description: "Relax on the stunning beaches of the Maldives.", 
            image: "https://assets-news.housing.com/news/wp-content/uploads/2022/07/21152615/MALDIVES-FEATURE-compressed.jpg",
            category: "beach",
            rating: 4.5
        },
        { 
            name: "Hawaii", 
            description: "Explore the diverse landscapes and rich culture of Hawaii.", 
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn6ix3KSD1v0PcdBjGCzjPqOUeeyXatUbFkn4EvqEYag&s",
            category: "beach",
            rating: 4.4
        },
        { 
            name: "Seychelles", 
            description: "Experience luxury and tranquility on the beaches of Seychelles.", 
            image: "https://wallpapers.com/images/hd/bora-bora-pictures-ervnvly5nnoh4rqq.jpg",
            category: "beach",
            rating: 4.7
        },
        { 
            name: "Mount Everest", 
            description: "Experience the world's highest peak.", 
            image: "https://www.planetware.com/photos-large/USCO/colorado-rocky-mountain-national-park.jpg",
            category: "mountain",
            rating: 4.5
        },
        { 
            name: "Swiss Alps", 
            description: "Discover picturesque landscapes and charming villages.", 
            image: "https://i.natgeofe.com/n/135b255f-f37f-4b23-b0c3-2f0a4c1aa065/1106_4x3.jpg",
            category: "mountain",
            rating: 4.9
        },
        { 
            name: "Rocky Mountains", 
            description: "Explore the stunning scenery and outdoor adventures of the Rockies.", 
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg/495px-Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg",
            category: "mountain",
            rating: 4.7
        },
        { 
            name: "Himalayas", 
            description: "Discover ancient cultures and breathtaking landscapes in the Himalayas.", 
            image: "https://hips.hearstapps.com/hmg-prod/images/alpe-di-siusi-sunrise-with-sassolungo-or-langkofel-royalty-free-image-1623254127.jpg",
            category: "mountain",
            rating: 4.8
        },
        { 
            name: "Andes", 
            description: "Trek through the longest mountain range in the world, the Andes.", 
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUa9CNIMMS8c6cRLcPVualGNtVAwyaxjxVeK3HbUyvQQ&s",
            category: "mountain",
            rating: 4.6
        },
        { 
            name: "Amazon Rainforest", 
            description: "Explore the lush greenery of the Amazon.", 
            image: "https://hips.hearstapps.com/hmg-prod/images/mata-atlantica-atlantic-forest-in-brazil-royalty-free-image-1668724621.jpg?resize=1200:*",
            category: "forest",
            rating: 4.8
        },
        { 
            name: "Black Forest", 
            description: "Experience Germany's mystical and enchanting forest.", 
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaT60DBIX68IbG8Qnru_u6GFbJKOuHYvX8WjiLG6QhEw&s*",
            category: "forest",
            rating: 4.5
        },
        { 
            name: "Yosemite National Park", 
            description: "Discover the stunning beauty of Yosemite's forests and waterfalls.", 
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxehx3EE52Rwm8RCLzz47X5zv3RGXZcvzrHyN0iuzKpw&s",
            category: "forest",
            rating: 4.7
        },
        { 
            name: "Bialowieza Forest", 
            description: "Explore Europe's last primeval forest, home to unique wildlife.", 
            image: "https://static.toiimg.com/thumb/msid-103053443,width-748,height-499,resizemode=4,imgsize-120434/.jpg",
            category: "forest",
            rating: 4.6
        },
        { 
            name: "Tongass National Forest", 
            description: "Visit the largest national forest in the United States, located in Alaska.", 
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQou_2Lsz77qWjeLkmhKKvTBEThI0tPNBUO2S0dldE7hg&s",
            category: "forest",
            rating: 4.7
        },
        { 
            name: "Paris", 
            description: "Explore the City of Light, known for its art, fashion, and culture.", 
            image: "https://www.planetware.com/photos-large/USNY/new-york-city-statue-of-liberty.jpg",
            category: "city",
            rating: 4.7
        },
        { 
            name: "New York City", 
            description: "Experience the bustling metropolis of NYC, famous for its landmarks and attractions.", 
            image: "https://ideas.ted.com/wp-content/uploads/sites/3/2016/05/featured-art_r-muggah.jpg",
            category: "city",
            rating: 3.5
        },
        { 
            name: "Tokyo", 
            description: "Discover the vibrant energy and rich culture of Japan's capital city.", 
            image: "https://images.adsttc.com/media/images/6008/934c/63c0/172f/0100/000f/newsletter/shutterstock_1850845516.jpg?1611174726",
            category: "city",
            rating: 4.8
        },
        { 
            name: "London", 
            description: "Experience history, royalty, and iconic landmarks in the heart of England.", 
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFBViTGdF6HZtOzEi1ci4CCWZdm_lRlI3irA9-vK28kQ&s",
            category: "city",
            rating: 4.6
        },
        { 
            name: "Rome", 
            description: "Explore the ancient ruins and Renaissance art of Italy's capital city.", 
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9yhaVLAUhDkJO8epvpzRpm6gmekKlLF1ELHajwblB_A&s",
            category: "city",
            rating: 4.7
        }
    ];

    const featuredDestinationsContainer = document.querySelector(".featured-destinations");

    function populateFeaturedDestinations(destinations) {
        destinations.forEach(destination => {
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
            destinationCard.appendChild(rating);

           
            destinationCard.addEventListener("mouseenter", function() {
                rating.style.display = "block";
            });

            destinationCard.addEventListener("mouseleave", function() {
                rating.style.display = "none";
            });

            featuredDestinationsContainer.appendChild(destinationCard);
        });
    }

    populateFeaturedDestinations(beaches);
    populateFeaturedDestinations(mountains);
    populateFeaturedDestinations(forests);
    populateFeaturedDestinations(cities);
    populateFeaturedDestinations(featuredDestinations);
});

function searchDestinations() {
    const searchInput = document.getElementById("searchInput").value.toLowerCase();

    const categories = {
        "beaches": "beaches.html", 
        "mountains": "mountains.html",
        "forests": "forests.html", 
        "cities": "cities.html" 
    };

    if (searchInput in categories) {
        window.location.href = categories[searchInput];
    } else {
        alert("Category not found!");
    }
}


// Open chatbox
function openChat() {
    document.querySelector('.chatbox-container').style.display = 'flex';
    document.getElementById('open-chat').style.display = 'none'; // Hide the button once the chatbox is open
}

// Close chatbox
function closeChat() {
    document.querySelector('.chatbox-container').style.display = 'none';
    document.getElementById('open-chat').style.display = 'block'; // Show the button again when chatbox is closed
}

// Send message
function sendMessage() {
    const userMessage = document.getElementById('user-message').value;
    if (userMessage.trim() === '') return; // Don't send empty messages

    const chatboxContent = document.getElementById('chatbox-content');
    
    // Display the user's message
    const userMessageElement = document.createElement('div');
    userMessageElement.classList.add('user-message');
    userMessageElement.textContent = userMessage;
    chatboxContent.appendChild(userMessageElement);

    // Scroll to the bottom
    chatboxContent.scrollTop = chatboxContent.scrollHeight;

    // Clear the input
    document.getElementById('user-message').value = '';

    // Send message to backend for response
    getBotResponse(userMessage);
}

// Display bot's response
function displayBotResponse(response) {
    const chatboxContent = document.getElementById('chatbox-content');
    
    const botMessageElement = document.createElement('div');
    botMessageElement.classList.add('bot-message');
    botMessageElement.textContent = response;
    chatboxContent.appendChild(botMessageElement);

    // Scroll to the bottom
    chatboxContent.scrollTop = chatboxContent.scrollHeight;
}

// Call the backend (Flask) to get a response
function getBotResponse(userMessage) {
    fetch('http://127.0.0.1:5000/chat', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message: userMessage })
    })
    .then(response => response.json())
    .then(data => displayBotResponse(data.reply))
    .catch(error => console.error('Error:', error));
}
