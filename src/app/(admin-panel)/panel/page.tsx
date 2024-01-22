
import Card1 from "@/components/ui/Card1"
import Section from "@/components/ui/Section"

function page() {
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <Card1
                    img="/target.png"
                    title="Start a New Challenge"
                    subTitle="start your jurney to success"
                />

                <Card1
                    img="/book.svg"
                    title="Rules"
                    subTitle="read the rules"
                />
            </div>

            <div className="mt-3">
                <Section title="Recent Challenges"></Section>
            </div>
        </div>
    )
}

export default page