import React from "react";

type SecondaryButtonProps = {
    children: any;
    className?: string;
    style?: React.CSSProperties;
}

const SecondaryButton:React.FC<SecondaryButtonProps> = ({
    children,
    className,
    style,
}) => {
    return (
        <button
            style={{
                ...{
                    color: "#00c8ce",
                    borderStyle: "none",
                    background: "none",
                    fontSize: 20,
                    fontWeight: "600",
                    padding: 0,
                },
                ...style
            }}
            className={`${className}`}
        >
            {children}
        </button>
    )
}

export default SecondaryButton;