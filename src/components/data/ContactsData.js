
import { IoLogoLinkedin } from "react-icons/io"
import { BsGithub } from "react-icons/bs"
import { ImWhatsapp } from "react-icons/im"
import { MdEmail } from "react-icons/md"
import { GrDocumentDownload } from "react-icons/gr"

const ContactsData = [
    {id: 1, name: "LinkedIn", target: "_blank", rel: "noopener noreferrer", icon: <IoLogoLinkedin />, url: "https://www.linkedin.com/in/edgar-elias-997571205/"},
    {id: 2, name: "GitHub", target: "_blank", rel: "noopener noreferrer", icon: <BsGithub />, url: "https://github.com/edgarellias"},
    {id: 3, name: "WhatsApp", target: "_blank", rel: "noopener noreferrer", icon: <ImWhatsapp />, url: "https://api.whatsapp.com/send?phone=5541997001718&text=Ol%C3%A1%2C%20vim%20pelo%20seu%20Portfolio%2C%20tenho%20interesse%20em..."},
    {id: 4, name: "E-mail", target: "_blank", rel: "noopener noreferrer", icon: <MdEmail />, url: "mailto:edgar_jk3@hotmail.com?subject=Olá, vim pelo seu portfolio e tenho interesse em..."},
    {id: 4, name: "Curriculo", target: "_blank", rel: "noopener noreferrer", icon: <GrDocumentDownload />, url: "https://drive.google.com/file/d/1yL241bC5v1f2CDAasnF5D93bVm-xXP7e/view?usp=sharing"}
]

export default ContactsData;
