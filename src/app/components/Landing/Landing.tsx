"use client";
    
import "./Landing.css";
import Button from "../Button/Button";
import { useRouter } from "next/navigation";

export default function Landing() {

    const router = useRouter();

    const handleViewMenu = () => {
        router.push("/menu");
    }

    return (
        <div className="landing-content">
            <h1 className="landing-title">Best food for your taste</h1>
            <p className="landing-subtitle">Discover delectable cuisine and unforgettable moments in our welcoming, culinary haven.</p>
            <Button classname="button-secondary" text="View Menu" onClick={handleViewMenu} />
        </div>
    )
}