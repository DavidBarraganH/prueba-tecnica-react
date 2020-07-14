import React , {Fragment }  from "react";
import { PopupboxManager, PopupboxContainer } from 'react-popupbox';
import "react-popupbox/dist/react-popupbox.css"


const Popup = ({responseData}) => {


  let response  = null;
  let statusMessage = "";

  if(typeof (responseData) !== "boolean")
  {
    response  = responseData.data;
    statusMessage = 'Status: '+responseData.status;
  }

  function  openPopupbox() {

    if( response !== null)
    {
      let message  = "";

      if((typeof response) === "string")
      { 
        message = responseData.data;
      }else{
          Object.entries(response).forEach(([key,value]) => {
  
            let littleMessage = "";
            value.forEach(function(item, index) {
              littleMessage += item+" ,";
            }) 
  
            message+= value+": "+littleMessage;
          })
      }

      const content = (
        <div>
        <p>{ message }</p>
  
        <button onClick={PopupboxManager.close}>Close</button>
        </div>
      )
      PopupboxManager.open({ content })
    }
  }

      const popupboxConfig = {
        titleBar: {
          enable: true,
          text:  'Informe de la operacion:'
        },
        fadeIn: true,
        fadeInSpeed: 500
      }

      setTimeout(function(){
        PopupboxManager.close();
     }, 10000);

     setTimeout(function(){
      openPopupbox();
   }, 3000);
      
        return (
          <Fragment>
            <PopupboxContainer { ...popupboxConfig } />
          </Fragment>
        )
}

export default Popup;