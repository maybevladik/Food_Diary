import React from 'react'
import classes from './index.module.css';
import dish10 from '../images/dish10.png'

export const MenuPage = () => {
    return (
        <div className = { classes.menu_cont }>
            <div className = { classes.menu_div } >
            <ul className="collection with-header" >
            <li className="collection-header" ><div className = { classes.menu_icon }>
                <div><h4>Меню 1</h4></div> 
            <div className={ classes.but }><a class="waves-effect waves-light btn">Add</a></div></div></li>
        <li className="collection-item">Сніданок: мюслі, заправлені йогуртом, яблуко (кисле або кисло-солодке) або груша, кава або чай.</li>
        <li className="collection-item">Другий сніданок: заправлений нежирною сметаною сир, жменя сухофруктів.</li>
        <li className="collection-item">Обід: овочевий суп, запечена картопля, салат зі свіжих овочів, гуляш, сік.</li>
        <li className="collection-item">Полуденок: фруктовий салат, крекери.</li>
        <li className="collection-item">Вечеря: відварне філе птиці, вінегрет, чай.</li>
            </ul>
            </div>
            <div className = { classes.menu_div } >
            <ul className="collection with-header" >
        <li className="collection-header"><div className = { classes.menu_icon }>
                <div><h4>Меню 2</h4></div> 
            <div className={ classes.but }><a class="waves-effect waves-light btn">Add</a></div></div></li>
        <li className="collection-item">Сніданок: каша гречана, салат з овочів, чай.</li>
        <li className="collection-item">Другий сніданок: яблуко, йогурт.</li>
        <li className="collection-item">Обід: суп з крупою на бульйоні з овочів, запечена риба з гарніром з бурого рису, вінегрет, компот.</li>
        <li className="collection-item">Полуденок: какао з тостом і сир.</li>
        <li className="collection-item">Вечеря: рагу з овочів, шинка, чай.</li>
            </ul>
            </div>
            <div className = { classes.menu_div } >
            <ul className="collection with-header" >
        <li className="collection-header"><div className = { classes.menu_icon }>
                <div><h4>Меню 3</h4></div> 
            <div className={ classes.but }><a class="waves-effect waves-light btn">Add</a></div></div></li>
        <li className="collection-item">Сніданок: вівсяна каша, запечене в духовці яблуко, чай з медом.</li>
        <li className="collection-item">Другий сніданок: йогурт, тости.</li>
        <li className="collection-item">Обід: рибний суп, відварна телятина з тушкованими овочами, сік.</li>
        <li className="collection-item">Полуденок: йогурт, сир.</li>
        <li className="collection-item">Вечеря: м'ясо, бурий рис, салат з овочів, чай.</li>
            </ul>
            </div>
        </div>
    )
}

