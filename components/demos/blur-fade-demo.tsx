import BlurFade from "@/components/magicui/blur-fade";
import Link from "next/link";

const works = [
  {
    background: "bg-gray-200",
    videoUrl: "/videos/Beyondwater.mp4",
    title: "CGI Advertisement for Beyond Water",
    link: "#",
  },
  {
    background: "bg-gray-200",
    videoUrl: "/videos/nike.mp4",
    title: "CGI Advertisement for Nike",
    link: "#",
  },
  {
    background: "bg-gray-200",
    videoUrl: "/videos/Burger.mp4",
    title: "CGI Advertisement for Burger King",
    link: "#",
  },
  {
    background: "bg-gray-200",
    videoUrl: "/videos/coca.mp4",
    title: "CGI Advertisement for Coca Cola",
    link: "#",
  },
];

export function BlurFadeDemo() {
  return (
    <section id="videos">
      <div className="grid md:grid-cols-2 gap-8 mt-10 justify-items-center">
        {works.map(({ videoUrl, title, link }, idx) => (
          <BlurFade
            key={title}
            delay={0.25 + idx * 0.05}
            inView
            className={`rounded-lg ${works[idx].background} p-4`}
          >
            <Link href={link} target="_blank" rel="noreferrer">
              <video
                height="auto"
                width="100%"
                className="h-5/6 w-full object-cover rounded-lg"
                muted
                autoPlay
                loop
              >
                <source src={videoUrl} type="video/mp4" />
                Video
              </video>
              <h3 className="text-lg font-semibold p-4">{title}</h3>
            </Link>
          </BlurFade>
        ))}
      </div>
    </section>
  );
}
