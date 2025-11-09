import Footer from "./components/Footer";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Person from "./components/Person";

const App = () => {
  const randomNumber = Math.floor(Math.random() * 10);

  console.log(randomNumber)
  const data = [
    { name: "Rahul Verma", profession: "Lead Engineer", age: 30 },
    { name: "Manish Sharma", profession: "Software Engineer 1", age: 24 },
    { name: "Shivani Arora", profession: "Product Manager", age: 33 },
  ];

  const todos = ["Learn JS", "Revise HTML", "Buy groceries", "Read an article"]

  // let output = "";
  // if(randomNumber % 2 == 0) output = "EVEN";
  // else output = "ODD";

  return (
    // fragment element => <></>
    <>
      {/* 
      <Navbar/>
      <Main/>
      <Footer/> 
      */}

      {/* <Person />
      <Person />
      <Person /> */}


      { todos.map((todo, ind) => <li key={ind}>{todo}</li>) }
      {/* { todos.map((todo) => {
        return <li>{todo}</li>
      }) } */}

      {/* { data.map(person => <Person name={person.name} profession={person.profession} age={person.age}/>) } */}
      {/* { data.map(person => <Person name={person.name} profession={person.profession} age={person.age}/>) } */}

      
      <p>
        {randomNumber % 2 == 0 ? "EVEN" : "ODD" }
      </p>

      {/* {randomNumber % 2 == 0 && randomNumber} */}
    </>
  );
};

export default App;
