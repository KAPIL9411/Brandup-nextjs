import BlurFade from "@/components/magicui/blur-fade";
import Image from "next/image";
import Link from "next/link";

const works = [
  {
    background: "bg-gray-200",
    imageUrl: "/images/Beyond water.png",
    title: "Beyond Water",
    link: "https://youtube.com/shorts/u-nes3788II?si=_i5pdh8Avp9LWzHF",
  },
  {
    background: "bg-gray-200",
    imageUrl: "/images/nike.png",
    title: "Nike",
    link: "https://youtube.com/shorts/voGC9a9ttSo?si=b_u2Gl_AO7dZQ0Su",
  },
  {
    background: "bg-gray-200",
    imageUrl: "/images/bk.png",
    title: "Burger King",
    link: "https://youtube.com/shorts/jjxUN4C5mIo?si=hE7-tUAfcCcUH85e",
  },
  {
    background: "bg-gray-200",
    imageUrl: "/images/coca.png",
    title: "Coca Cola",
    link: "https://youtube.com/shorts/RU4WTb5qHP8?si=pXRCi0TbiutjGS5d",
  },


];

export function BlurFadeDemo() {
  return (
    <section id="photos">
      <div className="grid md:grid-cols-2 gap-8 mt-10 justify-items-center">
        {works.map(({ imageUrl, title, link }, idx) => (
          <BlurFade
            key={title}
            delay={0.25 + idx * 0.05}
            inView
            className={`rounded-lg ${works[idx].background} p-4`}
          >
            <Link href={link} target="_blank" rel="noreferrer">
              <Image
                height={10000}
                width={10000}
                className="
                h-5/6 w-full object-cover rounded-lg"
        
              
       
                src={imageUrl}
                alt={`Random stock image ${idx + 1}`}
              />
              <h3 className="text-lg font-semibold p-4">{title}</h3>
            </Link>
          </BlurFade>
        ))}
      </div>
    </section>
  );
}
