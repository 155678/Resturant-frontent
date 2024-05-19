type Product = {
    id: number;
    title: string;
    desc?: string;
    img?: string;
    price: number;
    options?: { title: string; additionalPrice: number }[];
  };
  
  type Products = Product[];
  
  export const featuredProducts: Products = [
    {
      id: 1,
      title: "chiken donner",
      desc: "Homemade Chicken Doner Kebab recipe!!! Carve it up, just like it’s done at the neon-lit kebab shops, then use it to roll up your very own Doner Kebabs or make kebab plates. Marinated in a heady spice mix before roasting the oven or grilled on the BBQ, this is great food for gatherings.",
      img: "/donner.png" ,
      price: 24.9,
      options: [
        {
          title: "Small",
          additionalPrice: 0,
        },
        {
          title: "Medium",
          additionalPrice: 4,
        },
        {
          title: "Large",
          additionalPrice: 6,
        },
      ],
    },
    {
      id: 2,
      title: "Fried chiken",
      desc: "Fried chicken, also known as Southern fried chicken, ned flour or batter and pan-fried, deep fried, pressure fried, or air fried. The breading adds a crisp coating or crust to the exterior of the chicken while retaining juices in the meat.  ",
      img: "/Friedchiken1.png",
      price: 29.9,
      options: [
        {
          title: "Small",
          additionalPrice: 0,
        },
        {
          title: "Medium",
          additionalPrice: 4,
        },
        {
          title: "Large",
          additionalPrice: 6,
        },
      ],
    },
    {
      id: 3,
      title: "Fried fish",
      desc: "Fried Tilapia or any kind of fried fish is easy to cook. I’m sure that we all have our own ways of frying fish. I am sharing this recipe post just so you know how I do it. There is nothing special in my method. In fact, most of you might be doing the",
      img: "/Friedfish.png",
      price: 35.9,
      options: [
        {
          title: "Small",
          additionalPrice: 0,
        },
        {
          title: "Medium",
          additionalPrice: 4,
        },
        {
          title: "Large",
          additionalPrice: 6,
        },
      ],
    },
    {
      id: 4,
      title: "Pizza Italy",
      desc: "Pizza and its variants are among the most popular foods in the world. Pizza is sold at a variety of restaurants, including pizzerias (pizza specialty restaurants), Mediterranean restaurants, via delivery, and as street food",
      img: "/pizzaitaly.png",
      price: 26.9,
      options: [
        {
          title: "Small",
          additionalPrice: 0,
        },
        {
          title: "Medium",
          additionalPrice: 4,
        },
        {
          title: "Large",
          additionalPrice: 6,
        },
      ],
    },
    {
      id: 5,
      title: "Humbarger",
      desc: "Humbarger was born in Phoenix, Arizona. His family moved frequently; he lived in six states and attended 11 schools before his family settled during his teen years in Washington state. His father, a truck driver, died when Humbarger was 13; Humbarger told Capital Public Radio that the event brought a dark edge to his comedy",
      img: "/humbarger1.png",
      price: 29.9,
      options: [
        {
          title: "Small",
          additionalPrice: 0,
        },
        {
          title: "Medium",
          additionalPrice: 4,
        },
        {
          title: "Large",
          additionalPrice: 6,
        },
      ],
    },
    {
      id: 6,
      title: "Burger Chiken",
      desc: "These delicious ground chicken burgers are loaded with flavor and are quick and easy to make. Perfect for a weeknight meal and a great alternative to beef.",
      img: "/Burgerchiken1.png",
      price: 24.9,
      options: [
        {
          title: "Small",
          additionalPrice: 0,
        },
        {
          title: "Medium",
          additionalPrice: 4,
        },
        {
          title: "Large",
          additionalPrice: 6,
        },
      ],
    },
    {
      id: 7,
      title: "Pizza Pepperoni",
      desc: "A garlic lover's delight, featuring linguine smothered in a creamy Parmesan sauce, infused with garlic and garnished with chopped parsley, bell peppers, and cherry tomatoes.",
      img: "/PizzaPepperoni.png",
      price: 28.9,
      options: [
        {
          title: "Small",
          additionalPrice: 0,
        },
        {
          title: "Medium",
          additionalPrice: 4,
        },
        {
          title: "Large",
          additionalPrice: 6,
        },
      ],
    },
    {
      id: 8,
      title: "Tako maxico",
      desc: "Embark on a culinary journey with this Mediterranean-inspired creation, featuring zesty feta cheese, Kalamata olives, sun-dried tomatoes, and a sprinkle of oregano.",
      img: "/Takomexico.png",
      price: 22.9,
      options: [
        {
          title: "Small",
          additionalPrice: 0,
        },
        {
          title: "Medium",
          additionalPrice: 4,
        },
        {
          title: "Large",
          additionalPrice: 6,
        },
      ],
    },
    {
      id: 9,
      title: "French Fried",
      desc: "Experience a taste of the tropics with a juicy beef patty glazed in tangy teriyaki sauce, topped with grilled pineapple, crispy bacon, and fresh lettuce, and all the classic fixings on a toasted bun.",
      img: "/frenchfried.png",
      price: 15.9,
      options: [
        {
          title: "Small",
          additionalPrice: 0,
        },
        {
          title: "Medium",
          additionalPrice: 4,
        },
        {
          title: "Large",
          additionalPrice: 6,
        },
      ],
    },
  ];
  
  
  
  
  export const pizzas: Products = [
    {
      id: 1,
      title: "chiken donner",
      desc: "Homemade Chicken Doner Kebab recipe!!! Carve it up, just like it’s done at the neon-lit kebab shops, then use it to roll up your very own Doner Kebabs or make kebab plates. Marinated in a heady spice mix before roasting the oven or grilled on the BBQ, this is great food for gatherings.",
      img: "/donner.png" ,
      price: 24.9,
      options: [
        {
          title: "Small",
          additionalPrice: 0,
        },
        {
          title: "Medium",
          additionalPrice: 4,
        },
        {
          title: "Large",
          additionalPrice: 6,
        },
      ],
    },
    {
      id: 9,
      title: "French Fried",
      desc: "Experience a taste of the tropics with a juicy beef patty glazed in tangy teriyaki sauce, topped with grilled pineapple, crispy bacon, and fresh lettuce, and all the classic fixings on a toasted bun.",
      img: "/frenchfried.png",
      price: 15.9,
      options: [
        {
          title: "Small",
          additionalPrice: 0,
        },
        {
          title: "Medium",
          additionalPrice: 4,
        },
        {
          title: "Large",
          additionalPrice: 6,
        },
      ],
    },
    {
      id: 3,
      title: "Fried fish",
      desc: "Fried Tilapia or any kind of fried fish is easy to cook. I’m sure that we all have our own ways of frying fish. I am sharing this recipe post just so you know how I do it. There is nothing special in my method. In fact, most of you might be doing the",
      img: "/Friedfish.png",
      price: 35.9,
      options: [
        {
          title: "Small",
          additionalPrice: 0,
        },
        {
          title: "Medium",
          additionalPrice: 4,
        },
        {
          title: "Large",
          additionalPrice: 6,
        },
      ],
    },
    {
      id: 8,
      title: "Tako maxico",
      desc: "Embark on a culinary journey with this Mediterranean-inspired creation, featuring zesty feta cheese, Kalamata olives, sun-dried tomatoes, and a sprinkle of oregano.",
      img: "/Takomexico.png",
      price: 22.9,
      options: [
        {
          title: "Small",
          additionalPrice: 0,
        },
        {
          title: "Medium",
          additionalPrice: 4,
        },
        {
          title: "Large",
          additionalPrice: 6,
        },
      ],
    },
    {
       id: 7,
      title: "Pizza Pepperoni",
      desc: "A garlic lover's delight, featuring linguine smothered in a creamy Parmesan sauce, infused with garlic and garnished with chopped parsley, bell peppers, and cherry tomatoes.",
      img: "/PizzaPepperoni.png",
      price: 28.9,
      options: [
        {
          title: "Small",
          additionalPrice: 0,
        },
        {
          title: "Medium",
          additionalPrice: 4,
        },
        {
          title: "Large",
          additionalPrice: 6,
        },
      ],
    },
    {
      id: 6,
      title: "Burger Chiken",
      desc: "These delicious ground chicken burgers are loaded with flavor and are quick and easy to make. Perfect for a weeknight meal and a great alternative to beef.",
      img: "/Burgerchiken1.png",
      price: 24.9,
      options: [
        {
          title: "Small",
          additionalPrice: 0,
        },
        {
          title: "Medium",
          additionalPrice: 4,
        },
        {
          title: "Large",
          additionalPrice: 6,
        },
      ],
    },
  ];
  
  export const singleProduct: Product = {
    id: 1,
    title: "chiken donner",
    desc: "Homemade Chicken Doner Kebab recipe!!! Carve it up, just like it’s done at the neon-lit kebab shops, then use it to roll up your very own Doner Kebabs or make kebab plates. Marinated in a heady spice mix before roasting the oven or grilled on the BBQ, this is great food for gatherings.",
    img: "/donner.png" ,
    price: 24.9,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4,
      },
      {
        title: "Large",
        additionalPrice: 6,
      },
    ],
  };
  
  
  type Menu = {
    id: number;
    slug?: string;
    title: string;
    desc?: string;
    img?: string;
    color: string;
  }[];
  
  export const menu: Menu = [
    {
      id: 1,
      title: "chiken donner",
      desc: "Homemade Chicken Doner Kebab recipe!!!",
      img: "/slice1.png",
      color: "white",
    },
    {
      id: 2,
      title: "Fried chiken",
      desc: "Fried chicken, also known as Southern fried chicken,  ",
      img: "/slice2.png",
      color: "black",
    },
    {
      id: 3,
      title: "Fried fish",
      desc: "Fried Tilapia or any kind of fried fish is easy to cook. I’m sure that we all have our own ways of frying fish.",
      img: "/slice3.png",
      color: "white",
    },
  ];