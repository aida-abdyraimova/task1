// 4. Интернет-магазин занимается продажей различных сувениров и безделушек. Каждый сувенир весит - 75 г, а безделушка - 112 г. Напишите программу, запрашивающую у пользователя количество тех и других покупок, после чего выведите на экран общий вес посылки.

const suvenir = 75;
const bezdelushka = 112;
let kolSuvenir = +prompt("Введите количество сувениров");
let kolBezdelushka = +prompt("введите количество безделушек");
let totalWeight = (suvenir*kolSuvenir)+(bezdelushka*kolBezdelushka);
console.log(totalWeight);
document.write("4. " + "Общий вес покупок составляет: " + totalWeight + " г.");