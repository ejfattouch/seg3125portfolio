import Card from "@/components/Card.jsx";

export const ComingSoon = ({ border_color }) => {
    return (
        <div className="grid w-screen h-screen -mt-25">
            <Card className="place-self-center" border_color={border_color}>
                <div className="text-8xl w-fit text-center flex items-center gap-10">
                    <img src={"src/assets/logo/logo-round.svg"} className="h-30"/>
                    <h1>Coming Soon</h1>
                    <img src={"src/assets/logo/logo-round.svg"} className="h-30"/>
                </div>
            </Card>
        </div>
    );
}
