export const categories = [
  {
    id: 1,
    name: 'Vegano',
    description: 'Platos veganos llenos de sabor y nutrición.'
  },
  {
    id: 2,
    name: 'Pastas',
    description: 'Deliciosas pastas caseras en diferentes variedades.'
  },
  {
    id: 3,
    name: 'Carnes',
    description: 'Carnes jugosas y sabrosas para satisfacer tu paladar.'
  },
  {
    id: 4,
    name: 'Bebidas',
    description: 'Refrescantes bebidas para acompañar tu comida.'
  }
]

export const restaurants = [
  {
    id: 1,
    name: 'Restaurante Sabores Verdes',
    address: 'Av. Principal 123, Ciudad',
    email: 'contacto@saboresverdes.com',
    phone: '123-456-7890',
    linkImage: 'https://res.cloudinary.com/dpiwmbsog/image/upload/v1693184564/fitnessMatket/restauran05_z0lq5r.jpg'
  },
  {
    id: 2,
    name: 'Pasta Paradise',
    address: 'Calle Italia 456, Pueblo',
    email: 'info@pastaparadise.com',
    phone: '987-654-3210',
    linkImage: 'https://res.cloudinary.com/dpiwmbsog/image/upload/v1693184564/fitnessMatket/restauran02_koesio.jpg'
  },
  {
    id: 3,
    name: 'Asador Criollo',
    address: 'Ruta Carnívora 789, Villa',
    email: 'reservas@asadorcriollo.com',
    phone: '567-890-1234',
    linkImage: 'https://res.cloudinary.com/dpiwmbsog/image/upload/v1693184564/fitnessMatket/restauran04_txiwwi.jpg'
  },
  {
    id: 4,
    name: 'Sabor Oriental',
    address: 'Calle Sushi 789, Ciudad Oriental',
    email: 'info@sabororiental.com',
    phone: '567-123-4567',
    linkImage: 'https://res.cloudinary.com/dpiwmbsog/image/upload/v1692745587/fitnessMatket/rest4_qcdlvq.jpg'
  },
  {
    id: 5,
    name: 'PizzaMania',
    address: 'Avenida Pizza 456, Villa Pizzera',
    email: 'contacto@pizzamania.com',
    phone: '890-234-5678',
    linkImage: 'https://res.cloudinary.com/dpiwmbsog/image/upload/v1692745587/fitnessMatket/rest1_kfyb0q.jpg'
  },
  {
    id: 6,
    name: 'Delicias Marinas',
    address: 'Calle Pescado 123, Ciudad Costera',
    email: 'reservas@deliciasmarinas.com',
    phone: '678-345-6789',
    linkImage: 'https://res.cloudinary.com/dpiwmbsog/image/upload/v1693184564/fitnessMatket/restauran01_ukrpjt.jpg'
  }
]

export const foods = [
  {
    id: 1,
    name: 'Burger Vegana',
    description: 'Hamburguesa vegana con medallón de garbanzos y aguacate.',
    price: 550, // Pesos argentinos
    linkImage: 'https://res.cloudinary.com/dpiwmbsog/image/upload/v1692752159/fitnessMatket/fut_banner21_hbdlla.jpg',
    id_category: 1,
    id_restaurant: 1
  },
  {
    id: 2,
    name: 'Spaghetti al Pesto',
    description: 'Spaghetti con salsa pesto fresca y piñones.',
    price: 420, // Pesos argentinos
    linkImage: 'https://res.cloudinary.com/dpiwmbsog/image/upload/v1693193708/fitnessMatket/2-Spaghetti_al_Pesto_trtwet.jpg',
    id_category: 2,
    id_restaurant: 2
  },
  {
    id: 3,
    name: 'Bife de Chorizo',
    description: 'Jugoso bife de chorizo con papas asadas y chimichurri.',
    price: 850, // Pesos argentinos
    linkImage: 'https://res.cloudinary.com/dpiwmbsog/image/upload/v1693782539/fitnessMatket/bifeDeChorixzo_o2bnzc.jpg',
    id_category: 3,
    id_restaurant: 3
  },
  {
    id: 4,
    name: 'Limonada Refrescante',
    description: 'Limonada fría con rodajas de limón y hojas de menta.',
    price: 120, // Pesos argentinos
    linkImage: 'https://res.cloudinary.com/dpiwmbsog/image/upload/v1693193707/fitnessMatket/4-limonada-refrescante_jixcya.jpg',
    id_category: 4,
    id_restaurant: 1
  },
  {
    id: 5,
    name: 'Roll de Algas',
    description: 'Roll de sushi relleno de aguacate, pepino y algas nori.',
    price: 320, // Pesos argentinos
    linkImage: 'https://res.cloudinary.com/dpiwmbsog/image/upload/v1693193708/fitnessMatket/5-rol-algas_ewrle8.jpg',
    id_category: 1,
    id_restaurant: 4
  },
  {
    id: 6,
    name: 'Lasagna de Carne',
    description: 'Lasagna clásica con carne molida, salsa de tomate y queso.',
    price: 480, // Pesos argentinos
    linkImage: 'https://res.cloudinary.com/dpiwmbsog/image/upload/v1693193708/fitnessMatket/6-lasagna-de-carne_k1vfi5.jpg',
    id_category: 2,
    id_restaurant: 5
  },
  {
    id: 7,
    name: 'Costillas BBQ',
    description: 'Costillas de cerdo bañadas en salsa barbacoa, acompañadas de papas fritas.',
    price: 750, // Pesos argentinos
    linkImage: 'https://res.cloudinary.com/dpiwmbsog/image/upload/v1693193707/fitnessMatket/7-costillas-BBQ_wkev2m.jpg',
    id_category: 3,
    id_restaurant: 6
  },
  {
    id: 8,
    name: 'Mojito Clásico',
    description: 'Refrescante mojito con ron, menta, limón y soda.',
    price: 180, // Pesos argentinos
    linkImage: 'https://res.cloudinary.com/dpiwmbsog/image/upload/v1693193708/fitnessMatket/8-mojito-clasico_uung4u.jpg',
    id_category: 4,
    id_restaurant: 4
  },
  {
    id: 9,
    name: 'Ensalada de Quinoa',
    description: 'Ensalada fresca con quinoa, verduras y aderezo de limón.',
    price: 350, // Pesos argentinos
    linkImage: 'https://res.cloudinary.com/dpiwmbsog/image/upload/v1693193708/fitnessMatket/9-quinoa-salad_ieebvr.jpg',
    id_category: 1,
    id_restaurant: 1
  },
  {
    id: 10,
    name: 'Ravioli de Champiñones',
    description: 'Ravioli relleno de champiñones con salsa de crema y parmesano.',
    price: 480, // Pesos argentinos
    linkImage: 'https://res.cloudinary.com/dpiwmbsog/image/upload/v1693193708/fitnessMatket/10-ravioles-con-sofrito-de-hongos_zgrur8.jpg',
    id_category: 2,
    id_restaurant: 2
  },
  {
    id: 11,
    name: 'Parrillada Mixta',
    description: 'Selección de carnes a la parrilla con chorizo, morcilla y entraña.',
    price: 980, // Pesos argentinos
    linkImage: 'https://res.cloudinary.com/dpiwmbsog/image/upload/v1693193708/fitnessMatket/11-Parrillada-mixta_d8simd.jpg',
    id_category: 3,
    id_restaurant: 3
  },
  {
    id: 12,
    name: 'Mojito de Frutos Rojos',
    description: 'Mojito con ron, menta, limón y frutos rojos.',
    price: 220, // Pesos argentinos
    linkImage: 'https://res.cloudinary.com/dpiwmbsog/image/upload/v1693193708/fitnessMatket/12-mojito-rojo_jprfsx.jpg',
    id_category: 4,
    id_restaurant: 1
  },
  {
    id: 13,
    name: 'Sopa Miso',
    description: 'Sopa tradicional japonesa de miso con tofu y algas.',
    price: 180, // Pesos argentinos
    linkImage: 'https://res.cloudinary.com/dpiwmbsog/image/upload/v1693193708/fitnessMatket/13-sopa-de-miso_qogfmk.jpg',
    id_category: 1,
    id_restaurant: 4
  },
  {
    id: 14,
    name: 'Fettuccine Alfredo',
    description: 'Fettuccine en salsa Alfredo cremosa con pollo a la parrilla.',
    price: 520, // Pesos argentinos
    linkImage: 'https://res.cloudinary.com/dpiwmbsog/image/upload/v1693193710/fitnessMatket/14-Fetuccini-Alfredo_lllpl1.jpg',
    id_category: 2,
    id_restaurant: 5
  },
  {
    id: 15,
    name: 'Burger Criolla',
    description: 'Hamburguesa de carne con chimichurri, cebolla y lechuga.',
    price: 720, // Pesos argentinos
    linkImage: 'https://res.cloudinary.com/dpiwmbsog/image/upload/v1693193710/fitnessMatket/15-burguer-criolla_ba0cif.jpg',
    id_category: 3,
    id_restaurant: 6
  },
  {
    id: 16,
    name: 'Piña Colada',
    description: 'Cóctel refrescante de piña, coco y ron.',
    price: 250, // Pesos argentinos
    linkImage: 'https://res.cloudinary.com/dpiwmbsog/image/upload/v1693193709/fitnessMatket/16-pina-colada-sin-alcohol_bmcs3o.jpg',
    id_category: 4,
    id_restaurant: 2
  },
  {
    id: 17,
    name: 'Tofu Teriyaki',
    description: 'Tofu a la parrilla con glaseado teriyaki y arroz.',
    price: 380, // Pesos argentinos
    linkImage: 'https://res.cloudinary.com/dpiwmbsog/image/upload/v1693193709/fitnessMatket/17-teriyaki-tofu_n4lftc.jpg',
    id_category: 1,
    id_restaurant: 3
  },
  {
    id: 18,
    name: 'Gnocchi de Espinaca',
    description: 'Gnocchi caseros de espinaca con salsa de tomate y albahaca.',
    price: 450, // Pesos argentinos
    linkImage: 'https://res.cloudinary.com/dpiwmbsog/image/upload/v1693193709/fitnessMatket/18-noquis-spinaca_qnluml.jpg',
    id_category: 2,
    id_restaurant: 1
  },
  {
    id: 19,
    name: 'T-Bone Steak',
    description: 'T-Bone jugoso a la parrilla con papas gratinadas y espárragos.',
    price: 1050, // Pesos argentinos
    linkImage: 'https://res.cloudinary.com/dpiwmbsog/image/upload/v1693193710/fitnessMatket/19-T-Bone_Steak_vbwilf.jpg',
    id_category: 3,
    id_restaurant: 2
  },
  {
    id: 20,
    name: 'Sangría de Frutas',
    description: 'Sangría refrescante con frutas de temporada y vino tinto.',
    price: 180, // Pesos argentinos
    linkImage: 'https://res.cloudinary.com/dpiwmbsog/image/upload/v1693193710/fitnessMatket/20-Sangr%C3%ADa_de_Frutas_c9gkmb.jpg',
    id_category: 4,
    id_restaurant: 3
  },
  {
    id: 21,
    name: 'Tacos Veganos',
    description: 'Tacos veganos rellenos de frijoles, aguacate y pico de gallo.',
    price: 320, // Pesos argentinos
    linkImage: 'https://res.cloudinary.com/dpiwmbsog/image/upload/v1693193710/fitnessMatket/21Tacos_Veganos_ljezyt.jpg',
    id_category: 1,
    id_restaurant: 4
  },
  {
    id: 22,
    name: 'Risotto de Setas',
    description: 'Risotto cremoso con setas frescas y queso parmesano.',
    price: 490, // Pesos argentinos
    linkImage: 'https://res.cloudinary.com/dpiwmbsog/image/upload/v1693193710/fitnessMatket/22-risotto_de_Setas_ew2erd.jpg',
    id_category: 2,
    id_restaurant: 5
  },
  {
    id: 23,
    name: 'Ribeye a la Parrilla',
    description: 'Ribeye jugoso a la parrilla con puré de papas y espárragos.',
    price: 950, // Pesos argentinos
    linkImage: 'https://res.cloudinary.com/dpiwmbsog/image/upload/v1693194282/fitnessMatket/23-ribeye_a_la_Parrilla_ww4poh.jpg',
    id_category: 3,
    id_restaurant: 6
  },
  {
    id: 24,
    name: 'Margarita',
    description: 'Clásico cóctel Margarita con tequila, triple sec y limón.',
    price: 240, // Pesos argentinos
    linkImage: 'https://res.cloudinary.com/dpiwmbsog/image/upload/v1693193710/fitnessMatket/24-Margarita_uagmbl.jpg',
    id_category: 4,
    id_restaurant: 1
  },
  {
    id: 25,
    name: 'Bowl de Tofu',
    description: 'Bowl saludable con tofu marinado, arroz integral y vegetales.',
    price: 380, // Pesos argentinos
    linkImage: 'https://res.cloudinary.com/dpiwmbsog/image/upload/v1693193709/fitnessMatket/15-Bowl_de_Tofu_mp4mfv.jpg',
    id_category: 1,
    id_restaurant: 2
  },
  {
    id: 26,
    name: 'Pappardelle Funghi',
    description: 'Pappardelle con salsa de hongos, espinaca y queso de cabra.',
    price: 510, // Pesos argentinos
    linkImage: 'https://res.cloudinary.com/dpiwmbsog/image/upload/v1693193711/fitnessMatket/26-pappardelle_funghi_vdw06e.jpg',
    id_category: 2,
    id_restaurant: 3
  },
  {
    id: 27,
    name: 'Churrasco',
    description: 'Churrasco a la parrilla con chimichurri y papas rústicas.',
    price: 890, // Pesos argentinos
    linkImage: 'https://res.cloudinary.com/dpiwmbsog/image/upload/v1693193711/fitnessMatket/Churrasco_wzrhac.jpg',
    id_category: 3,
    id_restaurant: 4
  },
  {
    id: 28,
    name: 'Cerveza Artesanal IPA',
    description: 'Cerveza India Pale Ale con notas cítricas y amargor equilibrado.',
    price: 280, // Pesos argentinos
    linkImage: 'https://res.cloudinary.com/dpiwmbsog/image/upload/v1693194403/fitnessMatket/28-Cerveza_Artesanal_IPA_qzgdf1.jpg',
    id_category: 4,
    id_restaurant: 5
  },
  {
    id: 29,
    name: 'Bowl de Poke',
    description: 'Bowl de poke fresco con salmón, aguacate y edamame.',
    price: 420, // Pesos argentinos
    linkImage: 'https://res.cloudinary.com/dpiwmbsog/image/upload/v1693193711/fitnessMatket/29-Bowl_de_Poke_zeiga6.jpg',
    id_category: 1,
    id_restaurant: 6
  },
  {
    id: 30,
    name: 'Gnocchi de Patata',
    description: 'Gnocchi de patata con salsa de tomate y albahaca.',
    price: 420, // Pesos argentinos
    linkImage: 'https://res.cloudinary.com/dpiwmbsog/image/upload/v1693193711/fitnessMatket/30-Gnocchi_de_Patata_uhnzcn.jpg',
    id_category: 2,
    id_restaurant: 1
  },
  {
    id: 31,
    name: 'Picanha a la Brasileña',
    description: 'Picanha sazonada a la parrilla con farofa y plátano frito.',
    price: 980, // Pesos argentinos
    linkImage: 'https://res.cloudinary.com/dpiwmbsog/image/upload/v1693193711/fitnessMatket/31-Picanha_a_la_Brasile%C3%B1a_uoggnr.jpg',
    id_category: 3,
    id_restaurant: 2
  },
  {
    id: 32,
    name: 'Cerveza Rubia',
    description: 'Cerveza rubia suave y refrescante de estilo clásico.',
    price: 250, // Pesos argentinos
    linkImage: 'https://res.cloudinary.com/dpiwmbsog/image/upload/v1692752157/fitnessMatket/fut_banner08_f3opnd.jpg',
    id_category: 4,
    id_restaurant: 3
  },
  {
    id: 33,
    name: 'Cerveza Negra',
    description: 'Cerveza oscura con notas tostadas y de chocolate.',
    price: 280, // Pesos argentinos
    linkImage: 'https://res.cloudinary.com/dpiwmbsog/image/upload/v1692752156/fitnessMatket/fut_banner02_m53vdb.jpg',
    id_category: 4,
    id_restaurant: 5
  },
  {
    id: 34,
    name: 'Cerveza Roja',
    description: 'Cerveza de tonalidad rojiza con toques frutales y caramelo.',
    price: 270, // Pesos argentinos
    linkImage: 'https://res.cloudinary.com/dpiwmbsog/image/upload/v1692752157/fitnessMatket/fut_banner06_dbrzlk.jpg',
    id_category: 4,
    id_restaurant: 6
  },
  {
    id: 35,
    name: 'Cerveza de Trigo',
    description: 'Cerveza ligera de trigo con notas a banana y clavo de olor.',
    price: 250, // Pesos argentinos
    linkImage: 'https://res.cloudinary.com/dpiwmbsog/image/upload/v1692752157/fitnessMatket/fut_banner07_iwqjxb.jpg',
    id_category: 4,
    id_restaurant: 1
  },
  {
    id: 36,
    name: 'Cerveza Café y Coñac',
    description: 'Cerveza oscura infusionada con café y coñac para un sabor único.',
    price: 320, // Pesos argentinos
    linkImage: 'https://res.cloudinary.com/dpiwmbsog/image/upload/v1692752156/fitnessMatket/fut_banner03_anbw3p.jpg',
    id_category: 4,
    id_restaurant: 6
  },
  {
    id: 37,
    name: 'Cerveza Rubia',
    description: 'Cerveza rubia suave y refrescante de estilo clásico.',
    price: 250, // Pesos argentinos
    linkImage: 'https://res.cloudinary.com/dpiwmbsog/image/upload/v1692752156/fitnessMatket/fut_banner04_mbyxcc.jpg',
    id_category: 4,
    id_restaurant: 2
  },
  {
    id: 38,
    name: 'Cerveza IPA',
    description: 'Cerveza India Pale Ale con amargor y notas cítricas intensas.',
    price: 290, // Pesos argentinos
    linkImage: 'https://res.cloudinary.com/dpiwmbsog/image/upload/v1692752157/fitnessMatket/fut_banner09_od9eba.jpg',
    id_category: 4,
    id_restaurant: 3
  }

]

export const USERS = [
  {
    id: '001',
    userID: '001',
    email: 'arnold.schwarzengger@email.com',
    name: 'Arnold Schwarzenegger',
    address: 'Av. Regimiento 5555, Springfield, Argentina',
    phone: '+56 999 999 999',
    createdAt: '01/01/1999',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/e/ed/Arnold_Schwarzenegger_by_Gage_Skidmore_4_%28cropped%29.jpg'
  }
]

export const OrderListDATA = [
  {
    id: '01',
    customerID: '05',
    createdAt: '21 de agosto 2023',
    totalPrice: '68000',
    totalQuantity: '6'
  },
  {
    id: '02',
    customerID: '01',
    createdAt: '03 de febrero 2023',
    totalPrice: '99000',
    totalQuantity: '10'
  },
  {
    id: '03',
    customerID: '05',
    createdAt: '01 de marzo 2023',
    totalPrice: '18600',
    totalQuantity: '2'
  },
  {
    id: '04',
    customerID: '05',
    createdAt: '08 de junio 2022',
    totalPrice: '25000',
    totalQuantity: '3'
  },
  {
    id: '05',
    customerID: '03',
    createdAt: '01 enero 2022',
    totalPrice: '56000',
    totalQuantity: '4'
  }

]
