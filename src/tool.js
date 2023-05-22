import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

const Tool = (props) => {

    const direction = props.direction;
    return (
      <>
        <div className='container'>
          <Tippy content="Thanks for hovering! I'm a tooltip" placement={direction}>
          <button className='hover-me'>Hover over me!</button>
          </Tippy>
        </div>
      </>
    );
  }
  
  export default Tool;