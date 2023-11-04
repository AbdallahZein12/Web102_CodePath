import CreatePost from "./CreatePost";
import supabase from "../App"
import { Link, Outlet } from "react-router-dom";
import SideNav from "../components/sideNav"
const Create = () => {

    return(
        <div>
            <SideNav/>
            <CreatePost supabase={supabase}/>
            <br />
        </div>
    )
}

export default Create