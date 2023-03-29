import * as Icon from "react-bootstrap-icons"
export const Dash=[
    {
        name:"Dashboard",
        href:"/admin",
        icon:<Icon.Window size={22}/>,
        num:1
        
    },
    {
        name:"User",
        href:"user",
        icon:<Icon.Person size={22}/>,
        num:2
    },    
    {
        name:"Groupe",
        href:"groupes",
        icon:<Icon.People size={22}/>
    },
    {
        name:"Cours",
        href:"cours",
        icon:<Icon.Book size={22}/>,
        num:"3"
    },
    {
        name:"Historique",
        href:"historique",
        icon:<Icon.ClockHistory size={22}/>,
        num:4
    },
    {
        name:"Message",
        href:"message",
        icon:<Icon.Messenger size={22}/>,
        num:5
    },
]