import { RiLinkedinLine, RiGithubLine, RiWhatsappLine, RiFileDownloadLine } from "react-icons/ri"
import { MdOutlineAttachEmail } from "react-icons/md"
import { ImLinkedin2 } from "react-icons/im"


export const dbLinks = [
    {
        id: 1,
        svg: <ImLinkedin2 />,
        title: "linkedin",
        to: "https://www.linkedin.com/in/edgar-elias1/",
        target: "_blank",
        rel: "noreferrer noopener",
        className: "#32abf1",
    },
    {
        id: 2,
        svg: <RiGithubLine />,
        title: "github",
        to: "https://github.com/edgarellias",
        target: "_blank",
        rel: "noreferrer noopener",
        className: "#c214f7",
    },
    {
        id: 3,
        svg: <RiWhatsappLine />,
        title: "whatsapp",
        to: "https://api.whatsapp.com/send?phone=5541997001718&text=Olá.%20Vim%20pelo%20seu%20portfólio...%20",
        target: "_blank",
        rel: "noreferrer noopener",
        className: "green",
    },
    {
        id: 4,
        svg: <MdOutlineAttachEmail />,
        title:"e-mail",
        to: "mailto:edgar_jk3@hotmail.com?subject=Olá, vim pelo seu portfólio...",
        target: "_blank",
        rel: "noreferrer noopener",
        className: "red",
    },
    {
        id: 5,
        svg: <RiFileDownloadLine />,
        title: "currículo",
        to: "https://drive.google.com/file/d/1lbYbfIFq3Lc_ppVAtLDflil6G_3ihglm/view?usp=sharing",
        target: "_blank",
        rel: "noreferrer noopener",
        className: "Darkkhaki",
    }
]