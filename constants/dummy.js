import assets from "./assets";

const IData = [
  {
    name: "iPhone 14 Pro Max",
    condition: "Used",
    price: 836,
    description:
      "Display: 6.7-inch Super Retina XDR display with ProMotion technology and Ceramic Shield front cover\n\nProcessor: A16 Bionic chip with 6-core CPU, 5-core GPU, and 16-core Neural Engine\n\nStorage: 128GB, 256GB, 512GB, or 1TB of internal storage\n\nOperating System: iOS 16",
    image: assets.iphone01,
    bids: [
      {
        name: "Ethan",
        price: 850,
        image: assets.person02,
        date: "January 1, 2023 at 12:10 PM",
      },
      {
        name: "Matthew",
        price: 852,
        image: assets.person03,
        date: "January 2, 2023 at 1:50 PM",
      },
      {
        name: "David",
        price: 857,
        image: assets.person04,
        date: "January 1, 2023 at 3:50 PM",
      },
    ],
  },
  {
    name: "iPhone 13 Pro Max",
    condition: "Used",
    price: 714,
    description:
      "The Apple iPhone 13 Pro Max is a smartphone with a 6.7 inch Super Retina XDR OLED display and a resolution of 2778 x 1284 pixels.\n\nIt has True Tone technology and a wide color gamut, and the screen is protected by scratch-resistant ceramic glass and an oleophobic coating.\n\nIt also has a high refresh rate of 120Hz and supports HDR10, Dolby Vision, and has a peak brightness of 1200 nits.\n\nThe phone is powered by the Apple A15 Bionic processor and comes with 6 GB of RAM and four storage options: 128 GB, 256 GB, 512 GB, and 1 TB.\n\nThe rear camera has three sensors: a 12 MP wide-angle lens, a 12 MP telephoto lens with 5x optical zoom, and a 12 MP ultrawide-angle lens.\n\nIt also has a TOF 3D LiDAR scanner for depth sensing.\n\nThe front camera has a 12 MP wide-angle lens and a SL 3D depth sensor.\n\nOther features include Face ID, accelerometer, gyro, proximity sensor, compass, barometer, Siri voice control, and Ultra-Wideband support",
    image: assets.iphone02,
    bids: [
      {
        name: "Ethan",
        price: 717,
        image: assets.person04,
        date: "January 1, 2023 at 12:10 PM",
      },
    ],
  },
  {
    name: "iPhone 12 Pro Max",
    condition: "Used",
    price: 615,
    description:
      "Display: 6.7-inch Super Retina XDR display with ProMotion technology and Ceramic Shield front cover\n\nProcessor: A14 Bionic chip with 6-core CPU, 4-core GPU, and 16-core Neural Engine\n\nStorage: 128GB, 256GB, 512GB, or 1TB of internal storage\n\nRear Cameras: Triple camera system with 12MP Ultra Wide, Wide, and Telephoto lenses; Night mode, Deep Fusion, and Smart HDR 3; ProRAW, ProRes video recording; and LiDAR Scanner\n\nFront Camera: 12MP TrueDepth camera with Night mode, Deep Fusion, and Smart HDR 3\n\nFace ID: Enabled by TrueDepth camera for facial recognition\n\nBattery: Up to 5 hours longer than iPhone 11 Pro Max\n\nOperating System: iOS 14",
    image: assets.iphone03,
    bids: [
      {
        name: "Ethan",
        price: 620,
        image: assets.person02,
        date: "January 2, 2023 at 12:10 PM",
      },
      {
        name: "Matthew",
        price: 618,
        image: assets.person03,
        date: "January 2, 2023 at 1:50 PM",
      },
    ],
  },
  {
    name: "iPhone 11 Pro Max",
    condition: "Used",
    price: 499,
    description:
      "Display: 6.5-inch Super Retina XDR display with ProMotion technology and Ceramic Shield front cover\n\nProcessor: A13 Bionic chip with 6-core CPU, 4-core GPU, and 8-core Neural Engine\n\nStorage: 64GB, 256GB, 512GB, or 1TB of internal storage\n\nRear Cameras: Triple camera system with 12MP Ultra Wide, Wide, and Telephoto lenses; Night mode, Deep Fusion, and Smart HDR; 4K Dolby Vision HDR recording\n\nFront Camera: 12MP TrueDepth camera with Night mode and Deep Fusion\n\nFace ID: Enabled by TrueDepth camera for facial recognition\n\nBattery: Up to 4 hours longer than iPhone XS Max\n\nOperating System: iOS 13",
    image: assets.iphone04,
    bids: [
      {
        name: "Ethan",
        price: 501,
        image: assets.person02,
        date: "January 1, 2023 at 12:10 PM",
      },
      {
        name: "Matthew",
        price: 505,
        image: assets.person03,
        date: "January 2, 2023 at 1:50 PM",
      },
      {
        name: "David",
        price: 507,
        image: assets.person04,
        date: "January 1, 2023 at 3:50 PM",
      },
    ],
  },
  {
    name: "iPhone X",
    condition: "Used",
    price: 275,
    description:
      "Display: 5.8-inch Super Retina OLED display with ProMotion technology and a durable glass front cover\n\nProcessor: A11 Bionic chip with 6-core CPU and 3-core GPU\n\nStorage: 64GB or 256GB of internal storage\n\nRear Cameras: Dual 12MP wide-angle and telephoto cameras with optical zoom at 2x, digital zoom up to 10x, and Portrait mode\n\nFront Camera: 7MP TrueDepth camera with Portrait mode and Animoji\n\nFace ID: Enabled by TrueDepth camera for facial recognition\n\nBattery: Up to 2 hours longer than iPhone 7\n\nOperating System: iOS 11",
    image: assets.iphone05,
    bids: [
      {
        name: "Ethan",
        price: 285,
        image: assets.person02,
        date: "January 1, 2023 at 12:10 PM",
      },
    ],
  },
];

export { IData };
