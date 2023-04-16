import React from 'react'
import { ngosdata } from "./Ngodata.js"
import "./ngo.css"

function NGOs() {
  return (
    <>
    <div>
        <p className='ngoheader'>10 NGOs helping women to fight for their rights in India</p>
    </div>
    <div className='Ngosdata'>
    {ngosdata.map((option, index) => {
        return (
            <div className="ngocard" key={index}>
                <div className='ngotitle'>{index + 1}.&nbsp;{option.title}</div>
                <div className="ngoimg"><img src={option.img} className="ngoimg" /></div>
                <div className="ngodesc">{option.desc}</div>
                <div className="makebtnspace"></div>
                <div className="ngobtn"><a href={option.link} target="_blank">Check Here...</a></div>
            </div>
        );
    })}
</div>
</>
  )
}

export default NGOs