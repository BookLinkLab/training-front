import LogoSVG from "../../components/assets/icons/Logo";
import "./styles.css"



const Logo = (props) => {

    //Mi idea era usar las typographys tambien para el logo, pero tienen tamañanos diferentes y encima hay 3 opciones distinas
    var BookClass = ""
    var LinkClass = ""
    if (props.size === "small") {
        BookClass = "heading6-bold"
        LinkClass = "heading6"
    } else if (props.size === "medium") {
        BookClass = "heading3-bold"
        LinkClass = "heading3"
    } else {
        BookClass = "heading1-bold"
        LinkClass = "heading1"
    }

    return (
        <div className="logo-div">
            <div className={props.size + "logo svg-div"}>
                <LogoSVG/>
            </div>
            <div>
                {props.name ? (
                    <div className="inline-container">
                        <p className={BookClass}>Book</p>
                        <p className={LinkClass}>Link</p>
                    </div>
                ) : null}
            </div>
        </div>


    );

}

export default Logo;