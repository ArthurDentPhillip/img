import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function Book (props){
const starsActive = props.starsActive;
    return (
        <div className='block col-4'>
            <div className='triangle-topleft '>
                <p>{props.triangle}</p>
            </div>
            <img src={props.img} alt="Daisy Jones" />
            <a href="">{props.text_a_one}</a>
            <a href="">{props.text_a_two}</a>
            <div className="rating-result">
                {starsActive.map((name)=>{
                    return <span key={name.id} className={name.title}></span>
                })}
            </div>
            <p className='text'>{props.index}</p>
            <p className='text'>{props.cover}</p>
            <p className='text'>{props.offer} offers from ${props.price}</p>
        </div>
    );
}
function App() {
    const starsActive1 = [
       {id: 1, title: 'active'},
       {id: 2, title: 'active'},
       {id: 3, title: 'active'},
       {id: 4, title: 'no-active'},
    ];
    const starsActive2 = [
        {id: 1, title: 'active'},
        {id: 2, title: 'active'},
        {id: 3, title: 'no-active'},
        {id: 4, title: 'no-active'},
     ];
     const starsActive3 = [
        {id: 1, title: 'active'},
        {id: 2, title: 'active'},
        {id: 3, title: 'no-active'},
        {id: 4, title: 'no-active'},
     ];
     const starsActive4 = [
        {id: 1, title: 'active'},
        {id: 2, title: 'active'},
        {id: 3, title: 'active'},
        {id: 4, title: 'active'},
     ];
     const starsActive5 = [
        {id: 1, title: 'active'},
        {id: 2, title: 'active'},
        {id: 3, title: 'active'},
        {id: 4, title: 'no-active'},
     ];
     const starsActive6 = [
        {id: 1, title: 'active'},
        {id: 2, title: 'no-active'},
        {id: 3, title: 'no-active'},
        {id: 4, title: 'no-active'},
     ];

    const posts = [
        {id: 1, title: 'Привет, мир', content: 'Добро пожаловать в документацию React!'},
        {id: 2, title: 'Установка', content: 'React можно установить из npm.'}
      ];
  return (
    <section>
        <div className='container'>
            <div className='row'>
                <Book img='https://m.media-amazon.com/images/I/41Pw77onK7L._SY291_BO1,204,203,200_QL40_FMwebp_.jpg' text_a_one="The Courage to Be Free: Florida's Blueprint for America's Reviva" text_a_two="Ron DeSantis" index="4.5" cover="Hardcover" price="10.6" offer="125" triangle="1" starsActive={starsActive1}/>
                <Book img='https://m.media-amazon.com/images/I/515N5xQGsAL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg' text_a_one="Daisy Jones & The Six: A Novel" text_a_two="Taylor Jenkins Reid" index="3.8" cover="Paperback" price="25.2" offer="66" triangle="2" starsActive={starsActive6}/>
                <Book img='https://m.media-amazon.com/images/I/51jayVNubpL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg' text_a_one="How to Catch a Leprechaun" text_a_two="Adam Wallace" index="6.767" cover="Paperback" price="5.6" offer="32" triangle="3" starsActive={starsActive5}/>
                <Book img='https://m.media-amazon.com/images/I/51B7kuFwQFL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg' text_a_one="Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones" text_a_two="James Clear" index="2.1" cover="Hardcover" price="6.7" offer="203" triangle="4" starsActive={starsActive4}/>
                <Book img='https://m.media-amazon.com/images/I/51VC+Vru96L._SY344_BO1,204,203,200_.jpg' text_a_one="It Starts with Us: A Novel (2) (It Ends with Us)" text_a_two="Colleen Hoover" index="4.8" cover="Paperback" price="7.8" offer="165" triangle="5" starsActive={starsActive2}/>
                <Book img='https://m.media-amazon.com/images/I/51Zu0ZwT0jL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg' text_a_one="It Ends with Us: A Novel (1)" text_a_two="Colleen Hoover" index="5.25" cover="Paperback" price="5.7" offer="150" triangle="6" starsActive={starsActive3}/>
            </div>
        </div>
    </section>
  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);