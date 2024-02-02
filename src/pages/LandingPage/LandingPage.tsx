import React from "react";
import styles from "./styles.module.css";
import BlueFaceImage from "../../assets/images/blue-face.png";
import PrimaryButton from "../../components/common/PrimaryButton/PrimaryButton";
import SecondaryButton from "../../components/common/SecondaryButton/SecondaryButton";

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
        </div>
    )
}

export default LandingPage;