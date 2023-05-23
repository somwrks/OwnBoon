import Head from "next/head";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import VanillaTilt from "vanilla-tilt";
import { StackedImageAnimation } from './StackedImageAnimation';
import { useEffect } from "react";
export default function ParentHabit({ section }) {
  const list = {
    habit: {
      title: "Habits",
      about:
        "Discover curated self-improvement content and essential tools in one place, accompanied by a motivating playlist.",
      featureheading: [
        "Extensive Research & Analysis",
        "Personalized Roadmaps",
        "Tailored Community",
      ],
      featureparagraph: [
        "Explore comprehensive content tailored to each habit, providing valuable insights and guidance.",
        "Receive AI-generated personalized roadmaps for self-improvement, guiding you towards your best self.",
        "Connect with like-minded individuals, find study and gym buddies, and engage in focused group chats.",
      ],
    },
    productivity: {
      title: "Productivity",
      about:
        "Boost your productivity with AI-powered tools, task scheduling, and study techniques tailored to your goals.",
      featureheading: [
        "The AI Powered Platform",
        "Immersive Lofi Study Sessions",
        "Ultimate Ecosystem",
      ],
      featureparagraph: [
        "Leverage AI to automate task scheduling and discover optimal study techniques for efficient progress.",
        "Immerse yourself in animated Lofi video sessions and curated playlists designed to enhance focus.",
        "Access a comprehensive range of features including todos, journaling, notion templates, and more, all synchronized across the platform.",
      ],
    },
    community: {
      title: "Community",
      about:
        "Join a supportive community of like-minded individuals, fostering motivation, and discipline for greater progress.",
      featureheading: [
        "Productive Media",
        "AI Minimalism",
        "Group Inspiration",
      ],
      featureparagraph: [
        "Engage in content solely focused on self-improvement and productivity, eliminating distractions.",
        "Experience distraction-free sessions with AI-imposed time limits on chatting and scrolling.",
        "Create and join group chats focused on specific topics, fostering inspiration and growth together.",
      ],
    },
    icons: ["green", "blue", "purple"],
  };


  useEffect(() => {
    VanillaTilt.init(document.querySelectorAll(".review-card"), {
      max: 15,
      speed: 300,
      transition: true,
    });
   
  }, []);
  return (
    <>
      <Head>
        <title>OwnBoon - Explore {list[section].title}</title>
        <link rel="icon" href="/logo.png" />
        <meta
          name="description"
          content="Explore all about Self improvement at single place, From Creative Blogs to Personality Development Roadmaps!"
        />
      </Head>
      <section id="Habits">
        <div className={`${list[section].title ==="Habits"? "bg-habits":list[section].title ==="Productivity"? "bg-productivity": "bg-community"} rounded-br-full  z-no blur-3xl font-poppins	 absolute  md:w-[75%] h-[120%] w-[100%] md:h-[100%]`}></div>
        <div className="flex flex-row mt-[-9vh] flex-wrap-reverse min-h-screen items-center align-center   justify-center">
          <div className="flex px-[3vw]  flex-col items-center md:items-start text-center md:text-left w-auto md:w-[50%] text-white ">
            <h1 className="md:text-[96px] mt-3 text-6xl font-bold font-fontspring">
              {list[section].title}
            </h1>
            <p className="text-[20px] font-poppins">{list[section].about}</p>
            <button className="bg-white w-[191px] h-[45px] mt-5">
              <h1 className="font-poppins text-[16px] font-btn-gradient">
                Try It Now
              </h1>
            </button>
          </div>
          <div className="flex flex-col justify-center items-center md:flex-row  p-2 ">
          
      <StackedImageAnimation/>
          </div>
        </div>
        <div className="flex bg-white flex-col my-[100px]  py-5  items-center">
          <div className="habit-heading font-poppins">
            <h1 className="text-[32px] font-[600]">Coming Soon</h1>
          </div>
          <div className="flex py-[4vh]">
            <svg
              className=" w-[60vw]"
              viewBox="0 0 885 525"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M442.5 524.271C686.886 524.271 885 502.048 885 474.636C885 447.223 686.886 425 442.5 425C198.114 425 0 447.223 0 474.636C0 502.048 198.114 524.271 442.5 524.271Z"
                fill="url(#paint0_linear_409_4898)"
              />
              <path
                d="M442.5 524.271C686.886 524.271 885 502.048 885 474.636C885 447.223 686.886 425 442.5 425C198.114 425 0 447.223 0 474.636C0 502.048 198.114 524.271 442.5 524.271Z"
                fill="white"
                fill-opacity="0.8"
              />
              <path
                d="M698.567 0H169V360.1H698.567V0Z"
                fill="url(#paint1_linear_409_4898)"
              />
              <path
                d="M698.567 0H169V360.1H698.567V0Z"
                fill="white"
                fill-opacity="0.2"
              />
              <path
                d="M698.567 306.98H169V360.1H698.567V306.98Z"
                fill="url(#paint2_linear_409_4898)"
              />
              <path
                d="M698.567 306.98H169V360.1H698.567V306.98Z"
                fill="white"
                fill-opacity="0.5"
              />
              <path
                d="M536.975 425.013H330.591V442.264H536.975V425.013Z"
                fill="#FFCBE1"
              />
              <path
                d="M512.407 425.026H355.172L359.169 395.093L359.355 393.686L359.727 390.87L359.913 389.463L360.298 386.647L360.351 386.222L360.484 385.239L360.869 382.424L361.055 381.016L363.844 360.1H503.722L506.365 379.835L506.497 380.777L506.936 384.058L507.055 385L507.228 386.222L507.493 388.267L507.613 389.223L508.051 392.504L508.184 393.447L512.407 425.026Z"
                fill="#EC8EC6"
              />
              <path
                d="M442.409 329.968C442.409 331.704 441.894 333.401 440.929 334.845C439.965 336.289 438.594 337.414 436.99 338.078C435.386 338.742 433.621 338.916 431.918 338.578C430.215 338.239 428.651 337.403 427.424 336.175C426.196 334.948 425.36 333.383 425.021 331.681C424.683 329.978 424.856 328.213 425.521 326.609C426.185 325.005 427.31 323.634 428.754 322.669C430.197 321.705 431.894 321.19 433.631 321.19C434.784 321.188 435.926 321.414 436.992 321.855C438.058 322.295 439.026 322.942 439.842 323.757C440.657 324.573 441.304 325.541 441.744 326.607C442.185 327.673 442.41 328.815 442.409 329.968Z"
                fill="#37474F"
              />
              <path
                d="M507.228 386.222H360.352L360.484 385.239L360.87 382.424L361.055 381.016L363.844 360.1H503.722L506.365 379.835L506.498 380.777L506.936 384.058L507.056 385L507.228 386.222Z"
                fill="#EC8EC6"
              />
              <path
                d="M674.132 23.4126H193.436V282.001H674.132V23.4126Z"
                fill="white"
              />
              <path
                d="M825.155 441.55H691.77C690.344 441.538 688.934 441.245 687.62 440.688C686.307 440.131 685.116 439.32 684.116 438.303C683.116 437.285 682.326 436.081 681.792 434.758C681.257 433.436 680.988 432.021 681 430.594V220.943C680.979 218.064 682.102 215.294 684.121 213.243C686.14 211.191 688.892 210.025 691.77 210H825.155C828.03 210.028 830.777 211.196 832.791 213.248C834.805 215.3 835.923 218.067 835.898 220.943V430.594C835.912 432.019 835.646 433.433 835.113 434.754C834.581 436.076 833.793 437.28 832.796 438.297C831.798 439.315 830.61 440.126 829.299 440.684C827.988 441.242 826.58 441.536 825.155 441.55Z"
                fill="url(#paint3_linear_409_4898)"
              />
              <path
                d="M825.155 441.55H691.77C690.344 441.538 688.934 441.245 687.62 440.688C686.307 440.131 685.116 439.32 684.116 438.303C683.116 437.285 682.326 436.081 681.792 434.758C681.257 433.436 680.988 432.021 681 430.594V220.943C680.979 218.064 682.102 215.294 684.121 213.243C686.14 211.191 688.892 210.025 691.77 210H825.155C828.03 210.028 830.777 211.196 832.791 213.248C834.805 215.3 835.923 218.067 835.898 220.943V430.594C835.912 432.019 835.646 433.433 835.113 434.754C834.581 436.076 833.793 437.28 832.796 438.297C831.798 439.315 830.61 440.126 829.299 440.684C827.988 441.242 826.58 441.536 825.155 441.55Z"
                fill="white"
                fill-opacity="0.2"
              />
              <path
                d="M829.404 226.348H687.72V425.654H829.404V226.348Z"
                fill="white"
              />
              <path
                d="M741.61 219.548C741.61 219.228 741.738 218.92 741.964 218.694C742.191 218.467 742.498 218.34 742.819 218.34H774.133C774.291 218.34 774.448 218.371 774.594 218.432C774.739 218.493 774.872 218.582 774.983 218.695C775.094 218.807 775.182 218.94 775.241 219.087C775.3 219.233 775.33 219.39 775.328 219.548C775.328 219.705 775.297 219.861 775.237 220.006C775.177 220.151 775.089 220.282 774.978 220.393C774.867 220.504 774.735 220.592 774.59 220.653C774.445 220.713 774.29 220.744 774.133 220.744H742.819C742.661 220.745 742.504 220.716 742.357 220.656C742.211 220.597 742.077 220.509 741.965 220.398C741.853 220.287 741.763 220.155 741.703 220.009C741.642 219.863 741.61 219.706 741.61 219.548Z"
                fill="#263238"
              />
              <path
                d="M758.382 438.738C757.517 438.741 756.671 438.486 755.95 438.007C755.23 437.528 754.667 436.846 754.335 436.047C754.003 435.248 753.915 434.369 754.083 433.52C754.251 432.671 754.668 431.892 755.28 431.28C755.892 430.668 756.671 430.251 757.52 430.083C758.369 429.915 759.248 430.003 760.047 430.335C760.846 430.667 761.528 431.23 762.007 431.95C762.487 432.671 762.741 433.517 762.738 434.382C762.738 435.538 762.279 436.646 761.462 437.462C760.646 438.279 759.538 438.738 758.382 438.738Z"
                fill="#2E2E2E"
              />
              <path
                d="M705.282 296H624.207C623.12 296.009 622.045 296.232 621.043 296.656C620.042 297.081 619.134 297.699 618.372 298.475C617.61 299.251 617.008 300.169 616.601 301.178C616.194 302.186 615.99 303.265 616 304.353V471.269C615.983 473.465 616.837 475.578 618.376 477.144C619.915 478.71 622.012 479.602 624.207 479.623H705.282C707.477 479.602 709.575 478.71 711.113 477.144C712.652 475.578 713.507 473.465 713.489 471.269V304.353C713.499 303.265 713.295 302.186 712.888 301.178C712.481 300.169 711.88 299.251 711.117 298.475C710.355 297.699 709.447 297.081 708.446 296.656C707.445 296.232 706.369 296.009 705.282 296ZM708.363 466.104C708.446 468.134 707.718 470.114 706.341 471.608C704.964 473.103 703.049 473.989 701.019 474.072H628.484C627.476 474.034 626.487 473.798 625.571 473.376C624.656 472.955 623.833 472.357 623.149 471.617C622.465 470.876 621.935 470.008 621.588 469.062C621.24 468.116 621.084 467.11 621.126 466.104V310.728C621.126 301.777 624.407 301.339 628.484 301.339H643.012C643.849 301.339 644.539 302.295 644.539 303.49V303.995C644.539 306.783 646.066 306.797 647.939 306.797H681.537C683.436 306.797 684.95 306.797 684.95 303.995V303.41C684.95 302.215 685.627 301.259 686.477 301.259H701.085C705.069 301.259 708.429 302.441 708.429 310.648L708.363 466.104Z"
                fill="url(#paint4_linear_409_4898)"
              />
              <path
                d="M705.282 296H624.207C623.12 296.009 622.045 296.232 621.043 296.656C620.042 297.081 619.134 297.699 618.372 298.475C617.61 299.251 617.008 300.169 616.601 301.178C616.194 302.186 615.99 303.265 616 304.353V471.269C615.983 473.465 616.837 475.578 618.376 477.144C619.915 478.71 622.012 479.602 624.207 479.623H705.282C707.477 479.602 709.575 478.71 711.113 477.144C712.652 475.578 713.507 473.465 713.489 471.269V304.353C713.499 303.265 713.295 302.186 712.888 301.178C712.481 300.169 711.88 299.251 711.117 298.475C710.355 297.699 709.447 297.081 708.446 296.656C707.445 296.232 706.369 296.009 705.282 296ZM708.363 466.104C708.446 468.134 707.718 470.114 706.341 471.608C704.964 473.103 703.049 473.989 701.019 474.072H628.484C627.476 474.034 626.487 473.798 625.571 473.376C624.656 472.955 623.833 472.357 623.149 471.617C622.465 470.876 621.935 470.008 621.588 469.062C621.24 468.116 621.084 467.11 621.126 466.104V310.728C621.126 301.777 624.407 301.339 628.484 301.339H643.012C643.849 301.339 644.539 302.295 644.539 303.49V303.995C644.539 306.783 646.066 306.797 647.939 306.797H681.537C683.436 306.797 684.95 306.797 684.95 303.995V303.41C684.95 302.215 685.627 301.259 686.477 301.259H701.085C705.069 301.259 708.429 302.441 708.429 310.648L708.363 466.104Z"
                fill="white"
                fill-opacity="0.2"
              />
              <path
                d="M669.32 303.277H660.157C660.082 303.277 660.009 303.263 659.94 303.234C659.871 303.205 659.809 303.163 659.757 303.109C659.705 303.056 659.665 302.993 659.637 302.924C659.61 302.855 659.597 302.781 659.599 302.706C659.599 302.557 659.657 302.414 659.761 302.307C659.866 302.201 660.007 302.139 660.157 302.135H669.32C669.471 302.135 669.616 302.196 669.724 302.303C669.831 302.41 669.891 302.555 669.891 302.706C669.891 302.858 669.831 303.003 669.724 303.11C669.616 303.217 669.471 303.277 669.32 303.277Z"
                fill="white"
              />
              <path
                d="M708.362 310.688V466.064C708.445 468.094 707.718 470.074 706.341 471.569C704.963 473.063 703.049 473.949 701.018 474.032H628.483C627.476 473.994 626.486 473.758 625.571 473.337C624.655 472.915 623.832 472.317 623.148 471.577C622.465 470.836 621.934 469.968 621.587 469.022C621.24 468.076 621.083 467.071 621.126 466.064V310.688C621.126 301.737 624.406 301.299 628.483 301.299H643.011C643.848 301.299 644.539 302.255 644.539 303.45V303.955C644.539 306.743 646.066 306.757 647.938 306.757H681.537C683.436 306.757 684.95 306.757 684.95 303.955V303.41C684.95 302.215 685.627 301.259 686.477 301.259H701.085C705.069 301.299 708.362 302.481 708.362 310.688Z"
                fill="white"
              />
              <path
                d="M416.303 218H63.0156V454.318H416.303V218Z"
                fill="#DBDBDB"
              />
              <path
                d="M413.727 220.882H65.5781V451.436H413.727V220.882Z"
                fill="url(#paint5_linear_409_4898)"
              />
              <path
                d="M413.727 220.882H65.5781V451.436H413.727V220.882Z"
                fill="white"
                fill-opacity="0.2"
              />
              <path
                d="M462.305 472.033H17V488.248H462.305V472.033Z"
                fill="url(#paint6_linear_409_4898)"
                fill-opacity="0.5"
              />
              <path
                d="M17 472.033L63.0152 454.318H416.29L462.305 472.033H17Z"
                fill="url(#paint7_linear_409_4898)"
                fill-opacity="0.5"
              />
              <path
                d="M67.1191 465.752L96.8132 454.318H382.493L412.187 465.752H67.1191Z"
                fill="#263238"
              />
              <path
                d="M394.046 245.915H85.2461V433.919H394.046V245.915Z"
                fill="white"
              />
              <path
                d="M394.046 238.398H85.2461V245.928H394.046V238.398Z"
                fill="#ECE1FF"
              />
              <path
                d="M91.2351 242.156C91.2378 242.527 91.1302 242.891 90.9261 243.2C90.7219 243.51 90.4304 243.752 90.0885 243.896C89.7466 244.039 89.3697 244.078 89.0056 244.008C88.6415 243.937 88.3066 243.76 88.0434 243.498C87.7802 243.237 87.6005 242.903 87.5272 242.54C87.4539 242.176 87.4902 241.799 87.6315 241.456C87.7728 241.113 88.0128 240.82 88.321 240.614C88.6292 240.407 88.9918 240.297 89.3627 240.297C89.857 240.297 90.3313 240.493 90.682 240.841C91.0328 241.189 91.2316 241.662 91.2351 242.156Z"
                fill="#13BF0F"
              />
              <path
                d="M96.9858 244.029C98.0199 244.029 98.8582 243.19 98.8582 242.156C98.8582 241.122 98.0199 240.284 96.9858 240.284C95.9516 240.284 95.1133 241.122 95.1133 242.156C95.1133 243.19 95.9516 244.029 96.9858 244.029Z"
                fill="#F0A500"
              />
              <path
                d="M106.468 242.156C106.47 242.528 106.362 242.892 106.158 243.202C105.953 243.512 105.661 243.754 105.318 243.897C104.975 244.04 104.598 244.079 104.233 244.007C103.869 243.935 103.534 243.756 103.271 243.494C103.008 243.231 102.83 242.896 102.758 242.532C102.686 242.167 102.724 241.79 102.868 241.447C103.011 241.104 103.253 240.812 103.563 240.607C103.873 240.402 104.237 240.295 104.608 240.297C105.1 240.301 105.571 240.498 105.919 240.846C106.267 241.193 106.464 241.664 106.468 242.156Z"
                fill="#FD3D3D"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_409_4898"
                  x1="885"
                  y1="425"
                  x2="6.39644e-06"
                  y2="524"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#E90064" />
                  <stop offset="0.407466" stopColor="#00F0B5" />
                  <stop offset="0.734375" stopColor="#00AEFF" />
                  <stop offset="1" stopColor="#AA77FF" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_409_4898"
                  x1="169"
                  y1="0"
                  x2="699"
                  y2="360"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#E90064" />
                  <stop offset="1" stopColor="#AA77FF" />
                </linearGradient>
                <linearGradient
                  id="paint2_linear_409_4898"
                  x1="699"
                  y1="360"
                  x2="169"
                  y2="307"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#E90064" />
                  <stop offset="1" stopColor="#AA77FF" />
                </linearGradient>
                <linearGradient
                  id="paint3_linear_409_4898"
                  x1="681"
                  y1="210"
                  x2="836"
                  y2="442"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#00F0B5" />
                  <stop offset="1" stopColor="#00AEFF" />
                </linearGradient>
                <linearGradient
                  id="paint4_linear_409_4898"
                  x1="713"
                  y1="296"
                  x2="616"
                  y2="480"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#E90064" />
                  <stop offset="1" stopColor="#AA77FF" />
                </linearGradient>
                <linearGradient
                  id="paint5_linear_409_4898"
                  x1="414"
                  y1="221"
                  x2="66"
                  y2="451"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#00AEFF" />
                  <stop offset="1" stopColor="#00F0B5" />
                </linearGradient>
                <linearGradient
                  id="paint6_linear_409_4898"
                  x1="239.652"
                  y1="472.033"
                  x2="239.652"
                  y2="488.248"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#00AEFF" />
                  <stop offset="1" stopColor="#00F0B5" />
                </linearGradient>
                <linearGradient
                  id="paint7_linear_409_4898"
                  x1="239.652"
                  y1="454.318"
                  x2="239.652"
                  y2="472.033"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#00AEFF" />
                  <stop offset="1" stopColor="#00F0B5" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
        <div className="flex flex-col min-h-[90vh] pb-10  habit-bg-img justify-center ">
          <div className="heading font-poppins">
            <h1 className="font-[600] text-[32px]">Features</h1>
          </div>
          <div className="flex flex-wrap w-full justify-center p-5 gap-16 ">
            {list[section].featureheading.map((word, index) => {
              return (
                <div className="w-full  font-poppins  md:w-1/5 p-5">
                  <div className="flex bg-white p-[3.5rem] h-[110%]  shadow-md rounded-[2rem] flex-col ">
                    <svg
                      className="w-1/3"
                      viewBox="0 0 95 95"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {list.icons[index] === "blue" ? (
                        <>
                          <g filter="url(#filter0_d_520_2)">
                            <circle
                              cx="46.5"
                              cy="43.5"
                              r="32.5"
                              fill="#00AEFF"
                            />
                          </g>
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M37.956 32.8437C36.0222 34.3611 28.0158 47.6496 28.0002 49.3674C27.964 53.4085 32.7931 55.5361 35.4939 52.6688C36.8825 51.1939 44.5813 38.9466 44.9764 37.5834C46.0743 33.7953 41.0587 30.4093 37.956 32.8437ZM52.7293 32.4321C51.5009 32.9337 43.9038 44.3061 42.4024 47.8907C40.8326 51.6382 44.9369 55.1058 48.6654 53.1825C49.5946 52.7033 52.5451 48.327 57.762 39.6901C60.5115 35.1388 57.3319 30.5532 52.7293 32.4321ZM58.3243 45.6006C54.9048 47.3321 55.3224 52.1937 59.0224 53.7225C61.4392 54.7212 64.4091 52.9103 64.934 50.1178C65.5671 46.7526 61.5161 43.9841 58.3243 45.6006Z"
                            fill="white"
                          />
                          <defs>
                            <filter
                              id="filter0_d_520_2"
                              x="0"
                              y="0"
                              width="95"
                              height="95"
                              filterUnits="userSpaceOnUse"
                              color-interpolation-filters="sRGB"
                            >
                              <feFlood
                                flood-opacity="0"
                                result="BackgroundImageFix"
                              />
                              <feColorMatrix
                                in="SourceAlpha"
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                result="hardAlpha"
                              />
                              <feOffset dx="1" dy="4" />
                              <feGaussianBlur stdDeviation="7.5" />
                              <feComposite in2="hardAlpha" operator="out" />
                              <feColorMatrix
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0.681529 0 0 0 0 1 0 0 0 0.4 0"
                              />
                              <feBlend
                                mode="normal"
                                in2="BackgroundImageFix"
                                result="effect1_dropShadow_520_2"
                              />
                              <feBlend
                                mode="normal"
                                in="SourceGraphic"
                                in2="effect1_dropShadow_520_2"
                                result="shape"
                              />
                            </filter>
                          </defs>
                        </>
                      ) : list.icons[index] === "green" ? (
                        <>
                          <g filter="url(#filter0_d_409_4928)">
                            <circle
                              cx="46.5"
                              cy="43.5"
                              r="32.5"
                              fill="#00F0B5"
                            />
                          </g>
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M45.6106 27.0705C44.3968 27.3276 44.1055 27.5901 36.2855 35.4757C29.1423 42.679 28.6217 43.2342 28.6217 43.6498C28.6217 44.271 43.3063 59.1791 44.596 59.8673C45.6893 60.4508 47.3225 60.4664 48.4117 59.9039C49.1765 59.5089 54.5871 54.2364 54.9601 53.5227C55.2787 52.9131 55.137 52.7387 50.57 48.1173C46.1564 43.6513 46.1564 43.6513 50.5477 39.2095C55.2073 34.4965 55.2333 34.4647 54.9574 33.8172C54.6463 33.0872 49.2231 27.7854 48.4034 27.4098C47.6103 27.0464 46.4119 26.9009 45.6106 27.0705ZM47.6168 29.3502C47.805 29.451 49.0062 30.5946 50.2862 31.8915C52.6134 34.2495 52.6134 34.2495 48.1843 38.7193C44.0469 42.8947 43.7552 43.2192 43.7552 43.6474C43.7552 44.0702 43.9829 44.3373 46.7019 47.1047C53.2873 53.8072 52.8776 52.8108 50.166 55.5332C47.3223 58.3883 46.9157 58.6139 45.6064 58.0621C45.2075 57.8939 31.2226 43.8863 31.2116 43.644C31.1997 43.3796 45.3217 29.3832 45.7671 29.218C46.3305 29.009 47.0797 29.0626 47.6168 29.3502ZM54.0765 39.9544C49.9832 44.072 50.0211 43.23 53.7551 47.0787C56.7623 50.1782 57.1947 50.5582 57.7154 50.5596C58.1908 50.5609 61.9656 46.739 62.5351 45.6799C63.1216 44.5894 63.1583 42.8015 62.616 41.7504C62.2706 41.0811 58.5739 37.1544 58.0242 36.8729C57.4711 36.5896 57.2499 36.7623 54.0765 39.9544ZM59.1121 40.8061C61.6244 43.3534 61.6219 43.9773 59.0901 46.5139C57.5936 48.0133 57.5936 48.0133 55.4288 45.8293C53.2641 43.6454 53.2641 43.6454 55.3959 41.4917C56.5684 40.3073 57.5584 39.3381 57.5959 39.3381C57.6334 39.3381 58.3157 39.9988 59.1121 40.8061ZM25 60.739C25 60.8826 25.0528 61 25.1172 61C25.1817 61 25.204 60.8826 25.1669 60.739C25.1296 60.5955 25.0768 60.478 25.0495 60.478C25.0224 60.478 25 60.5955 25 60.739Z"
                            fill="white"
                          />
                          <defs>
                            <filter
                              id="filter0_d_409_4928"
                              x="0"
                              y="0"
                              width="95"
                              height="95"
                              filterUnits="userSpaceOnUse"
                              color-interpolation-filters="sRGB"
                            >
                              <feFlood
                                flood-opacity="0"
                                result="BackgroundImageFix"
                              />
                              <feColorMatrix
                                in="SourceAlpha"
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                result="hardAlpha"
                              />
                              <feOffset dx="1" dy="4" />
                              <feGaussianBlur stdDeviation="7.5" />
                              <feComposite in2="hardAlpha" operator="out" />
                              <feColorMatrix
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0.941176 0 0 0 0 0.709804 0 0 0 0.4 0"
                              />
                              <feBlend
                                mode="normal"
                                in2="BackgroundImageFix"
                                result="effect1_dropShadow_409_4928"
                              />
                              <feBlend
                                mode="normal"
                                in="SourceGraphic"
                                in2="effect1_dropShadow_409_4928"
                                result="shape"
                              />
                            </filter>
                          </defs>
                        </>
                      ) : (
                        <>
                          <g filter="url(#filter0_d_410_5110)">
                            <circle
                              cx="46.5"
                              cy="43.5"
                              r="32.5"
                              fill="#AA77FF"
                            />
                          </g>
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M42.4406 27.3125C37.6853 29.0537 33.2361 33.9973 33.1857 37.5959C33.1487 40.249 35.8795 40.1201 36.8519 37.4228C37.9909 34.2633 40.6792 31.6444 43.6978 30.7536C45.587 30.1961 46.2306 28.7339 45.0901 27.5911C44.3957 26.8956 43.7614 26.8286 42.4406 27.3125ZM49.3397 27.6536C48.3814 28.6822 49.0387 30.5625 50.3564 30.5625C50.5656 30.5625 50.7954 30.6575 50.8671 30.7736C50.9387 30.8897 51.1447 30.9847 51.3252 30.9847C53.0714 30.9847 56.9225 35.2938 57.5737 37.9767C58.1315 40.2744 60.9991 40.0715 60.9643 37.7367C60.8929 32.9594 51.7695 25.0454 49.3397 27.6536ZM40.8829 34.9744C38.8909 36.839 41.5583 39.9216 43.7285 38.2631C45.401 36.9848 44.5234 34.3621 42.4231 34.3621C41.7361 34.3621 41.3902 34.4997 40.8829 34.9744ZM50.2338 34.8374C48.4432 36.3807 50.2898 39.2346 52.5277 38.3822C53.252 38.1061 53.7972 37.2035 53.7723 36.3218C53.7243 34.6202 51.546 33.7064 50.2338 34.8374ZM33.9972 42.625C31.0715 44.0475 35.0044 51.113 40.3339 54.0089C41.9786 54.9026 41.9069 54.7249 41.9107 57.9224C41.9147 61.4173 42.5682 62.4768 44.3104 61.8131C44.9249 61.579 51.5593 54.8914 51.9852 54.0768C52.5797 52.9399 51.6817 51.6711 50.2825 51.6711C49.5298 51.6711 49.3018 51.8298 47.5561 53.5708C45.2895 55.8312 45.4952 55.7758 45.4952 54.1271C45.4952 52.7601 44.9938 51.6711 44.3645 51.6711C43.8895 51.6711 40.5522 49.8819 39.8351 49.2428C38.605 48.1464 37.3158 46.0465 36.6149 43.9979C36.1658 42.6856 35.0625 42.107 33.9972 42.625ZM58.2687 43.2431C57.9634 43.4835 57.7136 43.7974 57.7136 43.9401C57.7136 44.6774 55.971 47.6596 54.892 48.7689C53.7575 49.9351 53.6191 50.2104 53.6984 51.1434C53.7521 51.7758 54.6899 52.5154 55.4382 52.5154C56.9122 52.5154 60.5487 47.5748 60.9692 45.001C61.2479 43.2942 59.5809 42.2088 58.2687 43.2431ZM41.8345 43.6591C40.8189 43.9601 40.3339 44.6622 40.3339 45.8316C40.3339 48.2293 43.4509 48.9405 44.5579 46.7952C45.4819 45.0048 43.8056 43.0746 41.8345 43.6591ZM51.135 43.595C50.1312 43.7383 49.4097 45.1067 49.7282 46.2631C50.1908 47.9418 51.9654 48.3963 53.2054 47.1539C54.8151 45.5409 53.4879 43.2591 51.135 43.595Z"
                            fill="white"
                          />

                          <defs>
                            <filter
                              id="filter0_d_410_5110"
                              x="0"
                              y="0"
                              width="95"
                              height="95"
                              filterUnits="userSpaceOnUse"
                              color-interpolation-filters="sRGB"
                            >
                              <feFlood
                                flood-opacity="0"
                                result="BackgroundImageFix"
                              />
                              <feColorMatrix
                                in="SourceAlpha"
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                result="hardAlpha"
                              />
                              <feOffset dx="1" dy="4" />
                              <feGaussianBlur stdDeviation="7.5" />
                              <feComposite in2="hardAlpha" operator="out" />
                              <feColorMatrix
                                type="matrix"
                                values="0 0 0 0 0.666667 0 0 0 0 0.466667 0 0 0 0 1 0 0 0 0.4 0"
                              />
                              <feBlend
                                mode="normal"
                                in2="BackgroundImageFix"
                                result="effect1_dropShadow_410_5110"
                              />
                              <feBlend
                                mode="normal"
                                in="SourceGraphic"
                                in2="effect1_dropShadow_410_5110"
                                result="shape"
                              />
                            </filter>
                          </defs>
                        </>
                      )}
                    </svg>

                    <h2 className="text-[24px] font-semibold">{word}</h2>
                    <svg
                      className="my-2"
                      width="76"
                      height="16"
                      viewBox="0 0 76 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g filter="url(#filter0_d_409_4946)">
                        <path
                          d="M7 6H67"
                          stroke="#00AEFF"
                          stroke-width="2"
                          stroke-linecap="round"
                        />
                      </g>
                      <defs>
                        <filter
                          id="filter0_d_409_4946"
                          x="0"
                          y="0"
                          width="76"
                          height="16"
                          filterUnits="userSpaceOnUse"
                          color-interpolation-filters="sRGB"
                        >
                          <feFlood
                            flood-opacity="0"
                            result="BackgroundImageFix"
                          />
                          <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                          />
                          <feOffset dx="1" dy="2" />
                          <feGaussianBlur stdDeviation="3.5" />
                          <feComposite in2="hardAlpha" operator="out" />
                          <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0.681529 0 0 0 0 1 0 0 0 0.5 0"
                          />
                          <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_409_4946"
                          />
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow_409_4946"
                            result="shape"
                          />
                        </filter>
                      </defs>
                    </svg>

                    <p className="text-[16px]">
                      {list[section].featureparagraph[index]}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
