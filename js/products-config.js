/**
 * ============================================================================
 * SWADANGAN FOODS - PRODUCT & CATALOG CONFIGURATION FILE
 * ============================================================================
 * 
 * How to configure the Products page:
 * 1. Edit `SWADANGAN_CONFIG.settings` to toggle prices, inquiry modes, 
 *    WhatsApp numbers, default view, and card meters.
 * 2. Edit `SWADANGAN_CONFIG.categories` to add, rename, or reorder product filter tabs.
 * 3. Edit `SWADANGAN_CONFIG.products` to add new farsan items, change prices, 
 *    update pack weights, adjust spice/crunch levels, or toggle availability.
 */

window.SWADANGAN_CONFIG = {
  brand: {
    name: "Swadangan Foods",
    subBrand: "BASURI",
    tagline: "Swad jo dil se jude",
    secondaryTagline: "Tradition in Every Crunch",
    footerTagline: "Made with finest ingredients for an authentic Indian taste",
    whatsappNumber: "917276365777", // Format: country code + number without '+'
    email: "orders@swadanganfoods.com",
    phone: "+91 72763 65777",
    address: "Plot No. 42, Food Park Industrial Estate, GIDC, Ahmedabad, Gujarat - 382445",
    fssaiNumber: "10724000123456"
  },

  settings: {
    currencySymbol: "₹",
    pricingMode: "both", // Options: "retail" (MRP), "wholesale" (Bulk Tiered), "both" (User can toggle), "inquiry_only" (Hide prices)
    defaultCustomerMode: "retail", // "retail" or "wholesale"
    defaultGridColumns: 3, // 2, 3, or 4 columns on desktop
    defaultViewType: "grid", // "grid", "compact", or "table"
    showSpiceMeter: true,
    showCrunchMeter: true,
    showNutritionFacts: true,
    showShelfLife: true,
    enableProductComparison: true
  },

  categories: [
    { id: "all", name: "All Farsan", icon: "✨" },
    { id: "signature-mix", name: "Signature Mixes", icon: "👑" },
    { id: "sev-bhujia", name: "Sev & Bhujia", icon: "🌶️" },
    { id: "dal-lentils", name: "Classic Dals", icon: "🌾" },
    { id: "peanuts-nuts", name: "Spiced Peanuts", icon: "🥜" }
  ],

  dietaryTags: [
    { id: "100-veg", label: "100% Pure Veg", icon: "🌱" },
    { id: "no-preservatives", label: "No Preservatives", icon: "🛡️" },
    { id: "zero-trans-fat", label: "Zero Trans Fat", icon: "💛" },
    { id: "jain-friendly", label: "Jain Friendly", icon: "🙏" },
    { id: "high-protein", label: "High Protein", icon: "💪" },
    { id: "tea-time", label: "Tea-Time Favorite", icon: "☕" }
  ],

  products: [
    {
      id: "basuri-premium-mix",
      sku: "SWD-BAS-001",
      name: "Basuri Premium Mix",
      hindiName: "बासुरी प्रीमियम मिक्स",
      series: "BASURI Royal Collection",
      category: "signature-mix",
      badge: "Bestseller",
      badgeColor: "#1d4ed8",
      themeColor: "#14375a",
      accentColor: "#d4af37",
      image: "assets/products/premium-mix.jpg",
      alternateImage500g: "assets/products/premium-mix-500.jpg",
      shortDescription: "Our flagship royal farsan blend crafted with crispy besan boondi, golden sev, spiced green peas, and roasted peanuts.",
      detailedDescription: "Basuri Premium Mix is the crown jewel of Swadangan Foods. Prepared using finest grade gram flour (besan), farm-fresh peanuts, green mutter, and our closely guarded royal spice blend, every handful delivers a symphony of textures and authentic Indian heritage taste.",
      spiceLevel: 2, // 1: Mild, 2: Medium, 3: Spicy, 4: Fiery
      spiceLabel: "Medium Spiced",
      crunchLevel: 5, // 1 to 5
      tasteProfile: ["Savory", "Aromatic", "Herby", "Crisp"],
      dietary: ["100-veg", "no-preservatives", "zero-trans-fat", "jain-friendly", "tea-time"],
      ingredients: ["Gram Pulse Flour (Besan)", "Edible Vegetable Oil (Palmolein / Groundnut)", "Roasted Peanuts (18%)", "Green Peas (12%)", "Chickpea Lentils", "Iodised Salt", "Black Salt", "Turmeric", "Royal Garam Masala", "Asafoetida (Hing)"],
      shelfLifeMonths: 6,
      packagingType: "Nitrogen-Flushed 3-Layer Metallized Stand-Up Pouch",
      inStock: true,
      featured: true,
      nutritionPer100g: {
        energyKcal: 542,
        proteinG: 14.8,
        carbsG: 46.2,
        totalFatG: 33.4,
        saturatedFatG: 7.1,
        transFatG: 0,
        sodiumMg: 620
      },
      variants: [
        { weight: "200g", grams: 200, mrp: 65, wholesalePrice: 46, moqPacks: 40, cartonSize: 40 },
        { weight: "400g", grams: 400, mrp: 120, wholesalePrice: 86, moqPacks: 24, cartonSize: 24, isDefault: true },
        { weight: "500g", grams: 500, mrp: 145, wholesalePrice: 105, moqPacks: 20, cartonSize: 20 },
        { weight: "1kg", grams: 1000, mrp: 280, wholesalePrice: 198, moqPacks: 10, cartonSize: 10 },
        { weight: "5kg Bulk Sack", grams: 5000, mrp: 1300, wholesalePrice: 920, moqPacks: 4, cartonSize: 4 }
      ]
    },
    {
      id: "basuri-spicy-mix",
      sku: "SWD-BAS-002",
      name: "Basuri Spicy Mix",
      hindiName: "बासुरी स्पाइसी मिक्स",
      series: "BASURI Core Range",
      category: "signature-mix",
      badge: "Hot & Bold",
      badgeColor: "#991b1b",
      themeColor: "#5c1614",
      accentColor: "#f59e0b",
      image: "assets/products/spicy-mix.jpg",
      shortDescription: "Fiery, bold, and irresistibly crunchy mix tossed with Guntur red chilli, crushed black pepper, and zesty clove spice.",
      detailedDescription: "Designed for spice lovers who crave an authentic kick with their evening chai. Basuri Spicy Mix combines crunchy boondi, thick sev, fried chana dal, and roasted peanuts coated in a fiery masala of sun-dried red chillies, garlic-free aromatic spices, and tangy amchur.",
      spiceLevel: 4,
      spiceLabel: "Fiery & Bold",
      crunchLevel: 5,
      tasteProfile: ["Fiery", "Zesty", "Peppery", "Bold"],
      dietary: ["100-veg", "no-preservatives", "zero-trans-fat", "jain-friendly", "tea-time"],
      ingredients: ["Gram Flour (Besan)", "Edible Vegetable Oil", "Split Chickpeas", "Peanuts", "Green Peas", "Red Chilli Powder (Guntur & Kashmiri)", "Black Pepper", "Clove Powder", "Dry Mango Powder (Amchur)", "Rock Salt", "Hing"],
      shelfLifeMonths: 6,
      packagingType: "Nitrogen-Flushed 3-Layer Metallized Pouch",
      inStock: true,
      featured: true,
      nutritionPer100g: {
        energyKcal: 538,
        proteinG: 14.2,
        carbsG: 47.0,
        totalFatG: 32.8,
        saturatedFatG: 6.9,
        transFatG: 0,
        sodiumMg: 680
      },
      variants: [
        { weight: "200g", grams: 200, mrp: 60, wholesalePrice: 43, moqPacks: 40, cartonSize: 40 },
        { weight: "400g", grams: 400, mrp: 115, wholesalePrice: 82, moqPacks: 24, cartonSize: 24, isDefault: true },
        { weight: "500g", grams: 500, mrp: 140, wholesalePrice: 100, moqPacks: 20, cartonSize: 20 },
        { weight: "1kg", grams: 1000, mrp: 270, wholesalePrice: 192, moqPacks: 10, cartonSize: 10 },
        { weight: "5kg Bulk Sack", grams: 5000, mrp: 1250, wholesalePrice: 890, moqPacks: 4, cartonSize: 4 }
      ]
    },
    {
      id: "basuri-aloo-bhujia",
      sku: "SWD-BAS-003",
      name: "Basuri Aloo Bhujia",
      hindiName: "बासुरी आलू भुजिया",
      series: "BASURI Core Range",
      category: "sev-bhujia",
      badge: "All-Age Favorite",
      badgeColor: "#b45309",
      themeColor: "#855814",
      accentColor: "#fde047",
      image: "assets/products/aloo-bhujia.jpg",
      shortDescription: "Melt-in-mouth crispy potato & moth bean strands seasoned with tangy dry mango, mint leaves, and black salt.",
      detailedDescription: "Crafted from farm-fresh mashed potatoes, dew bean (moth dal) flour, and fine gram flour, Basuri Aloo Bhujia offers an ultra-light, crispy bite with a refreshing chatpata mint-and-amchur finish. Perfect as a standalone snack or a crunchy topping on chaats and poha.",
      spiceLevel: 2,
      spiceLabel: "Chatpata Medium",
      crunchLevel: 4,
      tasteProfile: ["Chatpata", "Minty", "Tangy", "Crisp"],
      dietary: ["100-veg", "no-preservatives", "zero-trans-fat", "tea-time"],
      ingredients: ["Potato Solids (38%)", "Moth Bean Flour (24%)", "Gram Flour (Besan)", "Edible Vegetable Oil", "Dry Mint Powder", "Dry Mango Powder", "Black Salt", "Red Chilli", "Ginger Powder", "Cumin", "Coriander"],
      shelfLifeMonths: 6,
      packagingType: "Nitrogen-Flushed 3-Layer Metallized Pouch",
      inStock: true,
      featured: true,
      nutritionPer100g: {
        energyKcal: 556,
        proteinG: 11.4,
        carbsG: 48.5,
        totalFatG: 35.1,
        saturatedFatG: 7.4,
        transFatG: 0,
        sodiumMg: 640
      },
      variants: [
        { weight: "200g", grams: 200, mrp: 60, wholesalePrice: 42, moqPacks: 40, cartonSize: 40 },
        { weight: "400g", grams: 400, mrp: 115, wholesalePrice: 80, moqPacks: 24, cartonSize: 24, isDefault: true },
        { weight: "500g", grams: 500, mrp: 140, wholesalePrice: 98, moqPacks: 20, cartonSize: 20 },
        { weight: "1kg", grams: 1000, mrp: 265, wholesalePrice: 188, moqPacks: 10, cartonSize: 10 },
        { weight: "5kg Bulk Sack", grams: 5000, mrp: 1220, wholesalePrice: 860, moqPacks: 4, cartonSize: 4 }
      ]
    },
    {
      id: "basuri-ratlami-sev",
      sku: "SWD-BAS-004",
      name: "Basuri Ratlami Sev",
      hindiName: "बासुरी रतलामी सेव",
      series: "BASURI Core Range",
      category: "sev-bhujia",
      badge: "Authentic Malwa Recipe",
      badgeColor: "#c2410c",
      themeColor: "#8a360f",
      accentColor: "#fbbf24",
      image: "assets/products/ratlami-sev.jpg",
      shortDescription: "Traditional thick besan sev infused with aromatic clove (laung), ajwain, black pepper, and premium hing.",
      detailedDescription: "Inspired by the legendary namkeen streets of Ratlam, our Basuri Ratlami Sev is kneaded with hand-pounded clove, carom seeds (ajwain), black pepper, and pure hing before being fried to golden perfection. Its bold, warming spice aroma makes it unforgettable.",
      spiceLevel: 3,
      spiceLabel: "Warming Clove & Pepper",
      crunchLevel: 4,
      tasteProfile: ["Clove-Rich", "Peppery", "Aromatic", "Crunchy"],
      dietary: ["100-veg", "no-preservatives", "zero-trans-fat", "jain-friendly", "tea-time"],
      ingredients: ["Fine Gram Flour (Besan - 58%)", "Edible Vegetable Oil", "Clove Powder (Laung)", "Black Pepper", "Carom Seeds (Ajwain)", "Red Chilli Powder", "Turmeric", "Asafoetida (Hing)", "Iodised Salt"],
      shelfLifeMonths: 6,
      packagingType: "Nitrogen-Flushed 3-Layer Metallized Pouch",
      inStock: true,
      featured: true,
      nutritionPer100g: {
        energyKcal: 548,
        proteinG: 15.2,
        carbsG: 44.8,
        totalFatG: 34.2,
        saturatedFatG: 7.0,
        transFatG: 0,
        sodiumMg: 610
      },
      variants: [
        { weight: "200g", grams: 200, mrp: 60, wholesalePrice: 43, moqPacks: 40, cartonSize: 40 },
        { weight: "400g", grams: 400, mrp: 115, wholesalePrice: 82, moqPacks: 24, cartonSize: 24, isDefault: true },
        { weight: "500g", grams: 500, mrp: 140, wholesalePrice: 100, moqPacks: 20, cartonSize: 20 },
        { weight: "1kg", grams: 1000, mrp: 270, wholesalePrice: 190, moqPacks: 10, cartonSize: 10 },
        { weight: "5kg Bulk Sack", grams: 5000, mrp: 1250, wholesalePrice: 880, moqPacks: 4, cartonSize: 4 }
      ]
    },
    {
      id: "basuri-khatta-meetha",
      sku: "SWD-BAS-005",
      name: "Basuri Khatta Meetha",
      hindiName: "बासुरी खट्टा मीठा",
      series: "BASURI Core Range",
      category: "signature-mix",
      badge: "Family Favorite",
      badgeColor: "#6d28d9",
      themeColor: "#2e1846",
      accentColor: "#facc15",
      image: "assets/products/khatta-meetha.jpg",
      shortDescription: "Delightful sweet-and-tangy medley of golden sev, crispy rice flakes, boondi, green peas, and golden raisins.",
      detailedDescription: "A harmonious balance of sweet, tangy, and savory notes! Basuri Khatta Meetha brings together delicate sev, puffed rice flakes, sago pearls, fried green peas, peanuts, and juicy raisins tossed in a subtle citrus-and-spice seasoning loved by kids and elders alike.",
      spiceLevel: 1,
      spiceLabel: "Mild Sweet & Tangy",
      crunchLevel: 4,
      tasteProfile: ["Sweet", "Tangy", "Fruity", "Light"],
      dietary: ["100-veg", "no-preservatives", "zero-trans-fat", "jain-friendly", "tea-time"],
      ingredients: ["Gram Flour", "Edible Vegetable Oil", "Rice Flakes (Poha)", "Peanuts", "Green Peas", "Raisins (Kishmish)", "Powdered Sugar", "Citric Acid", "Dry Mango Powder", "Turmeric", "Fennel Seeds (Saunf)", "Salt"],
      shelfLifeMonths: 6,
      packagingType: "Nitrogen-Flushed 3-Layer Metallized Pouch",
      inStock: true,
      featured: true,
      nutritionPer100g: {
        energyKcal: 524,
        proteinG: 12.1,
        carbsG: 52.4,
        totalFatG: 29.6,
        saturatedFatG: 6.2,
        transFatG: 0,
        sodiumMg: 540
      },
      variants: [
        { weight: "200g", grams: 200, mrp: 60, wholesalePrice: 42, moqPacks: 40, cartonSize: 40 },
        { weight: "400g", grams: 400, mrp: 115, wholesalePrice: 80, moqPacks: 24, cartonSize: 24, isDefault: true },
        { weight: "500g", grams: 500, mrp: 140, wholesalePrice: 98, moqPacks: 20, cartonSize: 20 },
        { weight: "1kg", grams: 1000, mrp: 265, wholesalePrice: 188, moqPacks: 10, cartonSize: 10 },
        { weight: "5kg Bulk Sack", grams: 5000, mrp: 1220, wholesalePrice: 860, moqPacks: 4, cartonSize: 4 }
      ]
    },
    {
      id: "basuri-moong-dal",
      sku: "SWD-BAS-006",
      name: "Basuri Moong Dal",
      hindiName: "बासुरी मूंग दाल",
      series: "BASURI Core Range",
      category: "dal-lentils",
      badge: "Classic & Light",
      badgeColor: "#047857",
      themeColor: "#0d4a30",
      accentColor: "#fde047",
      image: "assets/products/moong-dal.jpg",
      shortDescription: "Golden, feather-light crispy split yellow moong lentils delicately salted with pure rock salt.",
      detailedDescription: "Simplicity perfected. We select uniform, bold-grain yellow split moong lentils, soak them to the exact moisture point, and fry them in small batches until they turn airy, golden, and irresistibly crisp, finished with just the right touch of rock salt.",
      spiceLevel: 1,
      spiceLabel: "Classic Salted (No Chilli)",
      crunchLevel: 5,
      tasteProfile: ["Lightly Salted", "Nutty", "Crisp", "Clean"],
      dietary: ["100-veg", "no-preservatives", "zero-trans-fat", "jain-friendly", "high-protein"],
      ingredients: ["Split Yellow Moong Lentils (76%)", "Edible Vegetable Oil", "Iodised Salt", "Rock Salt (Sendha Namak)"],
      shelfLifeMonths: 6,
      packagingType: "Nitrogen-Flushed 3-Layer Metallized Pouch",
      inStock: true,
      featured: false,
      nutritionPer100g: {
        energyKcal: 492,
        proteinG: 21.6,
        carbsG: 51.0,
        totalFatG: 22.4,
        saturatedFatG: 4.8,
        transFatG: 0,
        sodiumMg: 480
      },
      variants: [
        { weight: "200g", grams: 200, mrp: 65, wholesalePrice: 46, moqPacks: 40, cartonSize: 40 },
        { weight: "400g", grams: 400, mrp: 125, wholesalePrice: 88, moqPacks: 24, cartonSize: 24, isDefault: true },
        { weight: "500g", grams: 500, mrp: 150, wholesalePrice: 108, moqPacks: 20, cartonSize: 20 },
        { weight: "1kg", grams: 1000, mrp: 290, wholesalePrice: 205, moqPacks: 10, cartonSize: 10 },
        { weight: "5kg Bulk Sack", grams: 5000, mrp: 1380, wholesalePrice: 970, moqPacks: 4, cartonSize: 4 }
      ]
    },
    {
      id: "basuri-chana-dal",
      sku: "SWD-BAS-007",
      name: "Basuri Chana Dal",
      hindiName: "बासुरी चना दाल",
      series: "BASURI Core Range",
      category: "dal-lentils",
      badge: "Protein Rich",
      badgeColor: "#4d7c0f",
      themeColor: "#3e4f19",
      accentColor: "#facc15",
      image: "assets/products/chana-dal.jpg",
      shortDescription: "Crunchy roasted & fried split Bengal gram tossed in tangy black salt, red chilli, and dry mango masala.",
      detailedDescription: "Bold, hearty, and super crunchy! Basuri Chana Dal is made from premium grade split Bengal gram that is specially processed to be crunchy without being hard on the teeth, then coated in a zesty chatpata spice mix of kala namak, cumin, and amchur.",
      spiceLevel: 2,
      spiceLabel: "Tangy & Spiced",
      crunchLevel: 5,
      tasteProfile: ["Tangy", "Earthy", "Spiced", "Extra Crunchy"],
      dietary: ["100-veg", "no-preservatives", "zero-trans-fat", "jain-friendly", "high-protein"],
      ingredients: ["Split Bengal Gram (Chana Dal - 78%)", "Edible Vegetable Oil", "Black Salt", "Red Chilli Powder", "Dry Mango Powder", "Cumin Powder", "Black Pepper", "Citric Acid", "Hing"],
      shelfLifeMonths: 6,
      packagingType: "Nitrogen-Flushed 3-Layer Metallized Pouch",
      inStock: true,
      featured: false,
      nutritionPer100g: {
        energyKcal: 486,
        proteinG: 20.8,
        carbsG: 52.8,
        totalFatG: 21.2,
        saturatedFatG: 4.5,
        transFatG: 0,
        sodiumMg: 560
      },
      variants: [
        { weight: "200g", grams: 200, mrp: 60, wholesalePrice: 42, moqPacks: 40, cartonSize: 40 },
        { weight: "400g", grams: 400, mrp: 115, wholesalePrice: 80, moqPacks: 24, cartonSize: 24, isDefault: true },
        { weight: "500g", grams: 500, mrp: 140, wholesalePrice: 98, moqPacks: 20, cartonSize: 20 },
        { weight: "1kg", grams: 1000, mrp: 265, wholesalePrice: 188, moqPacks: 10, cartonSize: 10 },
        { weight: "5kg Bulk Sack", grams: 5000, mrp: 1220, wholesalePrice: 860, moqPacks: 4, cartonSize: 4 }
      ]
    },
    {
      id: "basuri-masala-peanuts",
      sku: "SWD-BAS-008",
      name: "Basuri Masala Peanuts",
      hindiName: "बासुरी मसाला सींग (मूंगफली)",
      series: "BASURI Core Range",
      category: "peanuts-nuts",
      badge: "Crispy Coated",
      badgeColor: "#991b1b",
      themeColor: "#541914",
      accentColor: "#fbbf24",
      image: "assets/products/masala-peanuts.jpg",
      shortDescription: "Plump Saurashtra groundnuts enveloped in a spiced, ultra-crunchy besan shell with chatpata chaat masala.",
      detailedDescription: "We source bold, sweet-tasting groundnuts from Gujarat and coat them in a seasoned gram-flour batter spiced with Kashmiri chilli, clove, cinnamon, and tangy chaat masala. Every bite delivers a loud crunch followed by rich, nutty warmth.",
      spiceLevel: 3,
      spiceLabel: "Zesty Masala",
      crunchLevel: 5,
      tasteProfile: ["Nutty", "Spicy", "Chatpata", "Super Crisp"],
      dietary: ["100-veg", "no-preservatives", "zero-trans-fat", "jain-friendly", "high-protein"],
      ingredients: ["Bold Peanuts (54%)", "Gram Flour (Besan - 24%)", "Edible Vegetable Oil", "Red Chilli Powder", "Chaat Masala", "Clove & Cinnamon Powder", "Black Salt", "Citric Acid", "Turmeric"],
      shelfLifeMonths: 6,
      packagingType: "Nitrogen-Flushed 3-Layer Metallized Pouch",
      inStock: true,
      featured: false,
      nutritionPer100g: {
        energyKcal: 568,
        proteinG: 19.4,
        carbsG: 34.2,
        totalFatG: 39.5,
        saturatedFatG: 7.8,
        transFatG: 0,
        sodiumMg: 630
      },
      variants: [
        { weight: "200g", grams: 200, mrp: 65, wholesalePrice: 45, moqPacks: 40, cartonSize: 40 },
        { weight: "400g", grams: 400, mrp: 120, wholesalePrice: 85, moqPacks: 24, cartonSize: 24, isDefault: true },
        { weight: "500g", grams: 500, mrp: 145, wholesalePrice: 104, moqPacks: 20, cartonSize: 20 },
        { weight: "1kg", grams: 1000, mrp: 280, wholesalePrice: 196, moqPacks: 10, cartonSize: 10 },
        { weight: "5kg Bulk Sack", grams: 5000, mrp: 1300, wholesalePrice: 910, moqPacks: 4, cartonSize: 4 }
      ]
    },
    {
      id: "basuri-navratan-mix",
      sku: "SWD-BAS-009",
      name: "Basuri Navratan Mix",
      hindiName: "बासुरी नवरत्न मिक्स",
      series: "BASURI Royal Collection",
      category: "signature-mix",
      badge: "9-Gem Royal Blend",
      badgeColor: "#0369a1",
      themeColor: "#11485c",
      accentColor: "#fcd34d",
      image: "assets/products/navratan-mix.jpg",
      shortDescription: "A royal 9-ingredient farsan featuring cashews, raisins, potato lachha, boondi, lentils, nuts, and aromatic herbs.",
      detailedDescription: "True to its name ('Nine Gems'), Basuri Navratan Mix brings together nine distinct textures and flavors—crispy potato sticks, gram boondi, masoor & chana lentils, roasted peanuts, cashew bits, golden raisins, spinach sev, and curry leaves—seasoned with royal Indian spices.",
      spiceLevel: 2,
      spiceLabel: "Balanced Savory-Sweet",
      crunchLevel: 5,
      tasteProfile: ["Royal", "Multi-Textured", "Savory-Sweet", "Aromatic"],
      dietary: ["100-veg", "no-preservatives", "zero-trans-fat", "tea-time"],
      ingredients: ["Gram Flour", "Potato Sticks", "Edible Vegetable Oil", "Crimson Lentils (Masoor)", "Chickpea Lentils", "Peanuts", "Cashew Nuts", "Raisins", "Green Peas", "Spinach Powder", "Mango Powder", "Royal Garam Masala", "Rock Salt"],
      shelfLifeMonths: 6,
      packagingType: "Nitrogen-Flushed 3-Layer Metallized Pouch",
      inStock: true,
      featured: true,
      nutritionPer100g: {
        energyKcal: 545,
        proteinG: 13.8,
        carbsG: 48.0,
        totalFatG: 33.2,
        saturatedFatG: 6.8,
        transFatG: 0,
        sodiumMg: 590
      },
      variants: [
        { weight: "200g", grams: 200, mrp: 65, wholesalePrice: 46, moqPacks: 40, cartonSize: 40 },
        { weight: "400g", grams: 400, mrp: 120, wholesalePrice: 86, moqPacks: 24, cartonSize: 24, isDefault: true },
        { weight: "500g", grams: 500, mrp: 145, wholesalePrice: 105, moqPacks: 20, cartonSize: 20 },
        { weight: "1kg", grams: 1000, mrp: 280, wholesalePrice: 198, moqPacks: 10, cartonSize: 10 },
        { weight: "5kg Bulk Sack", grams: 5000, mrp: 1300, wholesalePrice: 920, moqPacks: 4, cartonSize: 4 }
      ]
    }
  ]
};
