import Card from "@/components/Card.jsx";
import LogoRound from "@/assets/logo/logo-round.svg"

export const ComingSoon = ({ border_color }) => {
    return (
        <div className="grid min-h-screen text-foreground overflow-x-hidden ">
            <Card className="place-self-center" border_color={border_color}>
                <div className="text-8xl w-fit text-center flex items-center gap-10">
                    <img src={LogoRound} className="h-30"/>
                    <h1>Coming Soon</h1>
                    <img src={LogoRound} className="h-30"/>
                </div>
            </Card>
        </div>
    );
}
