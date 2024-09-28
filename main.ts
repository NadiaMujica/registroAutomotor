import { Auto } from "./auto";
import { Moto } from "./moto";
import { Camion } from "./camion";
import { RegistroAutomotor } from "./registro";


let Auto1: Auto = new Auto("Chevrolet", "Corsa", 2002, "Azul");
let Auto2: Auto = new Auto("Volkswagen", "Gol", 2000, "Rojo");
let Auto3: Auto = new Auto("Ford", "Focus", 2011, "Blanco");

let Moto1: Moto = new Moto("Honda", "Lagrande", 2002, "Azul");
let Moto2: Moto = new Moto("Zanella", "Lamediana", 2000, "Rojo");
let Moto3: Moto = new Moto("Yamaha", "Lachiquita", 2011, "Blanco");

let camion1: Camion = new Camion("Mercedes Benz", "Elchiquito", 2020, "Negro");
let camion2: Camion = new Camion("Volvo", "Elmediano", 2024, "Gris");
let camion3: Camion = new Camion("Scania", "Elgrandote", 2009, "Blanco");

let registro1: RegistroAutomotor = new RegistroAutomotor(141);

registro1.agregarAuto("Fiat", "Argo", 2021, "Gris");
console.log(registro1.getListaAutos());
