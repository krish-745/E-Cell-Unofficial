import { 
  ContainerAnimated,
  ContainerScroll,
  ContainerStagger,
  ContainerSticky,
  GalleryCol,
  GalleryContainer 
} from "@/components/Gallery-scroll"

// Using different placeholder images to make it obvious which column is which
const IMAGES_1 = [
  "/public/Gallery/gl_2.JPG",
  "/public/Gallery/gl_3.JPG",
  "/public/Gallery/gl_4.JPG",
  "/public/Gallery/IMG_0779.JPG",
]

const IMAGES_2 = [
  "/public/Gallery/e-summit_6.JPG",
  "/public/Gallery/e-summit_7.jpg",
  "/public/Gallery/e-summit_8.jpg",
  "/public/Gallery/e-summit_9.jpg",
]

const IMAGES_3 = [
  "/public/Gallery/IMG_0879.JPG",
  "/public/Gallery/teamphoto.jpg",
  "/public/Gallery/IMG_6803.JPG",
  "/public/Gallery/17f37fea-9ab7-494f-827f-e84a564406f4.jpg",
]

const IMAGES_4 = [
  "/public/Gallery/IMG_0802.JPG",
  "/public/Gallery/e-summit_5.JPG",
  "/public/Gallery/IMG_0804.JPG",
  
]

export const Gallery = () => {
  console.log("Gallery component rendered")
  
  return (
    <div className="relative bg-white min-h-screen">
      <ContainerStagger className="relative z-[9999] -mb-12 place-self-center px-6 pt-12 text-center">
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
      </ContainerStagger>

      {/* Temporarily remove the blur overlay to see if it's interfering */}
      {/* <div 
        className="pointer-events-none absolute z-10 h-[70vh] w-full"
        style={{
          background: "linear-gradient(to right, gray, rebeccapurple, blue)",
          filter: "blur(84px)",
          mixBlendMode: "screen",
        }}
      /> */}

      <ContainerScroll className="relative h-[101vh]">
        <ContainerSticky className="h-screen scale-75">
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