import { 
  ContainerAnimated,
  ContainerScroll,
  ContainerStagger,
  ContainerSticky,
  GalleryCol,
  GalleryContainer 
} from "@/components/Gallery-scroll";
import SceneCanvas from "../three/SceneCanvas";
import { motion } from "framer-motion";

// Using different placeholder images to make it obvious which column is which
const IMAGES_1 = [
  "/Gallery/gl_2.webp",
  "/Gallery/gl_3.webp",
  "/Gallery/gl_4.webp",
  "/Gallery/IMG_0779.webp",
]

const IMAGES_2 = [
  "/Gallery/e-summit_6.webp",
  "/Gallery/e-summit_7.webp",
  "/Gallery/e-summit_8.webp",
  "/Gallery/e-summit_9.webp",
]

const IMAGES_3 = [
  "/Gallery/IMG_0879.webp",
  "/Gallery/teamphoto.webp",
  "/Gallery/IMG_6803.webp",
  "/Gallery/17f37fea-9ab7-494f-827f-e84a564406f4.webp",
]

const IMAGES_4 = [
  "/Gallery/IMG_0802.webp",
  "/Gallery/e-summit_5.webp",
  "/Gallery/IMG_0804.webp",
  
]

export const Gallery = () => {
  console.log("Gallery component rendered")
  
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-blue-950 to-black">
      <div className="absolute inset-0 bg-black opacity-30 z-0"></div>
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-700 opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-blue-600 opacity-5 rounded-full blur-3xl"></div>
      
      {/* Three.js canvas - behind content */}
      <div className="absolute inset-0 z-1">
        <SceneCanvas />
      </div>

      {/* <ContainerStagger className="relative z-[9999] -mb-12 place-self-center px-6 pt-12 text-center">
        <ContainerAnimated>
          <h1 className="font-serif text-4xl font-extralight md:text-5xl">
            Your{" "}
            <span className="font-serif font-extralight text-indigo-600">
              one source
            </span>
          </h1>
        </ContainerAnimated>
        <ContainerAnimated>
          <h1 className="font-serif text-4xl font-extralight md:text-5xl">
            for all your designs
          </h1>
        </ContainerAnimated>

        <ContainerAnimated className="my-4">
          <p className="leading-normal tracking-tight text-gray-600">
            No waste of time and money, we provide you with
            <br /> collection of designs to plan your next project.
          </p>
        </ContainerAnimated>
      </ContainerStagger> */}

      <div className="relative z-10 container mx-auto px-6 pt-20 flex flex-col items-center justify-start">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-6xl md:text-7xl font-bold pb-4 tracking-tight"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-purple-400 to-blue-400">
              Gallery
            </span>
          </motion.h1>
        </div>
      </div>


      {/* Temporarily remove the blur overlay to see if it's interfering */}
      {/* <div 
        className="pointer-events-none absolute z-10 h-[70vh] w-full"
        style={{
          background: "linear-gradient(to right, gray, rebeccapurple, blue)",
          filter: "blur(84px)",
          mixBlendMode: "screen",
        }}
      /> */}

      <ContainerScroll className="relative min-h-screen">
        <ContainerSticky className="h-screen scale-100">
          <GalleryContainer style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <GalleryCol yRange={["-5%", "1%"]} className="-mt-2">
              {IMAGES_1.map((imageUrl, index) => (
                <img
                  key={`col1-${index}`}
                  className="aspect-video block h-auto max-h-full w-full rounded-md object-cover shadow"
                  src={imageUrl}
                  alt={`gallery item column 1 - ${index}`}
                />
              ))}
            </GalleryCol>

            <GalleryCol className="mt-[-25%]" yRange={["8%", "3%"]}>
              {IMAGES_2.map((imageUrl, index) => (
                <img
                  key={`col2-${index}`}
                  className="aspect-video block h-auto max-h-full w-full rounded-md object-cover shadow"
                  src={imageUrl}
                  alt={`gallery item column 2 - ${index}`}
                />
              ))}
            </GalleryCol>

            <GalleryCol yRange={["-5%", "1%"]} className="-mt-2">
              {IMAGES_3.map((imageUrl, index) => (
                <img
                  key={`col3-${index}`}
                  className="aspect-video block h-auto max-h-full w-full rounded-md object-cover shadow"
                  src={imageUrl}
                  alt={`gallery item column 3 - ${index}`}
                />
              ))}
            </GalleryCol>

            <GalleryCol yRange={["2%", "-3%"]} className="-mt-6">
              {IMAGES_4.map((imageUrl, index) => (
                <img
                  key={`col4-${index}`}
                  className="aspect-video block h-auto max-h-full w-full rounded-md object-cover shadow"
                  src={imageUrl}
                  alt={`gallery item column 4 - ${index}`}
                />
              ))}
            </GalleryCol>
          </GalleryContainer>
        </ContainerSticky>
      </ContainerScroll>
    </div>
  )
}