import React from "react";

export default function Header({teamName = 'NoNameHere'}){
  return ( 
    <div>
    <div className="header">
      <a className="logo">{teamName}</a>
      <div className="header-right">
      </div>
    </div>
  
    <style jsx>{`
      .header {
        overflow: hidden;
        background-color: #f1f1f1;
        padding: 30px 10px;
      }`}
    </style>
    </div>
  )

}