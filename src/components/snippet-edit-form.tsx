'use client'
import type { Snippet } from "@prisma/client"
import { Editor } from "@monaco-editor/react";
import { useState } from "react";

interface SnippetEditProps{
    snippet:Snippet
}
import { EditSnippet } from "@/actions";

export default function SnippetEditForm({snippet}:SnippetEditProps){

    const [code,setCode]=useState(snippet.code)

    const handleEditorChange=(value:string="")=>{
        setCode(value);
    }

    const editSnippetAction=EditSnippet.bind(null,snippet.id,code);

    return <div>
       <Editor onChange={handleEditorChange} height='40vh' theme="vs-dark" language="javascript" options={{minimap:{enabled:false}}} defaultValue={code}></Editor>
       <form action={editSnippetAction}>
        <button type="submit" className="p-2 border rounded">Save</button>
       </form>
    </div>
}