import React from "react";

type PrimaryButtonProps = {
    children: any;
    className?: string;
    style?: React.CSSProperties;
}

const PrimaryButton:React.FC<PrimaryButtonProps> = ({
    children,
    className,
    style,
}) => {
    return (
        <button
            style={{
                ...{
                    backgroundColor: "#00c8ce",
                    paddingTop: 8,
                    paddingBottom: 8,
                    textAlign: "center",
                    verticalAlign: "center",
                    borderStyle: "none",
                    color: '#fff',
                    borderRadius: 5,
                },
                ...style,
            }}
            className={`${className}`}
        >
            {children}
        </button>
    )
}

export default PrimaryButton;