import { db } from "@/db";
import { notFound } from "next/navigation";
interface SnippetEditPageProps{
    params:{
        id:string
    }
}
import SnippetEditForm from "@/components/snippet-edit-form";
export default async function EditSnippetPage(props:SnippetEditPageProps){

    const id=parseInt(props.params.id);
    const snippet=await db.snippet.findFirst({
        where:{id:id}
    })
    if(!snippet)
    return notFound();

    return <div>
        <SnippetEditForm snippet={snippet}></SnippetEditForm>
    </div>
}