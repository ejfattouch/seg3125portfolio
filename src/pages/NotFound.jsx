import Navbar from "@/components/Navbar.jsx";
import Card from "@/components/Card.jsx";

export const NotFound = () => {
    return (
        <div className="grid w-screen h-screen -mt-25">
            <Card className="place-self-center" border_color={"border-primary-red"} hover_on={false}>
                <div className="text-8xl w-fit text-center flex items-center gap-10">
                    <img src={"src/assets/logo/logo-round.svg"} className="h-30"/>
                    <h1>404 Not Found</h1>
                    <img src={"src/assets/logo/logo-round.svg"} className="h-30"/>
                </div>
            </Card>
        </div>
    );
}
