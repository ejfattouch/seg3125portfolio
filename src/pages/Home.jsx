import Card from "@/components/Card.jsx";

export const Home = () => {
    return (
        <div className="min-h-screen text-foreground overflow-x-hidden ">
            <Card border_color={"border-primary-blue"}>
                <h1>Hello World</h1>
            </Card>
            <Card border_color={"border-primary-red"} hover_on={false}>
                <h1>Hello World</h1>
            </Card>
        </div>);
}