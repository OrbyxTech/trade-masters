import Image from "next/image";

function Footer() {
  return (
    <footer
      className="w-full h-[85vh] flex justify-center items-center mt-32"
      style={{
        background: 'url("/images/footer/footerBg.svg")',
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex flex-col justify-center items-center w-full h-full p-20 pt-48">
        <div className="w-full flex justify-center items-center gap-48">
          <Image
            src="/images/ProPiy..svg"
            alt="propiy logo"
            width={350}
            height={350}
          />

          <div className="flex items-start gap-32">
            <div>
              <h2 className="text-white font-semibold text-xl">Company</h2>
              <ul className="flex flex-col gap-2 py-4">
                <li className="font-thin">About us</li>
                <li className="font-thin">Careers</li>
                <li className="font-thin">Contact us</li>
                <li className="font-thin">Lift Media</li>
              </ul>
            </div>

            <div>
              <h2 className="text-white font-semibold text-xl">Information</h2>
              <ul className="flex flex-col gap-2 py-4">
                <li className="font-thin">FAQ</li>
                <li className="font-thin">Blog</li>
                <li className="font-thin">Support</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between w-full mt-10">
          <div className="flex justify-center items-center w-full gap-6">
            <span className="font-thin text-white">Terms</span>
            <span className="font-thin text-white">Privacy</span>
            <span className="font-thin text-white">Cookies</span>
          </div>

          <div className="flex gap-2 justify-end">
            <img src="/images/footer/Linkedin.svg" alt="linkedin icon" />
            <img src="/images/footer/Facebook.svg" alt="instagram icon" />
            <img src="/images/footer/Twitter.svg" alt="X icon" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
