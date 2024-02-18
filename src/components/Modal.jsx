import { useState } from "react";
import FirstTab from "./tab-components/FirstTab";

export default function Modal() {
    const [activeTab, setActiveTab] = useState("upload");
    const [firstTabOutput, setFirstTabOutput] = useState("");

    //  Functions to handle Tab Switching

    const handleTab1 = () => {
        setActiveTab("upload");
    };

    const handleTab2 = () => {
        setActiveTab("sign");
    };

    const handleFirstTabOutput = (output) => {
        setFirstTabOutput(output);
        setActiveTab("upload");
    };

    return (
        <div className="modalOuter">
            <div className="modalBox">
                <h3 className="heading">Let's catch some phish!</h3>
                <p className="instruction">
                    Upload an EML file of your email.
                </p>

                <div className="Tabs">
                    <div className="outlet">
                        {activeTab === "upload" ? <FirstTab onOutput={handleFirstTabOutput} /> : null}
                    </div>
                </div>
            </div>
        </div>
    );
}
