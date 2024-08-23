import { addDoc, collection } from "firebase/firestore"
import db from "../db/db.js"


const productos =[
    {
        id: 1,
        titulo: "revista ciencia y tecnología",
        precio: 9.99,
        stock: 100,
        categoria: "revistas",
        imagen: "https://image.isu.pub/161028150612-5657e69858c911224ddd4b41f3d1d734/jpg/page_1_thumb_large.jpg"
    },
    {
        id: 2,
        titulo: "revista historia universal",
        precio: 8.99,
        stock: 50,
        categoria: "revistas",
        imagen: "https://revistas.uncu.edu.ar/ojs3/public/journals/57/cover_issue_485_es_ES.png"
    },
    {
        id: 3,
        titulo: "revista deportes y salud",
        precio: 7.49,
        stock: 75,
        categoria: "revistas",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG7webd2zluE99l9LYBjinTw_A9IfigZ5qSQ&s"
    },
    {
        id: 4,
        titulo: "revista cocina gourmet",
        precio: 10.99,
        stock: 60,
        categoria: "revistas",
        imagen: "https://image.isu.pub/121030150837-64374a25b7f14cc9b89150e280551a0d/jpg/page_1.jpg"
    },
    {
        id: 5,
        titulo: "revista viajes y aventuras",
        precio: 6.99,
        stock: 30,
        categoria: "revistas",
        imagen: "https://image.isu.pub/121107155228-556b59434f504bdaac05c94e6d80d66a/jpg/page_1_thumb_large.jpg"
    },
    {
        id: 6,
        titulo: "revista arte y cultura",
        precio: 5.99,
        stock: 80,
        categoria: "revistas",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9cSGzVkaZvJD5722MU5A-JJt_T5JMZzotcw&s"
    },
    {
        id: 7,
        titulo: "revista tecnología del futuro",
        precio: 12.99,
        stock: 40,
        categoria: "revistas",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9cSGzVkaZvJD5722MU5A-JJt_T5JMZzotcw&s"
    },
    {
        id: 8,
        titulo: "revista naturaleza y ecología",
        precio: 7.99,
        stock: 90,
        categoria: "revistas",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9cSGzVkaZvJD5722MU5A-JJt_T5JMZzotcw&s"
    },
    {
        id: 9,
        titulo: "revista moda y estilo",
        precio: 9.49,
        stock: 70,
        categoria: "revistas",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9cSGzVkaZvJD5722MU5A-JJt_T5JMZzotcw&s"
    },
    {
        id: 10,
        titulo: "revista economía y negocios",
        precio: 11.99,
        stock: 55,
        categoria: "revistas",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9cSGzVkaZvJD5722MU5A-JJt_T5JMZzotcw&s"
    },
    {
        id: 11,
        titulo: "revista ciencia ficción",
        precio: 6.49,
        stock: 65,
        categoria: "revistas",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9cSGzVkaZvJD5722MU5A-JJt_T5JMZzotcw&s"
    },
    {
        id: 12,
        titulo: "revista fotografía y video",
        precio: 8.49,
        stock: 85,
        categoria: "revistas",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9cSGzVkaZvJD5722MU5A-JJt_T5JMZzotcw&s"
    },
    {
        id: 13,
        titulo: "revista música y cine",
        precio: 7.99,
        stock: 95,
        categoria: "revistas",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9cSGzVkaZvJD5722MU5A-JJt_T5JMZzotcw&s"
    },
    {
        id: 14,
        titulo: "revista literatura y poesía",
        precio: 5.49,
        stock: 45,
        categoria: "revistas",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9cSGzVkaZvJD5722MU5A-JJt_T5JMZzotcw&s"
    },
    {
        id: 15,
        titulo: "revista ciencia popular",
        precio: 9.99,
        stock: 60,
        categoria: "revistas",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9cSGzVkaZvJD5722MU5A-JJt_T5JMZzotcw&s"
    },
    {
        id: 16,
        titulo: "revista viajes exóticos",
        precio: 10.49,
        stock: 35,
        categoria: "revistas",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9cSGzVkaZvJD5722MU5A-JJt_T5JMZzotcw&s"
    },
    {
        id: 17,
        titulo: "revista salud y bienestar",
        precio: 6.99,
        stock: 75,
        categoria: "revistas",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9cSGzVkaZvJD5722MU5A-JJt_T5JMZzotcw&s"
    },
    {
        id: 18,
        titulo: "revista tecnología actual",
        precio: 12.49,
        stock: 50,
        categoria: "revistas",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9cSGzVkaZvJD5722MU5A-JJt_T5JMZzotcw&s"
    },
    {
        id: 19,
        titulo: "revista deportes extremos",
        precio: 8.99,
        stock: 70,
        categoria: "revistas",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9cSGzVkaZvJD5722MU5A-JJt_T5JMZzotcw&s"
    },
    {
        id: 20,
        titulo: "revista hogar y jardín",
        precio: 9.49,
        stock: 55,
        categoria: "revistas",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9cSGzVkaZvJD5722MU5A-JJt_T5JMZzotcw&s"
    },
    {
        id: 21,
        titulo: "revista historia contemporánea",
        precio: 7.49,
        stock: 65,
        categoria: "revistas",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9cSGzVkaZvJD5722MU5A-JJt_T5JMZzotcw&s"
    },
    {
        id: 22,
        titulo: "revista ciencia y futuro",
        precio: 11.49,
        stock: 80,
        categoria: "revistas",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9cSGzVkaZvJD5722MU5A-JJt_T5JMZzotcw&s"
    },
    {
        id: 23,
        titulo: "revista cocina internacional",
        precio: 10.99,
        stock: 45,
        categoria: "revistas",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9cSGzVkaZvJD5722MU5A-JJt_T5JMZzotcw&s"
    },
    {
        id: 24,
        titulo: "revista fotografía profesional",
        precio: 8.99,
        stock: 85,
        categoria: "revistas",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9cSGzVkaZvJD5722MU5A-JJt_T5JMZzotcw&s"
    },
    {
        id: 25,
        titulo: "revista música clásica",
        precio: 6.49,
        stock: 75,
        categoria: "revistas",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9cSGzVkaZvJD5722MU5A-JJt_T5JMZzotcw&s"
    },
    {
        id: 26,
        titulo: "revista moda juvenil",
        precio: 7.99,
        stock: 95,
        categoria: "revistas",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9cSGzVkaZvJD5722MU5A-JJt_T5JMZzotcw&s"
    },
    {
        id: 27,
        titulo: "revista economía global",
        precio: 11.99,
        stock: 50,
        categoria: "revistas",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9cSGzVkaZvJD5722MU5A-JJt_T5JMZzotcw&s"
    },
    {
        id: 28,
        titulo: "revista ciencia aplicada",
        precio: 9.49,
        stock: 70,
        categoria: "revistas",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9cSGzVkaZvJD5722MU5A-JJt_T5JMZzotcw&s"
    },
    {
        id: 29,
        titulo: "revista viajes nacionales",
        precio: 10.49,
        stock: 60,
        categoria: "revistas",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9cSGzVkaZvJD5722MU5A-JJt_T5JMZzotcw&s"
    },
    {
        id: 30,
        titulo: "revista salud natural",
        precio: 6.99,
        stock: 40,
        categoria: "revistas",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9cSGzVkaZvJD5722MU5A-JJt_T5JMZzotcw&s"
    },
    {
        id: 31,
        titulo: "diario Clarin",
        precio: 5.00,
        stock: 90,
        categoria: "diarios",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs-L4nqNxJvvKpYVQuiTAYbiwj6CTpxV-9Qw&s"
    },
    {
        id: 32,
        titulo: "diario Ole",
        precio: 4.00,
        stock: 90,
        categoria: "diarios",
        imagen: "https://t.prcdn.co/img?cid=9y4g&page=1&date=20221219&v=0&ver=0&width=600"
    },
    {
        id: 33,
        titulo: "diario La Nacion",
        precio: 5.00,
        stock: 90,
        categoria: "diarios",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/2/23/Lanacion_1_arg_1870.jpg"
    },
    {
        id: 34,
        titulo: "diario Popular",
        precio: 3.50,
        stock: 90,
        categoria: "diarios",
        imagen: "https://media.diariopopular.com.ar/p/6ebb56bdf1e3d8db95c0dfc322731e2e/adjuntos/143/imagenes/008/095/0008095051/1140x0/smart/m-diario-popular-argentina-2022-1jpg.jpg"
    },
    {
        id: 35,
        titulo: "diario Cronica",
        precio: 4.00,
        stock: 90,
        categoria: "diarios",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWTlrwjUVIAd4uxmjxPHqN_E-kyP2Dtb34wA&s"
    },
    {
        id: 36,
        titulo: "diario El Dia",
        precio: 3.50,
        stock: 90,
        categoria: "diarios",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSus0QWKu_25cU_HVViJahS2u95KTTZtj_nfg&s"
    },
    {
        id: 37,
        titulo: "diario Perfil",
        precio: 5.00,
        stock: 90,
        categoria: "diarios",
        imagen: "https://fotos.perfil.com//2024/05/26/900/0/la-tapa-del-diario-perfil-del-domingo-26-de-mayo-de-2024-1808225.jpg"
    },
    {
        id: 38,
        titulo: "juguete oso",
        precio: 20.49,
        stock: 60,
        categoria: "otros",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9cSGzVkaZvJD5722MU5A-JJt_T5JMZzotcw&s"
    }
];

const seedProducts =  () => {
    productos.map(({id, ...rest}) => {
        const productosRef = collection(db, 'productos')
        addDoc(productosRef, rest)
    })
    console.log("Se insertaron los productos")
}
seedProducts()