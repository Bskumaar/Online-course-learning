import React from 'react'

function CourseInfo() {
  return (
    <div className='container web'>
        <div className='row '>
          <div className='col-md-4   webtext '>
            <div  className='frontul '>
            <h1 className='p-2 text-center'>Frontend</h1>
            <ul className='fontul1' >
              <li className='frondli'>HTML</li>
              <li className='frondli' >CSS</li>
              <li className='frondli'>Bootstrap</li>
              <li className='frondli'>JQuery</li>
              <li className='frondli' >Java Script</li>
              <li className='frondli'>React Js</li>
              <li className='frondli'>Angular Js</li>
            </ul>
            </div>
            </div>
            <div className='col-md-4 webtext'>
            <div  className='frontul'>
            <h1 className='p-2 text-center'>Backend</h1>
            <ul className='fontul1'>
              <li className='frondli'>Java</li>
              <li className='frondli' >Pythaon</li>
              <li className='frondli'>Node Js</li>
              <li className='frondli'>PHP</li>
              <li className='frondli' >.Net</li>
              <li className='frondli'>C#</li>
         
            </ul>
            </div> </div>
            <div className='col-md-4 webtext'>
            <div  className='frontul'>
            <h1 className='p-2 text-center' >Data Base</h1>
            <ul className='fontul1'>
              <li className='frondli'>Sql</li>
              <li className='frondli' >My Sql</li>
              <li className='frondli'>MongoDB</li>
              <li className='frondli'>Azure Sql</li>
              <li className='frondli' >DevOps</li>
            </ul>
            </div>
            </div>

        </div>
        

      
    </div>
  )
}

export default CourseInfo
