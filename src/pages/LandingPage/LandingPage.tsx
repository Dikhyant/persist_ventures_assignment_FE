import React from "react";
import styles from "./styles.module.css";
import BlueFaceImage from "../../assets/images/blue-face.png";
import PrimaryButton from "../../components/common/PrimaryButton/PrimaryButton";
import SecondaryButton from "../../components/common/SecondaryButton/SecondaryButton";
import FirstRoundImage from "../../assets/images/first_round.png";
import EightVCImage from "../../assets/images/eight_vc.png";
import StartXImage from "../../assets/images/startX.png";

type LandingPageProps = {

}

const LandingPage: React.FC<LandingPageProps> = () => {
    return (
        <div
            className={`${styles.page}`}
        >
            <section
                className={`${styles.contentContainer}`}
                id={`${styles.heroSection}`}
                style={{
                    ...{
                        marginTop: 20,
                        paddingBottom: 500,
                    }
                }}
            >
                <div>
                    <h1
                        style={{
                            ...{
                                color: "#fff",
                                fontSize: 40,
                                whiteSpace: "pre-line"
                            }
                        }}
                    >
                        {
                            `The Intelligence 
                            Amplification 
                            Company`
                        }
                    </h1>

                    <div
                        style={{
                            ...{
                                color: "#fff",
                                fontSize: 20,
                                fontWeight: "400",
                            }
                        }}
                        className={`${styles.description}`}
                    >
                    We’re creating an ecosystem for humans and machines to work together to solve the world’s most important problems – starting with a notebook that augments your intelligence.
                    </div>

                    <div
                        style={{
                            ...{
                                marginTop: 40,
                            }
                        }}
                        className={`${styles.buttonContainer}`}
                    >
                        <PrimaryButton
                            style={{
                                ...{
                                    paddingInline: 10,
                                    fontSize: 20,
                                    fontWeight: "600",
                                }
                            }}
                            className={`${styles.button}`}
                        >
                            Try Ideaflow Notes
                        </PrimaryButton>

                        <SecondaryButton
                            className={`${styles.button}`}
                        >
                         iOS
                        </SecondaryButton>

                        <SecondaryButton
                            className={`${styles.button}`}
                        >
                        Guide
                        </SecondaryButton>

                        <SecondaryButton
                            className={`${styles.button}`}
                        >
                        Twitter
                        </SecondaryButton>

                        <SecondaryButton
                            className={`${styles.button}`}
                        >
                        Newsletter
                        </SecondaryButton>
                    </div>
                </div>

                <div style={{flexGrow: 1}} ></div>
                <img 
                    src={BlueFaceImage}
                    id={`${styles.heroImage}`}
                />
            </section>

            <section
                id={`${styles.investorsSection}`}
                style={{
                    ...{
                        marginTop: 20,
                        display: "none",
                        flexDirection: "column",
                        alignItems: "center",
                        // justifyContent: "center"?
                    }
                }}
            >
                <h2
                    className={`${styles.sectionHeading}`}
                    style={{
                        ...{
                            color: "#fff",
                            fontWeight: "400",
                        }
                    }}
                >
                Backed by world-class investors and partners
                </h2>

                <div
                    className={`${styles.buttonContainer}`}
                    style={{
                        ...{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            marginTop: 20,
                            // paddingBottom: 50,
                        }
                    }}
                >
                    <button
                        className={`${styles.companyButton}`}
                    >
                        <img
                            src={FirstRoundImage}
                        />
                    </button>

                    <button
                        className={`${styles.companyButton}`}
                    >
                        <img
                            src={EightVCImage}
                        />
                    </button>

                    <button
                        className={`${styles.companyButton}`}
                    >
                        <img
                            src={StartXImage}

                        />
                    </button>

                    <h3
                        className={`${styles.moreText}`}
                    >
                        +33 more
                    </h3>
                </div>
            </section>
        </div>
    )
}

export default LandingPage;