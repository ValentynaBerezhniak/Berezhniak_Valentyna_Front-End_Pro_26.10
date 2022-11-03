const usersBirthdayYear = prompt('Уведіть Ваш рік народження')
const currentYear = new Date(); 

if (usersBirthdayYear !== null && usersBirthdayYear !== '') {
    let date = new Date();  
    let userYear = `Тобі ${date.getFullYear() - usersBirthdayYear}`; 

    const usersCity = prompt ('В якому місті Ви живете?')

    const capitals = ['Київ' , 'Вашингтон' , 'Лондон']
    const countries = ['України' , 'США' , 'Великої Британії']
    

    if (usersCity !== null && usersCity !== ''){
        if (usersCity === capitals[0]) {
            let userCapitals = `Ти живеш у столиці ${countries[0]} `   // 'Ти живеш у столиці ' + countries[0];
            alert( `${userYear} 
${userCapitals}`)
        } 
        else if (usersCity === capitals[1]) {
            let userCapitals = `Ти живеш у столиці ${countries[1]} `;
            alert( `${userYear} 
${userCapitals}`)
        }
         else if (usersCity === capitals[2]) {
            let userCapitals = `Ти живеш у столиці ${countries[2]} `;
            alert( `${userYear} 
${userCapitals}`)
        } 
        else {
            let userCapitals = `Ти живеш у місті ${usersCity} ` //'Ти живеш у місті ' + usersCity;
            alert( `${userYear} 
${userCapitals}`)
        }

        const favoriteSport= prompt ('Який Ваш улюблений вид спорту?')
        const sport = ['Бокс' , 'Баскетбол' , 'Футбол']
        const sportsman = ['Майком Тайсоном' , 'Майклом Джорданом' , 'Андрєм Шевченком']

        if (favoriteSport !== null && favoriteSport !== ''){
            if (favoriteSport === sport[0]) {
                let userSport = 'Круто! Хочеш стати ' + sportsman[0];
                alert( userSport)
            } 
            else if (favoriteSport === sport[1]) {
                let userSport = 'Круто! Хочеш стати  ' + sportsman[1];
                alert( userSport)
            }
             else if (favoriteSport === sport[2]) {
                let userSport = 'Круто! Хочеш стати  ' + sportsman[2];
                alert( userSport)
            } 
            else {
                let userSport = 'Круто! Твій улюблений спорт  ' + favoriteSport;
                alert( userSport)
            }
        } 
        else {
            alert('Шкода, що Ви не захотіли ввести свій улюблений спорт')
        }
    } else {
        alert('Шкода, що Ви не захотіли ввести своє місто')
    } 

} else {
    alert('Шкода, що Ви не захотіли ввести свій вік')
}
