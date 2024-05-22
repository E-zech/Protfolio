export default function Slider() {


    return (
        <>
            <header className="w-[100vw] max-w-[1600px] h-[70vh] flex justify-start items-center pt-16 mx-auto p-4" style={{ backgroundImage: `url('../../../public/me.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }} id="Home">
                <section className="font-bold flex justify-center items-start flex-col text-white text-5xl">
                    <div className="text-white">Hello</div>
                    <div className="text-white">I'm Eliya</div>
                    <div className="text-white">Web Developer</div>

                    <div className="flex justify-center items-start flex-col pt-4 text-white text-lg">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            <br />
                            Quaerat rerum optio fuga amet consequuntur quos tempora esse.
                        </p>
                    </div>
                </section>
            </header>
        </>
    )
}
