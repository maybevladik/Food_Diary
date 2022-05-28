import React from 'react'
import { useHttp } from '../hooks/http.hook'
import { DishCard } from '../components/DishCard'
import dish1 from '../images/dish1.jpg'
import dish2 from '../images/dish2.jpg'
import dish3 from '../images/dish3.jpg'
import dish7 from '../images/dish7.jpg'
import dish8 from '../images/dish8.jpg'
import dish9 from '../images/dish9.jpg'
import classes from './index.module.css';

const DishPage = () => {
    return (
        <div className = {classes.container}>
        <div className="row" className = {classes.row}>
    <div className="col s12 m7">
      <div className="card">
        <div className="card-image"  >
          <img src= { dish1 } />
          <span className="card-title">Рисова запіканка</span>
        </div>
        <div className="card-content" className = {classes.text}>
          <p>Інтернаціональне страва з вареного рису і м’яса господині люблять за простоту і швидкість приготування.</p>
        </div>
      </div>
    </div>
  </div>
  <div className="row" className = {classes.row}>
  <div className="col s12 m7">
    <div className="card">
      <div className="card-image">
        <img src= { dish2 } />
        <span className="card-title">Класичні 'Їжачки'</span>
      </div>
      <div className="card-content" className = {classes.text}>
        <p>Забавна назва тефтелі отримали з-за гострих рисинок, які виступають по всій поверхні, як голки. 
            </p>
      </div>
    </div>
  </div>
</div><div className="row" className = {classes.row}>
    <div className="col s12 m7">
      <div className="card">
        <div className="card-image" >
          <img src= { dish3 } />
          <span className="card-title">Рисові биточки</span>
        </div>
        <div className="card-content" className = {classes.text}>
          <p>Дуже простий рецепт, який дозволяє з толком використовувати вчорашню рисову кашу або невдало зварений гарнір.</p>
        </div>
      </div>
    </div>
  </div>
  <div className="row" className = {classes.row}>
  <div className="col s12 m7">
    <div className="card">
      <div className="card-image" >
        <img src= { dish7 } />
        <span className="card-title">Піца з ананасами</span>
      </div>
      <div className="card-content" className = {classes.text}>
        <p>Обожнюєте піцу?
            Рецепт такий випічки стане справжньою знахідкою для тих, хто постійно підраховує калорії.</p>
      </div>
    </div>
  </div>
</div>
<div className="row" className = {classes.row}>
    <div className="col s12 m7">
      <div className="card">
        <div className="card-image"  >
          <img src= { dish8 } />
          <span className="card-title">Ананаси з часником</span>
        </div>
        <div className="card-content" className = {classes.text}>
          <p>Шанувальникам незвичайних продуктових дуетів такий рецепт припаде до смаку!</p>
        </div>
      </div>
    </div>
  </div>
  <div className="row" className = {classes.row}>
    <div className="col s12 m7">
      <div className="card">
        <div className="card-image"  >
          <img src= { dish9 } />
          <span className="card-title">Рис з ананасом</span>
        </div>
        <div className="card-content" className = {classes.text}>
          <p>Якщо ви не любите рис, значить, ви ще не пробували готувати його з ананасами та овочами.</p>
        </div>
      </div>
    </div>
  </div>
</div>
    )
}

export default DishPage;