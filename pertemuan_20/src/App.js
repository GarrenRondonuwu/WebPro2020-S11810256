// import './App.css';

// import Card from './Components/card';

// import {person} from './Utils/person';

// import Counter from "./Components/counter" 



// function App() {

//   return (

//     <>

//       {/*person.map((item) =>{

//         return(

//           <Card

//             name={item.name}

//             institution={item.institution}

//             address={item.address}

//             phone={item.phone}

//           />

//         );

//       })*/}

//       <Counter title = "Counter Component"/>

//     </>

//   );

// }



// export default App;





//==================[ PERTEMUAN 23 ]==================



// import React from 'react';

// import './App.css';

// const sortByPower = (a, b) => {

//   return b.power - a.power;

// }

// const List = props => {

//   return (<>

//     <h1>React People!</h1>

//       <ul className="list">

//         {props.data.sort(sortByPower).map((person) => (

//           <li key={person.name} className="list-item">

//             <div className="list-item-image-container">

//               <img src={person.thumbnail} />

//             </div>

//             <span className="list-item-name">

//               {person.name} ( Power:{' '}

//             <span className="list-item-power">{person.power}</span> )

//           </span>

//         </li>

//       ))}

//     </ul>

//   </>

//   );

// }

// const App = () => {

//   const human = [

//     {

//       name: 'Krillin',

//       thumbnail:'https://upload.wikimedia.org/wikipedia/pt/6/63/Kuririn_42311.png',

//       power: 10

//     },  

//     {

//       name: 'Bulma',

//       thumbnail: 'https://upload.wikimedia.org/wikipedia/hu/1/1c/Bulma.png',

//       power: 3

//     },

//     {

//       name: 'Chi-chi',

//       thumbnail:'https://upload.wikimedia.org/wikipedia/hu/8/84/Chi-chi_dragon_ball_anime.jpg',

//       power: 30

//     }

//   ];

//   return (

//     <div className="App">

//       <List data={human} />

//     </div>

//   );

// }

// export default App;



//====================================================



//==================[ PERTEMUAN 24 ]==================



import React, {Component, useEffect, useState} from 'react'

import Card from "./Components/card"

import "./App.css"

import axios from 'axios';



class App extends Component {

    state = {

        users: [],

    };



    componentDidMount(){

        axios

            .get("https://jsonplaceholder.typicode.com/users")

            .then((response) => this.setState({users: response.data}))

    }

    render(){

        return(

            <>

                {this.state.users.map((item)=>{

                    return(

                        <Card

                            name={item.name}

                            username={item.username}

                            email={item.email}

                            phone={item.phone} 

                        />

                    )

                })}

            </>

        )

    }

}



// Menggunakan Function

// const App = () =>{

// const [users, setUsers] = useState([])



//     useEffect(() => {

//      axios

//     .get("https://jsonplaceholder.typicode.com/users")

//    .then((response) => setUsers(response.data))

// }, [])

//console.log(users)

//return(

//<>

// {
// users.map((item) =>{
// return(
// <Card
//  name={item.name}
//  username={item.username}
//  email={item.email}
//  phone={item.phone} 

// />

// )

// })

// }

// </>

// )

// }
export default App



import React from 'react';

import './App.css';

const sortByPower = (a, b) => {

  return b.power - a.power;

}

const List = props => {

  return (<>

    <h1>React People!</h1>

      <ul className="list">

        {props.data.sort(sortByPower).map((person) => (

          <li key={person.name} className="list-item">

            <div className="list-item-image-container">

              <img src={person.thumbnail} />

            </div>

            <span className="list-item-name">

              {person.name} ( Power:{' '}

            <span className="list-item-power">{person.power}</span> )

          </span>

        </li>

      ))}

    </ul>

  </>

  );

}

const App = () => {

  const human = [

    {

      name: 'Krillin',

      thumbnail:'https://upload.wikimedia.org/wikipedia/pt/6/63/Kuririn_42311.png',

      power: 10

    },  

    {

      name: 'Bulma',

      thumbnail: 'https://upload.wikimedia.org/wikipedia/hu/1/1c/Bulma.png',

      power: 3

    },
    
    {

      name: 'Chi-chi',

      thumbnail:'https://upload.wikimedia.org/wikipedia/hu/8/84/Chi-chi_dragon_ball_anime.jpg',

      power: 30

    }

  ];
  return (

    <div className="App">

      <List data={human} />

    </div>

  );

}

export default App;