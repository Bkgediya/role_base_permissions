import { Button, Card, CardContent, CardHeader } from "@mui/material";
import Image from "next/image";
import { hasPermission, Role } from "./components/auth";

const user : {id:string ,role:Role} = {id: "2",role :"moderator"}

export default function Home() {
  return (
    <div className="container mx-auto px-4 my-6">
      <Card>
        <CardContent className="flex flex-col">
          <span>Comment</span>
          <b>Some randome comment </b>
          
        </CardContent>
        { hasPermission(user,"delete:comments") 
        &&
        (  <div className="p-4">
          <Button variant="contained">Delete</Button>
        </div>)
        }
      </Card>
    </div>
  );
}
