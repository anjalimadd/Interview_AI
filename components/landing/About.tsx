import Image from "next/image";

export const About = () => {
  return (
    <section
      id="about"
      className="container py-24 sm:py-32"
    >
      <div className="bg-muted/50 border rounded-lg py-12">
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          <Image
            src='/logo2.jpeg'
            alt="about"
            className="w-[200px] object-contain rounded-lg"
            height={200}
            width={200}
          />
          <div className="bg-green-0 flex flex-col justify-between">
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="text-green-300">
                  About{" "}
                </span>
                Us
              </h2>
              <p className="text-xl text-muted-foreground mt-4">
              Practice makes perfect—and with our AI-driven platform, you can sharpen your interview skills anytime, anywhere. Whether you're preparing for your first job or aiming to level up your career, our smart interview assistant generates tailored questions based on your role, tech stack, and experience level. Simulate real interview scenarios, get instant feedback, and build confidence one session at a time. No scheduling, no pressure—just effective, personalized practice on your terms.


              </p>
            </div>

            {/* <Statistics /> */}
          </div>
        </div>
      </div>
    </section>
  );
};