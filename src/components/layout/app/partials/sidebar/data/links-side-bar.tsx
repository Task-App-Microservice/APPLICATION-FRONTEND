import { Projector } from "lucide-react";
import { BiHome } from "react-icons/bi";
import { BsBellFill } from "react-icons/bs";
import { FaFolder } from "react-icons/fa";
import { IoIosFolderOpen } from "react-icons/io";
import { IoCalendarClear } from "react-icons/io5";
import { RiHomeFill } from "react-icons/ri";

export const linkData = [
    {
        path: "/",
        label: "Home",
        icon: RiHomeFill
    },
    {
        path: "/",
        label: "Projectos",
        icon: IoIosFolderOpen 
    },{
        path: "/",
        label: "Calendario",
        icon: IoCalendarClear
    },{
        path: "/",
        label: "Notificações",
        icon: BsBellFill
    }
]