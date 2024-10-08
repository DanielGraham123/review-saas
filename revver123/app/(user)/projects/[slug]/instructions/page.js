import CopyBtn from "@/components/CopyBtn";

export default async function Page({ params }) {

    if (!params.slug)
        return (
            <div>
                Invalid project identifier
            </div>
        );

    if (!process.env.WIDGET_URL) {
        return (
            <div>
                Missing WIDGET_URL
            </div>
        )
    }

    return (
        <div>
            <h1 className="text-xl font-bold mb-2">You are almost done!</h1>
            <p className="text-lg text-secondary-foreground">Embed the code in your site</p>
            <div className="bg-blue-950 p-6 rounded-md mt-6 relative">
                <code className=" text-white">
                    {`<my-widget project-id="${params.slug}"></my-widget>`}
                    <br />
                    {`<script src="${process.env.WIDGET_URL}/widget.umd.js"></script>`}
                </code>
                <CopyBtn text={`<my-widget project="${params.slug}"></my-widget>\n<script src="${process.env.WIDGET_URL}/widget.umd.js"></script>`} />
            </div>
        </div>
    )
}