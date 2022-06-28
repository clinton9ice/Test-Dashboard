import style from "./Tag.module.css";
export const Tags = ({children, bg}) => {
    return <div className="d-flex align-items-center">
        <div className= {style.tag} style={{backgroundColor: bg}}></div>
        <span className="ms-2">{ children }</span>
    </div>;
}
