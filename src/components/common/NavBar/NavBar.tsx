import React from "react";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";

type NavBarProps = {
    
}

const NavBar:React.FC<NavBarProps> = () => {
    return (
        <header
            className={`${styles.navBar}`}
        >
            <div
                className={`${styles.contentContainer}`}
            >
                <Link to="/" style={{textDecorationLine: "none"}}>
                <h1
                    style={{
                        ...{
                            color: "#fff",
                            fontSize: 30,
                            fontWeight: "400",
                        }
                    }}
                >Ideaflow</h1>
                </Link>

                <div style={{flexGrow: 1}} ></div>

                <Link 
                    to="/"
                    style={{
                        ...{
                            // textDecorationLine: "none",
                        }
                    }}
                    className={`${styles.underLineWhileHover} ${styles.navItem}`}
                >
                <h4
                    style={{
                        ...{
                            color: "#fff",
                            fontSize: 14,
                            fontWeight: "400",
                        }
                    }}
                    className={`${styles.contentWrapper}`}
                >
                    Home
                </h4>
                </Link>

                <Link 
                    to="/careers"   
                    style={{
                        ...{
                            // marginLeft: 20,
                            textDecorationColor: "#00c8ce",
                        }
                    }}
                    className={`${styles.underLineWhileHover} ${styles.navItem}`}
                >
                <h4
                    style={{
                        ...{
                            color: "#00c8ce",
                            fontSize: 14,
                            fontWeight: "400",
                        }
                    }}
                    className={`${styles.contentWrapper}`}
                >
                    We're Hiring! JS, iOS +
                </h4>
                </Link>

                <Link 
                    to="/contact"   
                    style={{
                        ...{
                            // marginLeft: 20,
                        }
                    }}
                    className={`${styles.underLineWhileHover} ${styles.navItem}`}
                >
                <h4
                    style={{
                        ...{
                            color: "#fff",
                            fontSize: 14,
                            fontWeight: "400",
                        }
                    }}
                    className={`${styles.contentWrapper}`}
                >
                    Contact
                </h4>
                </Link>
           </div>
        </header>
    )
}

export default NavBar;