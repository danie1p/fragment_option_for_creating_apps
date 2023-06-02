
const Hello = (props) => {

  return (
    <div>
      <p>{props.name}, you are {props.age} years old.</p>
    </div>
  );

};

const Footer = () => {

  return (

    <div>
      <p>This app was created by <a href="https://github.com/danie1p">Daniel P.</a></p>
    </div>

  );

}

const App = () => {

  const name = "Peter";
  const age = 11;

  return (

    <>

      <h1>Greetings</h1>
      <Hello name='Maya' age={26 + 10} />
      <Hello name={name} age={age} />
      <Footer />

    </>

  )

};

export default App;
