import "./firstPage.css";
import FirstPic from "./First Pic.png";

const FirstPage = () => {
    return(
        <div className="FirstPage">
            <div className="firstPara-firstPic-Flexbox">
                <div className="firstPara">Hypha is bringing together a community of healthcare providers and patients to build the future of medical practice. </div>
                <div className="firstPicContainer"><img className="firstPic" src={FirstPic}/></div>
            </div>
        </div>
    )
}

export default FirstPage;