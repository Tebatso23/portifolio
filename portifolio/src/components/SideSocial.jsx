import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import "../Css/SideSocial.css";

function SideSocial(){

    return(
        <div className="SideSocial-links">
            <ul>
                <li><a  href=""><FaGithub size={25} color="#b388ff" /></a></li>
                 <li><a  href=""><FaLinkedin size={25} color="#b388ff" /></a></li>
                  <li><a  href=""><FaTwitter size={25} color="#b388ff" /></a></li>
                   <li><a href=""><FaInstagram size={25} color="#b388ff" /></a></li>
            </ul>
        </div>
    )
}
export default SideSocial;