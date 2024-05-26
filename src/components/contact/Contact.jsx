export default function Contact() {
    return (
        <>
            <section id="Contact" className="w-[70vw] max-w-[1600px] pt-16 flex flex-col justify-center items-center mx-auto p-4 text-cornsilk bg-cornsilk">
                <h1 className="text-3xl mb-8">Contact</h1>
                <form className="w-full max-w-md flex flex-col justify-center items-center mx-auto p-4 text-cornsilk gap-6">
                    <label className="w-full">
                        <span className="mb-2 block">Name:</span>
                        <input type="text" className="w-full rounded border border-cornsilk py-2 px-3" />
                    </label>
                    <label className="w-full">
                        <span className="mb-2 block">Email:</span>
                        <input type="text" className="w-full rounded border border-cornsilk py-2 px-3" />
                    </label>
                    <label className="w-full">
                        <span className="mb-2 block">Message:</span>
                        <textarea className="w-full rounded border border-cornsilk py-2 px-3 resize-none" rows="4"></textarea>
                    </label>
                    <button
                        onClick={(ev) => { ev.preventDefault(); console.log('thank u') }}
                        className="bg-cornsilk text-white py-2 px-4 rounded hover:bg-opacity-80 transition duration-300 ease-in-out">Send</button>
                </form>
            </section>
        </>
    )
}
