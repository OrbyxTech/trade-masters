import MyOrdersSelect from "@/components/ui/MyOrdersSelect"
import Section from "@/components/ui/Section"

function page() {
    return (
        <div>
            <Section
                title="My Orders"
                showViewAllBtn={false}
            >
                <MyOrdersSelect />
            </Section>
        </div>
    )
}

export default page