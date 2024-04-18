
const generateDummyProducts = () => {
  // Detailed descriptions for each product
  const productInfo = {
    "August Smart Lock": {
      image: "https://vordeo.com/cdn/shop/files/tuya-wifi-touch-screen-smart-door-lock-fingerprint-password-key-swipe-card-remote-unlock-724.jpg?v=1699293527&width=700",
      description: "Control access to your home remotely with the August Smart Lock. This device allows keyless entry, remote monitoring, and the ability to grant temporary keys to guests."
    },
    "Arlo Camera": {
      image: "https://static.bhphoto.com/images/images1000x1000/1708425313_1792158.jpg",
      description: "Keep an eye on your property with the Arlo Camera. This security camera offers night vision, HD video, and weather resistance, making it perfect for outdoor surveillance."
    },
    "Ring Security Camera": {
      image: "https://www.bhphotovideo.com/images/images500x500/hikvision_eci_d14f2_4mp_outdoor_ir_network_1427844.jpg",
      description: "Enhance your home security with the Ring Security Camera. Features include motion detection, two-way audio, and live streaming, all accessible via mobile app."
    },
    "Smart Ceiling Fan": {
      image: "https://goodluckafrica.com/wp-content/uploads/2023/01/Akai-56-Decorative-Ceiling-Fan-with-RemoteLight-Stainless-Steel-EF102A-5665.jpg",
      description: "Experience the convenience of the Smart Ceiling Fan, which can be controlled remotely and features customizable speed settings and a built-in light fixture."
    },
    "Ecobee": {
      image: "https://www.bhphotovideo.com/images/images1000x1000/ecobee_eb_state6l_01_smart_thermostat_1817302.jpg",
      description: "Save energy with the Ecobee smart thermostat. Its sensors detect occupancy and temperature to adjust settings automatically to improve comfort and reduce costs."
    },
    "Nest Learning Thermostat": {
      image: "https://static.bhphoto.com/images/images500x500/1493383559_1334889.jpg",
      description: "The Nest Learning Thermostat automatically adapts as your life and the seasons change. Just use it for a week and it programs itself."
    },
    "Yale Assure": {
      image: "https://static.bhphoto.com/images/images500x500/1707826514_1810385.jpg",
      description: "Secure your home with Yale Assure, a touchscreen smart lock that allows you to lock and unlock your door from anywhere and share access with others."
    },
    "Smart Smoke Detector": {
      image: "https://vordeo.com/cdn/shop/products/323ddafe-dbf2-4411-b553-844ede1ec04d.jpg?v=1700512086&width=700",
      description: "Stay safe with this Smart Smoke Detector that alerts you on your smartphone when smoke or carbon monoxide is detected, whether you're home or away."
    },
    "Philips Hue Bulb": {
      image: "https://static.bhphoto.com/images/images500x500/1646995819_1693295.jpg",
      description: "Set the mood with Philips Hue Bulbs. These smart LED bulbs offer millions of colors and shades of white light, all controllable from your smartphone."
    },
    "LIFX Bulb": {
      image: "https://m.media-amazon.com/images/I/61G0fxhh9oL._AC_SL1500_.jpg",
      description: "Illuminate your home with LIFX Bulbs, offering 16 million colors and a range of white tones, all energy-efficient and controllable via app."
    },
    "Smart Plug": {
      image: "https://static.bhphoto.com/images/images500x500/1708075513_1811430.jpg",
      description: "Turn any appliance into a smart device with the Smart Plug. Control your devices remotely via smartphone app, set schedules, and pair with Alexa for voice control."
    },
    "Smart Switch": {
      image: "https://vordeo.com/cdn/shop/products/8af891c6-1ea4-4ada-9dc5-db33c1679beb.jpg?v=1700249254&width=700",
      description: "Control lighting and other appliances with the Smart Switch. It integrates seamlessly into your home automation system for ultimate convenience."
    },
    "Samsung Family Hub": {
      image: "https://images.samsung.com/is/image/samsung/assets/us/home-appliances/mlps/03212024/03/01_DT.jpg?$720_N_JPG$",
      description: "Reinvent your kitchen with the Samsung Family Hub refrigerator. It features a touchscreen that lets you manage groceries, connect with your family, and even stream TV."
    },
    "LG InstaView": {
      image: "https://www.kitchenandbeyond.com/upload/products/multi-image/1761716255290887.jpeg",
      description: "Keep your groceries fresh in style with the LG InstaView Refrigerator. Its innovative glass panel lets you see inside without opening the door, saving energy."
    },
    "June Oven": {
      image: "https://juneoven.com/cdn/shop/files/ProductGridShots_Off_400x.jpg?v=1615320002",
      description: "The June Oven is a do-it-all smart oven that bakes, roasts, air fries, dehydrates, and more, all controlled by an easy-to-use touchscreen or your smartphone."
    },
    "Instant Pot Smart WiFi": {
      image: "https://m.media-amazon.com/images/I/71auGKyX91L.__AC_SX300_SY300_QL70_FMwebp_.jpg",
      description: "Cook meals quickly with the Instant Pot Smart WiFi, which allows you to control cooking from anywhere using your smartphone."
    },
    "iRobot Roomba": {
      image: "https://images-cdn.ubuy.co.in/6348b92d8424f92bbd53669c-robot-vacuum-and-mop-with-auto-dirt.jpg",
      description: "Keep your floors spotless with the iRobot Roomba, the robotic vacuum that navigates your home to clean dust and debris."
    },
    "Roborock S6": {
      image: "https://m.media-amazon.com/images/I/618tct4kEkL._AC_SL1500_.jpg",
      description: "Experience thorough cleaning with the Roborock S6, equipped with smart navigation, powerful suction, and mopping capability for a complete clean."
    },
    "Fresh Apples organic": {
      image: "https://media.istockphoto.com/id/1365099869/photo/six-apples.jpg?s=612x612&w=0&k=20&c=Kx9jNvEET5ERr7oHNFMxroTc54K1Ngk7R1BW9ICX2PU=",
      description: "Juicy and fresh apples, perfect for your daily nutrition. Automatically restocked by your smart fridge when running low."
    },
    "Organic Milk organic": {
      image: "https://st.depositphotos.com/1020804/2370/i/450/depositphotos_23707823-stock-photo-pouring-milk-in-the-glass.jpg",
      description: "Organic, hormone-free milk, kept perfectly chilled and automatically reordered by your smart kitchen appliances."
    },
    "Mix Groceries organic": {
      image: "https://media.istockphoto.com/id/481194973/photo/fruit-pile-isolated-on-white.jpg?s=2048x2048&w=is&k=20&c=oyXsqd7InlmbXx7A_fu8OW-lnExSRMYbWGcfSj3V7OY=",
      description: "A mix of fresh fruits, providing a variety of vitamins and nutrients. Conveniently restocked as needed."
    },
    "Whole Wheat Bread organic": {
      image: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2018%2F02%2F13%2Fmessage-editor-1507822037885-whole-wheat-bread-final-3_0-2000.jpg",
      description: "Freshly baked whole wheat bread, rich in fiber and perfect for a healthy diet. Auto-replenishing ensures you always have it on hand."
    },
    "Fresh Salmon organic": {
      image: "https://media.istockphoto.com/id/532571540/photo/raw-salmon-on-baking-paper.jpg?s=612x612&w=0&k=20&c=vdlvtAL-PKsBhsKukpTgnIasvgM3-gkhtQWi2YGhaRk=",
      description: "High-quality fresh salmon, rich in Omega-3 fatty acids. Your smart system keeps it stocked based on your consumption patterns."
    },
    "Organic Eggs organic": {
      image: "https://img.freepik.com/free-photo/three-fresh-organic-raw-eggs-isolated-white-surface_114579-43677.jpg?size=626&ext=jpg&ga=GA1.1.1448711260.1707177600&semt=ais",
      description: "Organic eggs from free-range chickens. Always available through smart inventory management."
    },
    "Imported Cheese organic": {
      image: "hhttps://media.istockphoto.com/id/92464937/photo/cheese.jpg?s=612x612&w=0&k=20&c=CjxzaQEbkQHuVDOVapYk9qFOyOggBA8Q5rJU0M0QsZU=",
      description: "A selection of fine imported cheeses, automatically reordered to keep your gourmet supply fresh."
    },
    "Seasonal Berries organic": {
      image: "https://c8.alamy.com/comp/EW8WWW/fresh-strawberries-with-green-background-strawberries-seasonal-fruits-EW8WWW.jpg",
      description: "Fresh, seasonal berries, perfect for snacks or desserts. Smart sensors detect low levels and reorder as necessary."
    },
    "Organic Carrots": {
      image: "https://media.istockphoto.com/id/470162568/photo/carrot-heap-of-vegetable-isolated-on-white.jpg?s=612x612&w=0&k=20&c=tIgMGAlv0jUMvYDpK0ClQb9Gf595f4QzSqyLVUNt3tI=",
      description: "Crisp, organic carrots, ideal for healthy snacking or cooking. Continuously monitored for freshness and quantity."
    },
    "Greek Yogurt organic": {
      image: "https://media.istockphoto.com/id/1222178456/photo/healthy-breakfast-with-fresh-greek-yogurt-on-background.jpg?s=612x612&w=0&k=20&c=8icqmdPcVU3jb5iYzIoDVmL6sNWH9StT_Oc9_mc936I=",
      description: "Creamy Greek yogurt, kept stocked and fresh, perfect for breakfast or as a snack."
    },
    "Green Tea organic": {
      image: "https://t3.ftcdn.net/jpg/00/54/46/64/360_F_54466478_IB1xs2G2zV3wZzNX2iAwAUPC4balBJhJ.jpg",
      description: "Refreshing green tea, known for its health benefits. Your smart pantry ensures you never run out."
    }
  };
  

  const categories = ['Climate Control', 'Home Security and Safety', 'Lighting and Electrical', 'Kitchen and Cleaning Appliances'];
  const groceryCategory = "Groceries"; // Separate category for groceries
  const dummyProducts = [];

  for (let i = 1; i <= 50; i++) {
    const randomProductKey = Object.keys(productInfo)[Math.floor(Math.random() * Object.keys(productInfo).length)];
    const product = productInfo[randomProductKey];
    const name = `${randomProductKey} ${i}`; // Ensure unique names by appending the index
    
    // Assign the "Groceries" category only to grocery products
    const category = productInfo[randomProductKey].hasOwnProperty('image') && randomProductKey.includes("Fresh") || randomProductKey.includes("Organic") ? groceryCategory : categories[Math.floor(Math.random() * categories.length)];
    
    const image = product.image;
    const description = product.description;
    const price = parseFloat((Math.random() * (1000 - 100) + 100).toFixed(2));
    const quantity = Math.floor(Math.random() * 100) + 1;

    dummyProducts.push({
      id: i,
      name,
      category,
      image,
      description,
      price,
      quantity
    });
  }

  return dummyProducts;
};

export default generateDummyProducts;

