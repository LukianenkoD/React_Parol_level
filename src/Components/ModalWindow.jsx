import React, {useState} from 'react';
import Parol from './Parol';

function ModalWindow() {
    const [block, setBlock] = useState('none')
  return (
    <>
    <div style={{display:block}} className='modal'>
      <p style={{color:'gray'}}>Parol must include number</p>

    </div>
    <Parol block={block} func={setBlock}/>
     </>
  )
}

export default ModalWindow