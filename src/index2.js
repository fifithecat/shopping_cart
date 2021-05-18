import React, {
    createContext, useContext, useState
  } from 'react';
  import {render} from 'react-dom';
  //=================================
  const myContainerStyle = {
    maxWidth:'280px',margin:'5px auto 0',
    padding:'5px 0',backgroundColor:'#ddd',
    textAlign:'center',border:'1px solid #000',
    fontSize:'16px',fontFamily:'Helvetica'
  };
  const mySpacerStyle = {margin:'5px 0'};
  const myInputStyle = {
    margin:'6px 0',width:'90%',outline:'none',
    fontSize:'18px',textAlign:'center'
  };
  //===============================
  const myCreateContext = createContext({
    myInputValueProps: '',
    myInputHandlerProps: () => {}
  });
  //================================
  function MyInputComponent(props) {
    return (
      <input
        value={props.myInputValueProps}
        onChange={props.myInputHandlerProps}
        style={myInputStyle}
      />
  );
  }
  //================================
  function MyComponentA3() {
    const myLocalContext = useContext(myCreateContext);
    return (
      <>
        MyComponent A3: <MyInputComponent
          myInputValueProps={
            myLocalContext.myInputValueProps
          }
          myInputHandlerProps={
            myLocalContext.myInputHandlerProps
          }
        />
      </>
    );
  }
  const MyComponentA2 = () => <MyComponentA3 />;
  const MyComponentA1 = () => <MyComponentA2 />;
  //================================
  function MyComponentB3() {
    const myLocalContext = useContext(myCreateContext);
    return (
      <>
        MyComponent B3: <MyInputComponent
          myInputValueProps={
            myLocalContext.myInputValueProps
          }
          myInputHandlerProps={
            myLocalContext.myInputHandlerProps
          }
        />
      </>
    );
  }
  const MyComponentB2 = () => <MyComponentB3 />;
  const MyComponentB1 = () => <MyComponentB2 />;
  //================================
  function MyApp() {
    const [
      myInputValue,
      setMyInputValue
    ] = useState('');
  //--------------------------------
    const myInputHandler = event => {
      setMyInputValue(event.target.value);
    };
  //--------------------------------
    return (
      <div style={myContainerStyle}>
        <myCreateContext.Provider
          value={{
            myInputValueProps: myInputValue,
            myInputHandlerProps: myInputHandler
          }}
        >
          <MyComponentA1 />
          <hr style={mySpacerStyle} />
          <MyComponentB1 />
        </myCreateContext.Provider>
      </div>
    );
  }
  render(<MyApp />, document.getElementById('root'));