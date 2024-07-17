
const Resources = () => {
  return (
    <div className="pb-16">
      <h1 className="title">Resources</h1>
      <p className="p2 mt-2 mb-12">Im a firm believer of knowledge sharing, here Im sharing the resources that made me better</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 pb-8">
          <div className="card bg-[#2c2c2c]">
            <div className="overflow-hidden">
              <iframe
                width="414"
                height="232"
                src="https://www.youtube.com/embed/pN6jk0uUrD8?si=qNmt0X0SW7osXDxK"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
            <div className="p-4">
              <h3>Namaste JavaScript</h3>
              <p className="text-[#858585] font-extralight">Deep dive into JavaScript with Akshay Saini</p>
            </div>
          </div>
          <div className="card bg-[#2c2c2c]">
            <div className="overflow-hidden">
              <iframe
                width="414"
                height="232"
                src="https://www.youtube.com/embed/cCOL7MC4Pl0?si=ea-zHPm-pZEsVBgz"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
            <div className="p-4">
              <h3>Understanding Event Loop</h3>
              <p className="text-[#858585] font-extralight">Event Loop masterclass by Jake Archibald</p>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Resources
