import {
  ContainerAnimated,
  ContainerScroll,
  ContainerStagger,
  ContainerSticky,
  GalleryCol,
  GalleryContainer
} from "@/components/Animated-Gallery";
import { motion } from 'framer-motion';
import SceneCanvas from "../three/SceneCanvas";
// import { Button } from "@/components/ui/button"
// import { VideoIcon } from "lucide-react"

const IMAGES_1 = [
  "https://i.postimg.cc/P5K61rSz/17f37fea-9ab7-494f-827f-e84a564406f4.webp",
  "https://i.postimg.cc/Qd6bHYMf/e-summit-5.webp",
  "https://i.postimg.cc/d0pj97rd/e-summit-6.webp",
  "https://i.postimg.cc/wjx2xY9t/e-summit-7.webp",
]

const IMAGES_2 = [
  "https://i.postimg.cc/TPpcmjLf/e-summit-8.webp",
  "https://i.postimg.cc/ZRNFsTxQ/e-summit-9.webp",
  "https://i.postimg.cc/bwqCG29w/gl-2.webp",
  "https://i.postimg.cc/rsSjs8d4/gl-3.webp",
]

const IMAGES_3 = [
  "https://i.postimg.cc/DyT5DbDP/gl-4.webp",
  "https://i.postimg.cc/05mccCtN/IMG-0779.webp",
  "https://i.postimg.cc/PJGKdLqh/IMG-0802.webp",
  "https://i.postimg.cc/W3qXRmTX/IMG-0804.webp",
]

const IMAGES_4 = [
  "https://i.postimg.cc/hGj2sWwF/IMG-0879.webp",
  "https://i.postimg.cc/fbrBgqnV/IMG-6803.webp",
  "https://i.postimg.cc/CLsJVxpT/teamphoto.webp",
  "https://i.postimg.cc/hPnb5Hj5/IMG-0796.webp",
]

export const Gallery = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-blue-950 to-black overflow-clip">
      <div className="absolute inset-0 bg-black opacity-30 z-0"></div>
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-700 opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-blue-600 opacity-5 rounded-full blur-3xl"></div>

      {/* Three.js canvas - behind content */}
      <div className="absolute inset-0 z-1">
        <SceneCanvas />
      </div>

      <div className="relative z-10 container mx-auto px-6 pt-20  flex flex-col items-center justify-start">
        <div className="text-center mt-32 sm:mt-20">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-6xl md:text-7xl font-bold tracking-tight"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-purple-400 to-blue-400">
              Gallery
            </span>

            {/* Subheading here */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto py-1 md:py-6 font-semibold"
            >
              Snapshots of our memorable journey, where creativity and teamwork bring ideas to life and make an impact.
            </motion.p>

          </motion.h1>
        </div>
      </div>

      <ContainerScroll className="relative -mt-20 min-h-screen lg:min-h-[400vh]">
        <ContainerSticky className="min-h-screen lg:h-full">
          <GalleryContainer className="w-full grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-1 sm:gap-3 pb-6 ">

            {/* Col 1 */}
            <GalleryCol yRange={["-2%", "2%"]} className="translate-y-0">
              {IMAGES_1.map((imageUrl, index) => (
                <img
                  key={`col1-${index}`}
                  className="aspect-video w-full rounded-lg object-cover shadow"
                  src={imageUrl}
                  alt="gallery item"
                  loading="lazy"
                />
              ))}
            </GalleryCol>

            {/* Col 2  */}
            <GalleryCol yRange={["2%", "-2%"]} className="sm:translate-y-4 lg:translate-y-8">
              {IMAGES_2.map((imageUrl, index) => (
                <img
                  key={`col2-${index}`}
                  className="aspect-video w-full rounded-lg object-cover shadow"
                  src={imageUrl}
                  alt="gallery item"
                  loading="lazy"
                />
              ))}
            </GalleryCol>

            {/* Col 3  */}
            <GalleryCol yRange={["-2%", "2%"]} className="lg:translate-y-4">
              {IMAGES_3.map((imageUrl, index) => (
                <img
                  key={`col3-${index}`}
                  className="aspect-video w-full rounded-lg object-cover shadow"
                  src={imageUrl}
                  alt="gallery item"
                  loading="lazy"
                />
              ))}
            </GalleryCol>

            {/* Col 4 */}
            <GalleryCol yRange={["2%", "-2%"]} className="lg:translate-y-8">
              {IMAGES_4.map((imageUrl, index) => (
                <img
                  key={`col4-${index}`}
                  className="aspect-video w-full rounded-lg object-cover shadow"
                  src={imageUrl}
                  alt="gallery item"
                  loading="lazy"
                />
              ))}
            </GalleryCol>
          </GalleryContainer>
        </ContainerSticky>
      </ContainerScroll>



    </div>
  )
}
