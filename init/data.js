const sampleListings = [
    {
      title: "Cozy Beachfront Cottage",
      description:
        "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
      image: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      price: 1500,
      location: "Malibu",
      country: "United States",
    },
    {
      title: "Modern Loft in Downtown",
      description:
        "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
      image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      price: 1200,
      location: "New York City",
      country: "United States",
    },
    {
      title: "Mountain Retreat",
      description:
        "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      price: 1000,
      location: "Aspen",
      country: "United States",
    },
    {
      title: "Historic Villa in Tuscany",
      description:
        "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      price: 2500,
      location: "Florence",
      country: "Italy",
    },
    {
      title: "Secluded Treehouse Getaway",
      description:
        "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
      image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      price: 800,
      location: "Portland",
      country: "United States",
    },
    {
      title: "Beachfront Paradise",
      description:
        "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
      image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      price: 2000,
      location: "Cancun",
      country: "Mexico",
    },
    {
      title: "Rustic Cabin by the Lake",
      description:
        "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
      image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      price: 900,
      location: "Lake Tahoe",
      country: "United States",
    },
    {
      title: "Luxury Penthouse with City Views",
      description:
        "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
      image: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      price: 3500,
      location: "Los Angeles",
      country: "United States",
    },
    {
      title: "Ski-In/Ski-Out Chalet",
      description:
        "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
      image: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      price: 3000,
      location: "Verbier",
      country: "Switzerland",
    },
    {
      title: "Safari Lodge in the Serengeti",
      description:
        "Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.",
      image: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      price: 4000,
      location: "Serengeti National Park",
      country: "Tanzania",
    },
    {
      title: "Historic Canal House",
      description:
        "Stay in a piece of history in this beautifully preserved canal house in Amsterdam's iconic district.",
      image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FtcGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      price: 1800,
      location: "Amsterdam",
      country: "Netherlands",
    },
    {
      title: "Private Island Retreat",
      description:
        "Have an entire island to yourself for a truly exclusive and unforgettable vacation experience.",
      image: "https://images.unsplash.com/photo-1618140052121-39fc6db33972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bG9kZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      price: 10000,
      location: "Fiji",
      country: "Fiji",
    },
    {
      title: "Charming Cottage in the Cotswolds",
      description:
        "Escape to the picturesque Cotswolds in this quaint and charming cottage with a thatched roof.",
      image: "https://images.unsplash.com/photo-1602088113235-229c19758e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmVhY2glMjB2YWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      price: 1200,
      location: "Cotswolds",
      country: "United Kingdom",
    },
    {
      title: "Historic Brownstone in Boston",
      description:
        "Step back in time in this elegant historic brownstone located in the heart of Boston.",
      image: "https://images.unsplash.com/photo-1533619239233-6280475a633a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      price: 2200,
      location: "Boston",
      country: "United States",
    },
    {
      title: "Beachfront Bungalow in Bali",
      description:
        "Relax on the sandy shores of Bali in this beautiful beachfront bungalow with a private pool.",
      image: "https://images.unsplash.com/photo-1602391833977-358a52198938?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      price: 1800,
      location: "Bali",
      country: "Indonesia",
    },
    {
      title: "Mountain View Cabin in Banff",
      description:
        "Enjoy breathtaking mountain views from this cozy cabin in the Canadian Rockies.",
      image: "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      price: 1500,
      location: "Banff",
      country: "Canada",
    },
    {
      title: "Art Deco Apartment in Miami",
      description:
        "Step into the glamour of the 1920s in this stylish Art Deco apartment in South Beach.",
      image: "https://plus.unsplash.com/premium_photo-1670963964797-942df1804579?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      price: 1600,
      location: "Miami",
      country: "United States",
    },
    {
      title: "Tropical Villa in Phuket",
      description:
        "Escape to a tropical paradise in this luxurious villa with a private infinity pool in Phuket.",
      image: "https://images.unsplash.com/photo-1470165301023-58dab8118cc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      price: 3000,
      location: "Phuket",
      country: "Thailand",
    },
    {
      title: "Historic Castle in Scotland",
      description:
        "Live like royalty in this historic castle in the Scottish Highlands. Explore the rugged beauty of the area.",
      image: "https://images.unsplash.com/photo-1585543805890-6051f7829f98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJlYWNoJTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      price: 4000,
      location: "Scottish Highlands",
      country: "United Kingdom",
    },
    {
      title: "Desert Oasis in Dubai",
      description:
        "Experience luxury in the middle of the desert in this opulent oasis in Dubai with a private pool.",
      image: "https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHViYWl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      price: 5000,
      location: "Dubai",
      country: "United Arab Emirates",
    },
    {
      title: "Rustic Log Cabin in Montana",
      description:
        "Unplug and unwind in this cozy log cabin surrounded by the natural beauty of Montana.",
      image: "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      price: 1100,
      location: "Montana",
      country: "United States",
    },
    {
      title: "Beachfront Villa in Greece",
      description:
        "Enjoy the crystal-clear waters of the Mediterranean in this beautiful beachfront villa on a Greek island.",
      image: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dmlsbGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      price: 2500,
      location: "Mykonos",
      country: "Greece",
    },
    {
      title: "Eco-Friendly Treehouse Retreat",
      description:
        "Stay in an eco-friendly treehouse nestled in the forest. It's the perfect escape for nature lovers.",
      image: "https://images.unsplash.com/photo-1488462237308-ecaa28b729d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      price: 750,
      location: "Costa Rica",
      country: "Costa Rica",
    },
    {
      title: "Historic Cottage in Charleston",
      description:
        "Experience the charm of historic Charleston in this beautifully restored cottage with a private garden.",
      image: "https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      price: 1600,
      location: "Charleston",
      country: "United States",
    },
    {
      title: "Modern Apartment in Tokyo",
      description:
        "Explore the vibrant city of Tokyo from this modern and centrally located apartment.",
      image: "https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRva3lvfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      price: 2000,
      location: "Tokyo",
      country: "Japan",
    },
    {
      title: "Lakefront Cabin in New Hampshire",
      description:
        "Spend your days by the lake in this cozy cabin in the scenic White Mountains of New Hampshire.",
      image: "https://images.unsplash.com/photo-1578645510447-e20b4311e3ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      price: 1200,
      location: "New Hampshire",
      country: "United States",
    },
    {
      title: "Luxury Villa in the Maldives",
      description:
        "Indulge in luxury in this overwater villa in the Maldives with stunning views of the Indian Ocean.",
      image: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      price: 6000,
      location: "Maldives",
      country: "Maldives",
    },
    {
      title: "Ski Chalet in Aspen",
      description:
        "Hit the slopes in style with this luxurious ski chalet in the world-famous Aspen ski resort.",
      image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGxha2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      price: 4000,
      location: "Aspen",
      country: "United States",
    },
    {
      title: "Secluded Beach House in Costa Rica",
      description:
        "Escape to a secluded beach house on the Pacific coast of Costa Rica. Surf, relax, and unwind.",
      image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      price: 1800,
      location: "Costa Rica",
      country: "Costa Rica",
    },
    {
      title: "Oceanfront Paradise Villa",
      description: "Indulge in a luxurious retreat at this stunning oceanfront villa. Experience unparalleled views and tranquility.",
      image: "https://imageio.forbes.com/specials-images/imageserve/5cdb058a5218470008b0b00f/Nobu-Ryokan-Malibu/0x0.jpg?format=jpg&height=1009&width=2000" ,
      price: 2000,
      location: "Miami",
      country: "United States"
  },
  {
      title: "Seaside Serenity Bungalow",
      description: "Escape to this cozy bungalow nestled by the sea for a serene getaway. Embrace the calming waves and fresh ocean breeze.",
      image: "https://www.travelplusstyle.com/wp-content/uploads/2016/01/sonevajani-1880.jpg" ,
      price: 1200,
      location: "Honolulu",
      country: "United States"
  },
  {
      title: "Sunset Beach House",
      description: "Experience magical sunsets at this charming beach house. Relaxation awaits with the soothing sound of crashing waves.",
      image: "https://theasiacollective.com/wp-content/uploads/2020/03/Best-Hotels-India.jpg" ,
      price: 1800,
      location: "Laguna Beach",
      country: "United States"
  },
  {
      title: "Tranquil Seaside Haven",
      description: "Retreat to this tranquil seaside haven for a blissful escape. Immerse yourself in the serenity of coastal living.",
      image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/07/d5/77/rambagh-palace-exterior.jpg?w=1000&h=600&s=1" ,
      price: 1350,
      location: "Byron Bay",
      country: "Australia"
  },
  {
      title: "Serenity Beach Retreat",
      description: "Discover serenity at this beach retreat nestled amidst palm trees. Let the gentle waves lull you into relaxation.",
      image: "https://www.fodors.com/wp-content/uploads/2022/10/Aramness_120.jpeg" ,
      price: 1850,
      location: "Phuket",
      country: "Thailand"
  },
  {
      title: "Coastal Escape Cottage",
      description: "Experience the charm of coastal living at this cozy cottage. Relax and unwind with the sound of crashing waves.",
      image: "https://theluxurytravelexpert.com/wp-content/uploads/2019/07/header4.jpg" ,
      price: 950,
      location: "Cape Town",
      country: "South Africa"
  },
  {
      title: "Luxurious Villa with Private Pool",
      description: "Experience luxury living in this stunning villa with a private pool. Enjoy breathtaking views and ultimate relaxation.",
      image: "https://static.toiimg.com/photo/51290195.cms" ,
      price: 2500,
      location: "Bali",
      country: "Indonesia"
  },
  {
      title: "Mountain Chalet Getaway",
      description: "Escape to the mountains and cozy up in this charming chalet. Perfect for skiing in the winter or hiking in the summer.",
      image: "https://www.travelandleisure.com/thmb/7wYwJdAVWn3eoeY9Yi0DN1O0OBA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/waldorf-astoria-maldives-ithaafushi-080-TOPHOTELSWB21-d42e357f00754973bbbfe987835f7319.jpg" ,
      price: 1600,
      location: "Aspen",
      country: "United States"
  },
  {
      title: "Riverside Retreat Cabin",
      description: "Unplug and unwind at this secluded cabin by the river. Enjoy fishing, hiking, and peaceful nature walks.",
      image: "https://www.cvent.com/sites/default/files/image/2021-03/Aerial%20view%20of%20Burj%20Al%20Arab%20luxury%20hotel%20in%20Dubai.jpg" ,
      price: 1100,
      location: "Yellowstone National Park",
      country: "United States"
  },
  {
      title: "Chic Urban Loft",
      description: "Immerse yourself in city living at this stylish urban loft. Explore trendy neighborhoods and iconic landmarks.",
      image: "https://theluxuryeditor.com/wp-content/uploads/2019/02/178793622.jpg" ,
      price: 1700,
      location: "Paris",
      country: "France"
  },
  {
      title: "Tranquil Lakeview Cabin",
      description: "Relax and recharge at this serene lakeview cabin surrounded by nature. Perfect for a peaceful retreat.",
      image: "https://assets.gqindia.com/photos/649e8a9a3079ace4f5336e9c/16:9/w_2560%2Cc_limit/The-Oberoi-Udaivilas-being-ranked-as-the-third-best-hotel-in-the-world..jpg" ,
      price: 1200,
      location: "Lake District",
      country: "United Kingdom"
  },
  {
      title: "Mountain View Retreat",
      description: "Escape to this mountain retreat for breathtaking views and peaceful surroundings. Perfect for outdoor enthusiasts.",
      image: "https://www.travelandleisure.com/thmb/1jcK9OesPquJsxUKIsZEzV_9_Yg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/waldorf-astoria-maldives-ithaafushi-03_100HTLSWB22-dff1e73d284649b0b5fc35c50bf25362.jpg" ,
      price: 1500,
      location: "Banff",
      country: "Canada"
  },
  {
      title: "Lakeside Cottage Escape",
      description: "Cozy up by the lake in this charming cottage. Enjoy fishing, kayaking, and stunning sunsets.",
      image: "https://www.usnews.com/object/image/00000177-50c4-d497-a777-5dee98160000/36-the-setai-miami-beach.jpg?update-time=1706810586735&size=responsive640" ,
      price: 800,
      location: "Lake Tahoe",
      country: "United States"
  },
  {
      title: "Rustic Forest Cabin",
      description: "Embrace nature in this rustic cabin nestled in the forest. Disconnect and unwind in a serene environment.",
      image: "https://hips.hearstapps.com/hmg-prod/images/como-point-yamu-villa-exterior-1517327850.jpg" ,
      price: 1000,
      location: "Black Forest",
      country: "Germany"
  },
  {
      title: "City Skyline Apartment",
      description: "Enjoy panoramic views of the city skyline from this modern apartment. Experience urban living at its finest.",
      image: "https://media.architecturaldigest.com/photos/64da90eb51f0ec6caf3c096c/master/pass/Venetian-Las-Vegas-hotels-1.jpg" ,
      price: 2200,
      location: "New York City",
      country: "United States"
  },
  {
      title: "Island Paradise Resort",
      description: "Escape to this luxurious island resort for a tropical getaway. Relax on pristine beaches and indulge in spa treatments.",
      image: "https://media.cntraveler.com/photos/53dacfb96dec627b14a044c4/master/pass/taj-palace-hotel-new-delhi-new-delhi-india-108625-1.jpg" ,
      price: 3000,
      location: "Bora Bora",
      country: "French Polynesia"
  },
  {
      title: "Luxurious Beachfront Villa",
      description: "Experience luxury living at this beachfront villa. Enjoy direct beach access and stunning ocean views.",
      image: "https://luxuryhotelawards.staging.theworldluxuryawards.com/wp-content/uploads/sites/8/2020/01/81-Aragu-Restaurant-Cru-Lounge-Exterior-View-1.jpg" ,
      price: 2800,
      location: "Maui",
      country: "United States"
  },
  {
      title: "Hidden Mountain Retreat",
      description: "Discover serenity at this hidden mountain retreat. Explore hiking trails and enjoy breathtaking views.",
      image: "https://media.istockphoto.com/id/903417402/photo/luxury-construction-hotel-with-swimming-pool-at-sunset.jpg?s=612x612&w=0&k=20&c=NyPC_c-wE3W_CImA4t57FpyGy6f428CYROd80jxVC4A=" ,
      price: 1400,
      location: "Sedona",
      country: "United States"
  },
  {
      title: "Lakeside Cabin Getaway",
      description: "Escape to this lakeside cabin for a peaceful retreat. Perfect for fishing, boating, and stargazing.",
      image: "https://imgmedia.lbb.in/media/2023/10/651bffc394ab6848b09dd359_1696333763356.jpg" ,
      price: 950,
      location: "Lake Como",
      country: "Italy"
  },
  {
      title: "Secluded Mountain Chalet",
      description: "Find peace and tranquility at this secluded mountain chalet. Enjoy panoramic views and cozy evenings by the fireplace.",
      image: "https://flyingcdn-98ab332c.b-cdn.net/wp-content/uploads/2022/09/luxury-hotel-facade.jpg" ,
      price: 1700,
      location: "Swiss Alps",
      country: "Switzerland"
  },
  {
      title: "Cozy Riverside Cottage",
      description: "Relax by the river at this cozy cottage retreat. Perfect for nature lovers seeking a peaceful getaway.",
      image: "https://assets.cntraveller.in/photos/64a2cf56b9660a556bb21800/master/w_320%2Cc_limit/Anamiva%2520(1).png" ,
      price: 1100,
      location: "Cotswolds",
      country: "United Kingdom"
  },
  {
      title: "Luxury Lakeside Retreat",
      description: "Indulge in luxury at this lakeside retreat. Enjoy water activities and stunning sunset views.",
      image: "https://www.telegraph.co.uk/content/dam/Travel/hotels/articles/fifty-best-hotels/uluwatu.jpg?imwidth=480" ,
      price: 2200,
      location: "Lake Geneva",
      country: "Switzerland"
  },
  {
      title: "Tropical Beach Villa",
      description: "Escape to paradise at this tropical beach villa. Relax in a private pool overlooking the ocean.",
      image: "https://i.pinimg.com/originals/27/11/20/271120e4087d3dba4e18fcbffe3b7a5d.jpg" ,
      price: 3200,
      location: "Phuket",
      country: "Thailand"
  },
  {
      title: "Rustic Mountain Lodge",
      description: "Experience rustic charm at this mountain lodge. Cozy up by the fireplace after a day of outdoor adventures.",
      image: "https://quibus.co/writing-work/wp-content/uploads/2023/07/Marina-Bay-Sands-1.jpg" ,
      price: 1800,
      location: "Lake Louise",
      country: "Canada"
  },
  {
      title: "Historic City Mansion",
      description: "Step back in time at this historic city mansion. Explore nearby landmarks and immerse yourself in culture.",
      image: "https://media.cntravellerme.com/photos/65732616115878af83b91731/16:9/w_2560%2Cc_limit/Bawah%2520Reserve_Maldives_Sean_Fennessy_021-1497x998@2x.jpeg" ,
      price: 3000,
      location: "Rome",
      country: "Italy"
  },
  {
      title: "Secluded Island Getaway",
      description: "Escape to a secluded island for ultimate privacy and relaxation. Disconnect and unwind in paradise.",
      image: "https://img.freepik.com/free-photo/beautiful-luxury-outdoor-swimming-pool-hotel-resort_74190-7433.jpg" ,
      price: 2500,
      location: "Santorini",
      country: "Greece"
  },
  {
      title: "Scenic Lakeside Cabin",
      description: "Enjoy stunning lake views from this scenic cabin. Perfect for a romantic getaway or family vacation.",
      image: "https://media.istockphoto.com/id/503019528/photo/road-front-of-luxury-building-in-clear-sky-at-night.jpg?s=612x612&w=0&k=20&c=xkjUByXNE5SdMSeYxLqIwweZMg9XZ6xnWEK7ypdeO4I=" ,
      price: 1200,
      location: "Lake Placid",
      country: "United States"
  },
  {
      title: "Urban Penthouse Retreat",
      description: "Live in luxury at this urban penthouse retreat. Experience breathtaking city views and upscale amenities.",
      image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/24/03/d7/f5/hotel-main-porch.jpg?w=1200&h=-1&s=1" ,
      price: 2800,
      location: "Dubai",
      country: "United Arab Emirates"
  },
  {
      title: "Tranquil Forest Retreat",
      description: "Immerse yourself in nature at this tranquil forest retreat. Enjoy hiking, birdwatching, and peaceful surroundings.",
      image: "https://r1imghtlak.mmtcdn.com/ce3c9e9ecdca11ebad980242ac110002.jpg?&output-quality=75&downsize=328:180&crop=328:180;0,19&output-format=jpg" ,
      price: 1500,
      location: "Yosemite National Park",
      country: "United States"
  },
  {
      title: "Exotic Beachfront Villa",
      description: "Escape to an exotic beachfront villa for a luxurious getaway. Lounge by the pool and soak up the sun.",
      image: "https://media.cntraveler.com/photos/65690469a8acf0883738022b/16:9/w_2560%2Cc_limit/Josun%2520Palace_1914%2520Lounge%2520&%2520Bar%25202.jpg" ,
      price: 3500,
      location: "Fiji",
      country: "Fiji"
  },
  {
      title: "Mountain View Chalet",
      description: "Enjoy breathtaking mountain views from this cozy chalet. Perfect for a ski trip or mountain retreat.",
      image: "https://assets.cntraveller.in/photos/6351735e19c50fd3ffe4bc95/master/pass/junior-suit-banner.jpeg" ,
      price: 1900,
      location: "Whistler",
      country: "Canada"
  },
  {
      title: "Sunny Coastal Retreat",
      description: "Bask in the sun at this sunny coastal retreat. Relax on sandy beaches and swim in crystal-clear waters.",
      image: "https://media.timeout.com/images/105168764/750/422/image.jpg" ,
      price: 1400,
      location: "Gold Coast",
      country: "Australia"
  },
  {
      title: "Luxury Lakeside Villa",
      description: "Experience luxury living at this lakeside villa. Enjoy private beach access and stunning sunset views.",
      image: "https://balidave.com/wp-content/uploads/2022/11/best-hotel-bali.jpeg" ,
      price: 3200,
      location: "Lake Como",
      country: "Italy"
  },
  {
      title: "Rustic Beachfront Cabin",
      description: "Experience rustic charm at this beachfront cabin. Listen to the waves and feel the ocean breeze.",
      image: "https://www.theworlds50best.com/stories/filestore/W50BH23_LIP_Atlantis%20The%20Royal%20hero.jpg" ,
      price: 900,
      location: "Big Sur",
      country: "United States"
  },
  {
      title: "Secluded Mountain Retreat",
      description: "Escape to a secluded mountain retreat for ultimate relaxation. Enjoy panoramic views and starry nights.",
      image: "https://luxurycolumnist.com/wp-content/uploads/2022/10/Six-Senses-Krabey-Island-Cambodia-The-Beach-Retreat-Best-Luxury-Hotel-Brands.jpg" ,
      price: 2000,
      location: "Rocky Mountains",
      country: "Canada"
  },
  {
      title: "City Center Penthouse",
      description: "Live in luxury at this city center penthouse. Explore vibrant neighborhoods and cultural attractions.",
      image: "https://i0.wp.com/theluxurytravelexpert.com/wp-content/uploads/2017/10/st-regis-maldives-vommuli-maldives.jpg?fit=1300%2C731&ssl=1" ,
      price: 2800,
      location: "Sydney",
      country: "Australia"
  },
  {
      title: "Cozy Cabin in the Woods",
      description: "Find peace and tranquility at this cozy cabin in the woods. Perfect for a romantic getaway or solo retreat.",
      image: "https://flyingcdn-98ab332c.b-cdn.net/wp-content/uploads/2022/05/hotel-facade-design.jpg" ,
      price: 1000,
      location: "Redwood National Park",
      country: "United States"
  },
  {
      title: "Tropical Island Villa",
      description: "Escape to paradise at this tropical island villa. Relax on white sandy beaches and swim in turquoise waters.",
      image: "https://assets.gqindia.com/photos/649e8a9a3079ace4f5336e9c/1:1/w_948,h_948,c_limit/The-Oberoi-Udaivilas-being-ranked-as-the-third-best-hotel-in-the-world..jpg" ,
      price: 3000,
      location: "Maldives",
      country: "Maldives"
  },
  {
      title: "Ski Chalet Getaway",
      description: "Cozy up by the fire at this ski chalet getaway. Enjoy skiing, snowboarding, and après-ski activities.",
      image: "https://www.holidify.com/images/cmsuploads/compressed/103705059_20221124202545.jpg" ,
      price: 2200,
      location: "Chamonix",
      country: "France"
  },
  {
      title: "Luxury Safari Lodge",
      description: "Embark on a luxury safari adventure at this exclusive lodge. Experience wildlife encounters and starlit dinners.",
      image: "https://www.thetimes.co.uk/imageserver/image/%2Fmethode%2Ftimes%2Fprod%2Fweb%2Fbin%2F5e2c767d-440c-4703-9fc5-ae9b1e1f09e3.jpg?crop=1200%2C800%2C0%2C0" ,
      price: 3500,
      location: "Masai Mara",
      country: "Kenya"
  },
  {
      title: "Historic Castle Retreat",
      description: "Live like royalty at this historic castle retreat. Explore castle grounds and indulge in medieval feasts.",
      image: "https://static.thehoneycombers.com/wp-content/uploads/sites/4/2022/10/intercontinental-bali-sanur-resort-infinity-Pool-rooftop-Sunrise-best-hotel-indonesia-900x643.jpg" ,
      price: 4000,
      location: "Edinburgh",
      country: "Scotland"
  },
  {
      title: "Modern Beachfront Condo",
      description: "Experience modern beach living at this stylish condo. Enjoy ocean views and direct beach access.",
      image: "https://www.travelandleisure.com/thmb/qGDBw7BjHZisLwQnQAnH1pW0WjE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/jade-mountain-078-TOPHOTELSWB21-ed4b63b1c46442809ab6f71247b7b309.jpg" ,
      price: 1800,
      location: "Santa Monica",
      country: "United States"
  },
  {
      title: "Mountain Retreat Lodge",
      description: "Escape to this mountain retreat lodge for a cozy getaway. Enjoy hiking, wildlife spotting, and starry nights.",
      image: "https://www.tripsavvy.com/thmb/PBXPKYgTWnbYh6IBZ6FBu0RCi7c=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/PMC_3922re2-7a204d0f28cc4d2abacf951df89d19d5.jpg" ,
      price: 1700,
      location: "Lake Tahoe",
      country: "United States"
  },
  {
      title: "Sunny Seaside Villa",
      description: "Bask in the sun at this sunny seaside villa. Relax by the pool and enjoy panoramic ocean views.",
      image: "https://static.wanderon.in/wp-content/uploads/2023/07/welcomhotel-by-itc-hotels.jpg" ,
      price: 2800,
      location: "Amalfi Coast",
      country: "Italy"
  },
  {
      title: "Luxury Riverside Mansion",
      description: "Indulge in luxury at this riverside mansion. Enjoy expansive grounds, a private pool, and stunning river views.",
      image: "https://images.luxuryescapes.com/q_auto:good/8zxfc9q9xf8incpa6cswh" ,
      price: 4500,
      location: "Hamptons",
      country: "United States"
  },
  {
      title: "Private Island Resort",
      description: "Escape to your own private island resort for the ultimate luxury getaway. Relax in paradise with exclusive amenities.",
      image: "https://d27s5h82rwvc4v.cloudfront.net/uploads/63e0ae31497191675669041.jpg" ,
      price: 5000,
      location: "Seychelles",
      country: "Seychelles"
  },
  {
      title: "Historic Townhouse",
      description: "Step back in time at this historic townhouse. Experience old-world charm and modern amenities.",
      image: "https://media.cntraveler.com/photos/61dcd3fcf916e159a01bf993/3:2/w_2043,h_1362,c_limit/Exterior1-CanavesOiaSantorini-Greece-CRHotel.jpeg" ,
      price: 2000,
      location: "Dublin",
      country: "Ireland"
  },
  {
      title: "Safari Tent Experience",
      description: "Immerse yourself in nature with a safari tent experience. Wake up to the sounds of wildlife and stunning views.",
      image: "https://www.forbesindia.com/media/images/2023/Jun/img_209943_ozenreservebolifushi_shutterstock_bg.jpg" ,
      price: 1200,
      location: "Kruger National Park",
      country: "South Africa"
  },
  {
      title: "Mountain Cabin Retreat",
      description: "Cozy up in this mountain cabin retreat surrounded by nature. Perfect for a romantic getaway or family vacation.",
      image: "https://media.istockphoto.com/id/503019528/photo/road-front-of-luxury-building-in-clear-sky-at-night.jpg?s=612x612&w=0&k=20&c=xkjUByXNE5SdMSeYxLqIwweZMg9XZ6xnWEK7ypdeO4I=" ,
      price: 1500,
      location: "Smoky Mountains",
      country: "United States"
  },
  {
      title: "Eco-Friendly Treehouse",
      description: "Experience sustainable living in this eco-friendly treehouse. Disconnect and reconnect with nature.",
      image: "https://media.istockphoto.com/id/903417402/photo/luxury-construction-hotel-with-swimming-pool-at-sunset.jpg?s=612x612&w=0&k=20&c=NyPC_c-wE3W_CImA4t57FpyGy6f428CYROd80jxVC4A=" ,
      price: 800,
      location: "Costa Rica",
      country: "Costa Rica"
  },
  {
      title: "Lakefront Lodge",
      description: "Enjoy lakefront living at this cozy lodge. Perfect for fishing, boating, and lakeside relaxation.",
      image: "https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?cs=srgb&dl=pexels-thorsten-technoman-338504.jpg&fm=jpg" ,
      price: 1700,
      location: "Lake Geneva",
      country: "Switzerland"
  },
  {
      title: "Tropical Rainforest Retreat",
      description: "Escape to the heart of the tropical rainforest for a rejuvenating retreat. Explore lush landscapes and exotic wildlife.",
      image: "https://media.gettyimages.com/id/1299710067/photo/double-bedroom-with-sea-view.jpg?s=612x612&w=gi&k=20&c=Rlc-KssZm2vThGcXyEzBiVB-Xog98PRqXEyYdw4nsMA=" ,
      price: 2500,
      location: "Amazon Rainforest",
      country: "Brazil"
  }
  ];
  
  module.exports = { data :  sampleListings };