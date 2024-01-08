import './App.css';
import useCustom from "./useCustom";
import Stylesheet from './component/stylesheet';
import Inline from './component/Inline';
import './appStyles.css'
import List from './List'
import styles from './appStyles.module.css'
import StyledBtn from './component/styled-comp';
function App() {
  // const count = useCustom();
  // const chng=()=>{
  //   console.log("clicked on button")
  // }
  return (

    <div>
      {/* <StyledBtn>Styled component</StyledBtn>
      <StyledBtn variant='outline'>Styled component</StyledBtn>

      <h1 className='error'>Error</h1>  {/*from css with global scope*/}
      {/* <h1 className={styles.success}>Success</h1> {/*from module with local scope*/}
      {/* <Stylesheet />
      <Inline />
      <div >custom hook :: {count}</div>
      <button onClick = {chng}>Click me</button> 
      <h2>This is a new branch</h2>   */}
      <div className='list-cont'>
      <div  className='box'>
       <List />
      </div>
      <div className='box'>
       <List />
      </div>
      <div className='box'>
       <List />
      </div>
      <div className='box'>
       <List />
      </div>
      </div>
    </div>
  );
}

export default App;
