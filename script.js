// Database of Accommodation properties with Booking.com deep-link affiliate structure
const accommodations = [
    {
        id: 1,
        title: "Prom Coast Luxury Wilderness Retreat",
        location: "Wilsons Promontory",
        region: "Wilsons Promontory",
        price: 295,
        rating: 4.9,
        reviews: 128,
        badge: "Top Rated",
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80",
        description: "Nestled right on the edge of Wilsons Promontory National Park. Enjoy modern architecture, wood fireplace, and frequent visits from native wildlife.",
        bookingUrl: "https://www.booking.com/hotel/au/prom-coast-wilderness-retreat.html?aid=YOUR_AFFILIATE_ID"
    },
    {
        id: 2,
        title: "Fish Creek Art Trail Cottage",
        location: "Fish Creek",
        region: "Fish Creek",
        price: 210,
        rating: 4.8,
        reviews: 94,
        badge: "Boutique",
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=80",
        description: "A charming, art-filled cottage just steps away from Fish Creek's famous galleries, pubs, and cafes.",
        bookingUrl: "https://www.booking.com/hotel/au/fish-creek-art-cottage.html?aid=YOUR_AFFILIATE_ID"
    },
    {
        id: 3,
        title: "Yanakie Inlet Panoramic Villa",
        location: "Yanakie",
        region: "Yanakie",
        price: 340,
        rating: 5.0,
        reviews: 76,
        badge: "Waterfront",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80",
        description: "Stunning water views looking across Corner Inlet toward the Prom peaks. Features floor-to-ceiling glass and expansive outdoor decking.",
        bookingUrl: "https://www.booking.com/hotel/au/yanakie-inlet-villa.html?aid=YOUR_AFFILIATE_ID"
    },
    {
        id: 4,
        title: "Port Welshpool Long Jetty Lodge",
        location: "Port Welshpool",
        region: "Port Welshpool",
        price: 185,
        rating: 4.7,
        reviews: 112,
        badge: "Best Value",
        image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=600&q=80",
        description: "Comfortable coastal accommodation ideal for fishing enthusiasts, families, and visitors exploring Snake Island and the historic Long Jetty.",
        bookingUrl: "https://www.booking.com/hotel/au/port-welshpool-lodge.html?aid=YOUR_AFFILIATE_ID"
    },
    {
        id: 5,
        title: "Tidal River Eco Pods",
        location: "Wilsons Promontory",
        region: "Wilsons Promontory",
        price: 260,
        rating: 4.9,
        reviews: 155,
        badge: "Eco Stay",
        image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=600&q=80",
        description: "Sustainable luxury pods nestled within the coastal tea tree forests. Walk directly to Norman Beach in under 10 minutes.",
        bookingUrl: "https://www.booking.com/hotel/au/tidal-river-eco-pods.html?aid=YOUR_AFFILIATE_ID"
    },
    {
        id: 6,
        title: "Foster Country Heritage House",
        location: "Foster",
        region: "Foster",
        price: 195,
        rating: 4.6,
        reviews: 82,
        badge: "Historic",
        image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=600&q=80",
        description: "A beautifully restored 1920s homestead set amongst rolling green hills, offering peace, tranquility, and easy access to Tarra Bulga.",
        bookingUrl: "https://www.booking.com/hotel/au/foster-heritage-house.html?aid=YOUR_AFFILIATE_ID"
    }
];

// Interactive Map Pins Database
const mapPoints = [
    { id: 1, title: "Wilsons Promontory National Park", category: "walks", top: "35%", left: "45%", icon: "fa-person-hiking", desc: "Iconic national park featuring dramatic granite peaks and pristine beaches.", img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80" },
    { id: 2, title: "Squeaky Beach", category: "beaches", top: "28%", left: "38%", icon: "fa-umbrella-beach", desc: "Famous for its squeaky quartz sand and turquoise waters.", img: "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=400&q=80" },
    { id: 3, title: "Fish Creek Gallery & Cafes", category: "food", top: "18%", left: "25%", icon: "fa-utensils", desc: "Vibrant arts hub with great local coffee, galleries, and eateries.", img: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=400&q=80" },
    { id: 4, title: "Yanakie Isthmus Stays", category: "accommodation", top: "45%", left: "55%", icon: "fa-bed", desc: "Panoramic inlet views right at the gateway to the Prom.", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400&q=80" },
    { id: 5, title: "Port Welshpool Long Jetty", category: "beaches", top: "60%", left: "75%", icon: "fa-water", desc: "Historic 800-meter jetty stretching across Corner Inlet.", img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=400&q=80" },
    { id: 6, title: "Prom Coast Wilderness Retreat", category: "accommodation", top: "32%", left: "48%", icon: "fa-bed", desc: "Top-rated luxury stay near Tidal River.", img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=400&q=80" }
];

document.addEventListener("DOMContentLoaded", () => {
    // 1. Mobile Menu Toggle
    const menuToggle = document.getElementById("menuToggle");
    const mainNav = document.getElementById("mainNav");
    if (menuToggle && mainNav) {
        menuToggle.addEventListener("click", () => {
            mainNav.classList.toggle("active");
        });
    }

    // 2. Render Accommodation Grid
    renderAccommodations("all");

    // Accommodation Tab Filtering
    const stayTabs = document.querySelectorAll(".stay-tab");
    stayTabs.forEach(tab => {
        tab.addEventListener("click", (e) => {
            stayTabs.forEach(t => t.classList.remove("active"));
            e.target.classList.add("active");
            const filter = e.target.getAttribute("data-filter");
            renderAccommodations(filter);
        });
    });

    // 3. Initialize Interactive Map
    renderMapPins("all");

    const mapFilters = document.querySelectorAll(".map-filters .filter-btn");
    mapFilters.forEach(btn => {
        btn.addEventListener("click", (e) => {
            mapFilters.forEach(b => b.classList.remove("active"));
            e.currentTarget.classList.add("active");
            const cat = e.currentTarget.getAttribute("data-category");
            renderMapPins(cat);
            document.getElementById("mapPopupCard").classList.remove("active");
        });
    });

    // Close Map Popup
    const closePopupBtn = document.getElementById("closePopup");
    if (closePopupBtn) {
        closePopupBtn.addEventListener("click", () => {
            document.getElementById("mapPopupCard").classList.remove("active");
        });
    }

    // 4. Modal Booking Logic
    const bookingModal = document.getElementById("bookingModal");
    const closeModalBtn = document.getElementById("closeModalBtn");
    
    if (closeModalBtn && bookingModal) {
        closeModalBtn.addEventListener("click", () => {
            bookingModal.classList.remove("active");
        });
        bookingModal.addEventListener("click", (e) => {
            if (e.target === bookingModal) {
                bookingModal.classList.remove("active");
            }
        });
    }

    // 5. Booking Search Bar Widget Trigger
    const searchTrigger = document.getElementById("triggerBookingSearch");
    if (searchTrigger) {
        searchTrigger.addEventListener("click", () => {
            const selectedTown = document.getElementById("searchTown").value;
            const staySection = document.getElementById("stay");
            staySection.scrollIntoView({ behavior: "smooth" });

            // Automatically filter by selected town
            stayTabs.forEach(tab => {
                if (tab.getAttribute("data-filter") === selectedTown || (selectedTown === "all" && tab.getAttribute("data-filter") === "all")) {
                    tab.click();
                }
            });
        });
    }

    // 6. Newsletter Form Submit
    const newsletterForm = document.getElementById("newsletterForm");
    if (newsletterForm) {
        newsletterForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const emailInput = document.getElementById("newsletterEmail");
            alert(`Thank you! The South Gippsland & Wilsons Promontory Travel Guide has been sent to ${emailInput.value}.`);
            emailInput.value = "";
        });
    }
});

// Render Accommodation Cards Function
function renderAccommodations(filter) {
    const grid = document.getElementById("accommodationGrid");
    if (!grid) return;

    let filtered = accommodations;
    if (filter !== "all") {
        filtered = accommodations.filter(item => item.region === filter);
    }

    grid.innerHTML = "";

    if (filtered.length === 0) {
        grid.innerHTML = `<p style="grid-column: span 3; text-align: center; color: var(--text-muted); padding: 30px;">No properties currently listed for this specific area. Try viewing all South Gippsland stays.</p>`;
        return;
    }

    filtered.forEach(hotel => {
        const card = document.createElement("div");
        card.className = "hotel-card";
        card.innerHTML = `
            <div class="hotel-img" style="background-image: url('${hotel.image}')">
                <span class="hotel-badge">${hotel.badge}</span>
            </div>
            <div class="hotel-content">
                <div class="hotel-location"><i class="fa-solid fa-location-dot"></i> ${hotel.location}, South Gippsland</div>
                <h3 class="hotel-title">${hotel.title}</h3>
                <p style="font-size: 0.88rem; color: var(--text-muted); margin-bottom: 15px; line-height: 1.5;">${hotel.description}</p>
                <div class="hotel-meta">
                    <div class="rating"><i class="fa-solid fa-star"></i> <strong>${hotel.rating}</strong> (${hotel.reviews} reviews)</div>
                    <div class="price">$${hotel.price} <span>/ night</span></div>
                </div>
                <button class="btn btn-primary btn-block hotel-action-btn" onclick="openBookingModal(${hotel.id})">
                    <i class="fa-solid fa-calendar-check"></i> View Rates & Book
                </button>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Open Personalized Booking Modal
function openBookingModal(hotelId) {
    const hotel = accommodations.find(h => h.id === hotelId);
    if (!hotel) return;

    document.getElementById("modalImg").style.backgroundImage = `url('${hotel.image}')`;
    document.getElementById("modalBadge").innerText = hotel.badge;
    document.getElementById("modalTitle").innerText = hotel.title;
    document.getElementById("modalLocation").innerHTML = `<i class="fa-solid fa-location-dot"></i> ${hotel.location}, South Gippsland, Victoria`;
    document.getElementById("modalRating").innerText = hotel.rating;
    document.getElementById("modalPrice").innerText = `$${hotel.price}`;
    document.getElementById("modalDesc").innerText = hotel.description;
    document.getElementById("secureBookingBtn").href = hotel.bookingUrl;

    document.getElementById("bookingModal").classList.add("active");
}

// Render Interactive Map Pins
function renderMapPins(category) {
    const mapBox = document.getElementById("interactiveMap");
    if (!mapBox) return;

    // Keep grid background and region label
    const bgGrid = mapBox.querySelector(".map-bg-grid").outerHTML;
    const regionLabel = mapBox.querySelector(".map-region-label").outerHTML;
    
    mapBox.innerHTML = bgGrid + regionLabel;

    let filtered = mapPoints;
    if (category !== "all") {
        filtered = mapPoints.filter(p => p.category === category);
    }

    filtered.forEach(pt => {
        const pin = document.createElement("div");
        pin.className = "map-pin";
        pin.style.top = pt.top;
        pin.style.left = pt.left;
        pin.innerHTML = `<i class="fa-solid ${pt.icon}"></i> ${pt.title.split(" ")[0]}`;
        pin.addEventListener("click", () => {
            showMapPopup(pt);
        });
        mapBox.appendChild(pin);
    });
}

// Show Map Popup Card
function showMapPopup(pt) {
    const popupCard = document.getElementById("mapPopupCard");
    const popupContent = document.getElementById("popupContent");

    popupContent.innerHTML = `
        <div class="popup-inner-img" style="background-image: url('${pt.img}')"></div>
        <h4 style="font-family: 'Playfair Display', serif; font-size: 1.1rem; color: var(--primary); margin-bottom: 6px;">${pt.title}</h4>
        <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 12px; line-height: 1.4;">${pt.desc}</p>
        <a href="#stay" class="btn btn-primary" style="padding: 8px 16px; font-size: 0.85rem; width: 100%; text-align: center;" onclick="document.getElementById('mapPopupCard').classList.remove('active')">
            Find Nearby Stays <i class="fa-solid fa-arrow-right"></i>
        </a>
    `;

    popupCard.classList.add("active");
}

// Quick filter town from explore section
function filterByTown(townName) {
    const staySection = document.getElementById("stay");
    staySection.scrollIntoView({ behavior: "smooth" });

    const stayTabs = document.querySelectorAll(".stay-tab");
    stayTabs.forEach(tab => {
        if (tab.getAttribute("data-filter") === townName) {
            tab.click();
        }
    });
}