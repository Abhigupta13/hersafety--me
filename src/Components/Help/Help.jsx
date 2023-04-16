
import "./Help.css"
import { useNavigate } from "react-router-dom";

const Help = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="help">
        <div className="helpcontain">
          <h1 className="helptitle">Emergency Numbers</h1>
          <div className="helpnumbers">
            <div className="helptext">
              <div className="helpername">&nbsp;Police:&nbsp;&nbsp;</div>
              <div className="helperNumber"><a className="helpa" href="tel:100" target="_blank" rel="noopener">100</a></div>
            </div>
            <div className="helptext">
              <div className="helpername">&nbsp;Fire:&nbsp;&nbsp;</div>
              <div className="helperNumber"><a className="helpa" href="tel:+98XXXXXXXX" target="_blank" rel="noopener">101</a></div>
            </div>
            <div className="helptext">
              <div className="helpername">&nbsp;Ambulance:&nbsp;&nbsp;</div>
              <div className="helperNumber"><a className="helpa" href="tel:+98XXXXXXXX" target="_blank" rel="noopener">102</a></div>
            </div>
            <div className="helptext">
              <div className="helpername">&nbsp;Women Helpline:&nbsp;&nbsp;</div>
              <div className="helperNumber"><a className="helpa" href="tel:+98XXXXXXXX" target="_blank" rel="noopener">1091</a></div>
            </div>
            <div className="helptext">
              <div className="helpername">&nbsp;Women Helpline - ( Domestic Abuse ):&nbsp;&nbsp;</div>
              <div className="helperNumber"><a className="helpa" href="tel:+98XXXXXXXX" target="_blank" rel="noopener">181</a></div>
            </div>
            <div className="helptext">
              <div className="helpername">&nbsp;Pan-India Emergency Number:&nbsp;&nbsp;</div>
              <div className="helperNumber"><a className="helpa" href="tel:+98XXXXXXXX" target="_blank" rel="noopener">112</a></div>
            </div>
            <div className="helptext">
              <div className="helpername">&nbsp;Disaster Management Services:&nbsp;&nbsp;</div>
              <div className="helperNumber"><a className="helpa" href="telto:+98XXXXXXXX" target="_blank" rel="noopener">108</a></div>
            </div>
          </div>
        </div>
      </div>
      <div className="footerhelp">
      </div>
    </>
  )
}

export default Help